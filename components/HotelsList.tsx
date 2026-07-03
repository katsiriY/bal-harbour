"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { bestRate, type FilterTag, type Hotel } from "@/lib/hotels";

const FILTERS: ("All" | FilterTag)[] = [
  "All",
  "Oceanfront",
  "Adults-mostly",
  "Family",
  "Spa",
  "Pet-friendly",
];

function stars(n: number) {
  return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
}

export default function HotelsList({ hotels }: { hotels: Hotel[] }) {
  const [filter, setFilter] = useState<"All" | FilterTag>("All");
  const [sort, setSort] = useState<"ranking" | "price">("ranking");

  const list = useMemo(() => {
    let result =
      filter === "All"
        ? hotels
        : hotels.filter((h) => h.filterTags.includes(filter));
    if (sort === "price") {
      result = [...result].sort((a, b) => a.price - b.price);
    }
    return result;
  }, [hotels, filter, sort]);

  return (
    <>
      <div className="relative flex flex-col gap-4 px-6 pb-6 pt-3 md:flex-row md:items-center md:justify-between md:px-11">
        <div className="flex flex-wrap gap-2 text-[13.5px] font-semibold text-ink">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={[
                "rounded-full px-4 py-2 transition-colors",
                filter === f ? "bg-ink text-ivory" : "bg-white/80 hover:bg-white",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 self-start rounded-full bg-white/80 px-4 py-2 text-[13.5px] font-medium text-ink-4 md:self-auto">
          Sort:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "ranking" | "price")}
            className="bg-transparent font-medium text-ink-4 focus:outline-none"
          >
            <option value="ranking">our ranking</option>
            <option value="price">price, low to high</option>
          </select>
        </label>
      </div>

      <div className="relative flex flex-col gap-5 px-6 pb-12 md:px-11">
        {list.map((hotel) => (
          <article
            key={hotel.slug}
            className="hover-lift grid grid-cols-1 overflow-hidden rounded-[24px] bg-white shadow-card md:grid-cols-[380px_1fr]"
          >
            <ImageCarousel
              images={hotel.images}
              alt={hotel.name}
              className="min-h-[250px]"
            >
              <div
                className={[
                  "absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-xs font-bold",
                  hotel.rankBadge === "gold"
                    ? "bg-gold text-ink"
                    : "bg-ivory text-ink",
                ].join(" ")}
              >
                {hotel.rankLabel}
              </div>
            </ImageCarousel>
            <div className="flex flex-col gap-2.5 px-6 py-6 md:px-7.5">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-2xl font-bold text-ink">{hotel.name}</h3>
                <div className="text-[13px] text-ink-4">
                  {stars(hotel.stars)} · {hotel.category}
                </div>
              </div>
              <p className="font-serif-italic text-[17px] leading-snug text-ink-2">
                “{hotel.pullQuote}”
              </p>
              <div className="flex flex-wrap gap-2 text-[12.5px] font-semibold text-ink-2">
                {hotel.amenities.map((a) => (
                  <span key={a} className="rounded-full bg-ink/7 px-3 py-1.5">
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-ink/10 pt-2.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-[15px] text-ink">
                  from <strong className="text-[19px]">${hotel.price}</strong>/night
                </div>
                <div className="flex gap-2.5">
                  <Link
                    href={`/hotels/${hotel.slug}`}
                    className="rounded-full border-[1.5px] border-ink/30 px-4.5 py-2.5 text-[13.5px] font-semibold text-ink no-underline hover:bg-ink/5"
                  >
                    Full review
                  </Link>
                  <a
                    href={bestRate(hotel).url}
                    target="_blank"
                    rel="sponsored noopener"
                    className="btn-gold rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-ink no-underline"
                  >
                    Check rates ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && (
          <div className="rounded-2xl bg-white/70 px-6 py-10 text-center text-body">
            No hotels match that filter yet — try another tag.
          </div>
        )}
        <div className="pt-1.5 text-center text-[12.5px] text-muted">
          We may earn a commission when you book through links on this page.
          Rankings are ours alone.
        </div>
      </div>
    </>
  );
}
