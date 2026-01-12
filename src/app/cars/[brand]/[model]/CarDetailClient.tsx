"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Star,
  Shield,
  MessageSquare,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { repairStats } from "@/lib/data";

interface CarDetailClientProps {
  brand: string;
  model: string;
  year: string;
}

const carImages: Record<string, string> = {
  그랜저:
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=400&fit=crop",
  소나타:
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=400&fit=crop",
  K5: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=400&fit=crop",
  default:
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=400&fit=crop",
};

const commonIssues: {
  issue: string;
  percentage: number;
  severity: "high" | "medium" | "low";
}[] = [
  { issue: "미션 충격", percentage: 12, severity: "medium" },
  { issue: "서스펜션 소음", percentage: 8, severity: "low" },
  { issue: "에어컨 성능 저하", percentage: 15, severity: "low" },
  { issue: "배터리 방전", percentage: 5, severity: "medium" },
];

const recommendedShops = [
  {
    name: "모드게러지",
    area: "강남구",
    rating: 4.8,
    specialty: "수입차/현대 전문",
    count: 234,
  },
  {
    name: "태영자동차",
    area: "서초구",
    rating: 4.7,
    specialty: "엔진 전문",
    count: 189,
  },
  {
    name: "카서비스샵",
    area: "송파구",
    rating: 4.9,
    specialty: "종합 정비",
    count: 156,
  },
  {
    name: "오일웍스",
    area: "강남구",
    rating: 4.6,
    specialty: "오일/소모품",
    count: 298,
  },
];

const milestones = [
  { km: "10,000km", items: ["엔진오일", "에어컨필터"], cost: "120,000원" },
  { km: "30,000km", items: ["엔진오일", "브레이크 점검"], cost: "150,000원" },
  { km: "50,000km", items: ["타이어 교환", "브레이크 패드"], cost: "650,000원" },
  { km: "80,000km", items: ["미션오일", "점화플러그"], cost: "250,000원" },
  { km: "100,000km", items: ["타이밍벨트", "종합점검"], cost: "450,000원" },
];

export function CarDetailClient({
  brand,
  model,
  year,
}: CarDetailClientProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const imageUrl = carImages[model] || carImages.default;

  return (
    <div>
      {/* 상단 헤더 */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 lg:py-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>돌아가기</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="w-full lg:w-[400px] xl:w-[500px] aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden relative">
              <Image
                src={imageUrl}
                alt={`${brand} ${model}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <div className="text-blue-400 text-sm font-medium mb-1">
                {brand}
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold mb-2">{model}</h1>
              <p className="text-gray-400 mb-6">{year}년식</p>

              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl font-bold">45,230</div>
                  <div className="text-sm text-gray-400">정비 데이터</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl font-bold">12,450</div>
                  <div className="text-sm text-gray-400">등록 차량</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl font-bold">87</div>
                  <div className="text-sm text-gray-400">전문 정비소</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <div className="bg-white border-b sticky top-[57px] z-40">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex gap-4 lg:gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "정비 개요" },
              { id: "cost", label: "비용 정보" },
              { id: "issues", label: "주요 이슈" },
              { id: "shops", label: "추천 정비소" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 lg:py-10">
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                정비 주기 및 예상 비용
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                        정비 항목
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 hidden md:table-cell">
                        권장 주기
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">
                        평균 비용
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {repairStats.map((stat, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">
                            {stat.item}
                          </div>
                          <div className="text-xs text-gray-500 md:hidden">
                            {stat.frequency}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600 hidden md:table-cell">
                          {stat.frequency}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="font-semibold text-gray-900">
                            {stat.avgCost}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.range}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-blue-900">
                      신뢰할 수 있는 데이터
                    </div>
                    <div className="text-sm text-blue-700 mt-1">
                      실제 정비소 45,230건의 정비 기록을 분석한 결과입니다.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {model} 오너 커뮤니티
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  다른 오너들의 정비 후기를 확인하세요
                </p>
                <Link
                  href="/community"
                  className="w-full py-2.5 bg-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  정비 후기 보기
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-3">
                  전문 정비소 찾기
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {brand} 전문 정비소를 찾아보세요
                </p>
                <Link
                  href="/shops"
                  className="w-full py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  정비소 검색
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "cost" && (
          <div className="max-w-4xl space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                주행거리별 예상 정비 비용
              </h2>
              <div className="space-y-4">
                {milestones.map((milestone, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row md:items-center gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-24 text-center md:text-left">
                      <div className="font-bold text-blue-600 text-lg">
                        {milestone.km}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-2">
                      {milestone.items.map((item, j) => (
                        <span
                          key={j}
                          className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {milestone.cost}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <div className="font-medium text-yellow-900">
                    비용은 참고용입니다
                  </div>
                  <div className="text-sm text-yellow-700 mt-1">
                    실제 비용은 정비소, 부품 등급, 차량 상태에 따라 달라질 수
                    있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "issues" && (
          <div className="max-w-3xl space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {model} 주요 이슈 현황
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border divide-y">
              {commonIssues.map((issue, i) => (
                <div key={i} className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900">
                      {issue.issue}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        issue.severity === "high"
                          ? "bg-red-100 text-red-700"
                          : issue.severity === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {issue.severity === "high"
                        ? "주의 필요"
                        : issue.severity === "medium"
                          ? "보통"
                          : "경미"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{ width: `${issue.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-12 text-right">
                      {issue.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              * 동일 모델 차량 중 해당 이슈를 경험한 비율입니다.
            </p>
          </div>
        )}

        {activeTab === "shops" && (
          <div className="max-w-4xl space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {brand} 전문 정비소
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedShops.map((shop, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-sm border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {shop.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {shop.area} · {shop.specialty}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{shop.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {model} 정비 {shop.count}건
                    </span>
                    <Link
                      href={`/shops/${i + 1}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                    >
                      상세보기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/shops"
              className="block w-full py-3 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors text-center"
            >
              모든 정비소 보기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
