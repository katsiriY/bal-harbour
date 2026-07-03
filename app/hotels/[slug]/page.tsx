import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HOTELS, bestRate, getHotelBySlug, relatedHotels } from "@/lib/hotels";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, hotelJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return HOTELS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) return {};
  const title = `${hotel.name} Review — ${hotel.category} Hotel in Bal Harbour`;
  const description = `${hotel.name}, Bal Harbour, FL: ${hotel.oneLiner} Our honest review, photos, and the best rates from $${hotel.price}/night.`;
  return {
    title,
    description,
    alternates: { canonical: `/hotels/${hotel.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: hotel.images[0], alt: `${hotel.name}, Bal Harbour` }],
    },
  };
}

function stars(n: number) {
  return "★★★★★".slice(0, n);
}

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);
  if (!hotel) notFound();

  const related = relatedHotels(hotel.slug);
  const [big, ...rest] = hotel.images;
  const gallery = [big, ...rest, ...rest].slice(0, 5);

  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3 px-6 pb-1.5 pt-7 md:px-11 md:pt-9">
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/hotels" className="font-semibold text-gold-deep no-underline">
            Hotels
          </Link>
          <span>/</span>
          <span>{hotel.name}</span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-ink md:text-[46px]">
            {hotel.name}
          </h1>
          <div className="flex items-center gap-2.5">
            <span
              className={[
                "rounded-full px-3.5 py-1.5 text-[12.5px] font-bold",
                hotel.rankBadge === "gold" ? "bg-gold text-ink" : "bg-ivory text-ink",
              ].join(" ")}
            >
              {hotel.rankLabel}
            </span>
            <span className="text-sm text-ink-4">
              {stars(hotel.stars)} · {hotel.category} · from ${hotel.price}/nt
            </span>
          </div>
        </div>
      </div>

      {/* Photo gallery */}
      <div className="relative grid grid-cols-2 gap-3.5 px-6 pb-2 pt-6 md:grid-cols-4 md:grid-rows-[210px_210px] md:px-11">
        <div className="relative col-span-2 row-span-2 h-[220px] overflow-hidden rounded-[24px] md:h-full">
          <Image src={gallery[0]} alt={`${hotel.name} — pool`} fill sizes="50vw" className="object-cover" priority />
        </div>
        <div className="relative h-[105px] overflow-hidden rounded-[20px] md:h-full">
          <Image src={gallery[1]} alt={`${hotel.name} — room`} fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative h-[105px] overflow-hidden rounded-[20px] md:h-full">
          <Image src={gallery[2]} alt={`${hotel.name} — lobby`} fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative h-[105px] overflow-hidden rounded-[20px] md:h-full">
          <Image src={gallery[3]} alt={`${hotel.name} — beach`} fill sizes="25vw" className="object-cover" />
        </div>
        <div className="relative h-[105px] overflow-hidden rounded-[20px] md:h-full">
          <Image src={gallery[4]} alt={`${hotel.name} — bar`} fill sizes="25vw" className="object-cover" />
          <div className="absolute bottom-2.5 right-2.5 rounded-full bg-ivory/92 px-3.5 py-2 text-[12.5px] font-semibold text-ink">
            All 24 photos
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 items-start gap-8 px-6 pb-14 pt-8 md:grid-cols-[1fr_380px] md:px-11">
        <div className="flex flex-col gap-6">
          <p className="font-serif-italic text-2xl leading-snug text-ink-2">
            “{hotel.pullQuote}”
          </p>
          {hotel.review.paragraphs.map((p, i) => (
            <p key={i} className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
              {p}
            </p>
          ))}
          <div className="flex flex-col gap-3">
            <div className="text-[13px] font-semibold tracking-[0.14em] text-gold-deep">
              THE RUNDOWN
            </div>
            <div className="grid max-w-[640px] grid-cols-1 gap-x-7 gap-y-2.5 sm:grid-cols-2">
              {hotel.review.rundown.map((r) => (
                <div
                  key={r.label}
                  className="flex justify-between border-b border-ink/10 py-2.5 text-[14.5px] text-ink-3"
                >
                  <span>{r.label}</span>
                  <strong className="text-ink">{r.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking widget */}
        <div className="sticky top-5 flex flex-col gap-4 rounded-[24px] bg-white p-7 shadow-elevated">
          <div className="flex items-baseline justify-between">
            <div className="text-[15px] text-ink-4">from</div>
            <div className="text-[28px] font-bold text-ink">
              ${hotel.price}
              <span className="text-[15px] font-medium text-ink-4">/night</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-0.5 rounded-[14px] border-[1.5px] border-ink/18 px-3.5 py-2.5">
              <div className="text-[11px] font-semibold tracking-[0.08em] text-gold-deep">
                CHECK-IN
              </div>
              <div className="text-sm text-ink">Nov 12</div>
            </div>
            <div className="flex flex-col gap-0.5 rounded-[14px] border-[1.5px] border-ink/18 px-3.5 py-2.5">
              <div className="text-[11px] font-semibold tracking-[0.08em] text-gold-deep">
                CHECK-OUT
              </div>
              <div className="text-sm text-ink">Nov 16</div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            {hotel.rates.map((rate) => (
              <a
                key={rate.site}
                href={rate.url}
                target="_blank"
                rel="sponsored noopener"
                className={[
                  "flex items-center justify-between rounded-[14px] px-4 py-3.5 no-underline",
                  rate.best
                    ? "border-2 border-gold bg-gold/8"
                    : "border-[1.5px] border-ink/14",
                ].join(" ")}
              >
                <div className="text-sm font-semibold text-ink">
                  {rate.site}
                  {rate.best && (
                    <span className="ml-1 rounded-full bg-gold/25 px-2 py-0.5 text-[11px] font-bold text-gold-deep">
                      BEST
                    </span>
                  )}
                </div>
                <div className="text-sm text-ink">
                  <strong>${rate.price}</strong> <span className="font-bold text-gold">↗</span>
                </div>
              </a>
            ))}
          </div>
          <a
            href={bestRate(hotel).url}
            target="_blank"
            rel="sponsored noopener"
            className="btn-gold rounded-full py-3.5 text-center text-[15px] font-bold text-ink no-underline"
          >
            Book the best rate ↗
          </a>
          <div className="text-center text-xs leading-relaxed text-muted-2">
            Rates checked hourly. We earn a commission on bookings — the
            price you pay is the same.
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="relative flex flex-col gap-5 px-6 pb-14 md:px-11">
          <h2 className="text-2xl font-bold text-ink">
            You might also <em className="font-serif-italic text-gold">like</em>
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/hotels/${r.slug}`}
                className="hover-lift grid grid-cols-[140px_1fr] overflow-hidden rounded-[20px] bg-white shadow-small no-underline sm:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[120px]">
                  <Image src={r.images[0]} alt={r.name} fill sizes="180px" className="object-cover" />
                </div>
                <div className="flex flex-col gap-1.5 px-5 py-4.5">
                  <div className="text-[17px] font-bold text-ink">{r.name}</div>
                  <div className="text-[13px] leading-snug text-body">
                    {r.homeBadge} · from ${r.price}/nt
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />

      <JsonLd data={hotelJsonLd(hotel)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Hotels", path: "/hotels" },
          { name: hotel.name, path: `/hotels/${hotel.slug}` },
        ])}
      />
    </div>
  );
}
