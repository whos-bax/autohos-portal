"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car } from "lucide-react";

const navItems = [
  { href: "/", label: "차량 정비정보", match: ["/", "/cars"] },
  { href: "/shops", label: "정비소 찾기", match: ["/shops"] },
  { href: "/community", label: "커뮤니티", match: ["/community"] },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (match: string[]) => {
    return match.some(
      (m) => pathname === m || (m !== "/" && pathname.startsWith(m))
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-2.5 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 md:gap-3">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-sm">
            <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-gray-900 leading-tight">
              오토호스
            </span>
            <span className="text-[10px] text-gray-400 leading-tight hidden sm:block">
              정비 데이터 포털
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.match)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-gray-400">실시간 정비 데이터</div>
            <div className="text-sm font-semibold text-blue-600">
              2,145,892건
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
