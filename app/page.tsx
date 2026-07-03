import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { HOTELS, bestRate } from "@/lib/hotels";
import { HOME_FAQS } from "@/lib/faq";
import {
  touristDestinationJsonLd,
  hotelsItemListJsonLd,
  faqPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const QUICK_FACTS = [
  "25 min from Miami (MIA) airport",
  "Best time to visit: Nov–Apr",
  "Free public beach + Jetty Walk",
  "Walk to the Bal Harbour Shops",
];

export default function Home() {
  const featured = HOTELS;

  return (
    <div className="bg-sunset-dive relative w-full overflow-hidden font-sans">
      <div
        aria-hidden
        className="sun-glow-top pointer-events-none absolute left-1/2 top-9 hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full md:block"
      />
      <div
        aria-hidden
        className="sun-glow-soft pointer-events-none absolute right-[-140px] top-[1420px] hidden h-[520px] w-[520px] rounded-full lg:block"
      />

      <Header />

      {/* Hero panel — photo masked to fade into the green, plus a green
          tint overlay, so the photo blends seamlessly (recipe from
          Home.dc.html). */}
      <div className="bg-hero-panel relative mx-4 mt-4 min-h-[420px] overflow-hidden rounded-[28px] md:mx-11 md:mt-6">
        <div aria-hidden className="hero-photo">
          <Image
            src="/img/palms-surf.jpg"
            alt="Palm trees over the surf at Bal Harbour"
            fill
            sizes="(max-width: 768px) 100vw, 64vw"
            className="object-cover"
            style={{ objectPosition: "65% center" }}
            priority
          />
        </div>
        <div aria-hidden className="hero-tint" />
        <div
          aria-hidden
          className="sun-glow-panel pointer-events-none absolute -top-[120px] right-[24%] z-10 hidden h-[340px] w-[340px] rounded-full md:block"
        />
        <div className="relative z-10 flex flex-col gap-5 px-6 pb-16 pt-10 md:max-w-[520px] md:px-14 md:pb-[190px] md:pt-[70px]">
          <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-light">
            BAL HARBOUR, FLORIDA · LOCAL TRAVEL GUIDE
          </div>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-ivory md:text-[54px]">
            Sun&apos;s out. We know{" "}
            <em className="font-serif-italic text-gold-light">
              the good spots
            </em>{" "}
            in Bal Harbour.
          </h1>
          <p className="max-w-[470px] text-base leading-relaxed text-ivory/75">
            Your friendly local guide to Bal Harbour, Florida — the fanciest
            little village in Miami Beach. We live here, and we&apos;ll point
            you to the best oceanfront hotels, restaurants, beach days, and the
            famous Bal Harbour Shops.
          </p>
        </div>

        {/* Search bar */}
        <form
          action="/hotels"
          method="GET"
          className="relative z-10 mx-6 mb-6 flex flex-col gap-3 rounded-[28px] bg-ivory p-4 shadow-[0_12px_32px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center sm:rounded-full sm:py-2.5 sm:pl-6 sm:pr-2.5 md:absolute md:inset-x-14 md:bottom-12 md:mx-0 md:mb-0 md:mr-[calc(38%+40px)]"
        >
          <input
            type="text"
            name="q"
            placeholder="Try “rooftop dinner” or “beachfront suite”…"
            className="flex-1 border-none bg-transparent text-[15px] text-ink placeholder:text-muted focus:outline-none"
          />
          <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-ink">
            <Link
              href="/hotels"
              className="rounded-full bg-ink/8 px-3.5 py-2 no-underline hover:bg-ink/14"
            >
              Hotels
            </Link>
            <Link
              href="/eat"
              className="rounded-full bg-ink/8 px-3.5 py-2 no-underline hover:bg-ink/14"
            >
              Dining
            </Link>
            <Link
              href="/beach"
              className="rounded-full bg-ink/8 px-3.5 py-2 no-underline hover:bg-ink/14"
            >
              Beach
            </Link>
          </div>
          <button
            type="submit"
            className="btn-gold rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Search
          </button>
        </form>
      </div>

      {/* Intro — quotable definition + quick facts (answer-first for AI) */}
      <section className="relative px-6 pt-12 md:px-11">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold-deep">
          THE SHORT VERSION
        </p>
        <h2 className="mt-2.5 max-w-[860px] text-2xl font-semibold leading-[1.35] tracking-tight text-ink md:text-[27px]">
          Bal Harbour is a small, upscale beachfront village at the north end
          of Miami Beach — known for the luxury Bal Harbour Shops, oceanfront
          resorts, and a quiet, public-access Atlantic Ocean beach.
        </h2>
        <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-body">
          We actually live here. Below: the hotels we&apos;d book ourselves, the
          tables worth the reservation, how to do the Shops without wilting,
          where to lay a towel — and, if you fall for the place, how to move
          here.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {QUICK_FACTS.map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-2 rounded-full bg-ink/8 px-3.5 py-2 text-[13px] font-medium text-ink-2"
            >
              <span aria-hidden className="text-gold-deep">
                ◆
              </span>
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured hotels */}
      <div className="relative flex items-baseline justify-between px-6 pb-5 pt-14 md:px-11">
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[30px]">
          Where to <em className="font-serif-italic text-gold-deep">stay</em> in
          Bal Harbour
        </h2>
        <Link
          href="/hotels"
          className="border-b-2 border-gold pb-0.5 text-sm font-semibold text-ink no-underline"
        >
          See all hotels
        </Link>
      </div>
      <div className="relative grid grid-cols-1 gap-5 px-6 pb-12 md:grid-cols-3 md:px-11">
        {featured.map((hotel) => (
          <article
            key={hotel.slug}
            className="hover-lift relative overflow-hidden rounded-[22px] bg-white shadow-card"
          >
            {/* Whole card opens the review; the "Check rates" pill sits above
                this overlay as a real affiliate link (no nested anchors). */}
            <Link
              href={`/hotels/${hotel.slug}`}
              aria-label={`${hotel.name} — read the full review`}
              className="absolute inset-0 z-[1]"
            />
            <div className="relative h-[180px]">
              <Image
                src={hotel.images[0]}
                alt={`${hotel.name} hotel in Bal Harbour, Florida`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div
                className={[
                  "absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 text-xs font-semibold",
                  hotel.homeBadgeStyle === "dark"
                    ? "bg-ink text-ivory"
                    : "bg-ivory text-ink",
                ].join(" ")}
              >
                {hotel.homeBadge}
              </div>
            </div>
            <div className="flex flex-col gap-1.5 px-5 pb-5 pt-4.5">
              <div className="text-lg font-bold text-ink">{hotel.name}</div>
              <div className="text-[13.5px] leading-relaxed text-body">
                {hotel.oneLiner}
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <div className="text-sm text-ink">
                  from <strong>${hotel.price}</strong>/nt
                </div>
                <a
                  href={bestRate(hotel).url}
                  target="_blank"
                  rel="sponsored noopener"
                  className="relative z-[2] rounded-full bg-gold/18 px-4 py-2 text-[13px] font-semibold text-gold-deep no-underline transition-colors hover:bg-gold/30"
                >
                  Check rates
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Category tiles */}
      <div className="relative grid grid-cols-2 gap-4.5 px-6 pb-12 md:grid-cols-4 md:px-11">
        <Link
          href="/eat"
          className="glass-tile hover-lift flex flex-col gap-1.5 rounded-[18px] p-6 no-underline"
        >
          <div className="text-[17px] font-bold text-ink">Eat & drink</div>
          <div className="text-[13px] text-ink-2">
            Best restaurants in Bal Harbour →
          </div>
        </Link>
        <Link
          href="/shops"
          className="glass-tile hover-lift flex flex-col gap-1.5 rounded-[18px] p-6 no-underline"
        >
          <div className="text-[17px] font-bold text-ink">The Shops</div>
          <div className="text-[13px] text-ink-2">
            The Bal Harbour Shops, decoded →
          </div>
        </Link>
        <Link
          href="/beach"
          className="glass-tile hover-lift flex flex-col gap-1.5 rounded-[18px] p-6 no-underline"
        >
          <div className="text-[17px] font-bold text-ink">Beach days</div>
          <div className="text-[13px] text-ink-2">
            Bal Harbour Beach access →
          </div>
        </Link>
        <Link
          href="/real-estate"
          className="bg-gold-tile hover-lift flex flex-col gap-1.5 rounded-[18px] p-6 no-underline"
        >
          <div className="text-[17px] font-bold text-ink">Move here</div>
          <div className="text-[13px] text-gold-dark-text">
            Bal Harbour real estate →
          </div>
        </Link>
      </div>

      {/* Real estate teaser */}
      <div className="relative mx-6 mb-16 grid grid-cols-1 items-center gap-8 md:mx-11 md:grid-cols-[1.2fr_1fr] md:gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-xs font-semibold tracking-[0.18em] text-gold-light">
            BAL HARBOUR REAL ESTATE
          </div>
          <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-sand md:text-[38px]">
            What if the vacation just{" "}
            <em className="font-serif-italic text-gold-light">didn&apos;t end?</em>
          </h2>
          <p className="max-w-[460px] text-[15px] leading-relaxed text-ivory/78">
            Bal Harbour real estate, from oceanfront condos on Collins Avenue to
            tucked-away village homes. Tell us what you&apos;re dreaming about and
            we&apos;ll introduce you to a local agent we&apos;d send our own
            parents to.
          </p>
          <Link
            href="/real-estate"
            className="btn-gold mt-1.5 self-start rounded-full px-6 py-3 text-sm font-semibold text-ink no-underline"
          >
            Get matched
          </Link>
        </div>
        <div className="relative h-[220px] overflow-hidden rounded-[22px] border border-ivory/18 md:h-[280px]">
          <Image
            src="/img/condo-terrace.jpg"
            alt="Oceanfront condo terrace in Bal Harbour, Florida overlooking the water"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* FAQ — question keywords, answer-first (feeds FAQPage structured data).
          Sits over the dark lower gradient, so it uses light text. */}
      <section
        className="relative px-6 pb-20 md:px-11"
        aria-labelledby="faq-heading"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-gold-light">
          GOOD TO KNOW
        </p>
        <h2
          id="faq-heading"
          className="mt-2.5 text-3xl font-bold tracking-tight text-sand md:text-[34px]"
        >
          Bal Harbour,{" "}
          <em className="font-serif-italic text-gold-light">answered</em>
        </h2>
        <div className="mt-7 grid gap-x-12 md:grid-cols-2">
          {HOME_FAQS.map((faq) => (
            <div
              key={faq.question}
              className="border-t border-ivory/15 py-5"
            >
              <h3 className="text-[17px] font-semibold leading-snug text-ivory">
                {faq.question}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ivory/72">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Structured data — helps Google rich results and lets AI answer
          engines (ChatGPT, Perplexity, AI Overviews) trust and cite the page. */}
      <JsonLd data={touristDestinationJsonLd()} />
      <JsonLd data={hotelsItemListJsonLd(featured)} />
      <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
    </div>
  );
}
