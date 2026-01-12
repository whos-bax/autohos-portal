"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, MapPin, MessageSquare } from "lucide-react";

const navItems = [
  { href: "/", icon: Car, label: "정비정보", match: ["/", "/cars"] },
  { href: "/shops", icon: MapPin, label: "정비소", match: ["/shops"] },
  {
    href: "/community",
    icon: MessageSquare,
    label: "커뮤니티",
    match: ["/community"],
  },
];

export function MobileNav() {
  const pathname = usePathname();

  const isActive = (match: string[]) => {
    return match.some(
      (m) => pathname === m || (m !== "/" && pathname.startsWith(m))
    );
  };

  const handleClick = (e: React.MouseEvent, match: string[]) => {
    // 현재 페이지와 같은 탭 클릭 시 top으로 스크롤
    if (isActive(match)) {
      e.preventDefault();
      // 정확히 최상단으로 스크롤 (header 위까지)
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.match);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.match)}
              className={`flex flex-col items-center py-1 px-4 transition-colors ${
                active ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
