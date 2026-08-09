import type { Metadata } from "next";
import Link from "next/link";
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

      {/* The full picture — everything else that serves food nearby, honestly
          labeled. Kept as one-liners; only verified claims get full cards. */}
      <div className="relative mx-6 mb-14 flex flex-col gap-3 rounded-[24px] bg-white/70 px-6 py-7 md:mx-11 md:px-9">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          Also in (and around) the village
        </h2>
        <ul className="flex max-w-[720px] list-none flex-col gap-2 text-[14px] leading-relaxed text-ink-3">
          <li>
            <strong className="text-ink">Inside the hotels:</strong> the St.
            Regis also runs its lobby bar and poolside dining beyond
            Atlantikós; the Sea View keeps its own beachfront café for
            guests.
          </li>
          <li>
            <strong className="text-ink">The locals&apos; breakfast secret:</strong>{" "}
            cross the 96th Street bridge to Kane Concourse on Bay Harbor
            Islands — bakery counters, Cuban cafecito and açaí at
            neighborhood prices.{" "}
            <Link
              href="/guides/bay-harbor-islands"
              className="font-semibold text-gold-deep underline decoration-gold/50 underline-offset-2"
            >
              The dinner-island guide
            </Link>{" "}
            has the strip in five stops.
          </li>
          <li>
            <strong className="text-ink">Keeping kosher?</strong> Surfside&apos;s
            Harding Avenue, five minutes south, is the area&apos;s kosher
            dining hub — the local synagogue maintains{" "}
            <a
              href="https://www.yicbh.org/visitors/kosher-restaurants"
              target="_blank"
              rel="noopener"
              className="font-semibold text-gold-deep underline decoration-gold/50 underline-offset-2"
            >
              an updated list
            </a>
            .
          </li>
          <li>
            <strong className="text-ink">Recently closed</strong> (so you can
            stop looking): Le Zoo and Aba, both gone from the Shops in
            2025–26 — Slim&apos;s now lives in that space. Artisan Beach
            House is dark until the Ritz-Carlton reopens in January 2027.
          </li>
        </ul>
      </div>

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
