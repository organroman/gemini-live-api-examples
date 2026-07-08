"use client";

import { useEffect, useState, useCallback, useRef, use } from "react";
import {
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  TrackLoop,
  TrackToggle,
  useRoomContext,
  useTracks,
  useRemoteParticipants,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track, RoomEvent } from "livekit-client";
import LanguageSelector from "./components/LanguageSelector";

interface TranscriptEntry {
  id: string;
  text: string;
  language: string;
  final: boolean;
  timestamp: number;
}

interface QaStatus {
  sessionId: string;
  pendingSpeakerIdentities: string[];
  activeSpeakerIdentity: string | null;
  activeTranslatorIdentity: string | null;
  organizerTargetLanguage: string;
  requestedByCurrentUser?: boolean;
  approvedForCurrentUser?: boolean;
}

function AttendeeView({
  sessionId,
  attendeeIdentity,
}: {
  sessionId: string;
  attendeeIdentity: string;
}) {
  const room = useRoomContext();
  const [currentLanguage, setCurrentLanguage] = useState("original");
  const [translatorIdentity, setTranslatorIdentity] = useState<string | null>(
    null,
  );
  const [qaStatus, setQaStatus] = useState<QaStatus>({
    sessionId,
    pendingSpeakerIdentities: [],
    activeSpeakerIdentity: null,
    activeTranslatorIdentity: null,
    organizerTargetLanguage: "uk",
    requestedByCurrentUser: false,
    approvedForCurrentUser: false,
  });
  const [transcripts, setTranscripts] = useState<TranscriptEntry[]>([]);
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);
  const currentLanguageRef = useRef(currentLanguage);
  const remoteParticipants = useRemoteParticipants();
  const audioTracks = useTracks([Track.Source.Microphone]);
  const cameraTracks = useTracks([Track.Source.Camera]);
  const screenShareTracks = useTracks([Track.Source.ScreenShare]);

  const organizerParticipant = remoteParticipants.find((p) =>
    p.identity.startsWith("organizer-")
  );

  // Listen for transcription data from translator bots
  useEffect(() => {
    if (!room) return;

    const handleData = (
      payload: Uint8Array,
      participant: unknown,
      kind: unknown,
      topic: string | undefined,
    ) => {
      // Only handle transcription topic
      if (topic !== "transcription") return;

      try {
        const data = JSON.parse(new TextDecoder().decode(payload));
        console.log("🚀 ~ data:", data);
        if (data.type !== "transcription") return;

        // Only show transcriptions for the currently selected language
        if (data.language !== currentLanguageRef.current) return;

        setTranscripts((prev) => {
          const existing = prev.findIndex((t) => t.id === data.segmentId);
          const entry: TranscriptEntry = {
            id: data.segmentId,
            text: data.text,
            language: data.language,
            final: data.final,
            timestamp: data.timestamp,
          };

          if (existing >= 0) {
            const updated = [...prev];
            updated[existing] = {
              ...updated[existing],
              text: updated[existing].text + data.text,
              final: data.final,
            };
            return updated;
          }

          const next = [...prev, entry];
          return next.slice(-50);
        });
      } catch {
        // Not a JSON transcription message
      }
    };

    room.on(RoomEvent.DataReceived, handleData);
    return () => {
      room.off(RoomEvent.DataReceived, handleData);
    };
  }, [room]);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcripts]);

  // Manage which audio tracks are subscribed based on selected language
  // autoSubscribe: false means nothing plays by default
  // We explicitly subscribe only to the selected language's track
  useEffect(() => {
    if (!room) return;

    const updateSubscriptions = () => {
      const participants = room.remoteParticipants;

      for (const [, participant] of participants) {
        const isOrganizer = participant.identity.startsWith("organizer-");
        const isSelectedTranslator =
          translatorIdentity && participant.identity === translatorIdentity;

        for (const [, pub] of participant.trackPublications) {
          if (pub.kind === Track.Kind.Video) {
            pub.setSubscribed(true);
          }

          if (pub.kind === Track.Kind.Audio) {
            if (currentLanguage === "original") {
              pub.setSubscribed(isOrganizer);
            } else {
              pub.setSubscribed(!!isSelectedTranslator);
            }
          }
        }
      }
    };

    updateSubscriptions();

    const handleUpdate = () => updateSubscriptions();
    room.on(RoomEvent.TrackPublished, handleUpdate);
    room.on(RoomEvent.ParticipantConnected, handleUpdate);
    room.on(RoomEvent.TrackUnpublished, handleUpdate);

    return () => {
      room.off(RoomEvent.TrackPublished, handleUpdate);
      room.off(RoomEvent.ParticipantConnected, handleUpdate);
      room.off(RoomEvent.TrackUnpublished, handleUpdate);
    };
  }, [room, currentLanguage, translatorIdentity, remoteParticipants]);

  const isReceivingAudio = audioTracks.some((t) => {
    const pub = t.publication;
    if (currentLanguage === "original") {
      return (
        t.participant.identity.startsWith("organizer-") && pub.isSubscribed
      );
    }
    return (
      !!translatorIdentity &&
      t.participant.identity === translatorIdentity &&
      pub.isSubscribed
    );
  });

  const isCameraOn = cameraTracks.some((t) => t.participant.isLocal);
  const isMicOn = audioTracks.some((t) => t.participant.isLocal);

  const fetchQaStatus = useCallback(async () => {
    if (!attendeeIdentity) return;
    try {
      const res = await fetch(
        `/api/questions?sessionId=${sessionId}&identity=${attendeeIdentity}`
      );
      const data = await res.json();
      if (data.error) return;
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to fetch Q&A status:", err);
    }
  }, [sessionId, attendeeIdentity]);

  useEffect(() => {
    const bootstrap = setTimeout(() => {
      void fetchQaStatus();
    }, 0);
    const interval = setInterval(fetchQaStatus, 2000);
    return () => {
      clearTimeout(bootstrap);
      clearInterval(interval);
    };
  }, [fetchQaStatus]);

  const requestQuestion = useCallback(async () => {
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request",
          sessionId,
          requesterIdentity: attendeeIdentity,
          attendeeIdentity,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to request question:", err);
    }
  }, [sessionId, attendeeIdentity]);

  const cancelQuestion = useCallback(async () => {
    try {
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "cancel",
          sessionId,
          requesterIdentity: attendeeIdentity,
          attendeeIdentity,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to cancel question:", err);
    }
  }, [sessionId, attendeeIdentity]);

  // Unsubscribe from translation when tab closes
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Use sendBeacon for reliable fire-and-forget during page unload
      if (currentLanguageRef.current && currentLanguageRef.current !== "original") {
        const body = JSON.stringify({
          sessionId,
          targetLanguage: currentLanguageRef.current,
        });
        navigator.sendBeacon(
          "/api/translate/unsubscribe",
          new Blob([body], { type: "application/json" })
        );
      }

      if (attendeeIdentity) {
        const body = JSON.stringify({
          action: "cancel",
          sessionId,
          requesterIdentity: attendeeIdentity,
          attendeeIdentity,
        });
        navigator.sendBeacon(
          "/api/questions",
          new Blob([body], { type: "application/json" })
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // Also fire on React unmount (e.g. navigation away)
      handleBeforeUnload();
    };
  }, [sessionId, attendeeIdentity]);

  const handleLanguageChange = useCallback(
    (langCode: string, newTranslatorIdentity: string | null) => {
      // Unsubscribe from the previous language
      const prev = currentLanguageRef.current;
      if (prev && prev !== "original" && prev !== langCode) {
        fetch("/api/translate/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, targetLanguage: prev }),
        }).catch(() => {});
      }

      setCurrentLanguage(langCode);
      currentLanguageRef.current = langCode;
      setTranslatorIdentity(newTranslatorIdentity);
      // Clear transcripts when switching languages
      setTranscripts([]);
    },
    [sessionId]
  );

  const isConnected = organizerParticipant !== undefined;
  const primaryScreenTrack = screenShareTracks[0];

  return (
    <div className="container enter" style={{ maxWidth: 980 }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1 className="display display-lg" style={{ marginBottom: 8 }}>
          <em>Listening</em>
        </h1>
        <p className="mono">{sessionId}</p>
      </div>

      {/* Video stage */}
      <div style={{ marginBottom: 24 }}>
        {primaryScreenTrack ? (
          <div className="video-stage-main" style={{ marginBottom: 12 }}>
            <TrackLoop tracks={[primaryScreenTrack]}>
              <ParticipantTile />
            </TrackLoop>
          </div>
        ) : (
          <div className="video-stage-placeholder" style={{ marginBottom: 12 }}>
            <p className="body-sm">Waiting for shared screen</p>
          </div>
        )}

        <div className="video-strip">
          {cameraTracks.length === 0 ? (
            <div className="video-tile-empty">
              <p className="body-sm">No participant cameras yet</p>
            </div>
          ) : (
            <TrackLoop tracks={cameraTracks}>
              <ParticipantTile />
            </TrackLoop>
          )}
        </div>
      </div>

      {/* Status */}
      <div style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className={`waveform ${isReceivingAudio ? "active" : "idle"}`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="waveform-bar" />
              ))}
            </div>

            {isConnected ? (
              <span className="status status--active">
                <span className="status-dot pulse" />
                {currentLanguage === "original"
                  ? "Original"
                  : currentLanguage.toUpperCase()}
              </span>
            ) : (
              <span className="status status--waiting">
                <span className="status-dot pulse" />
                Waiting for broadcast
              </span>
            )}
          </div>
        </div>
      </div>

      <hr className="rule" />

      {/* Camera control */}
      <div style={{ padding: "24px 0" }}>
        <span className="label" style={{ display: "block", marginBottom: 10 }}>
          Your video
        </span>
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
          {isCameraOn ? "Turn off camera" : "Turn on camera"}
        </TrackToggle>
      </div>

      <hr className="rule" />

      {/* Question / mic */}
      <div style={{ padding: "24px 0" }}>
        <span className="label" style={{ display: "block", marginBottom: 10 }}>
          Ask a question
        </span>

        {qaStatus.approvedForCurrentUser ? (
          <>
            <p className="body-sm" style={{ marginBottom: 10 }}>
              You are live. Speak in your language, organizer hears translated audio.
            </p>
            <TrackToggle
              source={Track.Source.Microphone}
              style={{
                width: "100%",
                padding: "14px 20px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                border: isMicOn
                  ? "1px solid var(--error)"
                  : "1px solid var(--fg)",
                borderRadius: 0,
                background: isMicOn ? "transparent" : "var(--fg)",
                color: isMicOn ? "var(--error)" : "var(--bg)",
                cursor: "pointer",
              }}
            >
              {isMicOn ? "Mute mic" : "Unmute mic"}
            </TrackToggle>
          </>
        ) : qaStatus.requestedByCurrentUser ? (
          <>
            <p className="body-sm" style={{ marginBottom: 10 }}>
              Request pending approval from organizer.
            </p>
            <button className="btn btn-outline" onClick={cancelQuestion}>
              Cancel request
            </button>
          </>
        ) : (
          <button className="btn btn-outline" onClick={requestQuestion}>
            Request to speak
          </button>
        )}
      </div>

      <hr className="rule" />

      {/* Language selector */}
      <div style={{ padding: "28px 0" }}>
        <LanguageSelector
          sessionId={sessionId}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      <hr className="rule" />

      {/* Transcription output */}
      <div style={{ padding: "28px 0" }}>
        <span className="label" style={{ display: "block", marginBottom: 16 }}>
          Transcription
        </span>

        <div
          style={{
            maxHeight: 240,
            overflowY: "auto",
            paddingRight: 8,
          }}
        >
          {transcripts.length === 0 ? (
            <p className="body-sm italic">
              {currentLanguage === "original"
                ? "Select a language to see transcription"
                : "Waiting for translated speech…"}
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {transcripts.map((t, i) => (
                <p
                  key={`${t.id}-${i}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: t.final ? "var(--fg)" : "var(--fg-tertiary)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {t.text}
                </p>
              ))}
              <div ref={transcriptEndRef} />
            </div>
          )}
        </div>
      </div>

      <hr className="rule" />

      {/* Info */}
      <p className="body-sm" style={{ paddingTop: 28 }}>
        Each language activates a dedicated Gemini Live API session for
        real-time translation.
      </p>
    </div>
  );
}


export default function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: sessionId } = use(params);
  const [token, setToken] = useState("");
  const [livekitUrl, setLivekitUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [attendeeIdentity, setAttendeeIdentity] = useState("");

  useEffect(() => {
    async function fetchToken() {
      try {
        const identity = `attendee-${Math.random().toString(36).slice(2, 8)}`;
        const res = await fetch(
          `/api/token?room=${sessionId}&identity=${identity}&role=attendee`
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setAttendeeIdentity(identity);
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
          <button
            className="btn btn-outline"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!token || !livekitUrl || !attendeeIdentity) {
    return (
      <div className="page">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div className="spinner" />
          <p className="mono">Joining…</p>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="page">
        <div className="container enter" style={{ textAlign: "center" }}>
          <h1 className="display display-lg" style={{ marginBottom: 12 }}>
            <em>Ready</em>
          </h1>
          <p className="body-sm" style={{ marginBottom: 40 }}>
            Tap below to join the broadcast and enable audio.
          </p>
          <button
            className="btn"
            onClick={() => setStarted(true)}
          >
            Start listening
          </button>
          <p className="mono" style={{ marginTop: 32, fontSize: 12 }}>
            Session {sessionId}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-top">
      <LiveKitRoom
        video={false}
        audio={false}
        token={token}
        serverUrl={livekitUrl}
        connectOptions={{ autoSubscribe: false }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <RoomAudioRenderer />
        <AttendeeView sessionId={sessionId} attendeeIdentity={attendeeIdentity} />
      </LiveKitRoom>
    </div>
  );
}
