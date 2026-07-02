import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotelsList from "@/components/HotelsList";
import { HOTELS } from "@/lib/hotels";

export const metadata: Metadata = {
  title: "Hotels",
  description:
    "Every hotel on the Bal Harbour mile, honestly rated — we've slept, swum and ordered room service in all of them.",
};

export default function HotelsPage() {
  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <div className="relative flex flex-col gap-3.5 px-6 pb-2 pt-8 md:px-11 md:pt-11">
        <div className="text-[13px] font-semibold tracking-[0.16em] text-gold-deep">
          STAY · THREE HOTELS, ZERO DUDS
        </div>
        <h1 className="max-w-[700px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[46px]">
          Every hotel on the mile,{" "}
          <em className="font-serif-italic text-gold">honestly rated.</em>
        </h1>
        <p className="max-w-[560px] text-base leading-relaxed text-ink-4">
          We&apos;ve slept, swum and ordered room service in all of them.
          Rates come from our booking partners — booking through us costs
          you nothing extra.
        </p>
      </div>

      <HotelsList hotels={HOTELS} />

      <Footer />
    </div>
  );
}
