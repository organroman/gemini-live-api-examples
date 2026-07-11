"use client";

import { useCallback, useState } from "react";
import { CheckIcon, LinkIcon } from "lucide-react";

export default function InviteButton({ joinUrl }: { joinUrl: string }) {
  const [copied, setCopied] = useState(false);

  const copyInviteLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(joinUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy invite link:", err);
    }
  }, [joinUrl]);

  return (
    <button
      className="btn btn-outline"
      onClick={copyInviteLink}
      style={{
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "13px",
      }}
    >
      {copied ? (
        <CheckIcon width={14} height={14} />
      ) : (
        <LinkIcon width={14} height={14} />
      )}
      {copied ? "Copied" : "Invite"}
    </button>
  );
}
