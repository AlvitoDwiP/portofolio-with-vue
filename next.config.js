/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
