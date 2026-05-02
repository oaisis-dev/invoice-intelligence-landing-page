import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/invoice-intelligence-landing-page",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
