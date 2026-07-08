"use client";

import { useEffect, useState, useCallback, use } from "react";
import {
  LiveKitRoom,
  useLocalParticipant,
  useRoomContext,
  useRemoteParticipants,
  ParticipantTile,
  RoomAudioRenderer,
  TrackLoop,
  TrackToggle,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { RoomEvent, Track } from "livekit-client";
import SessionQRCode from "@/components/SessionQRCode";

interface TranslationInfo {
  language: string;
  translatorIdentity: string;
  status: string;
  subscriberCount: number;
}

interface QaStatus {
  sessionId: string;
  pendingSpeakerIdentities: string[];
  activeSpeakerIdentity: string | null;
  activeTranslatorIdentity: string | null;
  organizerTargetLanguage: string;
}

const FLAGS: Record<string, string> = {
  en: "🇺🇸", es: "🇪🇸", fr: "🇫🇷", de: "🇩🇪", it: "🇮🇹",
  pt: "🇧🇷", ja: "🇯🇵", ko: "🇰🇷", zh: "🇨🇳", ar: "🇸🇦",
  hi: "🇮🇳", ru: "🇷🇺", tr: "🇹🇷", nl: "🇳🇱", pl: "🇵🇱", sv: "🇸🇪",
};

const LANG_NAMES: Record<string, string> = {
  en: "English", es: "Spanish", fr: "French", de: "German", it: "Italian",
  pt: "Portuguese", ja: "Japanese", ko: "Korean", zh: "Chinese", ar: "Arabic",
  hi: "Hindi", ru: "Russian", tr: "Turkish", nl: "Dutch", pl: "Polish", sv: "Swedish",
};

function BroadcastControls({ sessionId }: { sessionId: string }) {
  const room = useRoomContext();
  const { localParticipant } = useLocalParticipant();
  const [translations, setTranslations] = useState<TranslationInfo[]>([]);
  const [qaStatus, setQaStatus] = useState<QaStatus>({
    sessionId,
    pendingSpeakerIdentities: [],
    activeSpeakerIdentity: null,
    activeTranslatorIdentity: null,
    organizerTargetLanguage: "uk",
  });
  const audioTracks = useTracks([Track.Source.Microphone]);
  const cameraTracks = useTracks([Track.Source.Camera]);
  const screenShareTracks = useTracks([Track.Source.ScreenShare]);
  const remoteParticipants = useRemoteParticipants();

  // Count only real attendees, not translator bots
  const listenerCount = remoteParticipants.filter(
    (p) =>
      !p.identity.startsWith("translator-") &&
      !p.identity.startsWith("reverse-"),
  ).length;

  const joinUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/session/${sessionId}/watch`
      : "";

  const fetchTranslations = useCallback(async () => {
    try {
      const res = await fetch(`/api/translate/status?sessionId=${sessionId}`);
      const data = await res.json();
      setTranslations(data.translations || []);
    } catch (err) {
      console.error("Failed to fetch translations:", err);
    }
  }, [sessionId]);

  const fetchQaStatus = useCallback(async () => {
    try {
      const res = await fetch(`/api/questions?sessionId=${sessionId}`);
      const data = await res.json();
      if (data.error) return;
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to fetch question status:", err);
    }
  }, [sessionId]);

  useEffect(() => {
    const bootstrap = setTimeout(() => {
      void fetchTranslations();
      void fetchQaStatus();
    }, 0);
    const interval = setInterval(fetchTranslations, 3000);
    const qaInterval = setInterval(fetchQaStatus, 2000);
    return () => {
      clearTimeout(bootstrap);
      clearInterval(interval);
      clearInterval(qaInterval);
    };
  }, [fetchTranslations, fetchQaStatus]);

  useEffect(() => {
    if (!room) return;

    const updateAudioSubscriptions = () => {
      const activeTranslatorIdentity = qaStatus.activeTranslatorIdentity;

      for (const [, participant] of room.remoteParticipants) {
        for (const [, pub] of participant.trackPublications) {
          if (pub.kind !== Track.Kind.Audio) continue;
          pub.setSubscribed(
            !!activeTranslatorIdentity &&
              participant.identity === activeTranslatorIdentity,
          );
        }
      }
    };

    updateAudioSubscriptions();

    room.on(RoomEvent.TrackPublished, updateAudioSubscriptions);
    room.on(RoomEvent.ParticipantConnected, updateAudioSubscriptions);
    room.on(RoomEvent.TrackUnpublished, updateAudioSubscriptions);

    return () => {
      room.off(RoomEvent.TrackPublished, updateAudioSubscriptions);
      room.off(RoomEvent.ParticipantConnected, updateAudioSubscriptions);
      room.off(RoomEvent.TrackUnpublished, updateAudioSubscriptions);
    };
  }, [room, qaStatus.activeTranslatorIdentity]);

  const approveQuestion = useCallback(
    async (attendeeIdentity: string) => {
      try {
        const res = await fetch("/api/questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "approve",
            sessionId,
            requesterIdentity: localParticipant.identity,
            attendeeIdentity,
            organizerTargetLanguage: "uk",
          }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setQaStatus(data);
      } catch (err) {
        console.error("Failed to approve question:", err);
      }
    },
    [sessionId, localParticipant.identity],
  );

  const endActiveQuestion = useCallback(async () => {
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "end",
          sessionId,
          requesterIdentity: localParticipant.identity,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to end active question:", err);
    }
  }, [sessionId, localParticipant.identity]);

  const primaryScreenTrack = screenShareTracks[0];
  const isMicOn = audioTracks.some(
    (t) => t.participant.identity === localParticipant.identity,
  );
  const isCameraOn = cameraTracks.some(
    (t) => t.participant.identity === localParticipant.identity,
  );
  const isScreenSharing = screenShareTracks.some(
    (t) => t.participant.identity === localParticipant.identity,
  );

  return (
    <div className="container enter" style={{ maxWidth: 980 }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <h1 className="display display-lg" style={{ marginBottom: 8 }}>
          Broadcasting
        </h1>
        <p className="mono">{sessionId}</p>
      </div>

      {/* Video stage */}
      <div style={{ marginBottom: 40 }}>
        {primaryScreenTrack ? (
          <div className="video-stage-main" style={{ marginBottom: 12 }}>
            <TrackLoop tracks={[primaryScreenTrack]}>
              <ParticipantTile />
            </TrackLoop>
          </div>
        ) : (
          <div className="video-stage-placeholder" style={{ marginBottom: 12 }}>
            <p className="body-sm">
              Start screen share to present slides and demos
            </p>
          </div>
        )}

        <div className="video-strip">
          {cameraTracks.length === 0 ? (
            <div className="video-tile-empty">
              <p className="body-sm">No cameras active yet</p>
            </div>
          ) : (
            <TrackLoop tracks={cameraTracks}>
              <ParticipantTile />
            </TrackLoop>
          )}
        </div>
      </div>

      {/* Mic status */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className={`waveform ${isMicOn ? "active" : "idle"}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="waveform-bar" />
              ))}
            </div>
            <span
              className="status"
              style={{ color: isMicOn ? "var(--success)" : "var(--fg-ghost)" }}
            >
              <span className={`status-dot ${isMicOn ? "pulse" : ""}`} />
              {isMicOn ? "Live" : "Muted"}
            </span>
          </div>

          <span className="mono">
            {listenerCount} listener{listenerCount !== 1 ? "s" : ""}
          </span>
        </div>

        <TrackToggle
          source={Track.Source.Microphone}
          style={{
            width: "100%",
            padding: "14px 32px",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 500,
            border: isMicOn ? "1px solid var(--error)" : "none",
            borderRadius: 0,
            background: isMicOn ? "transparent" : "var(--fg)",
            color: isMicOn ? "var(--error)" : "var(--bg)",
            cursor: "pointer",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 10,
          }}
        >
          <TrackToggle
            source={Track.Source.Camera}
            style={{
              width: "100%",
              padding: "14px 20px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              border: isCameraOn
                ? "1px solid var(--error)"
                : "1px solid var(--fg)",
              borderRadius: 0,
              background: isCameraOn ? "transparent" : "var(--fg)",
              color: isCameraOn ? "var(--error)" : "var(--bg)",
              cursor: "pointer",
            }}
          >
            {isCameraOn ? "Stop camera" : "Start camera"}
          </TrackToggle>

          <TrackToggle
            source={Track.Source.ScreenShare}
            style={{
              width: "100%",
              padding: "14px 20px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              border: isScreenSharing
                ? "1px solid var(--error)"
                : "1px solid var(--fg)",
              borderRadius: 0,
              background: isScreenSharing ? "transparent" : "var(--fg)",
              color: isScreenSharing ? "var(--error)" : "var(--bg)",
              cursor: "pointer",
            }}
          >
            {isScreenSharing ? "Stop sharing" : "Share screen"}
          </TrackToggle>
        </div>
      </div>

      <hr className="rule" />

      {/* QR code */}
      <div
        style={{
          padding: "32px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span className="label">Share with attendees</span>
        <SessionQRCode url={joinUrl} size={140} />
        <p
          className="mono"
          style={{ wordBreak: "break-all", textAlign: "center" }}
        >
          {joinUrl}
        </p>
      </div>

      <hr className="rule" />

      {/* Active translations */}
      <div style={{ padding: "28px 0" }}>
        <span className="label" style={{ marginBottom: 16, display: "block" }}>
          Translations · {translations.length}
        </span>

        {translations.length === 0 ? (
          <p className="body-sm italic">
            None yet — attendees can request them
          </p>
        ) : (
          translations.map((t) => (
            <div key={t.language} className="lang-row">
              <div className="lang-row-left">
                <span className="lang-flag">{FLAGS[t.language] || "🌐"}</span>
                <span className="lang-name">
                  {LANG_NAMES[t.language] || t.language.toUpperCase()}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="lang-meta">
                  {t.subscriberCount} listener
                  {t.subscriberCount !== 1 ? "s" : ""}
                </span>
                <span
                  className={`status status--${t.status === "active" ? "active" : "waiting"}`}
                >
                  <span className="status-dot pulse" />
                  {t.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <hr className="rule" />

      {/* Listener Q&A */}
      <div style={{ padding: "28px 0" }}>
        <span className="label" style={{ marginBottom: 16, display: "block" }}>
          Listener Q&A
        </span>

        {qaStatus.activeSpeakerIdentity ? (
          <div style={{ marginBottom: 14 }}>
            <p className="body-sm" style={{ marginBottom: 8 }}>
              Live question: {qaStatus.activeSpeakerIdentity}
            </p>
            <button className="btn btn-outline" onClick={endActiveQuestion}>
              End question
            </button>
          </div>
        ) : (
          <p className="body-sm italic" style={{ marginBottom: 14 }}>
            No active speaker
          </p>
        )}

        {qaStatus.pendingSpeakerIdentities.length === 0 ? (
          <p className="body-sm italic">No pending requests</p>
        ) : (
          qaStatus.pendingSpeakerIdentities.map((identity) => (
            <div key={identity} className="lang-row">
              <div className="lang-row-left">
                <span className="lang-name">{identity}</span>
              </div>
              <button
                className="btn btn-outline"
                onClick={() => approveQuestion(identity)}
                style={{ padding: "8px 14px", fontSize: 12 }}
              >
                Approve
              </button>
            </div>
          ))
        )}
      </div>

      <hr className="rule" />

      {/* End */}
      <div style={{ paddingTop: 28 }}>
        <button
          className="btn-danger"
          onClick={() => {
            room.disconnect();
            window.location.href = "/";
          }}
          style={{ width: "100%" }}
        >
          End broadcast
        </button>
      </div>
    </div>
  );
}

export default function BroadcastPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: sessionId } = use(params);
  const [token, setToken] = useState("");
  const [livekitUrl, setLivekitUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const identity = `organizer-host`;
        const res = await fetch(
          `/api/token?room=${sessionId}&identity=${identity}&role=organizer`
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setToken(data.token);
        setLivekitUrl(data.serverUrl);
      } catch (err) {
        setError((err as Error).message);
      }
    }
    fetchToken();
  }, [sessionId]);

  if (error) {
    return (
      <div className="page">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="display display-md" style={{ marginBottom: 16 }}>
            Something went wrong
          </p>
          <p className="body-sm" style={{ marginBottom: 32 }}>{error}</p>
          <button className="btn btn-outline" onClick={() => (window.location.href = "/")}>
            Go home
          </button>
        </div>
      </div>
    );
  }

  if (!token || !livekitUrl) {
    return (
      <div className="page">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div className="spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="page page-top">
      <LiveKitRoom
        video={false}
        audio={true}
        token={token}
        serverUrl={livekitUrl}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
        onDisconnected={() => {
          setError(
            "Disconnected from LiveKit room. Please check your credentials or network connection.",
          );
        }}
      >
        <RoomAudioRenderer />

        <BroadcastControls sessionId={sessionId} />
      </LiveKitRoom>
    </div>
  );
}
