import type { NextConfig } from "next";

const ENGINEERING_CONCEPTS_DEPLOYMENT_URL =
  "https://engineering-concepts.vercel.app/";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/engineeringconcepts",
        destination: `${ENGINEERING_CONCEPTS_DEPLOYMENT_URL}/engineeringconcepts`,
      },
      {
        source: "/engineeringconcepts/:path*",
        destination: `${ENGINEERING_CONCEPTS_DEPLOYMENT_URL}/engineeringconcepts/:path*`,
      },
    ];
  },
};

export default nextConfig;
