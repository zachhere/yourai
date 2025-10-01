import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent ESLint errors from failing production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Prevent TypeScript errors from failing production builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
