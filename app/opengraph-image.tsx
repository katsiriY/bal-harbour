import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Site-wide default OG image (1200×630), generated at build time in the
// brand palette. Hotel detail pages override this with their own photos.
export const alt =
  "bal-harbour.com — a friendly local guide to Bal Harbour, Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [sansBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "assets/InstrumentSans-Bold.ttf")),
    readFile(join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background:
            "linear-gradient(160deg, #0b2a21 0%, #12463a 52%, #1e6350 100%)",
          position: "relative",
        }}
      >
        {/* Sun glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: 180,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(216,196,147,0.32) 0%, rgba(216,196,147,0) 70%)",
          }}
        />
        <div
          style={{
            fontFamily: "InstrumentSans",
            fontSize: 26,
            letterSpacing: "0.18em",
            color: "#d8c493",
            marginBottom: 28,
          }}
        >
          BAL HARBOUR, FLORIDA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "InstrumentSans",
            fontSize: 82,
            lineHeight: 1.06,
            color: "#eef2ec",
            letterSpacing: "-0.02em",
          }}
        >
          <span>Sun&apos;s out. We know</span>
          <span
            style={{
              fontFamily: "InstrumentSerif",
              fontStyle: "italic",
              color: "#d8c493",
            }}
          >
            the good spots.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 54,
            fontFamily: "InstrumentSans",
            fontSize: 30,
          }}
        >
          <span style={{ color: "#eef2ec" }}>bal-harbour</span>
          <span style={{ color: "#b5975a" }}>.com</span>
          <span
            style={{
              color: "rgba(238,242,236,0.6)",
              fontSize: 24,
              marginLeft: 18,
            }}
          >
            · an independent local guide
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "InstrumentSans",
          data: sansBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "InstrumentSerif",
          data: serifItalic,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
