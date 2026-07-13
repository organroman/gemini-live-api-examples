"use client";

import { useEffect, useRef, useState } from "react";
import type { Room } from "livekit-client";
import { useRoomDataChannel } from "@/hooks/useRoomDataChannel";

interface TranscriptEntry {
  id: string;
  text: string;
  language: string;
  final: boolean;
  timestamp: number;
}

interface TranscriptionMessage {
  type: string;
  segmentId: string;
  text: string;
  language: string;
  final: boolean;
  timestamp: number;
}

export default function TranscriptionPanel({
  room,
  currentLanguage,
}: {
  room: Room | undefined;
  currentLanguage: string;
}) {
  const [transcripts, setTranscripts] = useState<TranscriptEntry[]>([]);
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);
  const currentLanguageRef = useRef(currentLanguage);

  useEffect(() => {
    currentLanguageRef.current = currentLanguage;
  }, [currentLanguage]);

  // Reset whenever the selected language changes — old transcripts are for
  // a different language track and would otherwise linger stale. Done
  // during render (React's sanctioned pattern for "adjusting state when a
  // prop changes") rather than in an effect, to avoid an extra render pass.
  const [resetForLanguage, setResetForLanguage] = useState(currentLanguage);
  if (currentLanguage !== resetForLanguage) {
    setResetForLanguage(currentLanguage);
    setTranscripts([]);
  }

  useRoomDataChannel<TranscriptionMessage>(room, "transcription", (data) => {
    if (data.type !== "transcription") return;
    if (data.language !== currentLanguageRef.current) return;

    setTranscripts((prev) => {
      const existing = prev.findIndex((t) => t.id === data.segmentId);
      const entry: TranscriptEntry = {
        id: data.segmentId,
        text: data.text,
        language: data.language,
        final: data.final,
        timestamp: data.timestamp,
      };

      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = {
          ...updated[existing],
          text: updated[existing].text + data.text,
          final: data.final,
        };
        return updated;
      }

      return [...prev, entry].slice(-50);
    });
  });

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcripts]);

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <span className="label" style={{ display: "block", marginBottom: 16 }}>
        Transcription
      </span>

      <div style={{ flex: 1, overflowY: "auto", paddingRight: 8 }}>
        {transcripts.length === 0 ? (
          <p className="body-sm italic">
            {currentLanguage === "original"
              ? "Select a language to see transcription"
              : "Waiting for translated speech…"}
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {transcripts.map((t, i) => (
              <p
                key={`${t.id}-${i}`}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: t.final ? "var(--fg)" : "var(--fg-tertiary)",
                  transition: "color 0.3s ease",
                }}
              >
                {t.text}
              </p>
            ))}
            <div ref={transcriptEndRef} />
          </div>
        )}
      </div>
    </div>
  );
}
