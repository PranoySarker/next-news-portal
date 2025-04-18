"use client";

import { NewsItem } from "@/types/news";
import React, { useEffect, useState } from "react";
import { fetchNews } from "@/lib/fetchNews";
import NewsCard from "../shared/NewsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const NewsList = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews(category, search);
        setNews(Array.isArray(data) ? data.filter(Boolean) : []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [category, search]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <SearchBar onSearch={setSearch} />
        <CategoryFilter onCategoryChange={setCategory} />
      </div>

      {/* News list cards */}
      {loading ? (
        <p>Loading...</p>
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) =>
            item && item.article_id ? (
              <NewsCard key={item.article_id} item={item} />
            ) : null
          )}
        </div>
      ) : (
        <h2 className="text-2xl font-bold">No news found</h2>
      )}
    </div>
  );
};

export default NewsList;
