const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  scope: "/",
  sw: "service-worker.js",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
