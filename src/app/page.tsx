"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/TextInput";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [organizerName, setOrganizerName] = useState("");
  const [sessionName, setSessionName] = useState("");

  async function createSession() {
    setLoading(true);
    try {
      const res = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizerName, sessionName }),
      });
      const data = await res.json();
      router.push(`/session/${data.sessionId}/broadcast`);
    } catch (err) {
      console.error("Failed to create session:", err);
      setLoading(false);
    }
  }

  return (
    <div className="page page-center">
      <div className="container" style={{ textAlign: "center" }}>
        {/* Title */}
        <Image
          src="/dan-logo-color.svg"
          alt="Dan Logo"
          width={300}
          height={80}
          loading="eager"
        />
        <h1
          className="display display-lg enter "
          style={{ marginBottom: 24, fontWeight: 700 }}
        >
          Classroom
        </h1>

        {/* Subtitle */}
        <p
          className="body enter-d1"
          style={{ maxWidth: 420, margin: "0 auto 48px" }}
        >
          Broadcast your voice, screen and video. Attendees choose their
          language. Translation voice spins up on demand.
        </p>

        {/* Session details */}
        <div
          className="enter-d1"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            maxWidth: 360,
            margin: "0 auto 28px",
            textAlign: "left",
          }}
        >
          <TextInput
            id="session-name"
            label="Session name"
            placeholder="e.g. Intro to React"
            value={sessionName}
            onChange={setSessionName}
          />
          <TextInput
            id="organizer-name"
            label="Your name"
            placeholder="e.g. Roman"
            value={organizerName}
            onChange={setOrganizerName}
          />
        </div>

        {/* CTA */}
        <div className="enter-d2">
          <button
            className="btn btn-dark"
            onClick={createSession}
            disabled={loading}
            id="create-session-btn"
          >
            {loading ? (
              <>
                <span className="spinner" /> Creating…
              </>
            ) : (
              "Create session"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
