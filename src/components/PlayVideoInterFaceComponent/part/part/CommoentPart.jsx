import moment from "moment";
import React from "react";

export default function CommoentPart({ comment }) {
//   console.log(comment);
  let date = moment(comment?.publishedAt).fromNow();
  console.log(date.replace("a ", "1 "));
  return (
    <article className="flex justify-start gap-5 px-3 border-b border-border py-5">
      <section>
        <img
          className="rounded-full min-w-[45px] min-h-[45px] w-[45px] h-[45px] max-w-[45px] max-h-[45px]"
          src={comment?.authorProfileImageUrl}
          alt={comment?.textDisplay}
        />
      </section>
      <section>
        <article className="flex items-center gap-1">
          <p className="text-[0.83rem] text-text/90 font-medium">
            {comment?.authorDisplayName}
          </p>
          <span aria-hidden="true" className="text-neutral-500">
            •
          </span>
          <time className="text-xs text-subtext">
            {date.replace("a ", "1 ")}
          </time>
        </article>
        <article>
          <p className="text-text/80 text-[0.9rem]">{comment?.textOriginal}</p>
        </article>
      </section>
    </article>
  );
}
