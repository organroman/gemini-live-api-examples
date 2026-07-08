/**
 * TranslationSessionManager: Singleton that enforces "max 1 Gemini Live API
 * session per language per room" constraint.
 *
 * Usage:
 *   const manager = TranslationSessionManager.getInstance();
 *   const bridge = await manager.getOrCreate(sessionId, targetLanguage, organizerIdentity);
 */

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

class TranslationSessionManager {
  private static instance: TranslationSessionManager;

  // Map<sessionId, Map<languageCode, TranslationBridge>>
  private translations: Map<string, Map<string, TranslationBridge>> = new Map();

  // Map<sessionId, SessionInfo>
  private sessions: Map<string, SessionInfo> = new Map();

  // Map<sessionId, SessionQaState>
  private qaStates: Map<string, SessionQaState> = new Map();

  private constructor() {}

  static getInstance(): TranslationSessionManager {
    if (!TranslationSessionManager.instance) {
      TranslationSessionManager.instance = new TranslationSessionManager();
    }
    return TranslationSessionManager.instance;
  }

  // Session management
  createSession(sessionId: string, organizerIdentity: string): SessionInfo {
    const info: SessionInfo = {
      sessionId,
      organizerIdentity,
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
    // Check if we already have a bridge for this language
    let languageMap = this.translations.get(sessionId);
    if (languageMap) {
      const existingBridge = languageMap.get(targetLanguage);
      if (existingBridge && existingBridge.status === "active") {
        console.log(
          `[SessionManager] Reusing existing bridge for ${targetLanguage} in session ${sessionId}`,
        );
        existingBridge.subscriberCount++;
        return existingBridge;
      }
      // If bridge exists but is in error/closed state, clean it up
      if (
        existingBridge &&
        (existingBridge.status === "error" ||
          existingBridge.status === "closed")
      ) {
        console.log(
          `[SessionManager] Cleaning up stale bridge for ${targetLanguage}`,
        );
        await existingBridge.stop();
        languageMap.delete(targetLanguage);
      }
    }

    // Create a new bridge
    console.log(
      `[SessionManager] Creating new bridge for ${targetLanguage} in session ${sessionId}`,
    );

    const config = {
      geminiApiKey: process.env.GEMINI_API_KEY!,
      livekitUrl:
        process.env.LIVEKIT_URL ||
        process.env.NEXT_PUBLIC_LIVEKIT_URL ||
        "ws://localhost:7880",
      livekitApiKey: process.env.LIVEKIT_API_KEY!,
      livekitApiSecret: process.env.LIVEKIT_API_SECRET!,
    };

    const bridge = new TranslationBridge(
      sessionId,
      targetLanguage,
      organizerIdentity,
      config,
      `translator-${targetLanguage}`,
    );

    // Store the bridge before starting (to prevent race conditions)
    if (!languageMap) {
      languageMap = new Map();
      this.translations.set(sessionId, languageMap);
    }
    languageMap.set(targetLanguage, bridge);

    try {
      await bridge.start();
      bridge.subscriberCount = 1;
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

    return this.getQaStatus(sessionId);
  }

  cancelQuestion(sessionId: string, attendeeIdentity: string): QaStatus {
    const state = this.getOrCreateQaState(sessionId);
    state.pending.delete(attendeeIdentity);

    if (state.activeSpeakerIdentity === attendeeIdentity) {
      void this.endActiveQuestion(sessionId);
    }

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

    return this.getQaStatus(sessionId);
  }

  async endActiveQuestion(sessionId: string): Promise<QaStatus> {
    const state = this.getOrCreateQaState(sessionId);

    if (state.activeBridge) {
      await state.activeBridge.stop();
    }

    state.activeBridge = null;
    state.activeSpeakerIdentity = null;

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
