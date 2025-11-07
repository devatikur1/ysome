{/* <div
  ref={containerRef}
  style={{
    width: `${HomePageWidth}px`,
    height: `${HomePageHeight}px`,
    minWidth: `${HomePageWidth}px`,
    minHeight: `${HomePageHeight}px`,
  }}
  className="flex flex-col md:flex-row gap-5 py-3 md:px-4 overflow-x-hidden overflow-y-auto"
>
  <section
    className={`flex flex-col w-[${HomePageWidth}px] md:w-[${
      HomePageWidth * 0.67
    }px]  md:w-[69vw] h-auto pl-2 md:px-0`}
  >
    <article className="w-full min-h-[200px] sm:min-h-[305px] md:min-h-[300px] lg:min-h-[355px] xl:min-h-[700px]">
      <PlayerVideo videoDetails={videoDetails} />
    </article>
    <ChannelAndLike VideoID={VideoID} VideoData={VideoData} />
    <article className="w-full">
      <CommoentInterFace
        VideoID={VideoID}
        CommentData={CommentData}
        commentCount={VideoData?.statistics?.commentCount}
        moreCommentThreads={moreCommentThreads}
        CommentDataLoading={CommentDataLoading}
      />
    </article>
  </section>

  <section
    className={`w-[${HomePageWidth}px] md:w-[${
      HomePageWidth * 0.33
    }px] md:h-full grid sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-4 px-2 md:px-0 pb-2 *:select-none`}
  >
    {RelatedVideoItem?.map((item, idx) => (
      <ReccomendPart key={idx} item={item} />
    ))}
  </section>
</div>; */}
