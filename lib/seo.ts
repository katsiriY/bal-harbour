// JSON-LD (schema.org) builders. Structured data is what lets Google show
// rich results and lets AI answer engines trust and cite the page. Kept as
// plain objects so pages/layout can drop them into a <script> tag.
import { SITE } from "@/lib/site";
import type { Faq } from "@/lib/faq";
import type { Guide } from "@/lib/guides";
import type { Hotel } from "@/lib/hotels";
import type { Restaurant } from "@/lib/restaurants";

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

export function faqPageJsonLd(faqs: Faq[], path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}${path === "/" ? "" : path}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

// Full Hotel entity for the detail pages. These are REAL hotels, so the
// entity carries its real street address, coordinates, and a sameAs link
// to the official site — the strongest disambiguation signal we can send.
// No aggregateRating on purpose: we have no collected reviews, and faking
// them risks a manual action.
export function hotelJsonLd(hotel: Hotel) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE.url}/hotels/${hotel.slug}#hotel`,
    name: hotel.name,
    url: `${SITE.url}/hotels/${hotel.slug}`,
    sameAs: [hotel.officialUrl],
    description: hotel.oneLiner,
    image: hotel.images.map((img) => `${SITE.url}${img}`),
    starRating: { "@type": "Rating", ratingValue: hotel.stars },
    priceRange: `From $${hotel.price} per night`,
    address: {
      ...ADDRESS,
      streetAddress: hotel.address.split(",")[0],
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotel.geo.lat,
      longitude: hotel.geo.lng,
    },
    amenityFeature: hotel.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    containedInPlace: { "@type": "Place", name: "Bal Harbour, Florida" },
  };
}

export function restaurantsItemListJsonLd(restaurants: Restaurant[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best restaurants in Bal Harbour, Florida",
    numberOfItems: restaurants.length,
    itemListElement: restaurants.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Restaurant",
        name: r.name,
        servesCuisine: r.category,
        priceRange: r.price,
        description: r.blurb,
        image: `${SITE.url}${r.image}`,
        address: ADDRESS,
        geo: {
          "@type": "GeoCoordinates",
          latitude: r.geo.lat,
          longitude: r.geo.lng,
        },
        ...(r.reserveUrl ? { acceptsReservations: r.reserveUrl } : {}),
      },
    })),
  };
}

// The Bal Harbour Shops — a real place we cover (not our property), so it
// gets sameAs pointing at the official site. That's a strong entity signal.
export function shoppingCenterJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    name: "Bal Harbour Shops",
    description:
      "Open-air luxury shopping center in Bal Harbour, Florida — more than 100 boutiques including Chanel, Dior, Gucci and Prada, anchored by Saks Fifth Avenue and a newly renovated Neiman Marcus, set around koi ponds and tropical landscaping.",
    url: `${SITE.url}/shops`,
    sameAs: ["https://www.balharbourshops.com"],
    address: { ...ADDRESS, streetAddress: "9700 Collins Ave" },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
  };
}

export function beachJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Beach",
    name: "Bal Harbour Beach",
    description:
      "A quiet mile of public-access Atlantic Ocean beach at the north end of Miami Beach, with a paved beach path (the Jetty Walk) connecting toward Haulover Park.",
    url: `${SITE.url}/beach`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
  };
}

export function realEstateServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real estate agent matching",
    name: "Bal Harbour real-estate agent introduction",
    description:
      "Free introduction to a trusted local real-estate agent for buying, renting or selling in Bal Harbour, Florida. The agent pays a referral fee on transaction — the service is never billed to you.",
    url: `${SITE.url}/real-estate`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Place", name: "Bal Harbour, Florida" },
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      description: "Free for buyers, renters and sellers.",
    },
  };
}

// Article entity for guides. Author is the site Organization (honest — the
// guides are written as the site's collective local voice, not a persona).
export function articleJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/guides/${guide.slug}#article`,
    headline: `${guide.title} ${guide.titleAccent}`,
    description: guide.description,
    image: `${SITE.url}${guide.heroImage}`,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage: "en-US",
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}/guides/${guide.slug}`,
    about: { "@type": "Place", name: "Bal Harbour, Florida" },
  };
}

export function guidesItemListJsonLd(guides: Guide[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bal Harbour travel guides",
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/guides/${g.slug}`,
      name: `${g.title} ${g.titleAccent}`,
    })),
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about#page`,
    url: `${SITE.url}/about`,
    name: "About bal-harbour.com",
    description:
      "Who writes bal-harbour.com, how we review, and how the site makes money — an independent local guide to Bal Harbour, Florida.",
    mainEntity: { "@id": `${SITE.url}/#organization` },
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
        sameAs: [h.officialUrl],
        description: h.oneLiner,
        starRating: { "@type": "Rating", ratingValue: h.stars },
        priceRange: `From $${h.price} per night`,
        address: { ...ADDRESS, streetAddress: h.address.split(",")[0] },
      },
    })),
  };
}
