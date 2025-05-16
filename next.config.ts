import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cs3.wettercomassets.com",
      },
    ],
  },
};

export default nextConfig;
