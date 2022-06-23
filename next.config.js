/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images.unsplash.com', 'localhost'],
  },
  basePath: '/portfolio-nextjs',
};

module.exports = nextConfig;
