import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { beachJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bal Harbour Beach — Public Access, Parking & Local Tips",
  description:
    "Bal Harbour Beach is public and gloriously uncrowded — here's where to get on (the quiet 96th Street entrance), where to park, when the light and tides are best, and how the Jetty Walk works.",
  alternates: { canonical: "/beach" },
};

const INFO_CARDS = [
  {
    eyebrow: "GETTING ON",
    title: "The 96th Street access",
    body: "The village's public entrance is at 96th & Collins, on the Surfside border — metered parking (about $1–2/hr, 4-hour limit), restrooms and an outdoor shower by the path, and a bike-share station on the south side. (The pretty 102nd Street path is residents-only.)",
  },
  {
    eyebrow: "SITTING DOWN",
    title: "Cabanas & loungers",
    body: "The cabana rows belong to the St. Regis and Sea View beach clubs — some rent to non-guests on slow days; call after 10am. Or bring a chair: the sand below the tide line is public and gloriously free.",
  },
  {
    eyebrow: "TIMING IT",
    title: "Light, tides & swim smarts",
    body: "Sunrise is the show — the beach faces due east. Low tide mid-morning leaves a wide, firm walking strand; for sunset, walk the Jetty Walk at the inlet. The village publishes no lifeguard schedule, so treat the water as unguarded unless you see a staffed tower.",
  },
];

export default function BeachPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          BAL HARBOUR BEACH · OPEN SUNRISE TO SUNSET
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          One mile of public sand,{" "}
          <em className="font-serif-italic text-gold">properly explained.</em>
        </h1>
        <p className="max-w-[560px] text-base leading-relaxed text-ink-4">
          Where to get on, where to park, when the light is best and which
          stretch is quietest. The stuff hotels won&apos;t tell you because
          it&apos;s free.
        </p>
      </div>

      <div className="relative mx-6 mt-7 h-[220px] overflow-hidden rounded-[28px] md:mx-11 md:h-[300px]">
        <Image
          src="/img/ocean-horizon.jpg"
          alt="Ocean horizon at Bal Harbour beach"
          fill
          sizes="(max-width: 768px) 100vw, 1160px"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-5 left-5 flex flex-wrap gap-2.5">
          <div className="rounded-full bg-ivory/92 px-4 py-2.5 text-[13px] font-semibold text-ink">
            Summer water: high 80s°F
          </div>
          <div className="rounded-full bg-ivory/92 px-4 py-2.5 text-[13px] font-semibold text-ink">
            Usually calm surf
          </div>
          <div className="rounded-full bg-ivory/92 px-4 py-2.5 text-[13px] font-semibold text-ink">
            Public access at 96th St
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-11">
        {INFO_CARDS.map((card) => (
          <div
            key={card.title}
            className="hover-lift flex flex-col gap-2 rounded-[22px] bg-white p-6.5 shadow-small"
          >
            <div className="text-[13px] font-semibold tracking-[0.12em] text-gold-deep">
              {card.eyebrow}
            </div>
            <div className="text-lg font-bold text-ink">{card.title}</div>
            <p className="text-sm leading-relaxed text-body">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="relative grid grid-cols-1 items-stretch gap-5 px-6 pb-14 pt-5 md:grid-cols-[1fr_1.4fr] md:px-11">
        <div className="relative min-h-[220px] overflow-hidden rounded-[24px] md:min-h-[340px]">
          <Image
            src="/img/beach-path.jpg"
            alt="The beach path"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="bg-hero-panel flex flex-col justify-center gap-4 rounded-[24px] px-7 py-9 md:px-10">
          <div className="text-xs font-bold tracking-[0.16em] text-gold-light">
            DON&apos;T MISS
          </div>
          <h2 className="text-2xl font-bold leading-[1.2] text-ivory md:text-[28px]">
            The beach path — a mile of jogging, gossip and{" "}
            <em className="font-serif-italic text-gold-light">golden retrievers.</em>
          </h2>
          <p className="max-w-[480px] text-[15px] leading-relaxed text-ivory/78">
            The paved path runs the full length of the village between the
            dunes and the towers. Walk it at 7am and you&apos;ll pass half
            the neighborhood; rent a bike at the inlet end and do it
            properly.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <Link
              href="/eat"
              className="btn-gold rounded-full px-5 py-2.5 text-[13.5px] font-semibold text-ink no-underline"
            >
              Breakfast after →
            </Link>
            <Link
              href="/hotels"
              className="rounded-full border-[1.5px] border-ivory/40 px-5 py-2.5 text-[13.5px] font-semibold text-ivory no-underline hover:bg-ivory/10"
            >
              Stay beachfront
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <JsonLd data={beachJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Beach", path: "/beach" },
        ])}
      />
    </div>
  );
}
