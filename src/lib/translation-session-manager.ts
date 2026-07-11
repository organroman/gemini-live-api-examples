/**
 * TranslationSessionManager: Singleton that enforces "max 1 Gemini Live API
 * session per language per room" constraint.
 *
 * Usage:
 *   const manager = TranslationSessionManager.getInstance();
 *   const bridge = await manager.getOrCreate(sessionId, targetLanguage, organizerIdentity);
 */

import { RoomServiceClient, DataPacket_Kind } from "livekit-server-sdk";
import { TranslationBridge, BridgeStatus } from "./translation-bridge";

export interface TranslationInfo {
  language: string;
  translatorIdentity: string;
  status: BridgeStatus;
  subscriberCount: number;
}

export interface SessionInfo {
  sessionId: string;
  organizerIdentity: string;
  organizerName: string;
  sessionName?: string;
  createdAt: Date;
}

export interface QaStatus {
  sessionId: string;
  pendingSpeakerIdentities: string[];
  activeSpeakerIdentity: string | null;
  activeTranslatorIdentity: string | null;
  organizerTargetLanguage: string;
}

interface SessionQaState {
  pending: Set<string>;
  activeSpeakerIdentity: string | null;
  activeBridge: TranslationBridge | null;
  organizerTargetLanguage: string;
}

// In dev, Next.js Fast Refresh re-evaluates this module on every save to any
// file in its import graph (including this one), which would otherwise reset
// the static `instance` field and silently drop every in-memory session.
// Stashing the singleton on globalThis survives that. No effect in
// production, where the module is only ever loaded once anyway.
declare global {
  // Typed as unknown (not TranslationSessionManager) on purpose: TS treats
  // `x instanceof TranslationSessionManager` as tautologically true when x
  // is already typed as TranslationSessionManager, which breaks narrowing
  // in the "this is a stale instance from before a reload" branch below.
  var __translationSessionManager: unknown;
}

class TranslationSessionManager {
  private static instance: TranslationSessionManager;

  // Map<sessionId, Map<languageCode, TranslationBridge>>
  private translations: Map<string, Map<string, TranslationBridge>> = new Map();

  // Map<sessionId, SessionInfo>
  private sessions: Map<string, SessionInfo> = new Map();

  // Map<sessionId, SessionQaState>
  private qaStates: Map<string, SessionQaState> = new Map();

  // Map<"sessionId:language", in-flight bridge creation> — prevents concurrent
  // getOrCreate calls for the same language from spinning up duplicate bridges
  // that both translate the same source audio (heard as repeated phrases).
  private pendingCreations: Map<string, Promise<TranslationBridge>> = new Map();

  // Lazily-created client for pushing state to rooms over the LiveKit data
  // channel, so organizer/attendee UIs don't have to poll for QA/translation
  // status.
  private roomService: RoomServiceClient | null = null;

  private constructor() {}

  static getInstance(): TranslationSessionManager {
    if (process.env.NODE_ENV === "production") {
      if (!TranslationSessionManager.instance) {
        TranslationSessionManager.instance = new TranslationSessionManager();
      }
      return TranslationSessionManager.instance;
    }

    const previous = globalThis.__translationSessionManager;
    // `previous` may be an instance of a *stale* class object from before
    // Fast Refresh reloaded this module — `instanceof` against the current
    // class reference is false in that case, since the reloaded module
    // defines a brand new class. When that happens, rebuild against the
    // current class (so code changes here take effect) but carry over the
    // live Maps instead of losing every active session.
    if (previous instanceof TranslationSessionManager) {
      return previous;
    }

    const instance = new TranslationSessionManager();
    if (previous) {
      const stale = previous as TranslationSessionManager;
      instance.translations = stale.translations;
      instance.sessions = stale.sessions;
      instance.qaStates = stale.qaStates;
      instance.pendingCreations = stale.pendingCreations;
    }
    globalThis.__translationSessionManager = instance;
    return instance;
  }

  // Session management
  createSession(
    sessionId: string,
    organizerIdentity: string,
    organizerName: string,
    sessionName?: string,
  ): SessionInfo {
    const info: SessionInfo = {
      sessionId,
      organizerIdentity,
      organizerName,
      sessionName,
      createdAt: new Date(),
    };
    this.sessions.set(sessionId, info);
    this.qaStates.set(sessionId, {
      pending: new Set(),
      activeSpeakerIdentity: null,
      activeBridge: null,
      organizerTargetLanguage: "uk",
    });
    console.log(
      `[SessionManager] Created session ${sessionId} for organizer ${organizerIdentity}`,
    );
    return info;
  }

  getSession(sessionId: string): SessionInfo | undefined {
    return this.sessions.get(sessionId);
  }

