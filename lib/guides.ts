// Long-form guides — the content engine for organic search and AI answers.
// Each guide is structured data rendered by app/guides/[slug]/page.tsx:
// question-shaped H2s followed by a short, liftable answer (the "answer"
// block), then depth. Paragraphs and list items support inline markdown
// links [text](/path) for internal linking.
import type { Faq } from "@/lib/faq";

export type GuideBlock =
  | { type: "h2"; text: string }
  | { type: "answer"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string };

export type Guide = {
  slug: string;
  title: string;
  titleAccent: string; // rendered in serif italic gold after the title
  seoTitle: string;
  description: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  published: string; // ISO date
  updated: string; // ISO date
  intro: string;
  blocks: GuideBlock[];
  faqs?: Faq[];
  related: { label: string; href: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "bal-harbour-vs-surfside",
    title: "Bal Harbour vs Surfside:",
    titleAccent: "which one are you?",
    seoTitle: "Bal Harbour vs Surfside — Which Should You Choose? (Local's Honest Take)",
    description:
      "Bal Harbour and Surfside sit shoulder to shoulder on the same beach, one street apart. A local's honest comparison: hotels, prices, dining, vibe — and which village fits which traveler.",
    eyebrow: "THE HONEST COMPARISON",
    heroImage: "/img/beach-path.jpg",
    heroAlt: "The beach path between Bal Harbour and Surfside, Florida",
    published: "2026-07-03",
    updated: "2026-07-03",
    intro:
      "They share a beach, a ZIP-code prefix and a wall of gorgeous Atlantic sunrise. The border is literally one street — 96th. And yet Bal Harbour and Surfside are different animals, and picking the wrong one for your kind of trip is the most common mistake we see visitors make. Here's the honest version, from people who walk both every week.",
    blocks: [
      {
        type: "h2",
        text: "What's the actual difference between Bal Harbour and Surfside?",
      },
      {
        type: "answer",
        text: "Bal Harbour is the polished northern tip — flagship oceanfront resorts, the luxury Bal Harbour Shops, valet everything. Surfside, immediately south of 96th Street, is quieter and more residential: low-rise streets, family delis and bakeries on Harding Avenue, and generally gentler hotel prices on the same sand.",
      },
      {
        type: "p",
        text: "Neither is 'better.' Bal Harbour is where you go when the trip itself is the event — anniversary, big birthday, the one week a year you go full resort mode. Surfside is where you go to live like a local for a week: espresso at a counter, beach chair under your arm, dinner somewhere the waiter remembers you by Thursday.",
      },
      { type: "h2", text: "Which has better hotels?" },
      {
        type: "answer",
        text: "Bal Harbour has the flagship oceanfront resorts — the kind with private beach service, serious spas and $600+ nightly rates. Surfside skews boutique and residential, with a couple of famous exceptions. If you want the full resort machine, stay in Bal Harbour; if you want charm per dollar, look south of 96th.",
      },
      {
        type: "p",
        text: "We rank all three Bal Harbour properties on [our hotels page](/hotels). The short version: [The St. Regis](/hotels/st-regis-bal-harbour) is the flagship — 216 rooms, every one facing the ocean; the independent [Sea View Hotel](/hotels/sea-view-hotel) is the old-school value play from about $208; and the boutique [Ritz-Carlton](/hotels/ritz-carlton-bal-harbour) at the inlet is closed for renovation until January 2027. Surfside's headliner is the Four Seasons Surf Club, the 1930s landmark where Thomas Keller runs his Michelin-starred Surf Club Restaurant.",
      },
      { type: "h2", text: "Where should I eat — and does it matter which village?" },
      {
        type: "answer",
        text: "It barely matters: the two villages function as one dining scene, and everything is a 5–15 minute walk along Collins or Harding. Bal Harbour leans polished (resort restaurants, the Shops' cafés); Surfside leans neighborhood (bakeries, delis, family-run spots).",
      },
      {
        type: "p",
        text: "Our rule: breakfast at Sant Ambroeus, long lunch wherever you already are, date night at Makoto or — for the once-a-year table — Keller's Surf Club Restaurant. The [seven tables we actually love](/eat) covers both sides of 96th Street, every one verified open.",
      },
      { type: "h2", text: "Is the beach different?" },
      {
        type: "answer",
        text: "It's the same continuous strand of Atlantic beach — same sand, same sunrise, same warm water. The differences are texture: Bal Harbour's stretch is backed by resort cabana rows and feels more serviced; Surfside's feels more like a town beach, with locals walking dogs at 7am.",
      },
      {
        type: "p",
        text: "Both are public below the high-tide line, and both connect to the paved beach path. Everything you need to know — entrances, parking, timing, cabana etiquette — is in our [beach guide](/beach).",
      },
      { type: "h2", text: "What about prices?" },
      {
        type: "answer",
        text: "Expect Bal Harbour hotels to run roughly 30–60% above comparable Surfside stays in season, with oceanfront resorts commonly $600–$1,200+ per night November–April. Surfside boutiques and condo-hotels can dip well under $400. Dining gaps are smaller; beach and browsing are free in both.",
      },
      { type: "h2", text: "So… which one are you?" },
      {
        type: "list",
        items: [
          "**Choose Bal Harbour** if: it's a milestone trip, you want beach service and a serious spa, the [Shops](/shops) are on your list, or you simply don't want to think about logistics for a week.",
          "**Choose Surfside** if: you're staying longer than a week, traveling with a stroller you actually push, happiest with a bakery routine, or watching the budget without giving up the beach.",
          "**Torn?** Stay in Surfside, play in Bal Harbour. The walk between them is ten flat, palm-lined minutes — you genuinely can have both.",
        ],
      },
      {
        type: "tip",
        text: "Thinking less 'vacation' and more 'what if we lived here'? That question has a whole page: [our real-estate intro service](/real-estate) matches you with a local agent — free, no spam.",
      },
    ],
    faqs: [
      {
        question: "Are Bal Harbour and Surfside walkable to each other?",
        answer:
          "Yes — they meet at 96th Street and the walk between their centers is about ten flat minutes along Collins Avenue or the beach path. Most visitors treat the two villages as one destination.",
      },
      {
        question: "Which is better for families, Bal Harbour or Surfside?",
        answer:
          "Both work well. Surfside feels more residential and casual; in Bal Harbour, families do best at the St. Regis (yes, really — kids are genuinely welcome) or the budget-friendlier Sea View Hotel. For toddlers and strollers, Surfside's quieter streets edge it.",
      },
      {
        question: "Is Bal Harbour more expensive than Surfside?",
        answer:
          "Generally yes for hotels — roughly 30–60% higher for comparable oceanfront stays in season. Dining and beach costs are similar, and the Bal Harbour Shops cost nothing to browse.",
      },
    ],
    related: [
      { label: "Every Bal Harbour hotel, ranked", href: "/hotels" },
      { label: "The beach guide", href: "/beach" },
      { label: "Seven tables we love", href: "/eat" },
    ],
  },
  {
    slug: "beach-access",
    title: "Bal Harbour beach access,",
    titleAccent: "every entrance explained.",
    seoTitle: "Bal Harbour Beach Access — Every Public Entrance, Parking & Rules (2026)",
    description:
      "Yes, Bal Harbour Beach is public. Where the entrances are (96th Street is the quiet one), where to park, what the cabana rows mean, and the rules nobody posts — a local's complete access guide.",
    eyebrow: "THE PRACTICAL ONE",
    heroImage: "/img/ocean-horizon.jpg",
    heroAlt: "Wide Atlantic Ocean horizon from Bal Harbour Beach at sunrise",
    published: "2026-07-03",
    updated: "2026-07-03",
    intro:
      "The number-one question tourists ask us — usually while standing on Collins Avenue looking suspiciously at a resort gate — is 'can we even get on this beach?' Yes. All Florida beaches are public below the mean high-tide line, and Bal Harbour has a proper public entrance — with parking, restrooms and lifeguards — that doesn't involve walking through a hotel lobby pretending you're a guest. Here's exactly how it works.",
    blocks: [
      { type: "h2", text: "Is Bal Harbour Beach public?" },
      {
        type: "answer",
        text: "Yes. The wet sand (below the high-tide line) is public along the entire mile, as everywhere in Florida, and Bal Harbour maintains public access points along Collins Avenue. The cabana rows and lounger setups near the resorts sit on hotel-serviced sand, but you can walk past them and set up your own chair by the water — free.",
      },
      { type: "h2", text: "Where is the public entrance?" },
      {
        type: "answer",
        text: "The village's public beach access is at 96th Street and Collins Avenue, right on the Surfside border. It comes equipped: restrooms and an outdoor shower beside the path, a bike-share station on the south side, and the paved beachwalk running north from there along the entire village.",
      },
      {
        type: "p",
        text: "One entrance sounds stingy until you realize the whole beach connects — get on at 96th and the beachwalk carries you the full mile north to the Jetty Walk at Haulover Inlet, past every resort, with benches and shade stops along the way.",
      },
      { type: "h2", text: "Where do I park?" },
      {
        type: "answer",
        text: "Metered parking around 96th and Collins runs roughly $1–2 per hour with a four-hour limit, plus a small public lot on 96th itself. It fills by mid-morning on winter weekends — arrive before 9:30am or after 3pm. If you're staying at a village hotel, just walk; nothing on the mile is more than 15 minutes on foot.",
      },
      {
        type: "tip",
        text: "Sunrise is the show here — the beach faces due east. Parking at 6:45am is effortless, the light is ridiculous, and you'll have the sandbar to yourself plus half the neighborhood's golden retrievers on the [beach path](/beach).",
      },
      { type: "h2", text: "Can I use the hotel cabanas and loungers?" },
      {
        type: "answer",
        text: "The cabana rows belong to the resorts, but several rent to non-guests on slower days — call the beach club directly after 10am and ask. Otherwise, bring your own chair and umbrella and set up on the public sand near the waterline; nobody will bother you.",
      },
      {
        type: "p",
        text: "If you want the full serviced-sand experience without negotiating, the honest move is staying oceanfront for a night or two — [the St. Regis](/hotels/st-regis-bal-harbour) runs the most polished beach operation on the strand, and the [Sea View](/hotels/sea-view-hotel) puts you on the same sand for a fraction of the rate.",
      },
      { type: "h2", text: "What are the actual rules?" },
      {
        type: "list",
        items: [
          "**Hours:** sunrise to sunset — the village clears the beach after dark.",
          "**Alcohol & glass:** not allowed on the sand (resorts serve on their cabana rows; that's their license, not yours).",
          "**Dogs:** on the paved beach path yes, on the sand officially no — you'll see locals bend this at 7am; be cool, leash up, carry bags.",
          "**Drones:** treat as no — you're near private resort airspace and nesting zones.",
          "**Turtle season (May–October):** fill in holes, knock down sandcastles at day's end, and never touch marked nests. Lights off the sand at night.",
        ],
      },
      { type: "h2", text: "What's the water actually like?" },
      {
        type: "answer",
        text: "Warm and usually calm. Summer water hits the high 80s°F; even January rarely dips below the low 70s. Surf is gentle most days — this is swimming-and-floating water, not surfing water — and the mid-morning low tide leaves a wide, firm strand perfect for long walks.",
      },
      {
        type: "p",
        text: "For what to do after you towel off: the [Shops](/shops) are a two-minute walk from mid-village, and our [dining list](/eat) has the post-beach lunch sorted (get the $9 fish sandwich; thank us later).",
      },
    ],
    faqs: [
      {
        question: "Does Bal Harbour Beach cost anything?",
        answer:
          "No — beach access is free. You pay only for parking (metered) and anything you rent from a hotel beach club.",
      },
      {
        question: "Where is the Bal Harbour beach entrance?",
        answer:
          "At 96th Street and Collins Avenue, on the Surfside border — with metered parking (about $1\u20132/hr, 4-hour limit), restrooms and an outdoor shower by the path, and a bike-share station on the south side.",
      },
      {
        question: "Can non-guests rent cabanas in Bal Harbour?",
        answer:
          "Sometimes — several resort beach clubs rent cabanas and loungers to non-guests on slower days. Call after 10am and ask; weekdays outside high season are your best odds.",
      },
      {
        question: "Is Bal Harbour Beach good for kids?",
        answer:
          "Very — calm surf, a shallow sandbar near the 96th Street entrance, and lifeguards on duty daily from 9am to 5pm. Mornings before the UV peaks are the sweet spot.",
      },
    ],
    related: [
      { label: "The full beach guide", href: "/beach" },
      { label: "Hotels with the best beach setups", href: "/hotels" },
      { label: "Lunch after the beach", href: "/eat" },
    ],
  },
  {
    slug: "best-time-to-visit",
    title: "The best time to visit Bal Harbour —",
    titleAccent: "a local's honest calendar.",
    seoTitle: "Best Time to Visit Bal Harbour, Florida — Month-by-Month Local's Guide",
    description:
      "November through April is the sweet spot — but the honest answer is more interesting. Hotel prices by season, hurricane-season truth, water temperatures, Art Basel week, and the two secret shoulder months locals love.",
    eyebrow: "TIMING IS EVERYTHING",
    heroImage: "/img/terrace-golden.jpg",
    heroAlt: "Golden hour light over a Bal Harbour oceanfront terrace",
    published: "2026-07-03",
    updated: "2026-07-03",
    intro:
      "Everyone asks 'when's the best time to visit?' expecting a month. The real answer is a question back: best for what — weather, prices, quiet, or the scene? Bal Harbour has four different 'best times' depending on which one you're optimizing. Here's the whole calendar, with the trade-offs stated out loud.",
    blocks: [
      { type: "h2", text: "When is the best time to visit Bal Harbour?" },
      {
        type: "answer",
        text: "For classic perfect weather: mid-November through April — dry, sunny, 70s–80s°F, ocean warm enough to swim. For value: late April–May and late October–early November, the shoulder months with 80% of the weather at 60% of the price. June–October is hot, humid and stormy-by-afternoon, but it's also when oceanfront rates drop hardest.",
      },
      { type: "h2", text: "What does each season actually feel like?" },
      {
        type: "list",
        items: [
          "**December–April (high season):** the postcard. Dry air, endless sun, the village humming. Hotels run $600–$1,200+ oceanfront and book out around holidays. This is what the brochure sells, and honestly, it delivers.",
          "**May & early June (secret shoulder #1):** ocean already 84°F, crowds gone after Memorial Day weekday mornings feel private. Afternoon clouds build but rarely ruin a day. Rates drop hard.",
          "**June–September (summer):** hot, humid, dramatic 4pm thunderstorms that clear by dinner. Water like a bath (high 80s). The trade: cheapest oceanfront rooms of the year, sometimes under half of February's rate. Do beach mornings, [Shops](/shops) afternoons, and you'll wonder why people avoid it.",
          "**October–mid-November (secret shoulder #2):** storm risk fades, humidity breaks, locals reclaim their restaurants. Our favorite month to actually live here is late October.",
        ],
      },
      { type: "h2", text: "What about hurricane season — should I actually worry?" },
      {
        type: "answer",
        text: "Hurricane season runs June 1–November 30, with the statistical peak mid-August to mid-October. Most days in those months are simply hot and beautiful, and direct hits are rare — but if a storm does approach, you'll have days of warning. Book summer trips with free-cancellation rates and travel insurance, then relax.",
      },
      {
        type: "p",
        text: "Every rate row on [our hotel pages](/hotels) links to the booking sites' flexible-cancellation options — in summer, always take the refundable rate; the few dollars saved on prepaid isn't worth the September roulette.",
      },
      { type: "h2", text: "When are hotel prices lowest?" },
      {
        type: "answer",
        text: "September is reliably the cheapest month — peak storm statistics scare everyone off, and oceanfront rooms that cost $900 in February can dip under $400. Late August and early October are close behind. The most expensive weeks: Christmas–New Year's, Presidents' week, spring break Saturdays, and Art Basel (early December).",
      },
      { type: "h2", text: "What's the deal with Art Basel week?" },
      {
        type: "answer",
        text: "The first week of December, greater Miami becomes the center of the art world, and Bal Harbour becomes its quietest luxury dormitory — rooms price like Christmas, restaurants fill with gallery people, and the [Shops](/shops) run their most ambitious installations. Fantastic energy; terrible value. Book months ahead or skip it entirely.",
      },
      { type: "h2", text: "When's the water warm enough to swim?" },
      {
        type: "answer",
        text: "Effectively always — this is the warm side of Florida. Ocean temps run roughly: low 70s°F January–February (locals wetsuit-whine, northerners swim happily), 80°F by May, high 80s July–September, sliding back through the low 80s in November.",
      },
      {
        type: "tip",
        text: "Whenever you land on dates, sunrise is non-negotiable: the beach faces due east and the show starts around 6:45am in winter, 6:15 in summer. Full logistics in the [beach guide](/beach) — then get the croissant. You'll know [which one](/eat).",
      },
    ],
    faqs: [
      {
        question: "What is the cheapest month to visit Bal Harbour?",
        answer:
          "September — peak hurricane-statistics month scares crowds off, and oceanfront rates drop to their yearly floor, sometimes under half of high-season prices. Book refundable rates and you get a warm, quiet, luxurious week for boutique-hotel money.",
      },
      {
        question: "Is Bal Harbour crowded during spring break?",
        answer:
          "Busier, but nothing like South Beach — Bal Harbour's scene skews families and couples, not party crowds. March weekends fill hotels and restaurants; midweek stays feel nearly normal.",
      },
      {
        question: "Can you swim in Bal Harbour in winter?",
        answer:
          "Yes — winter ocean temperatures sit in the low 70s°F. Locals find it brisk; most visitors from colder climates swim comfortably, especially by afternoon.",
      },
    ],
    related: [
      { label: "Where to stay when you come", href: "/hotels" },
      { label: "Beach conditions & access", href: "/beach" },
      { label: "Bal Harbour vs Surfside", href: "/guides/bal-harbour-vs-surfside" },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function relatedGuides(slug: string, count = 2): Guide[] {
  return GUIDES.filter((g) => g.slug !== slug).slice(0, count);
}
