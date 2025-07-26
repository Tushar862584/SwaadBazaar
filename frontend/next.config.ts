import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
      output: 'export',
      images: {
        unoptimized: true, // Disable image optimization for static export
      },
      assetPrefix: isProd ? 'https://github.com/sahilbhandare45/SwaadBazaar_EntityCoders/' : '',
      basePath: isProd ? 'https://github.com/sahilbhandare45/SwaadBazaar_EntityCoders/' : '',
    };
export default nextConfig;
