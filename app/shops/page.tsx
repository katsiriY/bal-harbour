import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, shoppingCenterJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bal Harbour Shops — A Local's Guide to the Luxury Mall",
  description:
    "The Bal Harbour Shops, decoded: which luxury boutiques to hit (Chanel, Gucci, the jewel boxes), when to go, where to park and what's free — a local's guide to the famous open-air mall.",
  alternates: { canonical: "/shops" },
};

const TIPS = [
  {
    n: "01",
    title: "The big houses",
    body: "Every major fashion house within four blocks. Go weekday mornings for actual browsing room.",
  },
  {
    n: "02",
    title: "The jewel boxes",
    body: "Watches and high jewelry with security guards friendlier than most maître d's.",
  },
  {
    n: "03",
    title: "Resortwear done right",
    body: "Linen, sandals and swim that survives more than one season. Our short list.",
  },
  {
    n: "04",
    title: "The free stuff",
    body: "Koi ponds, sculpture, seasonal installations — a museum where everything's for sale.",
  },
];

export default function ShopsPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          THE BAL HARBOUR SHOPS &amp; BEYOND
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          Window-shopping is free.{" "}
          <em className="font-serif-italic text-gold">Everything else isn&apos;t.</em>
        </h1>
        <p className="max-w-[600px] text-base leading-relaxed text-ink-4">
          The Bal Harbour Shops — the open-air luxury mall that made the
          village famous — is worth the trip even if you buy nothing: koi
          ponds, couture and the best people-watching in Miami. Our guide to
          doing it right, whatever your budget.
        </p>
      </div>

      <div className="relative mx-6 mt-7 h-[280px] overflow-hidden rounded-[28px] md:mx-11 md:h-[340px]">
        <Image
          src="/img/shops-arcade.jpg"
          alt="The open-air shopping arcade"
          fill
          sizes="(max-width: 768px) 100vw, 1160px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end gap-2 bg-gradient-to-t from-[rgba(11,42,33,0.85)] from-75% to-transparent px-6 pb-6 pt-24 md:flex-row md:items-end md:justify-between md:px-9">
          <div className="flex flex-col gap-1.5">
            <div className="text-xs font-bold tracking-[0.16em] text-gold-light">
              START HERE
            </div>
            <div className="text-2xl font-bold text-ivory md:text-[28px]">
              The open-air mall, decoded
            </div>
            <p className="font-serif-italic text-base text-ivory/85">
              “Park once, wear comfortable shoes, save the gelato for last.”
            </p>
          </div>
          <span className="btn-gold whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-semibold text-ink">
            The full walkthrough
          </span>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-2 md:grid-cols-4 md:px-11">
        {TIPS.map((tip) => (
          <div
            key={tip.n}
            className="hover-lift flex flex-col gap-2 rounded-[20px] bg-white p-6 shadow-small"
          >
            <div className="font-serif-italic text-[22px] text-gold">{tip.n}</div>
            <div className="text-[17px] font-bold text-ink">{tip.title}</div>
            <p className="text-[13.5px] leading-snug text-body">{tip.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold-tile relative mx-6 mb-14 flex flex-col items-start gap-5 rounded-[24px] px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:mx-11 md:px-9">
        <div className="flex flex-col gap-1.5">
          <div className="text-xl font-bold text-ink">
            Done shopping? The beach is a two-minute walk.
          </div>
          <div className="text-sm text-gold-dark-text">
            Cross Collins, kick off the new sandals, recover.
          </div>
        </div>
        <Link
          href="/beach"
          className="btn-dark whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-ivory no-underline"
        >
          Beach guide →
        </Link>
      </div>

      <Footer />

      <JsonLd data={shoppingCenterJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Shops", path: "/shops" },
        ])}
      />
    </div>
  );
}
