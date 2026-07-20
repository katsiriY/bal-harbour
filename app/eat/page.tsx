import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiningList from "@/components/DiningList";
import JsonLd from "@/components/JsonLd";
import { RESTAURANTS } from "@/lib/restaurants";
import { breadcrumbJsonLd, restaurantsItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Restaurants in Bal Harbour (2026) — Makoto, Slim's & More",
  description:
    "Where to eat in Bal Harbour, Florida right now: Makoto's sushi, Stephen Starr's new Slim's steakhouse, Carpaccio's terrace, Hillstone, Sant Ambroeus, Atlantikós at the St. Regis, and Thomas Keller's Surf Club Restaurant next door — with a real map of the village.",
  alternates: { canonical: "/eat" },
};

export default function DiningPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          WHERE TO EAT IN BAL HARBOUR · VERIFIED JULY 2026
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          Seven tables{" "}
          <em className="font-serif-italic text-gold">we actually love.</em>
        </h1>
        <p className="max-w-[620px] text-base leading-relaxed text-ink-4">
          Seven is the honest number for a village this size — most of them
          inside the Shops, one at the St. Regis, one Michelin star five
          minutes south. Every listing verified open as of July 2026 (RIP Le
          Zoo and Aba — we checked).
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
