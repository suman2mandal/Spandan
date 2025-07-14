const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx','js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'res-console.cloudinary.com',
      'images.unsplash.com',
      'api.time.com',
      'res.cloudinary.com',
      'spandan-ngo-website.vercel.app',
      'images.pexels.com',
      'cdn.pixabay.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.w3.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.time.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'spandan-ngo-website.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
