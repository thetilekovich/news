/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-component.nextjs.gallery',
        port: '',
        pathname: '/placeholder/',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}