import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    serverActions: {
    bodySizeLimit: '10mb', // or whatever value you want
    }
  }
  
};

export default nextConfig;
