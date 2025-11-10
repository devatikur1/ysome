import React from "react";
import CommoentPart from "./Commoent/CommoentPart";
import millify from "millify";
import { CommentSkeleton } from "../../custom/LoadingComponent";

export default function CommoentInterFace({
  commentCount,
  CommentData,
  moreCommentThreads,
  CommentDataLoading,
}) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <article className="w-full py-5 pl-5 select-none cursor-pointer">
        <h1 className="text-xl font-semibold">
          {millify(Number(commentCount))} Comments
        </h1>
      </article>

      {CommentData?.length > 0 &&
        CommentData.map((item) => (
          <CommoentPart
            key={item.id}
            comment={item?.snippet?.topLevelComment.snippet}
            replies={item?.replies?.comments || []}
          />
        ))}
      {CommentDataLoading && <CommentSkeleton count={12} />}

      {CommentData?.length <= 0 && (
        <p className="text-subtext text-center py-24">No comments found...</p>
      )}

      {CommentData?.length > 0 && (
        <article className="w-full px-10 select-none cursor-pointer py-12">
          <div
            onClick={moreCommentThreads}
            className="w-full border rounded-full py-1.5 border-border hover:bg-accent/20 transition-all duration-300 flex justify-center items-center"
          >
            <span className="text-accent">Show more</span>
          </div>
        </article>
      )}
    </div>
  );
}
