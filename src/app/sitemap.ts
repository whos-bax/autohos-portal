import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autohos.kr";

  // 정적 페이지
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/shops`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: "hourly" as const,
      priority: 0.8,
    },
  ];

  // 차량 브랜드/모델 페이지 (실제 구현 시 DB에서 가져오기)
  const carBrands = {
    현대: ["그랜저", "소나타", "아반떼", "투싼", "싼타페", "팰리세이드"],
    기아: ["K5", "K8", "쏘렌토", "카니발", "EV6", "셀토스"],
    제네시스: ["G70", "G80", "G90", "GV70", "GV80"],
  };

  const carPages = Object.entries(carBrands).flatMap(([brand, models]) =>
    models.map((model) => ({
      url: `${baseUrl}/cars/${encodeURIComponent(brand)}/${encodeURIComponent(model)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...carPages];
}
