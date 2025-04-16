import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bloximages.chicago2.vip.townnews.com",
      },
      {
        protocol: "https",
        hostname: "bloximages.newyork1.vip.townnews.com",
      },
      {
        protocol: "https",
        hostname: "theglobeandmail.com",
      },
      {
        protocol: "https",
        hostname: "lavenir.net",
      },
      {
        protocol: "https",
        hostname: "b92.net",
      },
      {
        protocol: "https",
        hostname: "1884403144.rsc.cdn77.org",
      },
      {
        protocol: "https",
        hostname: "cdn-images.the-express.com",
      },
      {
        protocol: "https",
        hostname: "mms.businesswire.com",
      },
      {
        protocol: "https",
        hostname: "www.gulf-times.com",
      },
      {
        protocol: "https",
        hostname: "torinocronaca.it",
      },
      {
        protocol: "https",
        hostname: "tk.ismcdn.jp",
      },
      {
        protocol: "https",
        hostname: "**.bytvi.com", // for source icons if needed
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
