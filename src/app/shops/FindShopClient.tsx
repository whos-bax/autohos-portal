"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Navigation, MapPin, Star } from "lucide-react";
import { shops } from "@/lib/data";

const filters = [
  { id: "engine", label: "엔진 정비" },
  { id: "brake", label: "브레이크" },
  { id: "oil", label: "오일/소모품" },
  { id: "import", label: "수입차 전문" },
  { id: "body", label: "판금/도색" },
  { id: "electric", label: "전기차" },
];

export function FindShopClient() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (id: string) => {
    setSelectedFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 검색 헤더 */}
      <div className="bg-white border-b border-gray-100 sticky top-[57px] z-40">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="정비소명 또는 지역 검색"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="px-5 py-3 bg-blue-600 text-white rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors font-medium">
              <Navigation className="w-5 h-5" />
              <span className="hidden md:inline">내 위치</span>
            </button>
          </div>

          {/* 모바일 필터 */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pt-3 pb-1 -mx-4 px-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedFilters.includes(filter.id)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* PC 좌측 필터 사이드바 */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-[140px]">
              <h3 className="font-semibold text-gray-900 mb-4">필터</h3>

              <div className="space-y-3">
                <div className="font-medium text-gray-700 text-sm">
                  전문 분야
                </div>
                {filters.map((filter) => (
                  <label
                    key={filter.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(filter.id)}
                      onChange={() => toggleFilter(filter.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {filter.label}
                    </span>
                  </label>
                ))}
              </div>

              <hr className="my-5" />

              <div className="space-y-3">
                <div className="font-medium text-gray-700 text-sm">
                  영업 상태
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">영업중만 보기</span>
                </label>
              </div>

              <hr className="my-5" />

              <div className="space-y-3">
                <div className="font-medium text-gray-700 text-sm">정렬</div>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>거리순</option>
                  <option>평점순</option>
                  <option>리뷰순</option>
                </select>
              </div>

              {selectedFilters.length > 0 && (
                <button
                  onClick={() => setSelectedFilters([])}
                  className="w-full mt-5 py-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  필터 초기화
                </button>
              )}
            </div>
          </aside>

          {/* 우측 메인 영역 */}
          <div className="flex-1 min-w-0">
            {/* 지도 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl h-64 lg:h-80 mb-6 flex items-center justify-center relative overflow-hidden border border-gray-200">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                <span className="text-gray-600 font-medium">지도 영역</span>
              </div>
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                1
              </div>
              <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                2
              </div>
              <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                3
              </div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                4
              </div>
            </div>

            {/* 정비소 목록 */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">
                총 {shops.length}개의 정비소
              </span>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {shops.map((shop) => (
                <Link
                  key={shop.id}
                  href={`/shops/${shop.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[16/10] bg-gray-200 relative overflow-hidden">
                    <Image
                      src={shop.image}
                      alt={shop.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {!shop.open && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium">영업종료</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
                      {shop.distance}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {shop.name}
                      </h3>
                      {shop.open && (
                        <span className="text-xs text-green-600 font-medium">
                          영업중
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{shop.area}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-sm">
                          {shop.rating}
                        </span>
                        <span className="text-gray-400 text-xs">
                          ({shop.reviews})
                        </span>
                      </div>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                        {shop.specialty}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
