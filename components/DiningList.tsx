"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DINING_TAGS, RESTAURANTS, type DiningTag, type Restaurant } from "@/lib/restaurants";
import { openTableSearchUrl } from "@/lib/affiliates";
import VillageMap from "@/components/VillageMap";

const FILTERS: ("All" | DiningTag)[] = ["All", ...DINING_TAGS];

function reserveHref(r: Restaurant): string {
  return r.reserveUrl ?? openTableSearchUrl(r.name);
}

function RestaurantCard({ r, imageHeight = "h-[140px]" }: { r: Restaurant; imageHeight?: string }) {
  return (
    <div className="hover-lift overflow-hidden rounded-[22px] bg-white shadow-small">
      <div className={`relative ${imageHeight}`}>
        <Image src={r.image} alt={r.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1.5 px-5 pb-4.5 pt-4">
        <div className="text-lg font-bold text-ink">
          {r.name}{" "}
          <span className="text-[13px] font-medium text-muted">
            · {r.category} · {r.price}
          </span>
        </div>
        <p className="text-[13.5px] leading-snug text-body">{r.blurb}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="text-xs text-muted">{r.location}</span>
          <a
            href={reserveHref(r)}
            target="_blank"
            rel="sponsored noopener"
            className="text-[13px] font-semibold text-gold-deep no-underline hover:underline"
          >
            Reserve ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DiningList() {
  const [filter, setFilter] = useState<"All" | DiningTag>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return RESTAURANTS;
    return RESTAURANTS.filter((r) => r.tags.includes(filter));
  }, [filter]);

  const featured = RESTAURANTS.find((r) => r.featured)!;
  const secondary = RESTAURANTS.filter((r) => !r.featured).slice(0, 2);
  const grid = RESTAURANTS.filter((r) => !r.featured).slice(2);

  return (
    <>
      <div className="relative flex flex-wrap gap-2 px-6 pb-6 pt-6 text-[13.5px] font-semibold text-ink md:px-11">
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

      {filter === "All" ? (
        <>
          <div className="relative grid grid-cols-1 gap-5 px-6 md:grid-cols-[1.5fr_1fr] md:px-11">
            <a
              href={reserveHref(featured)}
              target="_blank"
              rel="sponsored noopener"
              className="hover-lift relative block min-h-[420px] overflow-hidden rounded-[24px] no-underline"
            >
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-[rgba(11,42,33,0.92)] from-70% to-transparent px-6 pb-6 pt-24">
                <div className="text-xs font-bold tracking-[0.16em] text-gold-light">
                  TABLE OF THE MONTH
                </div>
                <div className="text-2xl font-bold text-ivory md:text-[30px]">
                  {featured.name}{" "}
                  <span className="text-base font-medium text-ivory/70">
                    · {featured.category} · {featured.price}
                  </span>
                </div>
                <p className="font-serif-italic text-[17px] leading-snug text-ivory/85">
                  “{featured.quote}”
                </p>
                <div className="mt-2 flex gap-2.5">
                  <span className="btn-gold rounded-full px-4.5 py-2.5 text-[13px] font-semibold text-ink">
                    Reserve ↗
                  </span>
                  <span className="rounded-full border-[1.5px] border-ivory/40 px-4.5 py-2.5 text-[13px] font-semibold text-ivory">
                    Read the review
                  </span>
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-5">
              {secondary.map((r) => (
                <RestaurantCard key={r.slug} r={r} imageHeight="h-[120px]" />
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-5 px-6 pb-12 pt-5 sm:grid-cols-2 md:grid-cols-3 md:px-11">
            {grid.map((r) => (
              <RestaurantCard key={r.slug} r={r} />
            ))}
          </div>
        </>
      ) : (
        <div className="relative grid grid-cols-1 gap-5 px-6 pb-12 sm:grid-cols-2 md:grid-cols-3 md:px-11">
          {filtered.map((r) => (
            <RestaurantCard key={r.slug} r={r} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl bg-white/70 px-6 py-10 text-center text-body">
              No tables match that filter yet — try another tag.
            </div>
          )}
        </div>
      )}

      <VillageMap />
    </>
  );
}
