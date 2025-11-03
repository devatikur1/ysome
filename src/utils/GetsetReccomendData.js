import moment from "moment";
import { GetDataWithSearch } from "./GetDataWithSearch";

export async function GetsetReccomendData({ queries, nxtPgTokens, apiKey }) {
  try {
    // Handle using api result
    const results = await Promise.all(
      queries.map((q, idx) =>
        GetDataWithSearch({
          maxResults: 120 / queries.length,
          query: q,
          nxtPgToken: nxtPgTokens?.[idx]?.token || "",
          key: apiKey,
        })
      )
    );

    // const results = JSON.parse(localStorage.getItem("c"));
    console.log(results);

    // Handle test er loge result
    const newNextTokens = [];
    let recVideoItem = [];

    if (results.some((r) => (!r ? false : true))) {
      results.forEach((data, idx) => {
        if (!data?.items) return;

        // map daat
        data?.items?.forEach((rc) => {
          recVideoItem.push({
            type: "video",
            id: rc?.id?.videoId,
            title: rc?.snippet?.title,
            name: rc?.snippet?.channelTitle,
            channel: {
              id: rc?.snippet?.channelId,
            },
            publishedTimeText:
              moment(rc?.snippet?.publishTime)
                .fromNow()
                .split(" ")[0]
                .replace("a", "1") +
              moment(rc?.snippet?.publishTime).fromNow().slice(1),

            thumbnails: [
              {
                url: rc?.snippet?.thumbnails?.default?.url,
              },
              {
                url: rc?.snippet?.thumbnails?.high?.url,
              },
              {
                url: rc?.snippet?.thumbnails?.medium?.url,
              },
            ],
          });
        });

        newNextTokens.push({
          query: queries[idx],
          token: data?.nextPageToken || null,
        });
      });

      // set newNextTokens
      return { newNextTokens: newNextTokens, recVideoItem: recVideoItem };
    } else {
      return { newNextTokens: [], recVideoItem: [] };
    }
  } catch (err) {
    console.error("Fetch Data Error:" + err);
    return { newNextTokens: [], recVideoItem: [] };
  }
}
