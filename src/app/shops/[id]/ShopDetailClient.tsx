"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Star,
  Heart,
  Share2,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  User,
} from "lucide-react";
import { Shop } from "@/types";

interface ShopDetailClientProps {
  shop: Shop;
}

const repairHistory = [
  { car: "그랜저 IG", date: "2시간 전", items: ["엔진오일 교환", "오일필터 교환"] },
  { car: "BMW 520d", date: "5시간 전", items: ["브레이크 패드 교환"] },
  { car: "소나타 DN8", date: "어제", items: ["에어컨 필터", "실내 소독"] },
  { car: "벤츠 E클래스", date: "어제", items: ["정기 점검", "타이어 로테이션"] },
];

const priceList = [
  { item: "엔진오일 교환", price: "85,000", range: "70,000 ~ 100,000" },
  { item: "브레이크 패드 교환 (전륜)", price: "150,000", range: "130,000 ~ 180,000" },
  { item: "에어컨 필터 교환", price: "35,000", range: "25,000 ~ 45,000" },
  { item: "타이어 교환 (4개)", price: "400,000", range: "300,000 ~ 600,000" },
  { item: "미션오일 교환", price: "120,000", range: "100,000 ~ 150,000" },
];

const reviews = [
  {
    user: "김**",
    date: "2024.12.10",
    rating: 5,
    car: "그랜저 IG",
    content: "친절하고 설명도 자세하게 해주셔서 좋았습니다. 가격도 합리적이에요.",
  },
  {
    user: "이**",
    date: "2024.12.08",
    rating: 5,
    car: "BMW 520d",
    content: "수입차 전문이라 믿고 맡겼는데 역시 실력 좋으시네요. 단골 될 것 같습니다.",
  },
  {
    user: "박**",
    date: "2024.12.05",
    rating: 4,
    car: "소나타",
    content: "정비는 잘 해주셨는데 대기 시간이 좀 길었어요. 예약 추천합니다.",
  },
  {
    user: "최**",
    date: "2024.12.03",
    rating: 5,
    car: "아반떼",
    content: "가격도 착하고 일도 꼼꼼하게 잘 해주세요. 강추!",
  },
];

export function ShopDetailClient({ shop }: ShopDetailClientProps) {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div>
      {/* 상단 이미지 */}
      <div className="relative h-56 lg:h-80 bg-gray-300">
        <Image
          src={shop.image}
          alt={shop.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <Link
          href="/shops"
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div className="absolute bottom-6 left-4 lg:left-8 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold">{shop.name}</h1>
          <p className="text-white/80 mt-1">{shop.area}</p>
        </div>
      </div>

      {/* 기본 정보 카드 */}
      <div className="max-w-5xl mx-auto px-4 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-lg">{shop.rating}</span>
                <span className="text-gray-500">({shop.reviews}개 리뷰)</span>
              </div>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                {shop.specialty}
              </span>
              <span className="text-sm text-gray-500">
                오늘 {shop.todayCount}대 정비 완료
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              전화하기
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              예약하기
            </button>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="bg-white border-b mt-4 sticky top-[57px] z-40">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="flex gap-6 overflow-x-auto">
            {[
              { id: "info", label: "정보" },
              { id: "history", label: "최근 정비" },
              { id: "price", label: "가격 정보" },
              { id: "review", label: "리뷰" },
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
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6">
        {activeTab === "info" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">기본 정보</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-gray-900">
                        서울특별시 {shop.area} 123-45
                      </div>
                      <button className="text-blue-600 text-sm hover:underline">
                        지도에서 보기
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <span
                        className={`font-medium ${shop.open ? "text-green-600" : "text-red-600"}`}
                      >
                        {shop.open ? "영업중" : "영업종료"}
                      </span>
                      <span className="text-gray-500 ml-2">
                        09:00 - 19:00 (일요일 휴무)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">02-1234-5678</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-4">전문 분야</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    shop.specialty,
                    "BMW",
                    "벤츠",
                    "Audi",
                    "엔진 정비",
                    "미션 정비",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    오토호스 인증
                  </span>
                </div>
                <p className="text-sm text-blue-700">
                  정비 이력이 자동으로 기록됩니다
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  이 정비소의 장점
                </h3>
                <div className="space-y-2">
                  {["친절한 상담", "투명한 가격", "빠른 정비"].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <div className="text-sm text-blue-700">
                최근 30일간 <strong>127대</strong>의 차량을 정비했습니다
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {repairHistory.map((record, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      {record.car}
                    </span>
                    <span className="text-sm text-gray-500">{record.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {record.items.map((item, j) => (
                      <span
                        key={j}
                        className="bg-gray-100 text-gray-600 text-sm px-2.5 py-1 rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "price" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              실제 정비 데이터 기반 평균 가격입니다
            </p>

            <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      정비 항목
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600">
                      평균 가격
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-600 hidden md:table-cell">
                      가격 범위
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {priceList.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">
                        {item.item}
                      </td>
                      <td className="py-4 px-4 text-right font-semibold text-gray-900">
                        {item.price}원
                      </td>
                      <td className="py-4 px-4 text-right text-sm text-gray-500 hidden md:table-cell">
                        {item.range}원
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "review" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="text-2xl font-bold">{shop.rating}</span>
                <span className="text-gray-500">({shop.reviews}개)</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                리뷰 작성
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {review.user}
                        </div>
                        <div className="text-xs text-gray-500">
                          {review.car} · {review.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
