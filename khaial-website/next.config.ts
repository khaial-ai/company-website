import type { NextConfig } from "next";

// App Router handles locale via the `[locale]` segment.
// Remove legacy i18n block to avoid warnings and 307 spam from root prefetches.
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
