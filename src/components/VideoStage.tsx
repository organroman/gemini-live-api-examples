import {
  ParticipantTile,
  TrackLoop,
  useLocalParticipant,
  type TrackReferenceOrPlaceholder,
} from "@livekit/components-react";
import { UserIcon } from "lucide-react";

interface VideoStageProps {
  screenTrack: TrackReferenceOrPlaceholder | undefined;
  screenPlaceholder: string;
  cameraTracks: TrackReferenceOrPlaceholder[];
  screenTileClassName?: string;
}

export default function VideoStage({
  screenTrack,
  screenPlaceholder,
  cameraTracks,
  screenTileClassName,
}: VideoStageProps) {
  // Own tile always shows, camera on or off — like Zoom/Meet, video when
  // available, name label over a placeholder otherwise.
  const { localParticipant } = useLocalParticipant();

  return (
    <>
      {screenTrack ? (
        <div className="video-stage-main" style={{ marginBottom: 12 }}>
          <TrackLoop tracks={[screenTrack]}>
            <ParticipantTile className={screenTileClassName} />
          </TrackLoop>
        </div>
      ) : (
        <div className="video-stage-placeholder" style={{ marginBottom: 12 }}>
          <p className="body-sm">{screenPlaceholder}</p>
        </div>
      )}
      {/* TODO: video-tile-empty render for each participant with no camera track, with name label over placeholder. (Or maybe just show the name label over the video stage if no one has a camera track.) */}
      <div className="video-strip">
        {cameraTracks.length === 0 ? (
          <div className="video-tile-empty">
            <UserIcon
              width={64}
              height={64}
              style={{ color: "var(--fg-tertiary)" }}
            />
            <span className="video-tile-empty-label">
              {localParticipant.name || "You"}
            </span>
          </div>
        ) : (
          <TrackLoop tracks={cameraTracks}>
            <ParticipantTile style={{ color: "white" }} />
          </TrackLoop>
        )}
      </div>
    </>
  );
}
