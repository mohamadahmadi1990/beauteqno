import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          padding: "56px",
          background:
            "radial-gradient(circle at top, #1c2456 0%, #080b17 40%, #04050b 100%)",
          color: "#f8faff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, opacity: 0.75 }}>BEAUTEQNO</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 920,
            }}
          >
            AI beauty devices with personalized software intelligence.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#b5c2dd",
              maxWidth: 840,
            }}
          >
            Premium beauty-tech for the next generation of connected treatments.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
