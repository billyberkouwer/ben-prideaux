import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'color-functions', 'global-builtin'],
  },
  images: {
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
        { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
},
};

export default nextConfig;
