/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "elitegymsapi.lylapitajen.com",
        port: "1338",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
