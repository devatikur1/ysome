export async function GetVideoDetails({ videoID, key }) {
  try {
    const res = await fetch(
      `https://youtube-media-downloader.p.rapidapi.com/v2/video/details?videoId=${videoID}&urlAccess=normal&videos=auto&audios=auto`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
