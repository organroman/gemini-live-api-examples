"use client";

import { useEffect, useCallback, useState } from "react";
import {
  useLocalParticipant,
  useRoomContext,
  useRemoteParticipants,
  TrackToggle,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { RoomEvent, Track } from "livekit-client";
import ConfirmModal from "@/components/ConfirmModal";
import InviteButton from "@/components/InviteButton";
import MediaControls from "@/components/MediaControls";
import QaPanel from "@/components/QaPanel";
import TranslationsList from "@/components/TranslationsList";
import VideoStage from "@/components/VideoStage";
import { useNewQuestionAlert } from "@/hooks/useNewQuestionAlert";
import { useQaStatus } from "@/hooks/useQaStatus";
import { useTranslations } from "@/hooks/useTranslations";
import { primeAudio } from "@/lib/chime";
import { isLocalTrackEnabled } from "@/lib/track-utils";
import { Bell, BellOff, CircleXIcon, UsersIcon } from "lucide-react";
import Waveform from "./Waveform";

export default function BroadcastControls({
  sessionId,
  sessionName,
}: {
  sessionId: string;
  sessionName?: string;
}) {
  const room = useRoomContext();
  const { localParticipant } = useLocalParticipant();
  const cameraTracks = useTracks([Track.Source.Camera]);
  const screenShareTracks = useTracks([Track.Source.ScreenShare]);
  const remoteParticipants = useRemoteParticipants();

  const translations = useTranslations(sessionId, room);
  const { qaStatus, setQaStatus } = useQaStatus(sessionId, room);

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

  const nameForIdentity = useCallback(
    (identity: string) =>
      remoteParticipants.find((p) => p.identity === identity)?.name || identity,
    [remoteParticipants],
  );

  const [showEndConfirm, setShowEndConfirm] = useState(false);

  const endBroadcast = useCallback(() => {
    room.disconnect();
    window.location.href = "/";
  }, [room]);

  // Organizer is typically screen-sharing/presenting elsewhere and won't
  // see the Q&A popover update — chime + native notification cut through
  // that. Both require a real user gesture to unlock, hence the button.
  const [alertsEnabled, setAlertsEnabled] = useState(false);

  const enableAlerts = useCallback(async () => {
    primeAudio();
    if (typeof Notification !== "undefined") {
      const permission = await Notification.requestPermission();
      setAlertsEnabled(permission === "granted");
    } else {
      setAlertsEnabled(true);
    }
  }, []);

  useNewQuestionAlert(
    qaStatus.pendingSpeakerIdentities,
    alertsEnabled,
    nameForIdentity,
  );

  // Subscribe to whichever reverse-translator is currently live (the
  // organizer only ever hears the approved speaker's translated audio).
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
    [sessionId, localParticipant.identity, setQaStatus],
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
  }, [sessionId, localParticipant.identity, setQaStatus]);

  const primaryScreenTrack = screenShareTracks[0];
  const isScreenSharing = isLocalTrackEnabled(screenShareTracks);
  const audioTracks = useTracks([Track.Source.Microphone]);
  const isMicOn = isLocalTrackEnabled(audioTracks);

  return (
    <>
      <div
        className="container enter"
        style={{
          maxWidth: 980,
          paddingBottom: 40,
        }}
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
          <h1 className="display">{sessionName || "Broadcasting"}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Waveform active={isMicOn} />
            <span
              className="status"
              style={{ color: isMicOn ? "var(--success)" : "var(--fg-ghost)" }}
            >
              <span className={`status-dot ${isMicOn ? "pulse" : ""}`} />
              {isMicOn ? "Live" : "Muted"}
            </span>
          </div>
        </div>

        {/* Video stage */}
        <div
          style={{
            marginBottom: 40,
            flex: 1,
          }}
        >
          <VideoStage
            screenTrack={primaryScreenTrack}
            screenPlaceholder="Start screen share to present slides and demos"
            screenTileClassName="mono"
            cameraTracks={cameraTracks}
          />
        </div>
        <hr className="rule" />

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            marginTop: 20,
          }}
        >
          <MediaControls />

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <TranslationsList translations={translations} />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                position: "relative",
              }}
            >
              <UsersIcon width={28} height={28} className="mono" />
              <span
                style={{
                  fontSize: 10,
                  position: "absolute",
                  top: -8,
                  right: -8,
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background:
                    listenerCount > 0 ? "var(--accent)" : "var(--warning)",
                  color: "var(--bg)",
                  fontWeight: 600,
                }}
              >
                {listenerCount}
              </span>
            </div>

            <InviteButton joinUrl={joinUrl} />

            <button
              className="btn btn-outline"
              onClick={enableAlerts}
              disabled={alertsEnabled}
              title="Get a sound + notification when someone raises a question — useful while you're screen-sharing elsewhere"
              style={{
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "13px",
                opacity: alertsEnabled ? 0.6 : 1,
              }}
            >
              {alertsEnabled ? (
                <Bell width={14} height={14} />
              ) : (
                <BellOff width={14} height={14} color="var(--error)" />
              )}
              {alertsEnabled ? "Alerts on" : "Enable alerts"}
            </button>

            <QaPanel
              qaStatus={qaStatus}
              onApprove={approveQuestion}
              onEndActive={endActiveQuestion}
              nameForIdentity={nameForIdentity}
            />

            <TrackToggle
              source={Track.Source.ScreenShare}
              style={{
                padding: "8px 24px",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                border: isScreenSharing
                  ? "1px solid var(--success)"
                  : "1px solid var(--accent)",
                borderRadius: "var(--radius-pill)",
                background: isScreenSharing
                  ? "var(--success)"
                  : "var(--accent)",
                color: isScreenSharing ? "var(--error)" : "#FFFFFF",
                cursor: "pointer",
              }}
            >
              {isScreenSharing ? "Stop sharing" : "Share screen"}
            </TrackToggle>
          </div>

          <button
            className="btn-danger"
            onClick={() => setShowEndConfirm(true)}
            style={{
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CircleXIcon /> End
          </button>
        </div>
      </div>

      {showEndConfirm && (
        <ConfirmModal
          title="End broadcast?"
          message="This will disconnect all listeners and end the session for everyone. This can't be undone."
          confirmLabel="End broadcast"
          cancelLabel="Cancel"
          danger
          onConfirm={endBroadcast}
          onCancel={() => setShowEndConfirm(false)}
        />
      )}
    </>
  );
}
