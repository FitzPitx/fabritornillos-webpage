import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['http://localhost:3000', 'http://localhost:3001', '192.168.1.10:3000'],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
