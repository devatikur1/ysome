import moment from "moment";
import { GetDataWithSearch } from "./GetDataWithSearch";

export async function GetsetReccomendData({
  queries,
  nxtPgTokens = [],
  apiKey,
}) {
  try {
    // 🔹 search query result
    const results = await Promise.all(
      queries.map((query, index) =>
        GetDataWithSearch({
          maxResults: Math.floor(150 / queries.length),
          query,
          nxtPgToken: nxtPgTokens[index]?.token || "",
          key: apiKey,
        })
      )
    );

    const recVideoItem = [];
    const newNextTokens = [];

    // 🔹 valid result
    const validResults = results.filter((r) => r && Array.isArray(r.items));
    if (!validResults.length) {
      return { newNextTokens: [], recVideoItem: [] };
    }

    // 🔹  query result process
    validResults.forEach((data, idx) => {
      // next page token
      newNextTokens.push({
        query: queries[idx],
        token: data?.nextPageToken || null,
      });

      // 🔹  item process
      data.items.forEach((rc) => {
        const snippet = rc?.snippet || {};
        const thumbnails = snippet.thumbnails || {};
        const publishTime = snippet.publishTime;

        // moment
        const timeText = moment(publishTime).fromNow();
        const publishedTimeText = timeText.replace(/^a /, "1 "); // "a minute ago" → "1 minute ago"

        recVideoItem.push({
          type: "video",
          id: rc?.id?.videoId || null,
          title: snippet.title || "Untitled Video",
          name: snippet.channelTitle || "Unknown Channel",
          channel: { id: snippet.channelId || null },
          publishedTimeText,
          thumbnails: [
            { url: thumbnails?.default?.url || "" },
            { url: thumbnails?.medium?.url || "" },
            { url: thumbnails?.high?.url || "" },
          ],
        });
      });
    });

    return { newNextTokens, recVideoItem };
  } catch (err) {
    console.error("❌ Fetch Data Error:", err);
    return { newNextTokens: [], recVideoItem: [] };
  }
}
