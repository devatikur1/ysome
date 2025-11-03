import React from "react";
import PlayerVideo from "./Video/PlayerVideo";
import YtVideoPlayer from "./Video/YtVideoPlayer";

export default function PlayVideoPart({ videoDetails, IsVdDetails, title, VideoID }) {
  return (
    <>
      {IsVdDetails ? (
        <PlayerVideo videoDetails={videoDetails} />
      ) : (
        <YtVideoPlayer VideoID={VideoID} title={title} />
      )}
    </>
  );
}
