/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/cats',
        destination: 'https://api.thecatapi.com',
      },
      {
        source: '/cats',
        destination: 'https://cdn2.thecatapi.com',
      },
    ]
  },
}

module.exports = nextConfig
