/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.wired.com',
        port: '',
        pathname: '/photos',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}