/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: false,
  },
  images: {
    remotePatterns: [{
      hostname: 'cdn.sanity.io',
    }]
  }
}

export default config
