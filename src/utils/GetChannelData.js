export async function GetChannelData({ channelId, key }) {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${key}`;
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
