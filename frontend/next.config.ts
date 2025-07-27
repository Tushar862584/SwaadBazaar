import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
      output: 'export',
      images: {
        unoptimized: true, // Disable image optimization for static export
      },
      assetPrefix: isProd ? 'https://github.com/Tushar862584/SwaadBazaar/' : '',
      basePath: isProd ? 'https://github.com/Tushar862584/SwaadBazaar/' : '',
    };
export default nextConfig;
