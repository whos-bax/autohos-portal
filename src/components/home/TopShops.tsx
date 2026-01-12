"use client";

import Link from "next/link";
import { Star, MapPin, MessageSquare, ChevronRight, Award } from "lucide-react";
import { topRatedShops, shopReviews } from "@/lib/data";

type Shop = (typeof topRatedShops)[number];

function ShopCard({ shop, index }: { shop: Shop; index: number }) {
  const reviews = shopReviews[shop.id] || [];
  const displayReviews = reviews.slice(0, 2);

  return (
    <Link
      href={`/shops/${shop.id}`}
      className="block bg-gray-50 hover:bg-gray-100 rounded-2xl p-4 transition-colors"
    >
      <div className="flex gap-3">
        {/* Rank Badge */}
        <div className="flex-shrink-0">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold ${
              index === 0
                ? "bg-yellow-400 text-yellow-900"
                : index === 1
                ? "bg-gray-300 text-gray-700"
                : index === 2
                ? "bg-amber-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
        </div>

        {/* Shop Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-gray-900 truncate">
                {shop.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                <span className="flex items-center gap-0.5 truncate">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {shop.area}
                </span>
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs flex-shrink-0">
                  {shop.specialty}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-gray-900">{shop.rating}</span>
              <span className="text-xs text-gray-400">({shop.reviews})</span>
            </div>
          </div>

          {/* Reviews Preview */}
          {displayReviews.length > 0 && (
            <div className="space-y-1.5 mt-2 pt-2 border-t border-gray-200">
              {displayReviews.map((review) => (
                <div key={review.id} className="flex items-start gap-1.5">
                  <MessageSquare className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 line-clamp-1">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-400">
                      <span>{review.author}</span>
                      <span className="text-gray-300">|</span>
                      <span>{review.car}</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function TopShops() {
  // PC: 10개, 모바일: 5개
  const mobileShops = topRatedShops.slice(0, 5);
  const desktopShops = topRatedShops.slice(0, 10);

  return (
    <section className="py-10 lg:py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                이달의 인기 정비소
              </h2>
            </div>
            <p className="text-gray-600">
              별점과 리뷰를 기반으로 선정된 우수 정비소입니다
            </p>
          </div>
          <Link
            href="/shops"
            className="hidden lg:flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
          >
            전체보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile: 1열 5개 */}
        <div className="lg:hidden space-y-3">
          {mobileShops.map((shop, index) => (
            <ShopCard key={shop.id} shop={shop} index={index} />
          ))}
        </div>

        {/* Desktop: 2열 그리드 10개 */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-4">
          {desktopShops.map((shop, index) => (
            <ShopCard key={shop.id} shop={shop} index={index} />
          ))}
        </div>

        {/* Mobile: View All Button */}
        <div className="mt-6 lg:hidden">
          <Link
            href="/shops"
            className="flex items-center justify-center gap-1 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
          >
            전체 정비소 보기
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
