import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env?.NEXT_PUBLIC_NODE_ENV === 'production',
  },
};

export default nextConfig;
