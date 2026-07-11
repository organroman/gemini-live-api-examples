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
import { useQaStatus } from "@/hooks/useQaStatus";
import { useTranslations } from "@/hooks/useTranslations";
import { isLocalTrackEnabled } from "@/lib/track-utils";
import { CircleXIcon, UsersIcon } from "lucide-react";

export default function BroadcastControls({
  sessionId,
  sessionName,
}: {
  sessionId: string;
  sessionName?: string;
}) {
  console.log("🚀 ~ sessionName:", sessionName);
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

  return (
    <>
      <div className="container enter" style={{ maxWidth: 980 }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h1 className="display display-lg" style={{ marginBottom: 8 }}>
            {sessionName || "Broadcasting"}
          </h1>
          <p className="mono">{sessionId}</p>
        </div>

        {/* Video stage */}
        <div style={{ marginBottom: 40 }}>
          <VideoStage
            screenTrack={primaryScreenTrack}
            screenPlaceholder="Start screen share to present slides and demos"
            screenTileClassName="mono"
            cameraTracks={cameraTracks}
          />
        </div>

        {/* Controls */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <MediaControls />

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <UsersIcon width={16} height={16} className="mono" />
                <span className="mono">
                  {listenerCount} listener{listenerCount !== 1 ? "s" : ""}
                </span>
              </div>

              <InviteButton joinUrl={joinUrl} />

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

        <hr className="rule" />

        <TranslationsList translations={translations} />

        <hr className="rule" />
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
