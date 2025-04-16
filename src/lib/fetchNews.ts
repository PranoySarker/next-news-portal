export const fetchNews = async (category: string, search: string) => {
  try {
    let url = `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

    if (search?.trim()) {
      url += `&q=${encodeURIComponent(search)}`;
    }

    if (category?.trim()) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
