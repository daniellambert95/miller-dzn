import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Image optimization settings
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    // Specify allowed domains for image optimization
    domains: ['site-and-site-miller-design-images.b-cdn.net', 'millerdzn.b-cdn.net'],
    // Add recommended image formats
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    minimumCacheTTL: 31536000, // 1 year cache
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
``