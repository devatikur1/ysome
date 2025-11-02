export async function GetCommentThreads(videoId, key) {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${key}`;
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {    return null;
  }
}
