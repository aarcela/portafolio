import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Andres Arcela — Full Stack & Mobile Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #f2f7f6 0%, #e6f0ee 45%, #ccfbf1 100%)",
          color: "#12201e",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            background: "#0f766e",
            color: "#f2f7f6",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          AA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            Andres Arcela
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#0f766e",
              fontWeight: 600,
            }}
          >
            Senior Full Stack & Mobile Engineer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#3d524e",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            React Native · Ionic · B2B SaaS · NestJS · Technical Leadership
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
