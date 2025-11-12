/* eslint-disable react-hooks/exhaustive-deps */
import { ThumbsDown, ThumbsUp } from "lucide-react";
import millify from "millify";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContext";

export default function ChannelAndLike({ VideoData }) {
  //🔹 FirebaseContext
  const { auth, likes, sub } = useContext(FirebaseContext);

  const { isLogged } = auth;
  const { userAllLikedVdID, AddLike, DeleteLike } = likes;
  const { subscriptionsCID, Subscribe, UnSubscribe } = sub;

  //🔹 state
  const [isLiked, setisLiked] = useState(false);
  const [isSubscribe, setisSubscribe] = useState(false);

  //🔹 Update this when chnage userAllLikedVdID
  useEffect(() => {
    let isLikes = userAllLikedVdID.find((uv) => uv === VideoData?.id);
    setisLiked(isLikes);
  }, [userAllLikedVdID]);

  //🔹 Update this when chnage subscriptionsCID
  useEffect(() => {
    let isLikes = subscriptionsCID.find(
      (uv) => uv === VideoData?.snippet?.channelId
    );
    setisSubscribe(isLikes);
  }, [subscriptionsCID]);

  // 1️⃣ Handle Like
  async function handleLike() {
    let vid = VideoData?.id;
    if (!vid) return;

    if (isLiked) {
      setisLiked(false);
      await DeleteLike({ vdId: vid });
    } else {
      setisLiked(true);
      await AddLike({ vdId: vid, Edata: VideoData });
    }
  }

  // 2️⃣ Handle Subscribe
  async function handleSubscribe() {
    let cid = VideoData?.snippet?.channelId;
    if (!cid) return;

    if (isSubscribe) {
      setisSubscribe(false);
      await UnSubscribe({ cdId: cid });
    } else {
      setisSubscribe(true);
      await Subscribe({
        cdId: cid,
        ChannelData: VideoData?.channel,
      });
    }
  }

  return (
    <aside className="flex flex-col gap-3 py-3 *:select-none">
      {/* title */}
      <h1 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-semibold text-text/80 text-start sm:text-center lg:text-start line-clamp-1">
        {VideoData?.snippet?.title}
      </h1>

      {/* Channel data && Like comment data */}
      <section className="w-full flex flex-col sm:flex-row gap-3 justify-between">
        {/* 1️⃣ Channel Data */}
        <div className="flex items-end gap-5 w-[50%]">
          <Link
            to={`/channel/${VideoData?.channel?.snippet?.customUrl}`}
            className="flex items-center gap-2"
          >
            {/* 🔹 Channel Avatar */}
            <div className="w-8 md:min-w-10 max-w-10 h-8 md:h-10 md:max-h-10">
              <img
                className="w-full h-full rounded-full object-cover border border-border"
                src={VideoData?.channel?.snippet?.thumbnails?.high?.url}
                alt="Profile"
                loading="lazy"
              />
            </div>

            {/* 🔹 Title and Meta */}
            <div className="flex flex-col justify-start overflow-hidden">
              <p className="text-sm md:text-[1rem] line-clamp-1 text-text/90 font-semibold">
                {VideoData?.channel?.snippet?.title || "Error"}
              </p>
              <span className="text-[0.6rem] md:text-xs truncate text-subtext font-medium">
                {millify(
                  Number(VideoData?.channel?.statistics?.subscriberCount || 0) +
                    (isSubscribe ? 1 : 0)
                )}{" "}
                subscribers
              </span>
            </div>
          </Link>

          {/*🔹 Subscribe */}
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
        </div>

        {/* 2️⃣ Like and DisLike data */}
        <div className="w-full sm:w-auto flex items-center gap-5 mt-4">
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
                {(VideoData?.statistics?.likeCount || 0) + (isLiked ? 1 : 0) >=
                1
                  ? millify(
                      Number(VideoData?.statistics?.likeCount || 0) +
                        (isLiked ? 1 : 0)
                    )
                  : "Like"}
              </span>
            </button>

            {/* DisLike */}
            <button className="px-3 py-1 hover:bg-bg rounded-e-full flex justify-center items-center">
              <ThumbsDown size={18} />
            </button>
          </article>
        </div>
      </section>
    </aside>
  );
}
