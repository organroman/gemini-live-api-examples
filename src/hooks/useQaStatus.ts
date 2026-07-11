"use client";

import { useCallback, useEffect, useState } from "react";
import type { Room } from "livekit-client";
import { RoomEvent } from "livekit-client";
import { useRoomDataChannel } from "./useRoomDataChannel";
import type { QaStatus } from "@/lib/types";

function emptyQaStatus(sessionId: string): QaStatus {
  return {
    sessionId,
    pendingSpeakerIdentities: [],
    activeSpeakerIdentity: null,
    activeTranslatorIdentity: null,
    organizerTargetLanguage: "uk",
  };
}

/**
 * Fetches Q&A status once on mount, resyncs after a room reconnect (in case
 * a data-channel push was missed while disconnected), and applies live
 * pushes from TranslationSessionManager.broadcastQaStatus after that.
 *
 * Pass `identity` for an attendee-scoped view — the server includes
 * `requestedByCurrentUser`/`approvedForCurrentUser` on the initial fetch,
 * and this hook derives the same flags from live data-channel pushes
 * (which carry the raw, unscoped status shared by every recipient).
 */
export function useQaStatus(
  sessionId: string,
  room: Room | undefined,
  identity?: string,
) {
  const [qaStatus, setQaStatus] = useState<QaStatus>(() =>
    emptyQaStatus(sessionId),
  );

  const fetchQaStatus = useCallback(async () => {
    try {
      const url = identity
        ? `/api/questions?sessionId=${sessionId}&identity=${identity}`
        : `/api/questions?sessionId=${sessionId}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) return;
      setQaStatus(data);
    } catch (err) {
      console.error("Failed to fetch Q&A status:", err);
    }
  }, [sessionId, identity]);

  useEffect(() => {
    const bootstrap = setTimeout(() => {
      void fetchQaStatus();
    }, 0);
    return () => clearTimeout(bootstrap);
  }, [fetchQaStatus]);

  useEffect(() => {
    if (!room) return;

    const handleReconnected = () => void fetchQaStatus();
    room.on(RoomEvent.Reconnected, handleReconnected);
    return () => {
      room.off(RoomEvent.Reconnected, handleReconnected);
    };
  }, [room, fetchQaStatus]);

  useRoomDataChannel<QaStatus>(room, "qa-status", (data) => {
    if (identity) {
      setQaStatus({
        ...data,
        requestedByCurrentUser: data.pendingSpeakerIdentities.includes(identity),
        approvedForCurrentUser: data.activeSpeakerIdentity === identity,
      });
    } else {
      setQaStatus(data);
    }
  });

  return { qaStatus, setQaStatus };
}
