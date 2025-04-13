import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import BannerImage from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div>
          <Image src={BannerImage} alt="Banner Image" />
        </div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-bold">
            OpenAI Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p>
            OpenAI, the San Francisco start-up behind ChatGPT, has been telling
            investors that it is making billions from its chatbot and that it
            expects to make a lot more in the coming years. But it has not been
            quite so clear about how much it is losing. OpenAI’s monthly revenue
            hit $300 million in August, up 1,700 percent since the beginning of
            2023, and the company expects about $3.7 billion in annual sales
            this year, according to financial documents reviewed by The New York
            Times. OpenAI estimates that its revenue will balloon to $11.6
            billion next year.
          </p>
          <Button variant="default" className="w-full">
            <span className="text-sm">Read More</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
