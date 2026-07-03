import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiningList from "@/components/DiningList";
import JsonLd from "@/components/JsonLd";
import { RESTAURANTS } from "@/lib/restaurants";
import { breadcrumbJsonLd, restaurantsItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Restaurants in Bal Harbour — A Local's Dining Guide",
  description:
    "Where to eat in Bal Harbour, Florida: the best restaurants near the Bal Harbour Shops and the beach — breakfast, long lunches, date nights and drinks. No pay-to-play; we've paid every bill ourselves.",
  alternates: { canonical: "/eat" },
};

export default function DiningPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          WHERE TO EAT IN BAL HARBOUR · UPDATED WEEKLY
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          14 tables in Bal Harbour{" "}
          <em className="font-serif-italic text-gold">we actually love.</em>
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-ink-4">
          The best restaurants in and around the village — from the beach
          kiosk to date-night pasta. No pay-to-play: if it&apos;s on this
          list, we&apos;ve paid the bill ourselves at least twice.
        </p>
      </div>

      <DiningList />

      <Footer />

      <JsonLd data={restaurantsItemListJsonLd(RESTAURANTS)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Eat & drink", path: "/eat" },
        ])}
      />
    </div>
  );
}
