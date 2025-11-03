import moment from "moment";
import { GetDataWithSearch } from "./GetDataWithSearch";

export async function GetsetReccomendData({ queries, nxtPgTokens, apiKey }) {
  try {
    // একসাথে সব search query রেজাল্ট আনা
    const results = await Promise.all(
      queries.map((query, index) =>
        GetDataWithSearch({
          maxResults: 120 / queries.length,
          query,
          nxtPgToken: nxtPgTokens?.[index]?.token || "",
          key: apiKey,
        })
      )
    );

    const recVideoItem = [];
    const newNextTokens = [];

    // অন্তত একটি valid result আছে কিনা চেক
    if (results.some((r) => r && r.items)) {
      results.forEach((data, idx) => {
        if (!data?.items?.length) return;

        // Every Item forEach korbe
        data.items.forEach((rc) => {
          const publishTime = rc?.snippet?.publishTime;
          const timeText = moment(publishTime).fromNow();
          const publishedTimeText = timeText.replace(/^a /, "1 "); // "a minute ago" → "1 minute ago"

          recVideoItem.push({
            type: "video",
            id: rc?.id?.videoId,
            title: rc?.snippet?.title,
            name: rc?.snippet?.channelTitle,
            channel: {
              id: rc?.snippet?.channelId,
            },
            publishedTimeText,
            thumbnails: [
              { url: rc?.snippet?.thumbnails?.default?.url },
              { url: rc?.snippet?.thumbnails?.medium?.url },
              { url: rc?.snippet?.thumbnails?.high?.url },
            ],
          });
        });

        // page token
        newNextTokens.push({
          query: queries[idx],
          token: data?.nextPageToken || null,
        });
      });

      return { newNextTokens, recVideoItem };
    }

    // Failed Callback empty data
    return { newNextTokens: [], recVideoItem: [] };
  } catch (err) {
    console.error("Fetch Data Error:", err);
    return { newNextTokens: [], recVideoItem: [] };
  }
}
