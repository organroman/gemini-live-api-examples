"use client";

import { Track } from "livekit-client";
import { TrackToggle, useTracks } from "@livekit/components-react";
import { isLocalTrackEnabled } from "@/lib/track-utils";

export default function MediaControls({
  isShowMic = true,
}: {
  isShowMic?: boolean;
}) {
  const audioTracks = useTracks([Track.Source.Microphone]);
  const cameraTracks = useTracks([Track.Source.Camera]);
  const isMicOn = isLocalTrackEnabled(audioTracks);
  const isCameraOn = isLocalTrackEnabled(cameraTracks);

  return (
    <div style={{ display: "flex", flexShrink: 0, gap: 10 }}>
      {isShowMic && (
        <TrackToggle
          source={Track.Source.Microphone}
          style={{
            padding: "8px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            fontWeight: 500,
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-pill)",
            background: !isMicOn ? "transparent" : "var(--accent)",
            color: !isMicOn ? "var(--error)" : "#FFFFFF",
            cursor: "pointer",
            flexShrink: 0,
          }}
        />
      )}

      <TrackToggle
        source={Track.Source.Camera}
        style={{
          padding: "8px 12px",
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 500,
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-pill)",
          background: !isCameraOn ? "transparent" : "var(--accent)",
          color: !isCameraOn ? "var(--error)" : "#FFFFFF",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
