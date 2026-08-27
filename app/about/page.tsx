import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us — Who Writes This Guide & How We Make Money",
  description:
    "bal-harbour.com is an independent local guide to Bal Harbour, Florida — written by people who live here. How we review, how affiliate links pay for it, and what we'll never do.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    n: "01",
    title: "We pay our own bills",
    body: "Every restaurant on our list, we've paid for — at least twice. Every hotel review comes from nights we booked. No comped stays, no press rates, no 'collaborations.' If that ever changes, it'll say so in giant letters on the review.",
  },
  {
    n: "02",
    title: "Rankings are not for sale",
    body: "Hotels can't buy a spot, a star, or a nicer adjective. The commission we earn is the same wherever you book — so the only thing that moves a hotel up our list is being better.",
  },
  {
    n: "03",
    title: "Dates on everything",
    body: "Every guide shows when it was last updated, and we sweep the big ones quarterly. If a place slips, it comes off the list — ask the two restaurants we've already removed.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          ABOUT · THE PEOPLE BEHIND THE GUIDE
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          We live here. We tan here.{" "}
          <em className="font-serif-italic text-gold">We tell the truth here.</em>
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-ink-4">
          bal-harbour.com is an independent guide to Bal Harbour, Florida —
          not the Village government, not a hotel group, not a content farm.
          Just locals with strong opinions about croissants and cabana
          spacing.
        </p>
      </div>

      <div className="relative mx-6 mt-7 h-[240px] overflow-hidden rounded-[28px] md:mx-11 md:h-[300px] lg:mx-auto lg:w-full lg:max-w-[1032px]">
        <Image
          src="/img/palms-surf.jpg"
          alt="Palms over the surf at Bal Harbour — the view from the neighborhood"
          fill
          sizes="(max-width: 768px) 100vw, 1160px"
          className="object-cover"
          priority
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-6 pb-4 pt-8 md:px-11">
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[28px]">
          Who&apos;s <em className="font-serif-italic text-gold">behind this?</em>
        </h2>
        <p className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
          A small crew of Bal Harbour and Surfside locals who got tired of
          seeing our village described by listicles written from very far
          away. We walk the beach path most mornings, we know which valet
          line moves, and we&apos;ve celebrated enough anniversaries on the
          mile to have opinions about every terrace on it.
        </p>
        <p className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
          We write as &ldquo;we&rdquo; because the guide is collective — every
          recommendation has at least two of us behind it, and the pickiest
          one writes the review.
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-3 md:px-11">
        {PRINCIPLES.map((p) => (
          <div
            key={p.n}
            className="hover-lift flex flex-col gap-2 rounded-[20px] bg-white p-6 shadow-small"
          >
            <div className="font-serif-italic text-[22px] text-gold">{p.n}</div>
            <div className="text-[17px] font-bold text-ink">{p.title}</div>
            <p className="text-[13.5px] leading-relaxed text-body">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-5 px-6 pb-4 pt-2 md:px-11">
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[28px]">
          How the site <em className="font-serif-italic text-gold">makes money</em>
        </h2>
        <p className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
          Three ways, all disclosed everywhere they appear. First: when you
          book a hotel through links on <Link href="/hotels" className="font-semibold text-gold-deep underline decoration-gold/50 underline-offset-2">our hotel pages</Link>, the booking site
          pays us a commission — your price is identical either way. Second:
          some restaurant reservation links work the same way. Third: if you
          ask for a <Link href="/real-estate" className="font-semibold text-gold-deep underline decoration-gold/50 underline-offset-2">real-estate introduction</Link> and end up
          transacting, the agent pays us a referral fee — never you.
        </p>
        <p className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
          That&apos;s the whole model. No sponsored posts, no display-ad
          chum, no selling your email. It keeps the sunscreen stocked and the
          reviews honest.
        </p>
      </div>

      <div className="bg-gold-tile relative mx-6 my-8 flex flex-col items-start gap-5 rounded-[24px] px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:mx-11 md:px-9 lg:mx-auto lg:w-full lg:max-w-[1032px]">
        <div className="flex flex-col gap-1.5">
          <div className="text-xl font-bold text-ink">
            Spotted something wrong?
          </div>
          <div className="text-sm text-gold-dark-text">
            Prices drift, chefs move, sandbars wander. Tell us and we&apos;ll
            fix it — corrections make the guide.
          </div>
        </div>
        <a
          href="mailto:hello@bal-harbour.com"
          className="btn-dark whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-ivory no-underline"
        >
          hello@bal-harbour.com
        </a>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-2 px-6 pb-12 md:px-11">
        <h2 className="text-lg font-bold text-ink">Photo credits</h2>
        <p className="max-w-[680px] text-[13px] leading-relaxed text-muted">
          Real-place photography via Wikimedia Commons: St. Regis Bal Harbour
          by Mk17b (CC BY-SA 4.0) · Bal Harbour Shops courtyard by
          (WT-de) Mistoffeles (CC BY-SA 4.0) · Bal Harbour skyline by
          Fredlyfish4 (CC BY 4.0) · Haulover Park by Elmschrat (CC BY-SA
          3.0) · vintage Sea View Hotel postcard, Tichnor Brothers, public
          domain. Remaining photography via Unsplash — illustrative of the
          area, not of specific properties.
        </p>
      </div>

      <Footer />

      <JsonLd data={aboutPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </div>
  );
}
