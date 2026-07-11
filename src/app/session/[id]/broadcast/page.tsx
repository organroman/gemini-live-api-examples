"use client";

import { useEffect, useState, use } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";

import BroadcastControls from "@/components/BroadcastControls";
import ErrorScreen from "@/components/ErrorScreen";

export default function BroadcastPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: sessionId } = use(params);
  const [token, setToken] = useState("");
  const [livekitUrl, setLivekitUrl] = useState("");
  const [sessionName, setSessionName] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const sessionRes = await fetch(`/api/sessions/${sessionId}`);
        const session = await sessionRes.json();
        if (session.error) throw new Error(session.error as string);
        setSessionName(session.sessionName);

        const res = await fetch(
          `/api/token?room=${sessionId}&identity=${session.organizerIdentity}&name=${encodeURIComponent(session.organizerName)}&role=organizer`,
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error as string);
        setToken(data.token);
        setLivekitUrl(data.serverUrl);
      } catch (err) {
        setError((err as Error).message);
      }
    }
    fetchToken();
  }, [sessionId]);

  if (error) {
    return <ErrorScreen error={error} />;
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
    <div className="page">
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

        <BroadcastControls sessionId={sessionId} sessionName={sessionName} />
      </LiveKitRoom>
    </div>
  );
}
