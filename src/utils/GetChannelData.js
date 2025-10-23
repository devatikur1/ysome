export async function GetChannelData(channelId, key) {
  try {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${key}`;
    const res = await fetch(url);

    if (!res.ok) {
      return null;
    }

    
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      throw new Error("No channel found with this ID");
    }

    return data.items[0];
  } catch (err) {
    console.error("Failed to fetch channel data:", err);
    return null;
  }
}
