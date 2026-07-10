"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function createSession() {
    setLoading(true);
    try {
      const res = await fetch("/api/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizerName: "host" }),
      });
      const data = await res.json();
      router.push(`/session/${data.sessionId}/broadcast`);
    } catch (err) {
      console.error("Failed to create session:", err);
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="container" style={{ textAlign: "center" }}>
        {/* Title */}
        <Image
          src="/dan-logo-color.svg"
          alt="Dan Logo"
          width={300}
          height={80}
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
