// JSON-LD (schema.org) builders. Structured data is what lets Google show
// rich results and lets AI answer engines trust and cite the page. Kept as
// plain objects so pages/layout can drop them into a <script> tag.
import { SITE } from "@/lib/site";
import type { Faq } from "@/lib/faq";
import type { Hotel } from "@/lib/hotels";

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Bal Harbour",
  addressRegion: "FL",
  postalCode: "33154",
  addressCountry: "US",
} as const;

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE.url}/#organization` },
    // Enables the "search box" sitelink; target matches the hero search form.
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/hotels?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: "An independent local guide to Bal Harbour, Florida.",
    knowsAbout: [
      "Bal Harbour hotels",
      "Bal Harbour restaurants",
      "Bal Harbour Shops",
      "Bal Harbour Beach",
      "Bal Harbour real estate",
    ],
    areaServed: { "@type": "Place", name: "Bal Harbour, Florida" },
  };
}

export function touristDestinationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${SITE.url}/#destination`,
    name: "Bal Harbour",
    alternateName: "Village of Bal Harbour",
    description: SITE.summary,
    url: SITE.url,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    address: ADDRESS,
    containedInPlace: { "@type": "Place", name: "Miami Beach, Florida" },
    touristType: [
      "Luxury travelers",
      "Beach vacationers",
      "Shoppers",
      "Couples",
      "Families",
    ],
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Bal Harbour Shops" },
      { "@type": "TouristAttraction", name: "Bal Harbour Beach" },
      { "@type": "TouristAttraction", name: "Bal Harbour Jetty Walk" },
    ],
  };
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function hotelsItemListJsonLd(hotels: Hotel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best hotels in Bal Harbour, Florida",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: hotels.length,
    itemListElement: hotels.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Hotel",
        name: h.name,
        url: `${SITE.url}/hotels/${h.slug}`,
        description: h.oneLiner,
        starRating: { "@type": "Rating", ratingValue: h.stars },
        priceRange: `From $${h.price} per night`,
        address: ADDRESS,
      },
    })),
  };
}
