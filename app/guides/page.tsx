import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { GUIDES } from "@/lib/guides";
import { breadcrumbJsonLd, guidesItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bal Harbour Travel Guides — Local Answers to Real Questions",
  description:
    "In-depth Bal Harbour guides written by locals: Bal Harbour vs Surfside, every public beach entrance, the best time to visit, and more — honest, specific and updated.",
  alternates: { canonical: "/guides" },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          GUIDES · WRITTEN HERE, NOT FROM A DESK IN OHIO
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          Real questions,{" "}
          <em className="font-serif-italic text-gold">local answers.</em>
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-ink-4">
          The stuff people actually ask us — beach access, timing, which
          village fits which traveler — answered properly, with dates on
          everything so you know it&apos;s current.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-11">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="hover-lift flex flex-col overflow-hidden rounded-[22px] bg-white shadow-card no-underline"
          >
            <div className="relative h-[170px]">
              <Image
                src={guide.heroImage}
                alt={guide.heroAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute left-3.5 top-3.5 rounded-full bg-ivory/92 px-3 py-1.5 text-[11px] font-bold tracking-[0.08em] text-ink">
                {guide.eyebrow}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-4">
              <div className="text-lg font-bold leading-snug text-ink">
                {guide.title}{" "}
                <em className="font-serif-italic font-normal text-gold-deep">
                  {guide.titleAccent}
                </em>
              </div>
              <p className="text-[13.5px] leading-relaxed text-body">
                {guide.description.split(".")[0]}.
              </p>
              <div className="mt-auto pt-1.5 text-xs text-muted">
                Updated {formatDate(guide.updated)}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gold-tile relative mx-6 mb-14 flex flex-col items-start gap-5 rounded-[24px] px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:mx-11 md:px-9">
        <div className="flex flex-col gap-1.5">
          <div className="text-xl font-bold text-ink">
            Can&apos;t find your question?
          </div>
          <div className="text-sm text-gold-dark-text">
            Start with the hotel rankings — most trips do.
          </div>
        </div>
        <Link
          href="/hotels"
          className="btn-dark whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-ivory no-underline"
        >
          The hotels →
        </Link>
      </div>

      <Footer />

      <JsonLd data={guidesItemListJsonLd(GUIDES)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
    </div>
  );
}
