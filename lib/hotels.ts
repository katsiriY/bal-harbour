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
  review: {
    paragraphs: string[];
    rundown: { label: string; value: string }[];
  };
  rates: Rate[];
};

function ratesFor(base: number): Rate[] {
  const enc = (s: string) => encodeURIComponent(s);
  return [
    {
      site: "Booking.com",
      price: Math.round(base * 1.025),
      url: `https://www.booking.com/searchresults.html?ss=${enc("Bal Harbour Florida")}`,
    },
    {
      site: "Expedia",
      price: base,
      best: true,
      url: `https://www.expedia.com/Hotel-Search?destination=${enc("Bal Harbour, FL")}`,
    },
    {
      site: "Hotel direct",
      price: Math.round(base * 1.05),
      url: "#",
    },
  ];
}

export const HOTELS: Hotel[] = [
  {
    slug: "the-grande-oceanfront",
    name: "The Grande Oceanfront",
    rankLabel: "№1 our pick",
    rankBadge: "gold",
    stars: 5,
    category: "Oceanfront",
    price: 890,
    oneLiner: "Sunrise pool, espresso at the towel stand, zero fuss.",
    homeBadge: "Local favorite",
    homeBadgeStyle: "dark",
    pullQuote:
      "The sunrise pool is the whole point. Get there before 9, order the cortado, thank us later.",
    amenities: ["Beach service", "Spa", "Kids club", "Valet"],
    filterTags: ["Oceanfront", "Spa", "Family"],
    images: [
      "/img/pool-sunrise.jpg",
      "/img/suite-ocean.jpg",
      "/img/lobby.jpg",
      "/img/beach-cabanas.jpg",
      "/img/bar-dusk.jpg",
    ],
    review: {
      paragraphs: [
        "The Grande has been the anchor of the mile for two decades, and it still doesn't coast. Rooms were redone in 2024 — pale wood, linen everything, balconies deep enough for actual breakfast. Service hits that Bal Harbour sweet spot: they know your name by day two but nobody hovers. The beach setup is the best on the strip, with loungers spaced like people, not inventory.",
        "What to know: the spa books out on weekends — reserve before you arrive. Ocean-view rooms on floors 6–9 are worth the bump; below that you're mostly looking at palm tops (not a tragedy). Skip the in-house Italian and walk to the village instead.",
      ],
      rundown: [
        { label: "Best for", value: "Couples, low-key luxury" },
        { label: "Rooms", value: "204, redone 2024" },
        { label: "Beach", value: "Private, full service" },
        { label: "Breakfast", value: "Included in most rates" },
        { label: "Kids", value: "Welcome, kids club 4+" },
        { label: "Parking", value: "Valet only, $65/nt" },
      ],
    },
    rates: ratesFor(890),
  },
  {
    slug: "casa-palma-resort",
    name: "Casa Palma Resort",
    rankLabel: "№2 · best for families",
    rankBadge: "ivory",
    stars: 4,
    category: "Oceanfront",
    price: 640,
    oneLiner: "Kids welcome, taste intact. Ceviche cart at 2pm sharp.",
    homeBadge: "Great for families",
    homeBadgeStyle: "ivory",
    pullQuote:
      "Kids cannonballing at one pool, adults pretending not to hear them at the other. Everybody wins.",
    amenities: ["Two pools", "Kids club", "Ceviche cart"],
    filterTags: ["Oceanfront", "Family"],
    images: [
      "/img/family-cabana.jpg",
      "/img/pool-sunrise.jpg",
      "/img/beach-picnic.jpg",
      "/img/terrace-golden.jpg",
    ],
    review: {
      paragraphs: [
        "Casa Palma is what happens when a family resort refuses to lower its standards. Two pools split the crowd naturally — a lively one with a splash zone and swim-up snack bar, a quieter adults-leaning one two courtyards over. Rooms run big, with pull-out sofas and kitchenettes that actually get used.",
        "The 2pm ceviche cart on the beach path is a genuine neighborhood event, not a gimmick — go early, it sells out. Kids club takes ages 3 and up with real activities, not just a TV room, which buys parents an honest two hours by the pool.",
      ],
      rundown: [
        { label: "Best for", value: "Families, multi-gen trips" },
        { label: "Rooms", value: "260, two-bedroom suites available" },
        { label: "Beach", value: "Private, two beach bars" },
        { label: "Breakfast", value: "Buffet included" },
        { label: "Kids", value: "Kids club 3+, cannonball-approved" },
        { label: "Parking", value: "Self-park $45/nt" },
      ],
    },
    rates: ratesFor(640),
  },
  {
    slug: "the-salt-house",
    name: "The Salt House",
    rankLabel: "№3 · adults-mostly",
    rankBadge: "ivory",
    stars: 5,
    category: "Boutique",
    price: 720,
    oneLiner: "Small and quiet, with the best negroni on the mile.",
    homeBadge: "Adults-mostly",
    homeBadgeStyle: "ivory",
    pullQuote:
      "Thirty rooms, one perfect negroni, and a lobby that smells like money and limes.",
    amenities: ["Rooftop bar", "Spa", "Pet-friendly"],
    filterTags: ["Adults-mostly", "Spa", "Pet-friendly"],
    images: [
      "/img/bar-dusk.jpg",
      "/img/rooftop-bar.jpg",
      "/img/lobby.jpg",
      "/img/suite-ocean.jpg",
    ],
    review: {
      paragraphs: [
        "Thirty rooms means the Salt House can afford to be precious about the details, and it is — turndown includes an actual handwritten note, not a printed card. The rooftop bar is the real draw: low light, a negroni menu with four variations, and a crowd that skews grown-up and unhurried.",
        "It's a five-minute walk to the beach rather than beachfront, which is the one trade-off — but the shared access and chair service more than make up for it, and the spa (small, excellent) is worth booking before you land. Dogs are genuinely welcome here, not just tolerated.",
      ],
      rundown: [
        { label: "Best for", value: "Couples, quiet luxury" },
        { label: "Rooms", value: "30, redone 2023" },
        { label: "Beach", value: "Shared access, chair service" },
        { label: "Breakfast", value: "À la carte, not included" },
        { label: "Kids", value: "Welcome but rare after 6pm" },
        { label: "Parking", value: "Valet only, $55/nt" },
      ],
    },
    rates: ratesFor(720),
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return HOTELS.find((h) => h.slug === slug);
}

export function relatedHotels(slug: string, count = 2): Hotel[] {
  return HOTELS.filter((h) => h.slug !== slug).slice(0, count);
}
