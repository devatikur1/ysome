import React from "react";

export default function CommentLoading() {
  return (
    <article className="flex justify-start gap-5 px-3 py-5 animate-pulse">
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
  );
}
