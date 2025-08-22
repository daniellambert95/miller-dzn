import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Image optimization settings
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    // Specify allowed domains for image optimization
    domains: ['site-and-site-miller-design-images.b-cdn.net'],
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

  // Add these to your existing metadata
  keywords: "Miller Design, MDZN Miller Design, Geoff Miller graphic designer, Miller Design UAE branding, Miller Design graphic design agency, Miller Design Dubai, Miller Design UAE, Miller Design graphic design, Miller Design branding, Miller Design logo design, Miller Design web design, Miller Design digital marketing, Miller Design branding agency, Miller Design graphic design agency, Miller Design logo design agency, Miller Design web design agency, Miller Design digital marketing agency, Miller Design branding agency Dubai, Miller Design graphic design agency Dubai, Miller Design logo design agency Dubai, Miller Design web design agency Dubai, Miller Design digital marketing agency Dubai"
};

export default nextConfig;
