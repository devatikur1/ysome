import React, { useEffect, useRef, useState } from "react";
import FirstPartLoading from "./part/part/FirstPartLoading";
import FirstPartOutPart from "./part/part/FirstPartOutPart";

export default function FirstPartAndVideoPart({
  VideoID,
  VideoData,
  ChannelData,
  CommentData,
  moreCommentThreads,
  CommentDataLoading,
  loading,
  IsVdDetails,
  videoDetails,
}) {
  const videoPartRef = useRef(null);
  const [VideoPart, setVideoPart] = useState();

  useEffect(() => {
    console.log(videoPartRef);

    setVideoPart(videoPartRef.current.offsetWidth);
  }, [videoPartRef]);

  console.log(ChannelData);

  return (
    <section
      ref={videoPartRef}
      className="relative w-[100%] md:w-[69%] md:h-full flex flex-col gap-6"
    >
      {loading ? (
        <FirstPartLoading />
      ) : (
        <FirstPartOutPart
          VideoID={VideoID}
          VideoData={VideoData}
          ChannelData={ChannelData}
          CommentData={CommentData}
          moreCommentThreads={moreCommentThreads}
          CommentDataLoading={CommentDataLoading}
          IsVdDetails={IsVdDetails}
          videoDetails={videoDetails}
          VideoPart={VideoPart}
        />
      )}
    </section>
  );
}
