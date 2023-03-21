/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: isProd ? 'https://renebitter.github.io/' : '',
  },
  basePath: '/portfolio',
};

module.exports = nextConfig;