  // Translation management
  async getOrCreate(
    sessionId: string,
    targetLanguage: string,
    organizerIdentity: string,
  ): Promise<TranslationBridge> {
    const languageMap = this.translations.get(sessionId);
    const existingBridge = languageMap?.get(targetLanguage);

    if (existingBridge && existingBridge.status === "active") {
      console.log(
        `[SessionManager] Reusing existing bridge for ${targetLanguage} in session ${sessionId}`,
      );
      existingBridge.subscriberCount++;
      this.broadcastTranslations(sessionId);
      return existingBridge;
    }

    // Another call is already creating this bridge — wait for it instead of
    // starting a second one (which would double-translate the same audio).
    const key = `${sessionId}:${targetLanguage}`;
    const pending = this.pendingCreations.get(key);
    if (pending) {
      const bridge = await pending;
      bridge.subscriberCount++;
      this.broadcastTranslations(sessionId);
      return bridge;
    }

    // If bridge exists but is in error/closed state, clean it up
    if (
      existingBridge &&
      (existingBridge.status === "error" || existingBridge.status === "closed")
    ) {
      console.log(
        `[SessionManager] Cleaning up stale bridge for ${targetLanguage}`,
      );
      await existingBridge.stop();
      languageMap!.delete(targetLanguage);
    }

    const creation = this.createBridge(sessionId, targetLanguage, organizerIdentity);
    this.pendingCreations.set(key, creation);

    try {
      const bridge = await creation;
      bridge.subscriberCount++;
      this.broadcastTranslations(sessionId);
      return bridge;
    } finally {
      this.pendingCreations.delete(key);
    }
  }

  private async createBridge(
    sessionId: string,
    targetLanguage: string,
    organizerIdentity: string,
  ): Promise<TranslationBridge> {
    console.log(
      `[SessionManager] Creating new bridge for ${targetLanguage} in session ${sessionId}`,
    );

    const bridge = new TranslationBridge(
      sessionId,
      targetLanguage,
      organizerIdentity,
      this.getConfig(),
      `translator-${targetLanguage}`,
    );

    let languageMap = this.translations.get(sessionId);
    if (!languageMap) {
      languageMap = new Map();
      this.translations.set(sessionId, languageMap);
    }
    languageMap.set(targetLanguage, bridge);

    try {
      await bridge.start();
      return bridge;
    } catch (error) {
      // Clean up on failure
      languageMap.delete(targetLanguage);
      throw error;
    }
  }

  getActiveTranslations(sessionId: string): TranslationInfo[] {
    const languageMap = this.translations.get(sessionId);
    if (!languageMap) return [];

    const result: TranslationInfo[] = [];
    for (const [language, bridge] of languageMap) {
      result.push({
        language,
        translatorIdentity: bridge.identity,
        status: bridge.status,
        subscriberCount: bridge.subscriberCount,
      });
    }
    return result;
  }

  /**
   * Decrement subscriber count for a language. If the last subscriber
   * leaves, stop the bridge and tear down the Gemini session.
   */
  async unsubscribe(sessionId: string, targetLanguage: string): Promise<void> {
    const languageMap = this.translations.get(sessionId);
    if (!languageMap) return;

    const bridge = languageMap.get(targetLanguage);
    if (!bridge) return;

    bridge.subscriberCount = Math.max(0, bridge.subscriberCount - 1);
    console.log(
      `[SessionManager] Unsubscribed from ${targetLanguage} in session ${sessionId} (${bridge.subscriberCount} remaining)`,
    );

    if (bridge.subscriberCount === 0) {
      console.log(
        `[SessionManager] No more subscribers for ${targetLanguage}, tearing down bridge`,
      );
      await bridge.stop();
      languageMap.delete(targetLanguage);

      // Clean up the session map if no bridges remain
      if (languageMap.size === 0) {
        this.translations.delete(sessionId);
      }
    }

    this.broadcastTranslations(sessionId);
  }

  async removeTranslation(
    sessionId: string,
    targetLanguage: string,
  ): Promise<void> {
    const languageMap = this.translations.get(sessionId);
    if (!languageMap) return;

    const bridge = languageMap.get(targetLanguage);
    if (bridge) {
      await bridge.stop();
      languageMap.delete(targetLanguage);
      console.log(
        `[SessionManager] Removed bridge for ${targetLanguage} in session ${sessionId}`,
      );
      this.broadcastTranslations(sessionId);
    }
  }

  async removeAllTranslations(sessionId: string): Promise<void> {
    const languageMap = this.translations.get(sessionId);
    if (languageMap) {
      for (const [, bridge] of languageMap) {
        await bridge.stop();
      }
      languageMap.clear();
      this.translations.delete(sessionId);
    }

    await this.endActiveQuestion(sessionId);
    this.qaStates.delete(sessionId);
    this.sessions.delete(sessionId);
    console.log(
      `[SessionManager] Removed all bridges and session for ${sessionId}`,
    );
  }

  private getConfig() {
    return {
      geminiApiKey: process.env.GEMINI_API_KEY!,
      livekitUrl:
        process.env.LIVEKIT_URL ||
        process.env.NEXT_PUBLIC_LIVEKIT_URL ||
        "ws://localhost:7880",
      livekitApiKey: process.env.LIVEKIT_API_KEY!,
      livekitApiSecret: process.env.LIVEKIT_API_SECRET!,
    };
  }

