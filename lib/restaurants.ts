export type DiningTag =
  | "Breakfast"
  | "Long lunch"
  | "Date night"
  | "Drinks"
  | "On the water";

export type Restaurant = {
  slug: string;
  name: string;
  category: string;
  price: string;
  blurb: string;
  quote?: string;
  image: string;
  imageAlt: string;
  tags: DiningTag[];
  featured?: boolean;
  location: string;
  geo: { lat: number; lng: number };
  // Direct reservation link when the venue has one (Resy/OpenTable page or
  // its own site); otherwise DiningList falls back to an OpenTable search.
  reserveUrl?: string;
};

// Seven real tables, verified open (or newly opened) as of July 2026.
// Le Zoo and Aba both closed; Artisan Beach House is dark until the
// Ritz-Carlton reopens in January 2027 — none of them are listed.
export const RESTAURANTS: Restaurant[] = [
  {
    slug: "makoto",
    name: "Makoto",
    category: "Japanese, sushi & robata",
    price: "$$$$",
    blurb:
      "Edomae sushi and charcoal robata from Makoto Okuwa, on Level 3 of the Shops.",
    quote:
      "Master-level sushi in the middle of a luxury mall — somehow the least Miami and most Bal Harbour thing at once.",
    image: "/img/raw-bar.jpg",
    imageAlt: "Sushi and raw-bar platter (illustrative)",
    tags: ["Date night", "Long lunch"],
    featured: true,
    location: "Bal Harbour Shops, Level 3",
    geo: { lat: 25.888, lng: -80.1257 },
  },
  {
    slug: "slims",
    name: "Slim's",
    category: "steakhouse",
    price: "$$$$",
    blurb:
      "Stephen Starr's 2026 opening — Wagyu, caviar, old-Hollywood gloss. Reservations drop 30 days out; move fast.",
    image: "/img/bar-dusk.jpg",
    imageAlt: "Steakhouse bar at dusk (illustrative)",
    tags: ["Date night", "Drinks"],
    location: "Bal Harbour Shops",
    geo: { lat: 25.8879, lng: -80.1256 },
    reserveUrl: "https://resy.com/cities/bal-harbour-fl-fl/venues/slims",
  },
  {
    slug: "carpaccio",
    name: "Carpaccio",
    category: "Italian",
    price: "$$$",
    blurb:
      "28 years of paper-thin carpaccio and the best people-watching terrace in Miami.",
    image: "/img/bal-harbour-shops-real.jpg",
    imageAlt: "Café tables under the palms in the Bal Harbour Shops courtyard",
    tags: ["Long lunch"],
    location: "Bal Harbour Shops",
    geo: { lat: 25.8881, lng: -80.1258 },
    reserveUrl:
      "https://www.opentable.com/r/carpaccio-bal-harbour-shops-bal-harbour",
  },
  {
    slug: "hillstone",
    name: "Hillstone",
    category: "American",
    price: "$$$",
    blurb:
      "The dependable one — surgical service, palm-grove views, a burger that outclasses the zip code.",
    image: "/img/pasta.jpg",
    imageAlt: "Plated dinner (illustrative)",
    tags: ["Long lunch", "Drinks"],
    location: "Bal Harbour Shops",
    geo: { lat: 25.8878, lng: -80.1255 },
    reserveUrl: "https://hillstone.com/",
  },
  {
    slug: "sant-ambroeus",
    name: "Sant Ambroeus",
    category: "Milanese café",
    price: "$$$",
    blurb:
      "Cappuccino the way Milan means it, pastries worth the valet line, people-watching included.",
    image: "/img/pastries.jpg",
    imageAlt: "Italian pastries and espresso (illustrative)",
    tags: ["Breakfast"],
    location: "Bal Harbour Shops",
    geo: { lat: 25.8882, lng: -80.1256 },
  },
  {
    slug: "atlantikos",
    name: "Atlantikós",
    category: "Greek",
    price: "$$$$",
    blurb:
      "Santorini-white room, the Atlantic out the window, whole fish for two. At the St. Regis.",
    image: "/img/terrace-golden.jpg",
    imageAlt: "Golden-hour terrace by the ocean (illustrative)",
    tags: ["Date night", "On the water"],
    location: "The St. Regis Bal Harbour",
    geo: { lat: 25.8887, lng: -80.1224 },
  },
  {
    slug: "surf-club-restaurant",
    name: "The Surf Club Restaurant",
    category: "continental, by Thomas Keller",
    price: "$$$$",
    blurb:
      "Thomas Keller's Michelin-starred continental classic — table-side Caesar, old-world glamour. Five minutes south, in Surfside.",
    image: "/img/lobby.jpg",
    imageAlt: "Elegant dining room (illustrative)",
    tags: ["Date night", "On the water"],
    location: "Four Seasons Surf Club, Surfside",
    geo: { lat: 25.8792, lng: -80.1213 },
    reserveUrl: "https://www.surfclubrestaurant.com/",
  },
];

export const DINING_TAGS: DiningTag[] = [
  "Breakfast",
  "Long lunch",
  "Date night",
  "Drinks",
  "On the water",
];
