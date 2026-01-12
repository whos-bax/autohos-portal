import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { PopularCars } from "@/components/home/PopularCars";
import { ServiceIntro } from "@/components/home/ServiceIntro";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "오토호스 - 차량 정비 데이터 포털",
  description:
    "200만건 실제 정비 데이터 기반으로 차량별 정비 비용, 주기, 전문 정비소 정보를 확인하세요. 내 차 정비를 데이터로 똑똑하게.",
  openGraph: {
    title: "오토호스 - 차량 정비 데이터 포털",
    description:
      "200만건 실제 정비 데이터 기반으로 차량별 정비 비용, 주기, 전문 정비소 정보를 확인하세요.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularCars />
      <ServiceIntro />
      <CTABanner />
    </>
  );
}
