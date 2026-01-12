import { Metadata } from "next";
import { FindShopClient } from "./FindShopClient";

export const metadata: Metadata = {
  title: "정비소 찾기",
  description:
    "내 주변 전문 정비소를 찾아보세요. 위치, 전문분야, 실제 리뷰를 확인하고 최적의 정비소를 선택하세요.",
  openGraph: {
    title: "정비소 찾기 | 오토호스",
    description:
      "내 주변 전문 정비소를 찾아보세요. 위치, 전문분야, 실제 리뷰를 확인하세요.",
  },
  alternates: {
    canonical: "/shops",
  },
};

export default function ShopsPage() {
  return <FindShopClient />;
}
