"use client";
import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import { fetchNews } from "@/lib/fetchNews";
import NewsCard from "../shared/NewsCard";

const NewsList = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };
    getNews();
  }, [category, search]);

  console.log("news", news);

  return (
    <div>
      <div></div>

      {/* news list cards */}
      {news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item: NewsItem) => (
            <NewsCard key={item?.article_id} item={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl font-bold">No news found</h2>
      )}
    </div>
  );
};

export default NewsList;
