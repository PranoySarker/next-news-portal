import Image from "next/image";
import Link from "next/link";
import React from "react";

import BannerImage from "@/assets/banner.jpg";
import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <Link href={"/"}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={item?.title}
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>

      <div>
        <h2 className="text-xl font-semibold my-3">{item?.title}</h2>
        <p className="mb-4">
          {item?.description.length > 50
            ? item?.description.slice(0, 50) + "..."
            : item?.description}
        </p>
        <Link href={"/"}>
          <Button variant="default">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
