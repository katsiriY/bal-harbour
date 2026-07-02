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
  tags: DiningTag[];
  featured?: boolean;
};

export const RESTAURANTS: Restaurant[] = [
  {
    slug: "marisma",
    name: "Marisma",
    category: "coastal Spanish",
    price: "$$$$",
    blurb: "Order the whole fish and the cheapest sherry. Sit outside. Cancel your evening.",
    quote: "Order the whole fish and the cheapest sherry. Sit outside. Cancel your evening.",
    image: "/img/terrace-golden.jpg",
    tags: ["Date night", "On the water"],
    featured: true,
  },
  {
    slug: "cafe-palmier",
    name: "Café Palmier",
    category: "breakfast",
    price: "$$",
    blurb: "The croissant that makes the valet line worth it.",
    image: "/img/pastries.jpg",
    tags: ["Breakfast"],
  },
  {
    slug: "inlet-oyster-club",
    name: "Inlet Oyster Club",
    category: "drinks",
    price: "$$$",
    blurb: "Happy hour with actual happiness, 4–6 daily.",
    image: "/img/raw-bar.jpg",
    tags: ["Drinks"],
  },
  {
    slug: "osteria-del-faro",
    name: "Osteria del Faro",
    category: "date night",
    price: "$$$$",
    blurb: "Candlelight, cacio e pepe, and a wine list that flirts back.",
    image: "/img/pasta.jpg",
    tags: ["Date night"],
  },
  {
    slug: "the-sandbar-kiosk",
    name: "The Sandbar Kiosk",
    category: "lunch",
    price: "$",
    blurb: "A $9 fish sandwich in a $9M zip code. Balance.",
    image: "/img/beach-picnic.jpg",
    tags: ["Long lunch", "On the water"],
  },
  {
    slug: "altamar-rooftop",
    name: "Altamar Rooftop",
    category: "drinks",
    price: "$$$",
    blurb: "Sunset over the inlet, negroni in hand.",
    image: "/img/rooftop-bar.jpg",
    tags: ["Drinks"],
  },
];

export const DINING_TAGS: DiningTag[] = [
  "Breakfast",
  "Long lunch",
  "Date night",
  "Drinks",
  "On the water",
];
