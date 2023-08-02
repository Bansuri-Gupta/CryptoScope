require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.wired.com', 'i.kinja-img.com'],
  },
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
  server: {
    // Specifies the host and port for the dev server
    // Change '127.0.0.1' to your desired IP address
    host: '127.0.0.1',
    port: 5500,
  },
};

module.exports = nextConfig;
