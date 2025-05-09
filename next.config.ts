import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import', 'color-functions', 'global-builtin'],
  }
};

export default nextConfig;
