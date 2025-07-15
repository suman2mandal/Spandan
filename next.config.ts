const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    // If you want to use MDX with React Server Components
    // you might need additional configuration here
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental MDX RS (Rust-based MDX compiler) for better performance
  experimental: {
    mdxRs: true,
  },
  
  pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx', 'md'],
  images: {
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