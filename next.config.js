/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://renebitter.github.io/',
  },
  basePath: '/portfolio-nextjs',
};

module.exports = nextConfig;
