export async function GetRelateVideos({ videoID, nextPageNoken, key }) {
  try {
    const res = await fetch(
      `https://youtube-media-downloader.p.rapidapi.com/v2/video/related?videoId=${videoID}${
        nextPageNoken ? `&nextToken=${nextPageNoken}` : ""
      }`,
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
