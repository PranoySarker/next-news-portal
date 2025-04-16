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

    // Ensure it's an array even if null
    if (data?.results && Array.isArray(data.results)) {
      console.log("Fetched news data:", data.results); // Log the fetched data
      return data.results;
    }

    return [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
