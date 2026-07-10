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
import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import BroadcastControls from "@/components/BroadcastControls";



// const FLAGS: Record<string, string> = {
//   en: "🇺🇸",
//   es: "🇪🇸",
//   fr: "🇫🇷",
//   de: "🇩🇪",
//   it: "🇮🇹",
//   pt: "🇧🇷",
//   ja: "🇯🇵",
//   ko: "🇰🇷",
//   zh: "🇨🇳",
//   ar: "🇸🇦",
//   hi: "🇮🇳",
//   ru: "🇷🇺",
//   tr: "🇹🇷",
//   nl: "🇳🇱",
//   pl: "🇵🇱",
//   sv: "🇸🇪",
// };

// const LANG_NAMES: Record<string, string> = {
//   en: "English",
//   es: "Spanish",
//   fr: "French",
//   de: "German",
//   it: "Italian",
//   pt: "Portuguese",
//   ja: "Japanese",
//   ko: "Korean",
//   zh: "Chinese",
//   ar: "Arabic",
//   hi: "Hindi",
//   ru: "Russian",
//   tr: "Turkish",
//   nl: "Dutch",
//   pl: "Polish",
//   sv: "Swedish",
// };


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
          `/api/token?room=${sessionId}&identity=${identity}&role=organizer`,
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
          <p className="body-sm" style={{ marginBottom: 32 }}>
            {error}
          </p>
          <button
            className="btn btn-outline"
            onClick={() => (window.location.href = "/")}
          >
            Go home
          </button>
        </div>
      </div>
    );
  }

  if (!token || !livekitUrl) {
    return (
      <div className="page">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
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
