import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShopDetailClient } from "./ShopDetailClient";
import { shops } from "@/lib/data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const shop = shops.find((s) => s.id === parseInt(id));

  if (!shop) {
    return {
      title: "정비소를 찾을 수 없습니다",
    };
  }

  return {
    title: `${shop.name} - ${shop.specialty}`,
    description: `${shop.name}은 ${shop.area}에 위치한 ${shop.specialty} 정비소입니다. 평점 ${shop.rating}점, ${shop.reviews}개의 리뷰를 확인하세요.`,
    openGraph: {
      title: `${shop.name} | 오토호스`,
      description: `${shop.area}에 위치한 ${shop.specialty} 정비소. 평점 ${shop.rating}점`,
    },
    alternates: {
      canonical: `/shops/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return shops.map((shop) => ({
    id: shop.id.toString(),
  }));
}

export default async function ShopDetailPage({ params }: PageProps) {
  const { id } = await params;
  const shop = shops.find((s) => s.id === parseInt(id));

  if (!shop) {
    notFound();
  }

  return <ShopDetailClient shop={shop} />;
}
