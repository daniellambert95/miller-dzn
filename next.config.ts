import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    // Specify allowed domains for image optimization
    domains: ['site-and-site-miller-design-images.b-cdn.net'],
    // Add recommended image formats
    formats: ['image/webp'],
  },
};

export default nextConfig;
