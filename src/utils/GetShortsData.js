export async function GetShortsData(q, key) {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${q}%20shorts&key=${key}`;
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    // console.error("Failed to fetch channel data:", err);
    return null;
  }
}
