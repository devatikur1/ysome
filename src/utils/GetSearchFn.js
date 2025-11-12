export async function GetSearchFn({ query, token }) {
  const url = `https://yt-api.p.rapidapi.com/search?query=${encodeURIComponent(
    query
  )}&token=${encodeURIComponent(token)}&type=video&duration=medium`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_SEARCH_FN_1_KEY,
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    console.log("✅ Result:", data);
    return data;
  } catch (err) {
    console.error("❌ Error:", err);
    return {};
  }
}
