import { useEffect, useState, useCallback, useRef } from "react";
import { useRoomContext, useTracks, useRemoteParticipants } from "@livekit/components-react";
import "@livekit/components-styles";
import { Track, RoomEvent } from "livekit-client";
import LanguageSelector from "./LanguageSelector";
import QaRequestControl from "./QaRequestControl";
import TranscriptionPanel from "./TranscriptionPanel";
import MediaControls from "@/components/MediaControls";
import Waveform from "@/components/Waveform";
import VideoStage from "@/components/VideoStage";
import { useQaStatus } from "@/hooks/useQaStatus";

export default function AttendeeView({
  sessionId,
  sessionName,
  attendeeIdentity,
}: {
  sessionId: string;
  sessionName?: string;
  attendeeIdentity: string;
}) {
  const room = useRoomContext();
  const [currentLanguage, setCurrentLanguage] = useState("original");
  const [translatorIdentity, setTranslatorIdentity] = useState<string | null>(
    null,
  );
  const { qaStatus, setQaStatus } = useQaStatus(
    sessionId,
    room,
    attendeeIdentity,
  );
  const currentLanguageRef = useRef(currentLanguage);
  const remoteParticipants = useRemoteParticipants();
  const audioTracks = useTracks([Track.Source.Microphone]);
  const cameraTracks = useTracks([Track.Source.Camera]);
  const screenShareTracks = useTracks([Track.Source.ScreenShare]);

  const organizerParticipant = remoteParticipants.find((p) =>
    p.identity.startsWith("organizer-"),
  );

  // Manage which audio tracks are subscribed based on selected language.
  // autoSubscribe is off, so we explicitly subscribe only to the selected
  // language's track.
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

  // Unsubscribe from translation + withdraw any pending/live question when
  // the tab closes.
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Use sendBeacon for reliable fire-and-forget during page unload
      if (
        currentLanguageRef.current &&
        currentLanguageRef.current !== "original"
      ) {
        const body = JSON.stringify({
          sessionId,
          targetLanguage: currentLanguageRef.current,
        });
        navigator.sendBeacon(
          "/api/translate/unsubscribe",
          new Blob([body], { type: "application/json" }),
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
          new Blob([body], { type: "application/json" }),
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
    },
    [sessionId],
  );

  const isConnected = organizerParticipant !== undefined;
  const primaryScreenTrack = screenShareTracks[0];

  return (
    <div
      className="container enter"
      style={{ maxWidth: 1200, paddingBottom: 40 }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: 36,
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        <h1 className="display">{sessionName || "Listening"}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Waveform active={isReceivingAudio} />

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

      <div className="attendee-layout">
        <div className="attendee-main">
          {/* Video stage */}
          <div style={{ marginBottom: 24 }}>
            <VideoStage
              screenTrack={primaryScreenTrack}
              screenPlaceholder="Waiting for shared screen"
              cameraTracks={cameraTracks}
            />
          </div>

          <hr className="rule" />

          {/* Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              marginTop: 20,
            }}
          >
            <MediaControls isShowMic={qaStatus.approvedForCurrentUser} />

            <QaRequestControl
              sessionId={sessionId}
              attendeeIdentity={attendeeIdentity}
              qaStatus={qaStatus}
              setQaStatus={setQaStatus}
            />

            <LanguageSelector
              sessionId={sessionId}
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>
        </div>

        <div className="attendee-transcript-rail">
          <TranscriptionPanel room={room} currentLanguage={currentLanguage} />
        </div>
      </div>
    </div>
  );
}
