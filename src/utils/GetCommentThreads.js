export default async function GetCommentThreads({ videoId, pageToken }) {
  try {
    if (!videoId) {
      console.error("videoId and key are required");
      return {};
    }

    let url = new URL(
      "https://youtube.googleapis.com/youtube/v3/commentThreads"
    );
    url.searchParams.append("part", "snippet,replies");
    url.searchParams.append("videoId", videoId);
    url.searchParams.append("key", "AIzaSyA1C3GciYyNbXO0tsWMRnbnFUPDnbtwIac");
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
