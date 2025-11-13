export async function GetSearchFn({ query, token }) {
  const url = `https://yt-api.p.rapidapi.com/search?query=${encodeURIComponent(
    query
  )}&type=video&duration=medium`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
      "x-rapidapi-key": "9aaf8f26aamsh3febeacc30b0e5ep119b4ejsnc28a34997cd1",
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Error:", err);
    return {};
  }
}
