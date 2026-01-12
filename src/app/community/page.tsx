import { Metadata } from "next";
import { CommunityClient } from "./CommunityClient";

export const metadata: Metadata = {
  title: "커뮤니티",
  description:
    "차량 정비 정보를 공유하고 소통하세요. 정비 Q&A, 비용 후기, 정비 팁을 나누는 오토호스 커뮤니티.",
  openGraph: {
    title: "커뮤니티 | 오토호스",
    description:
      "차량 정비 정보를 공유하고 소통하세요. 정비 Q&A, 비용 후기, 정비 팁.",
  },
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return <CommunityClient />;
}
