import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Wrench } from "lucide-react";
import { popularCars } from "@/lib/data";

export function PopularCars() {
  return (
    <section className="py-10 lg:py-16 px-4 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              인기 차량 정비정보
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              가장 많이 조회되는 차량의 정비 데이터
            </p>
          </div>
          <Link
            href="/cars"
            className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline"
          >
            전체보기 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {popularCars.map((car, i) => (
            <Link
              key={i}
              href={`/cars/${encodeURIComponent(car.brand)}/${encodeURIComponent(car.model)}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] lg:text-xs font-medium px-2 py-0.5 rounded-md">
                    {car.year}
                  </span>
                </div>
              </div>

              <div className="p-3 lg:p-4">
                <div className="text-[10px] lg:text-xs text-gray-500 mb-0.5">
                  {car.brand}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-blue-600 transition-colors">
                  {car.model}
                </h3>
                <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-500 mt-1">
                  <Wrench className="w-3 h-3 lg:w-4 lg:h-4" />
                  <span>정비 {(car.repairs / 1000).toFixed(1)}만건</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
