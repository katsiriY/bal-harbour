import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotelsList from "@/components/HotelsList";
import JsonLd from "@/components/JsonLd";
import { HOTELS } from "@/lib/hotels";
import { breadcrumbJsonLd, hotelsItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Hotels in Bal Harbour, FL — Ranked & Reviewed by Locals",
  description:
    "Every hotel in Bal Harbour, Florida, honestly ranked: oceanfront resorts, family stays and adults-mostly boutiques from $640/night. We've slept, swum and ordered room service in all of them.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          WHERE TO STAY IN BAL HARBOUR · ZERO DUDS
        </div>
        <h1 className="max-w-[700px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          The best hotels in Bal Harbour,{" "}
          <em className="font-serif-italic text-gold">honestly rated.</em>
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-ink-4">
          Oceanfront resorts on Collins Avenue, a family favorite and one
          quiet boutique — we&apos;ve slept, swum and ordered room service in
          all of them. Rates come from our booking partners; booking through
          us costs you nothing extra.
        </p>
      </div>

      <HotelsList hotels={HOTELS} />

      <Footer />

      <JsonLd data={hotelsItemListJsonLd(HOTELS)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hotels", path: "/hotels" },
        ])}
      />
    </div>
  );
}
