import React from "react";
import CommoentPart from "./part/CommoentPart";
import millify from "millify";

export default function CommentInterface({
  commentCount,
  CommentData,
  moreCommentThreads,
  CommentDataLoading,
}) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <article className="w-full py-5 pl-5 select-none cursor-pointer my-5">
        <h1 className="text-xl font-semibold">
          {millify(commentCount)} Comments
        </h1>
      </article>
      {CommentData.length > 0 ? (
        <>
          {CommentData.map((item) => (
          <CommoentPart
            key={item.id}
            comment={item.snippet.topLevelComment.snippet}
            replies={item.replies?.comments || []}
          />
          ))}
          {CommentDataLoading === true &&
            [...Array(10)].map((_, i) => (
              <article
                key={i}
                className="flex justify-start gap-5 px-3 py-5 animate-pulse"
              >
                <section>
                  <div className="rounded-full bg-surface min-w-[45px] min-h-[45px] w-[45px] h-[45px]" />
                </section>

                <section className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-3 bg-surface rounded"></div>
                    <div className="w-10 h-2 bg-surface rounded"></div>
                  </div>

                  <div className="w-full h-3 bg-surface rounded"></div>
                  <div className="w-3/4 h-3 bg-surface rounded"></div>

                  <div className="flex gap-3 mt-3">
                    <div className="w-16 h-6 bg-surface rounded-full"></div>
                    <div className="w-16 h-6 bg-surface rounded-full"></div>
                  </div>
                </section>
              </article>
            ))}
        </>
      ) : (
        <p className="text-subtext text-center py-32">No comments found...</p>
      )}

      <article className="w-full px-10 select-none cursor-pointer py-12">
        <div
          onClick={moreCommentThreads}
          className="w-full border rounded-full py-1.5 border-border hover:bg-accent/20 transition-all duration-300 flex justify-center items-center"
        >
          <span className="text-accent">Show more</span>
        </div>
      </article>
    </div>
  );
}
