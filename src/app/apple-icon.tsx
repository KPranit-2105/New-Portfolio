import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38BDF8",
          borderRadius: 36,
          fontWeight: "bold",
          border: "8px solid #2563EB",
          fontFamily: "sans-serif",
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  );
}
