export async function GetRelateVideos({ videoID, nextPageToken, key }) {
  try {
    const res = await fetch(
      `https://youtube-media-downloader.p.rapidapi.com/v2/video/related?videoId=${videoID}${
        nextPageToken ? `&nextToken=${nextPageToken}` : ""
      }`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": key,
          "x-rapidapi-host": "youtube-media-downloader.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) {
      console.log(`HTTP error! status: ${res.status}`);
      return { status: false, data: {} };
    }

    const data = await res.json();
    return { status: true, data: data };
  } catch (err) {
    console.error("Fetch failed:", err);
    return { status: false, data: {} };
  }
}
