import React, { useEffect, useRef, useState } from "react";
import PlayVideoPart from "./part/PlayVideoPart";
import { Link } from "react-router-dom";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import CommoentInterFace from "./part/CommoentInterFace";
import millify from "millify";

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
        <>
          <div className="space-y-5 p-5">
            {/* Video Player */}
            <div className="w-full h-80 bg-gray-300 relative overflow-hidden rounded-md">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer"></div>
            </div>

            {/* Title */}
            <div className="w-3/4 h-6 bg-gray-300 relative overflow-hidden rounded animate-shimmer"></div>

            {/* Views & Date */}
            <div className="flex gap-3">
              <div className="w-20 h-3 bg-gray-300 relative overflow-hidden rounded animate-shimmer"></div>
              <div className="w-24 h-3 bg-gray-300 relative overflow-hidden rounded animate-shimmer"></div>
            </div>

            {/* Like / Dislike buttons */}
            <div className="flex gap-3 mt-3">
              <div className="w-20 h-8 bg-gray-300 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer"></div>
              </div>
              <div className="w-20 h-8 bg-gray-300 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Channel Info */}
            <div className="flex items-center gap-3 mt-5">
              <div className="w-12 h-12 rounded-full bg-gray-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer"></div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="w-1/2 h-4 bg-gray-300 relative overflow-hidden rounded animate-shimmer"></div>
                <div className="w-1/4 h-3 bg-gray-300 relative overflow-hidden rounded animate-shimmer"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Top: Video Part */}
          <article
            style={{
              minWidth: `${VideoPart}px`,
            }}
            className="min-h-[200px] sm:min-h-[305px] md:min-h-[300px] lg:min-h-[355px] xl:min-h-[700px]"
          >
            <PlayVideoPart
              VideoID={VideoID}
              title={VideoData?.snippet?.title}
              IsVdDetails={IsVdDetails}
              videoDetails={videoDetails}
            />
          </article>
          {/* Middele : title and  Channel data && Like comment data */}
          <article className="flex flex-col gap-3 *:select-none">
            {/* title */}
            <h1 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-semibold text-text/80 text-start sm:text-center lg:text-start line-clamp-1">
              {VideoData?.snippet?.title}
            </h1>

            {/* Channel data && Like comment data */}
            <section className="w-full flex flex-col sm:flex-row gap-3 justify-between">
              {/* Channel Data */}
              <article className="flex items-end gap-5">
                <Link to="/@SureTadpoleYT">
                  <article className="flex items-center gap-2">
                    {/* Channel Avatar */}
                    <div className="w-8 md:min-w-10 max-w-10 h-8 md:h-10 md:max-h-10">
                      <img
                        className="w-full h-full rounded-full object-cover border border-border"
                        src={ChannelData?.snippet?.thumbnails?.high?.url}
                        alt="Profile"
                        loading="lazy"
                      />
                    </div>

                    {/* Title and Meta */}
                    <div className="flex flex-col justify-start overflow-hidden">
                      <p className="text-sm md:text-[1.03rem] line-clamp-1 text-text/90 font-semibold">
                        {ChannelData?.snippet?.title}
                      </p>
                      <span className="text-[0.68rem] md:text-xs truncate text-subtext font-medium">
                        {millify(ChannelData?.statistics?.subscriberCount)}{" "}
                        subscribers
                      </span>
                    </div>
                  </article>
                </Link>
                <article className="flex justify-center items-center">
                  <button className="bg-surface text-text/80 px-3 py-2 leading-none rounded-full text-[0.8rem] md:text-[0.85rem] font-medium border border-border transition">
                    Subscribed
                  </button>
                </article>
              </article>

              {/* Like data */}
              <article className="w-full sm:w-auto flex items-center gap-5 mt-4">
                <article className="flex justify-center items-center bg-surface text-text/80 rounded-full text-[0.85rem] font-medium border border-border transition">
                  {/* Like */}
                  <button className="flex items-center gap-1.5 px-3 py-1 border-r-2 border-border hover:bg-bg rounded-s-full">
                    <span>
                      <ThumbsUp size={19} />
                    </span>
                    <span>
                      {VideoData?.statistics?.likeCount === 0
                        ? "Like"
                        : millify(VideoData?.statistics?.likeCount)}
                    </span>
                  </button>

                  {/* DisLike */}
                  <button className="px-3 py-1 hover:bg-bg rounded-e-full flex justify-center items-center">
                    <ThumbsDown size={18} />
                  </button>
                </article>
              </article>
            </section>
          </article>

          {/* End : Description and Commoent */}
          <article className="w-full">
            <CommoentInterFace
              VideoID={VideoID}
              CommentData={CommentData}
              commentCount={VideoData?.statistics?.commentCount}
              moreCommentThreads={moreCommentThreads}
              CommentDataLoading={CommentDataLoading}
            />
          </article>
        </>
      )}
    </section>
  );
}
