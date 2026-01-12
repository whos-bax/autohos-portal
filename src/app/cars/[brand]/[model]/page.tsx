import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarDetailClient } from "./CarDetailClient";
import { carBrands } from "@/lib/data";

interface PageProps {
  params: Promise<{
    brand: string;
    model: string;
  }>;
  searchParams: Promise<{
    year?: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { brand, model } = await params;
  const decodedBrand = decodeURIComponent(brand);
  const decodedModel = decodeURIComponent(model);

  return {
    title: `${decodedBrand} ${decodedModel} 정비 정보`,
    description: `${decodedBrand} ${decodedModel}의 정비 비용, 정비 주기, 주요 이슈, 전문 정비소 정보를 확인하세요. 실제 정비 데이터 기반 분석 결과.`,
    openGraph: {
      title: `${decodedBrand} ${decodedModel} 정비 정보 | 오토호스`,
      description: `${decodedBrand} ${decodedModel}의 정비 비용, 정비 주기, 주요 이슈를 확인하세요.`,
    },
    alternates: {
      canonical: `/cars/${brand}/${model}`,
    },
  };
}

export async function generateStaticParams() {
  const params: { brand: string; model: string }[] = [];

  Object.entries(carBrands).forEach(([brand, models]) => {
    models.forEach((model) => {
      params.push({
        brand: encodeURIComponent(brand),
        model: encodeURIComponent(model),
      });
    });
  });

  return params;
}

export default async function CarDetailPage({
  params,
  searchParams,
}: PageProps) {
  const { brand, model } = await params;
  const { year } = await searchParams;

  const decodedBrand = decodeURIComponent(brand);
  const decodedModel = decodeURIComponent(model);

  // 유효성 검사
  if (
    !carBrands[decodedBrand] ||
    !carBrands[decodedBrand].includes(decodedModel)
  ) {
    notFound();
  }

  return (
    <CarDetailClient
      brand={decodedBrand}
      model={decodedModel}
      year={year || "전체"}
    />
  );
}
