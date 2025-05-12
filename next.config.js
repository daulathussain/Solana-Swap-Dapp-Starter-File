// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: [
      "raw.githubusercontent.com",
      "tokens.solana.com",
      "static.raydium.io",
    ],
  },
};

module.exports = nextConfig;
