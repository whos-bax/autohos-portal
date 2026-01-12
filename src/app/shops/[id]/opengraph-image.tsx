import { ImageResponse } from "next/og";
import { shops } from "@/lib/data";

export const runtime = "edge";

export const alt = "정비소 정보";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = shops.find((s) => s.id === parseInt(id));

  if (!shop) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#2563eb",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
          }}
        >
          정비소를 찾을 수 없습니다
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Shop name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "16px",
          }}
        >
          {shop.name}
        </div>

        {/* Location & Specialty */}
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "32px",
          }}
        >
          {shop.area} · {shop.specialty}
        </div>

        {/* Rating & Reviews */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255, 255, 255, 0.15)",
              padding: "16px 32px",
              borderRadius: "16px",
            }}
          >
            <span style={{ fontSize: "40px" }}>⭐</span>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {shop.rating}
            </span>
          </div>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              padding: "16px 32px",
              borderRadius: "16px",
              color: "white",
              fontSize: "28px",
            }}
          >
            리뷰 {shop.reviews}개
          </div>
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            오토호스
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
