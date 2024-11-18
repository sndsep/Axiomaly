/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Disable caching in development
    if (dev) {
      config.cache = false;
    }

    // Handle punycode deprecation warning
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }

    // Optimize module resolution
    config.resolve.preferRelative = true;

    // Add module aliases if needed
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add your aliases here if needed
    };

    return config;
  },

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    domains: ['example.com', 'another-domain.com'],
  },

  // Additional experimental features
  experimental: {
    // Enable modern build optimizations
    optimizeCss: true,
    // Modern React features
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Performance optimizations
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ],
      },
    ];
  },
}

module.exports = nextConfig