import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";

export const metadata: Metadata = {
  title: {
    default: "오토호스 - 차량 정비 데이터 포털",
    template: "%s | 오토호스",
  },
  description:
    "200만건 실제 정비 데이터 기반으로 차량별 정비 비용, 주기, 전문 정비소 정보를 확인하세요. 내 차 정비를 데이터로 똑똑하게.",
  keywords: [
    "차량 정비",
    "자동차 정비",
    "정비 비용",
    "정비소 찾기",
    "엔진오일 교환",
    "브레이크 패드",
    "타이어 교환",
    "현대",
    "기아",
    "그랜저",
    "소나타",
  ],
  authors: [{ name: "오토호스" }],
  creator: "오토호스",
  publisher: "오토호스",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://autohos.kr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://autohos.kr",
    siteName: "오토호스",
    title: "오토호스 - 차량 정비 데이터 포털",
    description:
      "200만건 실제 정비 데이터 기반으로 차량별 정비 비용, 주기, 전문 정비소 정보를 확인하세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "오토호스 - 차량 정비 데이터 포털",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "오토호스 - 차량 정비 데이터 포털",
    description:
      "200만건 실제 정비 데이터 기반으로 차량별 정비 비용, 주기, 전문 정비소 정보를 확인하세요.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "naver-site-verification": "naver-site-verification-code",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="pb-20 lg:pb-0">{children}</main>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
