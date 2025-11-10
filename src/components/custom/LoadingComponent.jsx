export function FullPageLoader({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full border-4 border-t-transparent animate-spin border-white" />
        <div className="text-white text-sm">{message}</div>
      </div>
    </div>
  );
}

export function VideoSkeleton() {
  return (
    <div className="animate-pulse w-full">
      <div className="bg-bg-pecondary aspect-video rounded-xl" />
    </div>
  );
}

export function VideoHeaderSkeleton() {
  return (
    <aside className="flex flex-col gap-3 py-3 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-5 sm:h-6 lg:h-7 bg-surface/70 rounded-md w-[80%] mx-auto sm:mx-0" />

      {/* Channel & Like Section */}
      <section className="w-full flex flex-col sm:flex-row gap-3 justify-between">
        {/* Channel Info */}
        <div className="flex items-end gap-5 w-[50%]">
          <div className="flex items-center gap-2">
            {/* Channel Avatar */}
            <div className="w-10 h-10  bg-surface/70 rounded-full border border-border" />
            <div className="flex flex-col justify-start gap-2">
              <div className="h-4 bg-surface/70 rounded-md w-24" />
              <div className="h-3 bg-surface/60 rounded-md w-16" />
            </div>
          </div>

          {/* Subscribe Button Skeleton */}
          <div className="h-8 bg-surface/70 rounded-full w-24 border border-border" />
        </div>

        {/* Like/Dislike Section */}
        <div className="w-full sm:w-auto flex items-center gap-5 mt-4">
          <div className="flex justify-center items-center bg-surface/70 rounded-full text-[0.85rem] font-medium border border-border">
            <div className="flex items-center gap-1.5 px-3 py-1 border-r-2 border-border">
              <div className="w-4 h-4 bg-surface/50 rounded-md" />
              <div className="w-10 h-3 bg-surface/50 rounded-md" />
            </div>
            <div className="px-3 py-1">
              <div className="w-4 h-4 bg-surface/50 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}

export function CommentSkeleton({ count = 4 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
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
      ))}
    </>
  );
}

export function RelatedSkeleton() {
  return (
    <aside className="w-full flex flex-col gap-2 animate-fadeIn">
      {/* 🔹 Thumbnail Skeleton */}
      <div className="relative w-full h-[170px] sm:h-[180px] md:h-[190px] lg:h-[200px] rounded-xl overflow-hidden bg-surface animate-pulse">
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* 🔹 Text Skeleton */}
      <div className="space-y-2 mt-2">
        {/* Title */}
        <div className="relative w-[100%] h-4 rounded-md overflow-hidden bg-gradient-to-br bg-surface">
          <div className="absolute inset-0 shimmer" />
        </div>

        {/* Channel name */}
        <div className="flex justify-between">
          <div className="relative w-[50%] h-3 rounded-md overflow-hidden bg-gradient-to-br bg-surface">
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="relative w-[35%] h-3 rounded-md overflow-hidden bg-gradient-to-br bg-surface">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>
      </div>
    </aside>
  );
}
export function SidebarSubscribeLoading() {
  return (
    <div
      className="w-full bg-transparent border border-transparent
      hover:bg-bg-pecondary hover:border-border transition-all duration-300 flex
      items-center justify-start gap-3 px-3 py-2 mb-1 rounded-xl animate-pulse"
    >
      {/* Left: Channel photo skeleton */}
      <div className="flex justify-center items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-neutral-700" />
      </div>

      {/* Right: Channel name skeleton */}
      <div className="w-[80%] flex flex-col justify-end gap-1">
        <div className="h-4 w-[80%] bg-neutral-700 rounded" />
      </div>
    </div>
  );
}
