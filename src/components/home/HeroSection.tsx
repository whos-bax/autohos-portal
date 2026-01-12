"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, MapPin, FileText, Car } from "lucide-react";
import { carBrands, years } from "@/lib/data";

export function HeroSection() {
  const router = useRouter();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const handleSearch = () => {
    if (selectedBrand && selectedModel) {
      router.push(
        `/cars/${encodeURIComponent(selectedBrand)}/${encodeURIComponent(selectedModel)}${selectedYear ? `?year=${selectedYear}` : ""}`
      );
    }
  };

  const closeAllDropdowns = () => {
    setShowBrandDropdown(false);
    setShowModelDropdown(false);
    setShowYearDropdown(false);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                내 차 정비,
                <br />
                <span className="text-blue-400">데이터</span>로 똑똑하게
              </h1>
              <p className="text-gray-400 mb-8 text-base lg:text-lg max-w-md">
                200만건 실제 정비 데이터 기반으로 적정 가격과 정비 주기를
                확인하세요
              </p>

              <div className="hidden lg:flex items-center gap-8 mb-8">
                {[
                  { value: "100+", label: "제휴 정비소" },
                  { value: "200만+", label: "정비 데이터" },
                  { value: "100만+", label: "등록 차량" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 lg:p-8 shadow-2xl">
              <h2 className="text-gray-900 font-semibold text-lg mb-4">
                차량 정비정보 조회
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-3 lg:gap-4">
                {/* 브랜드 선택 */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    브랜드
                  </label>
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setShowBrandDropdown(!showBrandDropdown);
                    }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-left text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedBrand ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedBrand || "브랜드 선택"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  {showBrandDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                      {Object.keys(carBrands).map((brand) => (
                        <button
                          key={brand}
                          onClick={() => {
                            setSelectedBrand(brand);
                            setSelectedModel("");
                            setShowBrandDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 모델 선택 */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    모델
                  </label>
                  <button
                    onClick={() => {
                      if (selectedBrand) {
                        closeAllDropdowns();
                        setShowModelDropdown(!showModelDropdown);
                      }
                    }}
                    disabled={!selectedBrand}
                    className={`w-full px-4 py-3 border border-gray-200 rounded-xl text-left bg-gray-50 flex items-center justify-between transition-colors ${
                      selectedBrand
                        ? "hover:bg-gray-100 text-gray-900"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <span
                      className={
                        selectedModel ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedModel || "모델 선택"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  {showModelDropdown && selectedBrand && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                      {carBrands[selectedBrand].map((model) => (
                        <button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model);
                            setShowModelDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 연식 선택 */}
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    연식
                  </label>
                  <button
                    onClick={() => {
                      closeAllDropdowns();
                      setShowYearDropdown(!showYearDropdown);
                    }}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-left text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedYear ? "text-gray-900" : "text-gray-400"
                      }
                    >
                      {selectedYear ? `${selectedYear}년` : "전체 연식"}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>
                  {showYearDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                      <button
                        onClick={() => {
                          setSelectedYear("");
                          setShowYearDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        전체 연식
                      </button>
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year.toString());
                            setShowYearDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {year}년
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleSearch}
                disabled={!selectedBrand || !selectedModel}
                className={`w-full mt-4 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  selectedBrand && selectedModel
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Search className="w-5 h-5" />
                <span>정비정보 조회하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 모바일 통계 */}
      <section className="lg:hidden bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "100+", label: "제휴 정비소", icon: MapPin },
              { value: "200만+", label: "정비 데이터", icon: FileText },
              { value: "100만+", label: "등록 차량", icon: Car },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