  private getRoomService(): RoomServiceClient {
    if (!this.roomService) {
      const config = this.getConfig();
      this.roomService = new RoomServiceClient(
        config.livekitUrl,
        config.livekitApiKey,
        config.livekitApiSecret,
      );
    }
    return this.roomService;
  }

  /**
   * Push current QA status to everyone in the room over the data channel,
   * so clients don't have to poll /api/questions. Best-effort — a failed
   * broadcast shouldn't fail the mutation that triggered it (a client that
   * misses it will still pick up the latest state on its next reconnect).
   */
  private broadcastQaStatus(sessionId: string): void {
    const status = this.getQaStatus(sessionId);
    const payload = new TextEncoder().encode(
      JSON.stringify({ type: "qa-status", ...status }),
    );
    this.getRoomService()
      .sendData(sessionId, payload, DataPacket_Kind.RELIABLE, {
        topic: "qa-status",
      })
      .catch((error) => {
        console.error(
          `[SessionManager] Failed to broadcast QA status for ${sessionId}:`,
          error,
        );
      });
  }

  /** Push current translation list to everyone in the room. See broadcastQaStatus. */
  private broadcastTranslations(sessionId: string): void {
    const translations = this.getActiveTranslations(sessionId);
    const payload = new TextEncoder().encode(
      JSON.stringify({ type: "translations", translations }),
    );
    this.getRoomService()
      .sendData(sessionId, payload, DataPacket_Kind.RELIABLE, {
        topic: "translations",
      })
      .catch((error) => {
        console.error(
          `[SessionManager] Failed to broadcast translations for ${sessionId}:`,
          error,
        );
      });
  }

  private getOrCreateQaState(sessionId: string): SessionQaState {
    const existing = this.qaStates.get(sessionId);
    if (existing) return existing;

    const state: SessionQaState = {
      pending: new Set(),
      activeSpeakerIdentity: null,
      activeBridge: null,
      organizerTargetLanguage: "uk",
    };
    this.qaStates.set(sessionId, state);
    return state;
  }

  requestQuestion(sessionId: string, attendeeIdentity: string): QaStatus {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error("Session not found");
    }

    const state = this.getOrCreateQaState(sessionId);
    if (state.activeSpeakerIdentity !== attendeeIdentity) {
      state.pending.add(attendeeIdentity);
    }

    this.broadcastQaStatus(sessionId);
    return this.getQaStatus(sessionId);
  }

  cancelQuestion(sessionId: string, attendeeIdentity: string): QaStatus {
    const state = this.getOrCreateQaState(sessionId);
    state.pending.delete(attendeeIdentity);

    if (state.activeSpeakerIdentity === attendeeIdentity) {
      void this.endActiveQuestion(sessionId);
    }

    this.broadcastQaStatus(sessionId);
    return this.getQaStatus(sessionId);
  }

  async approveQuestion(
    sessionId: string,
    attendeeIdentity: string,
    organizerTargetLanguage = "uk",
  ): Promise<QaStatus> {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error("Session not found");
    }

    const state = this.getOrCreateQaState(sessionId);

    if (
      state.activeBridge &&
      state.activeSpeakerIdentity !== attendeeIdentity
    ) {
      await state.activeBridge.stop();
      state.activeBridge = null;
      state.activeSpeakerIdentity = null;
    }

    if (
      !state.activeBridge ||
      state.activeSpeakerIdentity !== attendeeIdentity
    ) {
      const suffix =
        attendeeIdentity.replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "speaker";
      const bridge = new TranslationBridge(
        sessionId,
        organizerTargetLanguage,
        attendeeIdentity,
        this.getConfig(),
        `reverse-${organizerTargetLanguage}-${suffix}`,
      );

      await bridge.start();
      bridge.subscriberCount = 1;
      state.activeBridge = bridge;
      state.activeSpeakerIdentity = attendeeIdentity;
    }

    state.pending.delete(attendeeIdentity);
    state.organizerTargetLanguage = organizerTargetLanguage;

    this.broadcastQaStatus(sessionId);
    return this.getQaStatus(sessionId);
  }

  async endActiveQuestion(sessionId: string): Promise<QaStatus> {
    const state = this.getOrCreateQaState(sessionId);

    if (state.activeBridge) {
      await state.activeBridge.stop();
    }

    state.activeBridge = null;
    state.activeSpeakerIdentity = null;

    this.broadcastQaStatus(sessionId);
    return this.getQaStatus(sessionId);
  }

  getQaStatus(sessionId: string): QaStatus {
    const state = this.getOrCreateQaState(sessionId);

    return {
      sessionId,
      pendingSpeakerIdentities: Array.from(state.pending.values()),
      activeSpeakerIdentity: state.activeSpeakerIdentity,
      activeTranslatorIdentity: state.activeBridge?.identity || null,
      organizerTargetLanguage: state.organizerTargetLanguage,
    };
  }

  getAllSessions(): SessionInfo[] {
    return Array.from(this.sessions.values());
  }
}

export default TranslationSessionManager;
