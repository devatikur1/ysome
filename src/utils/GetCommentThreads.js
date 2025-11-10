export default async function GetCommentThreads({ videoId, key, pageToken }) {
  try {
    if (!videoId || !key) {
      console.error("videoId and key are required");
      return {};
    }

    let url = new URL(
      "https://youtube.googleapis.com/youtube/v3/commentThreads"
    );
    url.searchParams.append("part", "snippet,replies");
    url.searchParams.append("videoId", videoId);
    url.searchParams.append("key", key);
    if (pageToken) url.searchParams.append("pageToken", pageToken);

    const res = await fetch(url.toString());

    if (!res.ok) {
      console.error(`Failed to fetch comments: ${res.status}`);
      return {};
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching comment threads:", err);
    return null;
  }
}
