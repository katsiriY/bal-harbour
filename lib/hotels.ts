import { bookingSearchUrl, expediaSearchUrl } from "@/lib/affiliates";

export type FilterTag =
  | "Oceanfront"
  | "Adults-mostly"
  | "Family"
  | "Spa"
  | "Pet-friendly";

export type Rate = {
  site: string;
  price: number;
  best?: boolean;
  url: string;
};

export type Hotel = {
  slug: string;
  name: string;
  rankLabel: string;
  rankBadge: "gold" | "ivory";
  stars: number;
  category: string;
  price: number;
  oneLiner: string;
  homeBadge: string;
  homeBadgeStyle: "dark" | "ivory";
  pullQuote: string;
  amenities: string[];
  filterTags: FilterTag[];
  images: string[];
  imageAlts?: string[];
  address: string;
  geo: { lat: number; lng: number };
  officialUrl: string;
  // Set when something big is temporarily true (e.g. renovation closure).
  notice?: string;
  review: {
    paragraphs: string[];
    rundown: { label: string; value: string }[];
  };
  rates: Rate[];
};

// The village really does have exactly three hotels. All facts below were
// verified against public sources in July 2026 — prices are indicative
// "from" floors by season, not quotes.
export const HOTELS: Hotel[] = [
  {
    slug: "st-regis-bal-harbour",
    name: "The St. Regis Bal Harbour",
    rankLabel: "№1 our pick",
    rankBadge: "gold",
    stars: 5,
    category: "Oceanfront",
    price: 687,
    oneLiner:
      "All 216 rooms face the ocean, a butler answers the phone, and the Shops are across the street.",
    homeBadge: "The flagship",
    homeBadgeStyle: "dark",
    pullQuote:
      "Every single room faces the Atlantic. When sunrise hits those glass balconies, you'll forgive the rate. Mostly.",
    amenities: ["All rooms ocean-facing", "Butler service", "Remède Spa", "Beach service"],
    filterTags: ["Oceanfront", "Spa", "Family"],
    images: [
      "/img/st-regis-bal-harbour.jpg",
      "/img/suite-ocean.jpg",
      "/img/pool-sunrise.jpg",
      "/img/beach-cabanas.jpg",
      "/img/bar-dusk.jpg",
    ],
    imageAlts: [
      "The St. Regis Bal Habour towers behind the palms on Collins Avenue",
      "Ocean-view suite (illustrative)",
      "Resort pool at sunrise (illustrative)",
      "Beach cabanas (illustrative)",
      "Cocktail bar at dusk (illustrative)",
    ],
    address: "9703 Collins Ave, Bal Harbour, FL 33154",
    geo: { lat: 25.8887, lng: -80.1224 },
    officialUrl:
      "https://www.marriott.com/en-us/hotels/miaxr-the-st-regis-bal-harbour-resort/overview/",
    review: {
      paragraphs: [
        "The grande dame of the village, and it earns the title daily. All 216 rooms and suites face the Atlantic through floor-to-ceiling glass, butler service comes standard with every room, and the whole machine — pools, Remède Spa, beach rows — runs with the unhurried confidence of a place that knows exactly what it is. Atlantikós, the Santorini-style Greek restaurant downstairs, is a destination in its own right.",
        "What to know: this is the village's biggest splurge, with winter rates that clear $1,000 most nights — summer is when the math softens. The Bal Harbour Shops sit directly across Collins Avenue, close enough to carry your gelato back through the lobby. Book the spa before you land; weekends go first.",
      ],
      rundown: [
        { label: "Best for", value: "Milestone trips, spa people" },
        { label: "Rooms", value: "216, all ocean-facing" },
        { label: "Beach", value: "Private service, cabanas" },
        { label: "Dining", value: "Atlantikós (Greek), in-house" },
        { label: "The Shops", value: "Directly across the street" },
        { label: "Parking", value: "Valet" },
      ],
    },
    rates: [
      {
        site: "Booking.com",
        price: 705,
        url: bookingSearchUrl("The St. Regis Bal Harbour Resort"),
      },
      {
        site: "Expedia",
        price: 687,
        best: true,
        url: expediaSearchUrl("The St. Regis Bal Harbour Resort"),
      },
      {
        site: "Hotel direct",
        price: 720,
        url: "https://www.marriott.com/en-us/hotels/miaxr-the-st-regis-bal-harbour-resort/overview/",
      },
    ],
  },
  {
    slug: "sea-view-hotel",
    name: "Sea View Hotel",
    rankLabel: "№2 · the classic",
    rankBadge: "ivory",
    stars: 3,
    category: "Beachfront classic",
    price: 208,
    oneLiner:
      "The old-school independent on the same sand as the $900 neighbors — postcard era and proud of it.",
    homeBadge: "Best value",
    homeBadgeStyle: "ivory",
    pullQuote:
      "Same ocean, same sand, a third of the price. The math has worked since the postcard era.",
    amenities: ["Private beach", "Pool", "European-style service", "4th night free (May–Oct)"],
    filterTags: ["Oceanfront", "Family"],
    images: [
      "/img/sea-view-postcard.jpg",
      "/img/ocean-horizon.jpg",
      "/img/palms-surf.jpg",
      "/img/beach-picnic.jpg",
    ],
    imageAlts: [
      "Vintage postcard of the Sea View Hotel, Bal Harbour",
      "Atlantic Ocean horizon at Bal Harbour Beach",
      "Palms over the surf (illustrative)",
      "Beach picnic (illustrative)",
    ],
    address: "9909 Collins Ave, Bal Harbour, FL 33154",
    geo: { lat: 25.8925, lng: -80.1218 },
    officialUrl: "https://www.seaviewhotelbalharbour.com/",
    review: {
      paragraphs: [
        "Every luxury strip needs one holdout that remembers what the neighborhood was, and the Sea View is Bal Harbour's — an independent, European-style beachfront hotel that has been welcoming the same families for generations. Rooms are freshly renovated with ocean or bay views, the pool sits right on the sand, and the service is the personal kind the big brands spend millions trying to imitate.",
        "What to know: this is the village's honest bargain — rates start around $208, and from May through October the fourth night is free. You give up the butler-and-spa theater; you keep the exact same beach, sunrise, and five-minute stroll to the Shops. For long stays, nothing else on the mile comes close on value.",
      ],
      rundown: [
        { label: "Best for", value: "Longer stays, value seekers" },
        { label: "Rooms", value: "Renovated, ocean & bay views" },
        { label: "Beach", value: "Private, pool on the sand" },
        { label: "Deal", value: "4th night free, May–Oct 2026" },
        { label: "The Shops", value: "5-minute walk" },
        { label: "Style", value: "Independent, old-school" },
      ],
    },
    rates: [
      {
        site: "Booking.com",
        price: 214,
        url: bookingSearchUrl("Sea View Hotel Bal Harbour"),
      },
      {
        site: "Expedia",
        price: 218,
        url: expediaSearchUrl("Sea View Hotel Bal Harbour"),
      },
      {
        site: "Hotel direct",
        price: 208,
        best: true,
        url: "https://www.seaviewhotelbalharbour.com/",
      },
    ],
  },
  {
    slug: "ritz-carlton-bal-harbour",
    name: "The Ritz-Carlton Bal Harbour",
    rankLabel: "№3 · reopening Jan 2027",
    rankBadge: "ivory",
    stars: 5,
    category: "Boutique luxury",
    price: 480,
    oneLiner:
      "The quiet boutique at the inlet end — closed for a top-to-bottom glow-up, back January 2027.",
    homeBadge: "Reopens Jan 2027",
    homeBadgeStyle: "ivory",
    pullQuote:
      "The smallest, quietest luxury address in the village, hiding at the inlet end of Collins. Worth the wait.",
    amenities: ["Boutique scale", "Inlet-end quiet", "Artisan Beach House"],
    filterTags: ["Oceanfront", "Spa", "Adults-mostly"],
    images: [
      "/img/bal-harbour-skyline.jpg",
      "/img/haulover-inlet.jpg",
      "/img/suite-ocean.jpg",
      "/img/lobby.jpg",
    ],
    imageAlts: [
      "The Bal Harbour skyline across Biscayne Bay — the Ritz-Carlton anchors the northern end",
      "Haulover Park across the inlet from Bal Harbour",
      "Ocean-view suite (illustrative)",
      "Hotel lobby (illustrative)",
    ],
    address: "10295 Collins Ave, Bal Harbour, FL 33154",
    geo: { lat: 25.9018, lng: -80.1215 },
    officialUrl:
      "https://www.ritzcarlton.com/en/hotels/miazl-the-ritz-carlton-bal-harbour-miami/overview/",
    notice:
      "Closed for renovation April–December 2026. Reopening January 2027 as an intimate coastal retreat — the links below take 2027 bookings.",
    review: {
      paragraphs: [
        "The village's third hotel is its best-kept secret: a boutique-scale Ritz-Carlton at the far northern tip of Collins, where the only thing past your balcony is the Haulover Inlet and open water. It has always traded scale for calm — a fraction of the rooms of the big resorts, a residential hush, and Artisan Beach House doing oceanfront brunch downstairs.",
        "What to know right now: the hotel closed on April 7, 2026 for a full renovation and reopens in January 2027 as what the brand is calling an intimate coastal retreat. Historic rates started around $480; expect the new version to open higher. If your dates are 2027, book direct early — boutique room counts sell out fast, and the inlet-end quiet is exactly what the village's repeat guests fight over.",
      ],
      rundown: [
        { label: "Status", value: "Closed until Jan 2027" },
        { label: "Rooms", value: "Boutique-scale, residential feel" },
        { label: "Beach", value: "Private, at the inlet" },
        { label: "Dining", value: "Artisan Beach House (reopens with hotel)" },
        { label: "The Shops", value: "10-minute walk south" },
        { label: "Parking", value: "Valet" },
      ],
    },
    rates: [
      {
        site: "Booking.com",
        price: 495,
        url: bookingSearchUrl("The Ritz-Carlton Bal Harbour"),
      },
      {
        site: "Expedia",
        price: 510,
        url: expediaSearchUrl("The Ritz-Carlton Bal Harbour"),
      },
      {
        site: "Hotel direct",
        price: 480,
        best: true,
        url: "https://www.ritzcarlton.com/en/hotels/miazl-the-ritz-carlton-bal-harbour-miami/overview/",
      },
    ],
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return HOTELS.find((h) => h.slug === slug);
}

export function relatedHotels(slug: string, count = 2): Hotel[] {
  return HOTELS.filter((h) => h.slug !== slug).slice(0, count);
}

// The rate every "Check rates" / "Book the best rate" CTA points at.
export function bestRate(hotel: Hotel): Rate {
  return hotel.rates.find((r) => r.best) ?? hotel.rates[0];
}
