import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bal-harbour.com"),
  title: {
    default: "bal-harbour.com — a friendly local guide",
    template: "%s · bal-harbour.com",
  },
  description:
    "A friendly, upscale-but-not-stuffy local guide to Bal Harbour, Florida — where to stay, eat, shop and float.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
