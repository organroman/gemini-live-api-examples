"use client";

import { useCallback } from "react";
import type { QaStatus } from "@/lib/types";

interface QaRequestControlProps {
  sessionId: string;
  attendeeIdentity: string;
  qaStatus: QaStatus;
  setQaStatus: (status: QaStatus) => void;
}

export default function QaRequestControl({
  sessionId,
  attendeeIdentity,
  qaStatus,
  setQaStatus,
}: QaRequestControlProps) {
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
  }, [sessionId, attendeeIdentity, setQaStatus]);

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
  }, [sessionId, attendeeIdentity, setQaStatus]);

  if (qaStatus.approvedForCurrentUser) {
    return (
      <p className="body-sm">
        You are live. Speak in your language, organizer hears translated
        audio.
      </p>
    );
  }

  if (qaStatus.requestedByCurrentUser) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <p className="body-sm">Request pending approval from organizer.</p>
        <button className="btn btn-danger btn-sm" onClick={cancelQuestion}>
          Cancel request
        </button>
      </div>
    );
  }

  return (
    <button className="btn btn-dark btn-sm" onClick={requestQuestion}>
      Request to speak
    </button>
  );
}
