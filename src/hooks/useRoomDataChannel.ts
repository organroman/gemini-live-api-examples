"use client";

import { useEffect, useRef } from "react";
import type { Room } from "livekit-client";
import { RoomEvent } from "livekit-client";

/**
 * Subscribes to LiveKit data-channel messages on a given topic, JSON-decodes
 * the payload, and hands it to `onMessage`. `onMessage` doesn't need to be
 * memoized — it's read via a ref so the subscription isn't torn down and
 * re-attached on every render.
 */
export function useRoomDataChannel<T = unknown>(
  room: Room | undefined,
  topic: string,
  onMessage: (data: T) => void,
) {
  const onMessageRef = useRef(onMessage);
  useEffect(() => {
    onMessageRef.current = onMessage;
  });

  useEffect(() => {
    if (!room) return;

    const handleData = (
      payload: Uint8Array,
      participant: unknown,
      kind: unknown,
      receivedTopic: string | undefined,
    ) => {
      if (receivedTopic !== topic) return;

      try {
        const data = JSON.parse(new TextDecoder().decode(payload));
        onMessageRef.current(data);
      } catch {
        // Not a JSON message on this topic
      }
    };

    room.on(RoomEvent.DataReceived, handleData);
    return () => {
      room.off(RoomEvent.DataReceived, handleData);
    };
  }, [room, topic]);
}
