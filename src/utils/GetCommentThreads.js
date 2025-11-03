export async function GetCommentThreads({ videoId, key, pageToken }) {
  try {
    let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${key}`;

    // Add pageToken if exists
    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      console.error(`Failed to fetch comments: ${res.status}`);
      return {};
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Error fetching comment threads:", err);
    return {};
  }
}
