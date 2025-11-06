/* eslint-disable react-hooks/exhaustive-deps */
import { ThumbsDown, ThumbsUp } from "lucide-react";
import millify from "millify";
import React, { useContext, useEffect, useState } from "react";
import PlayVideoPart from "../PlayVideoPart";
import CommoentInterFace from "../CommoentInterFace";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../../../contexts/Firebase/FirebaseContext";

export default function FirstPartOutPart({ prop, VideoWidth }) {
  let {
    VideoID,
    VideoData,
    ChannelData,
    CommentData,
    moreCommentThreads,
    CommentDataLoading,
    IsVdDetails,
    videoDetails,
    likeObject,
  } = prop;

  //🔹 FirebaseContext
  const {
    // Like
    AddLike,
    DeleteLike,
    userAllLikedVdID,

    // Subscribe
    Subscribe,
    UnSubscribe,
    subscriptionsCID,

    // isLogged
    isLogged,
  } = useContext(FirebaseContext);

  //🔹 context
  const [isLiked, setisLiked] = useState(false);
  const [isSubscribe, setisSubscribe] = useState(false);

  //🔹 Update this when chnage userAllLikedVdID
  useEffect(() => {
    let isLikes = userAllLikedVdID.find((uv) => uv === VideoID);
    setisLiked(isLikes);
  }, [userAllLikedVdID]);

  //🔹 Update this when chnage subscriptionsCID
  useEffect(() => {
    let isLikes = subscriptionsCID.find((uv) => uv === ChannelData?.id);
    setisSubscribe(isLikes);
  }, [subscriptionsCID]);

  // handleLike
  async function handleLike() {
    if (!VideoID) return;

    if (isLiked) {
      setisLiked(false);
      await DeleteLike({ vdId: VideoID });
    } else {
      if (!likeObject) return;
      setisLiked(true);
      await AddLike({ vdId: VideoID, Edata: likeObject });
    }
  }

  // handleSubscribe
  async function handleSubscribe() {
    if (!ChannelData?.id) return;

    if (isSubscribe) {
      setisSubscribe(false);
      await UnSubscribe({ cdId: ChannelData?.id });
    } else {
      setisSubscribe(true);
      await Subscribe({ cdId: ChannelData?.id, ChannelData: ChannelData });
    }
  }

  return (
    <>
      {/* Top: Video Part */}
      <article
        style={{
          minWidth: `${VideoWidth}px`,
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
          <article className="flex items-end gap-5 w-[50%]">
            <Link to={ChannelData?.snippet?.customUrl}>
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
                  <p className="text-sm md:text-[1rem] line-clamp-1 text-text/90 font-semibold">
                    {ChannelData?.snippet?.title || "Error"}
                  </p>
                  <span className="text-[0.6rem] md:text-xs truncate text-subtext font-medium">
                    {millify(
                      Number(ChannelData?.statistics?.subscriberCount || 0) +
                        (isSubscribe ? 1 : 0)
                    )}{" "}
                    subscribers
                  </span>
                </div>
              </article>
            </Link>
            <article
              onClick={handleSubscribe}
              className="flex justify-center items-center"
            >
              {isSubscribe ? (
                <button
                  disabled={!isLogged}
                  className="bg-surface text-text/80 px-3 py-2 leading-none rounded-full text-[0.8rem] md:text-[0.85rem] font-medium border border-border transition disabled:pointer-events-none disabled:opacity-85 disabled:cursor-none"
                >
                  Subscribed
                </button>
              ) : (
                <button
                  disabled={!isLogged}
                  className="bg-text text-bg/80 px-3 py-2 leading-none rounded-full text-[0.8rem] md:text-[0.85rem] font-medium border border-border transition disabled:pointer-events-none disabled:opacity-85 disabled:cursor-none"
                >
                  Subscribe
                </button>
              )}
            </article>
          </article>

          {/* Like data */}
          <article className="w-full sm:w-auto flex items-center gap-5 mt-4">
            <article className="flex justify-center items-center bg-surface text-text/80 rounded-full text-[0.85rem] font-medium border border-border transition">
              {/* Like */}
              <button
                disabled={!isLogged}
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-3 py-1 border-r-2 border-border rounded-s-full ${
                  isLiked ? "bg-bg/80" : "hover:bg-bg"
                }  disabled:pointer-events-none disabled:opacity-85 disabled:cursor-none`}
              >
                <span>
                  <ThumbsUp
                    size={19}
                    {...(isLiked ? { fill: "#eee", color: "#222222" } : {})}
                  />
                </span>
                <span>
                  {(VideoData?.statistics?.likeCount || 0 )+ (isLiked ? 1 : 0) >= 1
                    ? millify(Number(VideoData?.statistics?.likeCount || 0) + (isLiked ? 1 : 0))
                    : "Like"}
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
  );
}
