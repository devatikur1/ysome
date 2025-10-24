export async function GetVideoData(videoId, key) {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${key}`;
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data?.items[0];
  } catch (err) {
    // console.error("Failed to fetch channel data:", err);
    return null;
  }
}
