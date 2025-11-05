import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react";
import millify from "millify";
import moment from "moment";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CommoentPart({ comment, replies }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <aside className="border-b border-border overflow-auto scroll-none">
      {/* comment */}
      <div className="flex justify-start gap-5 px-3 py-5">
        <Link to={`/${comment?.authorDisplayName}`}>
          <img
            className="rounded-full min-w-[45px] min-h-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px]"
            src={comment?.authorProfileImageUrl}
            alt={comment?.textDisplay}
          />
        </Link>
        <section>
          <Link
            to={`/${comment?.authorDisplayName}`}
            className="flex items-center gap-1"
          >
            <p className="text-[0.83rem] text-text/90 font-medium">
              {comment?.authorDisplayName}
            </p>
            <span aria-hidden="true" className="text-neutral-500">
              •
            </span>
            <time className="text-xs text-subtext">
              {moment(comment?.publishedAt).fromNow().replace("a ", "1 ")}
            </time>
          </Link>
          <article>
            <p className="text-text/80 text-[0.9rem] text-wrap">
              {comment?.textOriginal}
            </p>
          </article>
          <article className="flex justify-start items-center mt-3">
            <article className="flex bg-surface text-text/80 rounded-full text-[0.85rem] font-medium border border-border transition">
              {/* Like */}
              <button className="flex items-center gap-1.5 px-2 py-0.5 border-r-2 border-border hover:bg-bg rounded-s-full">
                <span>
                  <ThumbsUp size={15} />
                </span>
                <span>
                  {Number(comment?.likeCount) === 0
                    ? "Like"
                    : millify(Number(comment?.likeCount))}
                </span>
              </button>

              {/* DisLike */}
              <button className="px-2 py-0.5 hover:bg-bg rounded-e-full flex justify-center items-center">
                <ThumbsDown size={15} />
              </button>
            </article>
            <button
              onClick={() => setShowReplies(!showReplies)}
              disabled={replies?.length === 0}
              className="px-2 ml-5 py-0.5 text-sm hover:bg-accent/20 transition-all duration-300 disabled:opacity-60 rounded-full flex justify-center items-center"
            >
              <ChevronDown color={"#00adb5"} size={18} />
              <span className="ml-1 text-[#00adb5]">
                {replies?.length} replies
              </span>
            </button>
          </article>
        </section>
      </div>
      {/* replies */}
      <AnimatePresence>
        {replies?.length > 0 &&
          showReplies &&
          replies.map((rp) => (
            <motion.article
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-bg-pecondary pl-28"
            >
              <article className="flex justify-start gap-5 px-3 py-5">
                <Link to={`/${rp?.snippet?.authorDisplayName}`}>
                  <img
                    className="rounded-full min-w-[45px] min-h-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px]"
                    src={rp?.snippet?.authorProfileImageUrl}
                    alt={rp?.snippet?.textDisplay}
                  />
                </Link>
                <section>
                  <Link
                    to={`/${rp?.snippet?.authorDisplayName}`}
                    className="flex items-center gap-1"
                  >
                    <p className="text-[0.83rem] text-text/90 font-medium">
                      {rp?.snippet?.authorDisplayName}
                    </p>
                    <span aria-hidden="true" className="text-neutral-500">
                      •
                    </span>
                    <time className="text-xs text-subtext">
                      {moment(rp?.snippet?.publishedAt)
                        .fromNow()
                        .replace("a ", "1 ")}
                    </time>
                  </Link>
                  <article>
                    <p className="text-text/80 text-[0.9rem] text-wrap">
                      {rp?.snippet?.textOriginal}
                    </p>
                  </article>
                  <article className="flex justify-start items-center mt-3">
                    <article className="flex bg-surface text-text/80 rounded-full text-[0.85rem] font-medium border border-border transition">
                      {/* Like */}
                      <button className="flex items-center gap-1.5 px-2 py-0.5 border-r-2 border-border hover:bg-bg rounded-s-full">
                        <span>
                          <ThumbsUp size={15} />
                        </span>
                        <span>
                          {rp?.snippet?.likeCount === 0
                            ? "Like"
                            : millify(rp?.snippet?.likeCount)}
                        </span>
                      </button>

                      {/* DisLike */}
                      <button className="px-2 py-0.5 hover:bg-bg rounded-e-full flex justify-center items-center">
                        <ThumbsDown size={15} />
                      </button>
                    </article>
                  </article>
                </section>
              </article>
            </motion.article>
          ))}
      </AnimatePresence>
    </aside>
  );
}
