/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.[a-z]+",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**.[a-z]+",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    customKey: process.env.API_KEY_THE_NEWS,
  },
};

module.exports = nextConfig;
