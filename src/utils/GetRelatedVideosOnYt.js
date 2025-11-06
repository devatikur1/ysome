export async function GetRelatedVideosOnYt({ videoId, pageToken = "", key }) {
  // Safety check
  if (!videoId || !key) return { items: [], nextPageToken: null };

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("relatedToVideoId", videoId);
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "10");
  if (pageToken) url.searchParams.set("pageToken", pageToken);
  url.searchParams.set("key", key);

  try {
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    return {
      items: data.items || [],
      nextPageToken: data.nextPageToken || null,
    };
  } catch (err) {
    console.error("🔥 Error fetching related videos:", err);
    return { items: [], nextPageToken: null };
  }
}
