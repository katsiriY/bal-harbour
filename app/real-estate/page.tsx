import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Real estate",
  description:
    "Make the vacation permanent. Tell us what you're dreaming about and we'll introduce you to a Bal Harbour agent we personally trust.",
};

const STEPS = [
  { n: "01", text: "You tell us what you're after (2 minutes)" },
  { n: "02", text: "We match you with one local agent — not a list" },
  { n: "03", text: "They call you. If it's not a fit, tell us and we'll rematch" },
];

export default function RealEstatePage() {
  return (
    <div
      className="relative w-full font-sans"
      style={{
        background:
          "linear-gradient(180deg, #f3f1e6 0%, #e9efe7 60%, #dfe9e1 100%)",
      }}
    >
      <Header />

      <div className="relative grid grid-cols-1 items-stretch gap-6 px-6 pb-14 pt-5 md:grid-cols-[1fr_1.1fr] md:px-11">
        <div className="bg-pitch-panel relative flex flex-col gap-5 overflow-hidden rounded-[28px] px-7 py-9 md:px-10 md:py-11">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-32 h-[340px] w-[340px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(216,196,147,0.25) 0%, rgba(216,196,147,0) 70%)",
            }}
          />
          <div className="relative text-xs font-semibold tracking-[0.18em] text-gold-light">
            LIVE HERE
          </div>
          <h1 className="relative text-3xl font-bold leading-[1.12] tracking-tight text-ivory md:text-[40px]">
            Make the vacation{" "}
            <em className="font-serif-italic text-gold-light">permanent.</em>
          </h1>
          <p className="relative text-[15.5px] leading-relaxed text-ivory/78">
            Tell us what you&apos;re dreaming about — a condo over the
            marina, a family place near the school, a quiet pied-à-terre —
            and we&apos;ll introduce you to a Bal Harbour agent we
            personally trust. One intro, no spam, no obligation.
          </p>
          <div className="relative mt-1.5 flex flex-col gap-3.5">
            {STEPS.map((step) => (
              <div key={step.n} className="flex items-baseline gap-3">
                <div className="font-serif-italic text-xl text-gold-light">{step.n}</div>
                <div className="text-[14.5px] text-ivory/85">{step.text}</div>
              </div>
            ))}
          </div>
          <div className="relative mt-auto h-[150px] overflow-hidden rounded-[18px] border border-ivory/15">
            <Image
              src="/img/marina-dusk.jpg"
              alt="Marina at dusk"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <LeadForm />
      </div>

      <Footer />
    </div>
  );
}
