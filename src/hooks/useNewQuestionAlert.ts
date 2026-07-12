"use client";

import { useEffect, useRef } from "react";
import { playChime } from "@/lib/chime";

/**
 * Fires a chime + (if permitted) a native browser notification whenever a
 * *new* identity shows up in pendingSpeakerIdentities — not on every
 * re-render, and not for identities that were already pending. Meant for
 * the organizer, who is typically screen-sharing/presenting elsewhere and
 * won't see the Q&A popover update.
 */
export function useNewQuestionAlert(
  pendingSpeakerIdentities: string[],
  alertsEnabled: boolean,
  nameForIdentity: (identity: string) => string,
) {
  const prevPendingRef = useRef<string[]>([]);

  useEffect(() => {
    const prev = prevPendingRef.current;
    const newRequests = pendingSpeakerIdentities.filter(
      (id) => !prev.includes(id),
    );
    prevPendingRef.current = pendingSpeakerIdentities;

    if (newRequests.length === 0 || !alertsEnabled) return;

    playChime();

    if (
      typeof Notification !== "undefined" &&
      Notification.permission === "granted"
    ) {
      const body =
        newRequests.length === 1
          ? `${nameForIdentity(newRequests[0])} wants to speak`
          : `${newRequests.length} listeners want to speak`;
      const notification = new Notification("New question", { body });
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      // If onshow never fires, the browser accepted the call but the OS
      // suppressed it (system notification settings / Focus mode) — the
      // page has no way to detect that other than this never firing.
      notification.onshow = () => {
        console.log("[useNewQuestionAlert] notification shown");
      };
      notification.onerror = (e) => {
        console.error("[useNewQuestionAlert] notification failed to show", e);
      };
    }
  }, [pendingSpeakerIdentities, alertsEnabled, nameForIdentity]);
}
