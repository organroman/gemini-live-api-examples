"use client";

import { useCallback, useEffect, useState } from "react";
import type { Room } from "livekit-client";
import { RoomEvent } from "livekit-client";
import { useRoomDataChannel } from "./useRoomDataChannel";
import type { TranslationInfo } from "@/lib/types";

/**
 * Fetches active translations once on mount, resyncs after a room
 * reconnect, and applies live pushes from
 * TranslationSessionManager.broadcastTranslations after that.
 */
export function useTranslations(sessionId: string, room: Room | undefined) {
  const [translations, setTranslations] = useState<TranslationInfo[]>([]);

  const fetchTranslations = useCallback(async () => {
    try {
      const res = await fetch(`/api/translate/status?sessionId=${sessionId}`);
      const data = await res.json();
      setTranslations(data.translations || []);
    } catch (err) {
      console.error("Failed to fetch translations:", err);
    }
  }, [sessionId]);

  useEffect(() => {
    const bootstrap = setTimeout(() => {
      void fetchTranslations();
    }, 0);
    return () => clearTimeout(bootstrap);
  }, [fetchTranslations]);

  useEffect(() => {
    if (!room) return;

    const handleReconnected = () => void fetchTranslations();
    room.on(RoomEvent.Reconnected, handleReconnected);
    return () => {
      room.off(RoomEvent.Reconnected, handleReconnected);
    };
  }, [room, fetchTranslations]);

  useRoomDataChannel<{ translations: TranslationInfo[] }>(
    room,
    "translations",
    (data) => setTranslations(data.translations || []),
  );

  return translations;
}
