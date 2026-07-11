import type { TrackReferenceOrPlaceholder } from "@livekit/components-react";

/**
 * Whether the local participant has a live (published + unmuted) track in
 * the given list. Presence alone isn't enough — LiveKit's default mic/camera
 * toggle mutes the existing publication rather than unpublishing it, so a
 * muted track still shows up in `useTracks()`.
 */
export function isLocalTrackEnabled(
  tracks: TrackReferenceOrPlaceholder[],
): boolean {
  return tracks.some((t) => t.participant.isLocal && !t.publication?.isMuted);
}
