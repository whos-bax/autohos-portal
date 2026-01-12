import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO 최적화를 위한 설정
  poweredByHeader: false,
  compress: true,

  // 이미지 최적화
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
