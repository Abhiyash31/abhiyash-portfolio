import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0b",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5f5f68",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>abhiyash.dev</span>
          <span>{site.focus}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 14, height: 14, borderRadius: 99, background: "#e0a45c" }} />
            <span style={{ color: "#9a9aa2", fontSize: 26, letterSpacing: 3, textTransform: "uppercase" }}>
              {site.role}
            </span>
          </div>
          <div style={{ display: "flex", color: "#f4f3ef", fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", color: "#e0a45c", fontSize: 40, marginTop: 18 }}>
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", color: "#5f5f68", fontSize: 22 }}>
          {site.location} · Michigan State University '26
        </div>
      </div>
    ),
    { ...size }
  );
}
