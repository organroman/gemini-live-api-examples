"use client";

import { useEffect, useState, useCallback, use } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";

import TextInput from "@/components/TextInput";
import Image from "next/image";
import ErrorScreen from "@/components/ErrorScreen";
import AttendeeView from "./components/AttendeeView";

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
  const [joining, setJoining] = useState(false);
  const [attendeeIdentity, setAttendeeIdentity] = useState("");
  const [attendeeName, setAttendeeName] = useState("");
  const [sessionName, setSessionName] = useState<string | undefined>();

  // Fetch session details (for display only) as soon as the page loads —
  // separate from the token request, which needs the attendee's name first.
  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch(`/api/sessions/${sessionId}`);
        const data = await res.json();
        if (data.error) return;
        setSessionName(data.sessionName);
      } catch (err) {
        console.error("Failed to fetch session:", err);
      }
    }
    fetchSession();
  }, [sessionId]);

  const joinSession = useCallback(async () => {
    setJoining(true);
    try {
      const identity = `attendee-${Math.random().toString(36).slice(2, 8)}`;
      const name = attendeeName.trim() || identity;
      const res = await fetch(
        `/api/token?room=${sessionId}&identity=${identity}&name=${encodeURIComponent(name)}&role=attendee`,
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAttendeeIdentity(identity);
      setToken(data.token);
      setLivekitUrl(data.serverUrl);
      setStarted(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setJoining(false);
    }
  }, [sessionId, attendeeName]);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!started) {
    return (
      <div className="page page-center">
        <div className="container" style={{ textAlign: "center" }}>
          <Image
            src="/dan-logo-color.svg"
            alt="Dan Logo"
            width={300}
            height={80}
            loading="eager"
          />
          <h1
            className="display display-md enter "
            style={{ marginBottom: 24, fontWeight: 700 }}
          >
            {`Classroom · ${sessionName}` || "Ready"}
          </h1>
          <p className="body-sm" style={{ marginBottom: 24 }}>
            Enter your name to join.
          </p>
          <div
            style={{ maxWidth: 320, margin: "0 auto 24px", textAlign: "left" }}
          >
            <TextInput
              id="attendee-name"
              label="Your name"
              placeholder="e.g. Alex"
              value={attendeeName}
              onChange={setAttendeeName}
            />
          </div>
          <button
            className="btn btn-dark"
            onClick={joinSession}
            disabled={joining}
          >
            {joining ? (
              <>
                <span className="spinner" /> Joining…
              </>
            ) : (
              "Join session"
            )}
          </button>
        </div>
      </div>
    );
  }

  if (!token || !livekitUrl || !attendeeIdentity) {
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
          <p className="mono">Joining…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
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
        <AttendeeView
          sessionId={sessionId}
          sessionName={sessionName}
          attendeeIdentity={attendeeIdentity}
        />
      </LiveKitRoom>
    </div>
  );
}
