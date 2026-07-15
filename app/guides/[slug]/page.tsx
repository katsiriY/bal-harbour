import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  GUIDES,
  getGuideBySlug,
  relatedGuides,
  type GuideBlock,
} from "@/lib/guides";
import { articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      type: "article",
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      images: [{ url: guide.heroImage, alt: guide.heroAlt }],
    },
  };
}

// Minimal inline renderer: [text](/path) links and **bold**. Kept tiny on
// purpose — guides are structured data, not a full markdown pipeline.
function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link
          key={i}
          href={link[2]}
          className="font-semibold text-gold-deep underline decoration-gold/50 underline-offset-2 hover:decoration-gold"
        >
          {link[1]}
        </Link>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className="font-bold text-ink">
          {bold[1]}
        </strong>
      );
    }
    return part;
  });
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-4 max-w-[640px] text-2xl font-bold leading-snug tracking-tight text-ink md:text-[27px]">
          {block.text}
        </h2>
      );
    case "answer":
      return (
        <div className="max-w-[640px] rounded-[18px] border-l-4 border-gold bg-white px-5 py-4 shadow-small">
          <div className="pb-1 text-[11px] font-bold tracking-[0.14em] text-gold-deep">
            THE SHORT ANSWER
          </div>
          <p className="text-[15px] leading-[1.7] text-ink-2">
            {renderInline(block.text)}
          </p>
        </div>
      );
    case "p":
      return (
        <p className="max-w-[640px] text-[15.5px] leading-[1.75] text-ink-3">
          {renderInline(block.text)}
        </p>
      );
    case "list":
      return (
        <ul className="flex max-w-[640px] list-none flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-5 text-[15px] leading-[1.7] text-ink-3 before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div className="bg-gold-tile max-w-[640px] rounded-[18px] px-5 py-4">
          <p className="text-[14.5px] leading-[1.7] text-ink">
            <strong className="pr-1">Local tip:</strong>
            {renderInline(block.text)}
          </p>
        </div>
      );
  }
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = relatedGuides(guide.slug);

  return (
    <div className="bg-inner-wash relative w-full font-sans">
      <Header />

      <article>
        <div className="relative flex flex-col gap-3 px-6 pb-1.5 pt-7 md:px-11 md:pt-9">
          <div className="flex items-center gap-2 text-[13px] text-muted">
            <Link
              href="/guides"
              className="font-semibold text-gold-deep no-underline"
            >
              Guides
            </Link>
            <span>/</span>
            <span>{guide.eyebrow.toLowerCase()}</span>
          </div>
          <h1 className="max-w-[760px] text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-[44px]">
            {guide.title}{" "}
            <em className="font-serif-italic font-normal text-gold">
              {guide.titleAccent}
            </em>
          </h1>
          <div className="text-[13px] text-muted">
            By the bal-harbour.com locals · Updated {formatDate(guide.updated)}
          </div>
        </div>

        <div className="relative mx-6 mt-5 h-[240px] overflow-hidden rounded-[28px] md:mx-11 md:h-[320px]">
          <Image
            src={guide.heroImage}
            alt={guide.heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1160px"
            className="object-cover"
            priority
          />
        </div>

        <div className="relative flex flex-col gap-5 px-6 pb-10 pt-7 md:px-11">
          <p className="max-w-[640px] text-[17px] leading-[1.75] text-ink-2">
            {guide.intro}
          </p>
          {guide.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {guide.faqs && guide.faqs.length > 0 && (
          <div className="relative flex flex-col gap-4 px-6 pb-10 md:px-11">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Quick answers
            </h2>
            <div className="flex max-w-[720px] flex-col gap-3">
              {guide.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[18px] bg-white px-5 py-4 shadow-small"
                >
                  <summary className="cursor-pointer list-none text-[15px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="float-right pl-3 text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pt-2.5 text-[14.5px] leading-[1.7] text-ink-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="relative flex flex-col gap-4 px-6 pb-14 md:px-11">
          <h2 className="text-xl font-bold text-ink">
            Keep <em className="font-serif-italic text-gold">going</em>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {guide.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-full border-[1.5px] border-ink/25 px-4.5 py-2.5 text-[13.5px] font-semibold text-ink no-underline transition-colors hover:bg-ink/5"
              >
                {r.label} →
              </Link>
            ))}
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="rounded-full border-[1.5px] border-gold/50 bg-gold/10 px-4.5 py-2.5 text-[13.5px] font-semibold text-gold-deep no-underline transition-colors hover:bg-gold/20"
              >
                {g.title} {g.titleAccent} →
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />

      <JsonLd data={articleJsonLd(guide)} />
      {guide.faqs && guide.faqs.length > 0 && (
        <JsonLd data={faqPageJsonLd(guide.faqs, `/guides/${guide.slug}`)} />
      )}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: `${guide.title} ${guide.titleAccent}`, path: `/guides/${guide.slug}` },
        ])}
      />
    </div>
  );
}
