import { ImageResponse } from "next/og";

export const alt = "SDVIG — marketing agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG-картинка генерируется на сборке.
 * Текст — латиницей: встроенный шрифт next/og не содержит кириллицы.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090d",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#cbf94d",
              color: "#0b0d12",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            &gt;&gt;
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700, color: "#eef2f6", letterSpacing: -1 }}>
              SDVIG
            </div>
            <div style={{ fontSize: 20, color: "#6a7482", letterSpacing: 4 }}>
              MARKETING AGENCY
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: "#eef2f6",
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            We move marketing forward
          </div>
          <div style={{ fontSize: 30, color: "#cbf94d", marginTop: 24, letterSpacing: 2 }}>
            STRATEGY · CREATIVE · TRAFFIC
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["+180% leads", "ROAS x3.2", "120+ projects"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                border: "1px solid #272d38",
                borderRadius: 999,
                padding: "12px 24px",
                fontSize: 24,
                color: "#98a2b0",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
