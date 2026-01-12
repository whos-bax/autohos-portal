import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "차량 정비 정보";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand, model } = await params;
  const decodedBrand = decodeURIComponent(brand);
  const decodedModel = decodeURIComponent(model);

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
        {/* Brand & Model */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            marginBottom: "16px",
          }}
        >
          {decodedBrand} {decodedModel}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "36px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "40px",
          }}
        >
          정비 정보 및 비용 안내
        </div>

        {/* Info boxes */}
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {["정비 비용", "정비 주기", "주요 이슈", "전문 정비소"].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                padding: "16px 32px",
                borderRadius: "12px",
                color: "white",
                fontSize: "20px",
              }}
            >
              {item}
            </div>
          ))}
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
