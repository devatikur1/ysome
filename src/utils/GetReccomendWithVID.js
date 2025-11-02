export async function GetRecommendWithVID(videoId, key) {
  if (!videoId || !key) {
    console.warn("❌ Missing videoId or API key");
    return null;
  }
  console.log("Video ID:", videoId);

  try {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=30&key=${key}`;

    const res = await fetch(url);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("⚠️ API Error:", res.status, errorText);
      return null;
    }

    const data = await res.json();

    // Defensive check
    if (!data?.items?.length) {
      console.warn("⚠️ No related videos found.");
      return [];
    }

    return data.items;
  } catch (err) {
    console.error("🚨 Fetch failed:", err);
    return null;
  }
}
