import NewsList from "@/components/news/NewsList";
import Link from "next/link";
import React from "react";

const Newspage = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>

      <NewsList />
    </div>
  );
};

export default Newspage;
