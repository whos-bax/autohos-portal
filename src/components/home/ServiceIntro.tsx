"use client";

import Link from "next/link";
import { BarChart3, MapPin, MessageSquare } from "lucide-react";
import { repairTrends } from "@/lib/data";

export function ServiceIntro() {
  return (
    <section className="py-10 lg:py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* 서비스 소개 */}
          <div className="lg:col-span-3">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              오토호스 포털 서비스
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: BarChart3,
                  title: "차량별 정비 통계",
                  desc: "정비 항목, 비용, 주기 확인",
                  color: "blue",
                  href: "/",
                },
                {
                  icon: MapPin,
                  title: "정비소 찾기",
                  desc: "위치, 전문분야, 리뷰 검색",
                  color: "green",
                  href: "/shops",
                },
                {
                  icon: MessageSquare,
                  title: "커뮤니티",
                  desc: "정비 팁과 비용 후기 공유",
                  color: "purple",
                  href: "/community",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="bg-gray-50 p-5 rounded-2xl hover:bg-gray-100 transition-all text-left group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
                      item.color === "blue"
                        ? "bg-blue-100"
                        : item.color === "green"
                          ? "bg-green-100"
                          : "bg-purple-100"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        item.color === "blue"
                          ? "text-blue-600"
                          : item.color === "green"
                            ? "text-green-600"
                            : "text-purple-600"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* 정비 트렌드 */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                이번 주 정비 트렌드
              </h2>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                실시간
              </span>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 lg:p-5">
              <div className="space-y-3">
                {repairTrends.map((trend, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
                        {i + 1}
                      </span>
                      <div>
                        <span className="font-medium text-gray-900 text-sm">
                          {trend.item}
                        </span>
                        <div className="text-[10px] text-gray-400">
                          {trend.count.toLocaleString()}건
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 text-sm">
                        {trend.avg}
                      </div>
                      <div
                        className={`text-[10px] ${trend.trend.startsWith("+") ? "text-red-500" : "text-blue-500"}`}
                      >
                        {trend.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
