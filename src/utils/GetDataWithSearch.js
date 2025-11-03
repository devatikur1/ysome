export async function GetDataWithSearch({
  maxResults,
  query,
  nxtPgToken,
  key,
}) {
  let searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${maxResults}&q=${encodeURIComponent(
    query
  )}&videoDuration=medium&safeSearch=moderate&key=${key}`;

  if (nxtPgToken) {
    searchUrl += `&pageToken=${nxtPgToken}`;
  }

  try {
    const response = await fetch(searchUrl);
    if (!response.ok) {
      return {};
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}
