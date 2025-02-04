import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "www.theinvestorspodcast.com",
      },
      {
        protocol: "https",
        hostname: "third-kingfisher-962.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
