"use client";

import { useEffect, useRef, useState } from "react";
import { HandIcon } from "lucide-react";
import type { QaStatus } from "@/lib/types";

interface QaPanelProps {
  qaStatus: QaStatus;
  onApprove: (attendeeIdentity: string) => void;
  onEndActive: () => void;
  nameForIdentity: (identity: string) => string;
}

export default function QaPanel({
  qaStatus,
  onApprove,
  onEndActive,
  nameForIdentity,
}: QaPanelProps) {
  const [showQaPanel, setShowQaPanel] = useState(false);
  const qaPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showQaPanel) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        qaPanelRef.current &&
        !qaPanelRef.current.contains(e.target as Node)
      ) {
        setShowQaPanel(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowQaPanel(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showQaPanel]);

  return (
    <div style={{ position: "relative" }} ref={qaPanelRef}>
      <button
        className="btn btn-outline"
        onClick={() => setShowQaPanel((v) => !v)}
        style={{
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: "13px",
          borderColor: qaStatus.activeSpeakerIdentity
            ? "var(--success)"
            : undefined,
          color: qaStatus.activeSpeakerIdentity ? "var(--success)" : undefined,
        }}
      >
        <HandIcon width={14} height={14} />
        Q&A
        {qaStatus.pendingSpeakerIdentities.length > 0 && (
          <span className="badge-count">
            {qaStatus.pendingSpeakerIdentities.length}
          </span>
        )}
      </button>

      {showQaPanel && (
        <div className="popover-panel enter">
          <span
            className="label"
            style={{ marginBottom: 14, display: "block" }}
          >
            Listener Q&A
          </span>

          {qaStatus.activeSpeakerIdentity && (
            <div className="lang-row">
              <div className="lang-row-left">
                <span
                  className="status-dot pulse"
                  style={{ color: "var(--success)" }}
                />
                <span className="lang-name">
                  {nameForIdentity(qaStatus.activeSpeakerIdentity)}
                </span>
              </div>
              <button
                className="btn btn-outline"
                onClick={onEndActive}
                style={{ padding: "6px 12px", fontSize: 12 }}
              >
                End
              </button>
            </div>
          )}

          {qaStatus.pendingSpeakerIdentities.length === 0 &&
          !qaStatus.activeSpeakerIdentity ? (
            <p className="body-sm italic">
              No questions yet — requests will appear here
            </p>
          ) : (
            qaStatus.pendingSpeakerIdentities.map((identity) => (
              <div key={identity} className="lang-row">
                <div className="lang-row-left">
                  <span className="lang-name">{nameForIdentity(identity)}</span>
                </div>
                <button
                  className="btn btn-dark"
                  onClick={() => onApprove(identity)}
                  style={{ padding: "6px 14px", fontSize: 12 }}
                >
                  Approve
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
