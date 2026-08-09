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
      "Bal Harbour is one of the pricier corners of Greater Miami, but the range is wider than people expect: the independent Sea View Hotel starts around $208 a night while the St. Regis runs $687 to well past $1,200 in season. Dining and shopping skew high-end. The good news: the beach is free and you can wander the Bal Harbour Shops without spending a cent.",
  },
  {
    question: "How far is Bal Harbour from Miami and the airport?",
    answer:
      "Bal Harbour is about 12 miles (25–35 minutes by car) from Miami International Airport (MIA), roughly 9 miles north of South Beach (15–25 minutes), and 20–30 minutes from downtown Miami. Fort Lauderdale airport (FLL) is around 40 minutes north.",
  },
  {
    question: "Where should I stay in Bal Harbour?",
    answer:
      "The village has exactly three hotels, all on Collins Avenue. Our top pick is The St. Regis Bal Harbour — all 216 rooms face the ocean and it sits directly across from the Shops (from about $687). The independent Sea View Hotel is the old-school value play on the same beach (from about $208). The boutique Ritz-Carlton Bal Harbour at the inlet end is closed for renovation until January 2027.",
  },
  {
    question: "Is Bal Harbour Beach public?",
    answer:
      "Yes. Bal Harbour Beach is open to the public — the public access is at 96th Street and Collins Avenue, with metered parking, restrooms and an outdoor shower by the path. A paved beachwalk runs the length of the village to the Jetty Walk at Haulover Inlet (the pretty 102nd Street path is residents-only). The village doesn't publish a lifeguard schedule, so swim smart. Sand directly in front of the resorts is serviced for hotel guests, but the beach itself is free.",
  },
  {
    question: "Are Bal Harbour and Bay Harbor Islands the same place?",
    answer:
      "No — despite the nearly identical names, they're two different municipalities. Bal Harbour (spelled with a 'u') is the oceanfront village with the Shops, the hotels and the beach; Bay Harbor Islands (no 'u') is a residential two-island town in Biscayne Bay just west, connected by the 96th Street bridge. Locals treat them as one neighborhood: sleep by the ocean, cross the bridge for breakfast on Kane Concourse.",
  },
  {
    question: "Is Surfside part of Bal Harbour?",
    answer:
      "No — Bal Harbour and Surfside are two separate municipalities on the same barrier island, sharing the 33154 ZIP code. The border is 96th Street: Bal Harbour runs north of it to Haulover Inlet, Surfside sits south. For visitors they feel like one walkable destination — same beach, ten minutes on foot between their centers.",
  },
  {
    question: "Is the Ritz-Carlton Bal Harbour open?",
    answer:
      "Not right now. The Ritz-Carlton Bal Harbour closed on April 7, 2026 for a full renovation and is scheduled to reopen in January 2027 as an intimate coastal retreat. Until then, the village's open hotels are The St. Regis Bal Harbour (from about $687/night) and the independent Sea View Hotel (from about $208/night).",
  },
  {
    question: "Is Bal Harbour a good place to live?",
    answer:
      "Bal Harbour is a safe, walkable, highly desirable village favored for oceanfront condos and single-family homes. It keeps a quieter, more residential feel than neighboring Sunny Isles or Miami Beach while staying minutes from luxury shopping, dining, and the airport — which is a big part of why real estate here holds its value.",
  },
];
