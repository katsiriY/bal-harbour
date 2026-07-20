import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotelsList from "@/components/HotelsList";
import JsonLd from "@/components/JsonLd";
import { HOTELS } from "@/lib/hotels";
import { breadcrumbJsonLd, hotelsItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Hotels in Bal Harbour, FL — All 3, Ranked by Locals (2026)",
  description:
    "Every hotel in Bal Harbour, Florida — all three of them, honestly ranked: The St. Regis (from $687), the independent Sea View Hotel (from $208), and the Ritz-Carlton, closed for renovation until January 2027.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          WHERE TO STAY IN BAL HARBOUR · ALL THREE, HONESTLY
        </div>
        <h1 className="max-w-[700px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          Every hotel in Bal Harbour,{" "}
          <em className="font-serif-italic text-gold">all three of them.</em>
        </h1>
        <p className="max-w-[620px] text-base leading-relaxed text-ink-4">
          The village keeps it small on purpose: one flagship (the St.
          Regis), one old-school classic (the Sea View), and one boutique
          mid-renovation (the Ritz-Carlton, back January 2027). Rates come
          from our booking partners; booking through us costs you nothing
          extra.
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
