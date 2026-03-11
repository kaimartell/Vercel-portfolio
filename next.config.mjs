// Replace this string with the Vercel deployment URL for the engineering concepts app.
const ENGINEERING_CONCEPTS_DEPLOYMENT_URL =
  "https://engineering-concepts.vercel.app/".replace(/\/+$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
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
