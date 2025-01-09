import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "static.wikia.nocookie.net"], // Add the domain here
  },
};

export default nextConfig;
