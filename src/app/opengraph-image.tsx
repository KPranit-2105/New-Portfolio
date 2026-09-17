import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profileData.name} - Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0F172A, #020617)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              PK
            </div>
            <span style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              {profileData.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "9999px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34D399",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            Verified Portfolio
          </div>
        </div>

        {/* Center Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              color: "white",
            }}
          >
            {profileData.title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#60A5FA",
              fontFamily: "monospace",
            }}
          >
            {profileData.subtitle}
          </div>
        </div>

        {/* Bottom Frameworks Pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Java 21 & Spring Boot", "AWS & Cloud Security", "ISO 27001", "NIST 800-53", "SOC 2 Type II", "PCI DSS"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "#1E293B",
                  border: "1px solid #334155",
                  fontSize: "16px",
                  color: "#E2E8F0",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
