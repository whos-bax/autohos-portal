"use client";

import { useState } from "react";
import { MessageSquare, Eye } from "lucide-react";
import { communityPosts } from "@/lib/data";

const categories = [
  "전체",
  "정비 Q&A",
  "비용 후기",
  "정비 팁",
  "그랜저",
  "소나타",
  "K5",
  "아반떼",
];

export function CommunityClient() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredPosts =
    activeCategory === "전체"
      ? communityPosts
      : communityPosts.filter((post) => post.category === activeCategory);

  const hotPosts = communityPosts.filter((p) => p.hot);

  return (
    <div>
      {/* 헤더 */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6 lg:py-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            커뮤니티
          </h1>
          <p className="text-gray-500 mt-1">
            차량 정비 정보를 공유하고 소통하세요
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6">
        <div className="flex gap-8">
          {/* PC 좌측 사이드바 */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-[100px]">
              <h3 className="font-semibold text-gray-900 mb-4">카테고리</h3>
              <div className="space-y-1">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === cat
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <hr className="my-5" />

              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                글쓰기
              </button>
            </div>
          </aside>

          {/* 메인 컨텐츠 */}
          <div className="flex-1 min-w-0">
            {/* 모바일 카테고리 */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-4 px-4">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 인기 글 */}
            {activeCategory === "전체" && (
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 mb-6 border border-orange-100">
                <h2 className="font-semibold text-orange-900 mb-4 flex items-center gap-2">
                  <span className="text-lg">🔥</span> 이번 주 인기 글
                </h2>
                <div className="grid md:grid-cols-3 gap-3">
                  {hotPosts.map((post, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-3 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 text-xs font-bold">
                          {i + 1}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.category}
                        </span>
                      </div>
                      <span className="text-gray-900 text-sm font-medium line-clamp-1">
                        {post.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 게시글 목록 */}
            <div className="space-y-3">
              {filteredPosts.map((post, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-lg font-medium">
                      {post.category}
                    </span>
                    {post.hot && (
                      <span className="text-orange-500 text-xs font-medium">
                        🔥 인기
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {post.time}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors text-lg">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 글쓰기 버튼 */}
      <button className="lg:hidden fixed bottom-24 right-4 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
        <span className="text-2xl leading-none">+</span>
      </button>
    </div>
  );
}
