"use client";

import { useEffect, useState, useCallback, useRef, createContext, useContext } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Context for loading state
const LoadingContext = createContext<{
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}>({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

// 디테일 페이지인지 확인 (데이터 fetch가 필요한 페이지)
const isDetailPage = (href: string) => {
  // /cars/[brand]/[model] 또는 /shops/[id] 패턴
  const carDetailPattern = /^\/cars\/[^/]+\/[^/]+$/;
  const shopDetailPattern = /^\/shops\/\d+$/;
  return carDetailPattern.test(href) || shopDetailPattern.test(href);
};

// Progress bar component
function ProgressBar({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let progressTimer: NodeJS.Timeout;

    if (isLoading) {
      setVisible(true);
      setProgress(0);

      // Animate progress
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressTimer);
            return 90;
          }
          // Fast at first, then slow down
          const increment = prev < 50 ? 15 : prev < 80 ? 5 : 2;
          return Math.min(prev + increment, 90);
        });
      }, 100);
    } else if (visible) {
      // Complete the progress bar
      setProgress(100);
      timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [isLoading, visible]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 transition-all duration-200 ease-out shadow-lg shadow-blue-500/50"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.7), 0 0 5px rgba(59, 130, 246, 0.5)",
        }}
      />
    </div>
  );
}

// Spinner overlay component with coin-flip favicon animation
function LoadingOverlay({ isLoading, showOverlay }: { isLoading: boolean; showOverlay: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading && showOverlay) {
      // 디테일 페이지면 바로 표시
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isLoading, showOverlay]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-white/60 backdrop-blur-sm transition-opacity duration-200">
      <div className="flex flex-col items-center gap-4">
        {/* Coin-flip favicon animation */}
        <div className="perspective-500">
          <div className="animate-coin-flip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-16 h-16 drop-shadow-lg"
            >
              <defs>
                <linearGradient id="bg-loading" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#2563eb" }} />
                  <stop offset="100%" style={{ stopColor: "#1d4ed8" }} />
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#bg-loading)" />
              <svg x="4" y="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </svg>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600">로딩 중...</p>
      </div>
    </div>
  );
}

// Provider component
export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const minLoadingTimeRef = useRef<NodeJS.Timeout | null>(null);
  const loadingStartTimeRef = useRef<number>(0);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  // Stop loading when route changes complete
  useEffect(() => {
    const minLoadingTime = 600; // 최소 로딩 시간 (ms)
    const elapsed = Date.now() - loadingStartTimeRef.current;
    const remaining = Math.max(0, minLoadingTime - elapsed);

    if (remaining > 0 && showOverlay) {
      // 최소 로딩 시간이 지나지 않았으면 대기
      minLoadingTimeRef.current = setTimeout(() => {
        setIsLoading(false);
        setShowOverlay(false);
      }, remaining);
    } else {
      setIsLoading(false);
      setShowOverlay(false);
    }

    return () => {
      if (minLoadingTimeRef.current) {
        clearTimeout(minLoadingTimeRef.current);
      }
    };
  }, [pathname, searchParams]);

  // Intercept link clicks to start loading
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor) {
        const href = anchor.getAttribute("href");
        const isExternal = anchor.getAttribute("target") === "_blank";
        const isHashLink = href?.startsWith("#");
        const isSamePageHash = href?.startsWith(pathname + "#");

        // Only show loading for internal navigation
        if (href && !isExternal && !isHashLink && !isSamePageHash && href !== pathname) {
          // Check if it's an internal link
          if (href.startsWith("/") || href.startsWith(window.location.origin)) {
            setIsLoading(true);
            loadingStartTimeRef.current = Date.now();

            // 디테일 페이지면 오버레이 표시
            if (isDetailPage(href)) {
              setShowOverlay(true);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      <ProgressBar isLoading={isLoading} />
      <LoadingOverlay isLoading={isLoading} showOverlay={showOverlay} />
      {children}
    </LoadingContext.Provider>
  );
}
