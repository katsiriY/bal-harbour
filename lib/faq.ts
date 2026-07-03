// Homepage FAQ — the exact same text feeds the visible section and the
// FAQPage JSON-LD (Google requires them to match). Answers are written
// "answer-first" so ChatGPT/Perplexity/AI Overviews can quote them cleanly.
export type Faq = { question: string; answer: string };

export const HOME_FAQS: Faq[] = [
  {
    question: "Is Bal Harbour worth visiting?",
    answer:
      "Yes. Bal Harbour is a small, upscale beach village at the north end of Miami Beach, best known for the luxury Bal Harbour Shops, oceanfront resorts, and a calm, clean public beach. It's ideal if you want walkable luxury shopping and dining beside the ocean, without the party-crowd energy of South Beach.",
  },
  {
    question: "What is Bal Harbour known for?",
    answer:
      "Bal Harbour is best known for the Bal Harbour Shops — one of the most successful luxury shopping centers in the U.S., with boutiques like Chanel, Gucci, and Saint Laurent — plus its oceanfront resorts (including the Ritz-Carlton and St. Regis), a clean Atlantic Ocean beach, and an exclusive, low-key residential feel.",
  },
  {
    question: "What is the best time to visit Bal Harbour?",
    answer:
      "The best time to visit Bal Harbour is November through April, when the weather is warm and dry with daytime highs in the 70s–80s°F. June through October is hotter, more humid, and inside hurricane season — but it's also the cheapest time to book an oceanfront hotel.",
  },
  {
    question: "Is Bal Harbour expensive?",
    answer:
      "Bal Harbour is one of the pricier corners of Greater Miami. Oceanfront hotels typically run from about $400 to $1,200+ a night depending on season, and dining and shopping skew high-end. The good news: the beach is free to access and you can wander the Bal Harbour Shops without spending a cent.",
  },
  {
    question: "How far is Bal Harbour from Miami and the airport?",
    answer:
      "Bal Harbour is about 12 miles (25–35 minutes by car) from Miami International Airport (MIA), roughly 9 miles north of South Beach (15–25 minutes), and 20–30 minutes from downtown Miami. Fort Lauderdale airport (FLL) is around 40 minutes north.",
  },
  {
    question: "Where should I stay in Bal Harbour?",
    answer:
      "Stay oceanfront on Collins Avenue if you can. For low-key luxury and couples our top pick is The Grande Oceanfront; families do well at Casa Palma Resort with its two pools and kids' club; and adults-mostly travelers love the quiet, 30-room Salt House. All three are walkable to the Bal Harbour Shops and the beach.",
  },
  {
    question: "Is Bal Harbour Beach public?",
    answer:
      "Yes. Bal Harbour Beach is open to the public, with a paved beach path — the Bal Harbour Jetty Walk — connecting south toward Haulover Park. Some sand directly in front of the resorts is reserved for hotel guests, but there is public access with nearby permit and metered parking.",
  },
  {
    question: "Is Bal Harbour a good place to live?",
    answer:
      "Bal Harbour is a safe, walkable, highly desirable village favored for oceanfront condos and single-family homes. It keeps a quieter, more residential feel than neighboring Sunny Isles or Miami Beach while staying minutes from luxury shopping, dining, and the airport — which is a big part of why real estate here holds its value.",
  },
];
