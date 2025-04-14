import Image from "next/image";
import Link from "next/link";
import React from "react";

import BannerImage from "@/assets/banner.jpg";
import { Button } from "../ui/button";

const NewsCard = () => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <Link href={"/"}>
        <Image
          src={BannerImage}
          alt="Banner Image"
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>

      <div>
        <h2 className="text-xl font-semibold my-3">
          The Last of Us Creator Didn’t Want to Sweep ‘Upsetting’ Moments Under
          the Rug
        </h2>
        <p className="mb-4">
          During The Last of Us’ second-season premiere, Ellie gets called a
          homophobic slur. Craig Mazin tells WIRED it highlights what happens
          when humanity stops moving forward.
        </p>
        <Link href={"/"}>
          <Button variant="default">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
