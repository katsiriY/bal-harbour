import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiningList from "@/components/DiningList";

export const metadata: Metadata = {
  title: "Eat & drink",
  description:
    "14 tables we actually love in Bal Harbour. No pay-to-play — if it's on this list, we've paid the bill ourselves at least twice.",
};

export default function DiningPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          EAT &amp; DRINK · UPDATED WEEKLY
        </div>
        <h1 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          14 tables{" "}
          <em className="font-serif-italic text-gold">we actually love.</em>
        </h1>
        <p className="max-w-[560px] text-base leading-relaxed text-ink-4">
          No pay-to-play. If it&apos;s on this list, we&apos;ve paid the bill
          ourselves at least twice.
        </p>
      </div>

      <DiningList />

      <Footer />
    </div>
  );
}
