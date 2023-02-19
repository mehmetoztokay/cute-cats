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
        source: '/cats-auth',
        destination: 'https://identitytoolkit.googleapis.com/v1',
      },
    ]
  },
}

module.exports = nextConfig
