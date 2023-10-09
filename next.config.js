/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "192.168.1.42",
      },
      {
        protocol: "http",
        hostname: "172.20.110.55",
      },
    ],
  },
};

module.exports = nextConfig;
