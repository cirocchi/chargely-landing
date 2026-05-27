import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Chargely – Ricarica EV tra privati a Roma";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F2EFE6",
          color: "#0D1F14",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          chargely • Roma 2026
        </div>
        <div
          style={{
            fontSize: 96,
            lineHeight: 1,
            fontStyle: "italic",
            fontFamily: "serif",
          }}
        >
          Hai una presa elettrica?
          <br />
          Falla guadagnare per te.
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <span
            style={{
              background: "#C6F24D",
              padding: "16px 28px",
              borderRadius: 999,
              fontSize: 28,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            Diventa host →
          </span>
        </div>
      </div>
    ),
    size
  );
}
