import type { NextConfig } from "next";

// App Router handles locale via the `[locale]` segment.
// Configure static export for shared hosting like Bluehost.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
