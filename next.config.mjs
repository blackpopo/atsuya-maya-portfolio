/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 用に完全静的エクスポートする
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
