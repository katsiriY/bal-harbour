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
    updated: "2026-08-06",
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
        question: "Is Surfside part of Bal Harbour?",
        answer:
          "No — they are two separate municipalities that share the same barrier island and even the same 33154 ZIP code. The Village of Bal Harbour runs from 96th Street north to Haulover Inlet; the Town of Surfside sits immediately south. Each has its own government, police and beach rules, but for visitors they function as one walkable destination.",
      },
      {
        question: "How big are Bal Harbour and Surfside?",
        answer:
          "Tiny, both of them. Bal Harbour is about 0.4 square miles with roughly 3,100 residents (2020 census); Surfside is about half a square mile with roughly 5,700. Bal Harbour is the smaller and quieter of the two — a village of ~3,100 people hosting one of the most famous luxury malls in the world.",
      },
      {
        question: "Is Bal Harbour more expensive than Surfside?",
        answer:
          "Generally yes for hotels — roughly 30–60% higher for comparable oceanfront stays in season. Dining and beach costs are similar, and the Bal Harbour Shops cost nothing to browse.",
      },
    ],
    related: [
      { label: "The full Surfside guide", href: "/guides/surfside" },
      { label: "Every Bal Harbour hotel, ranked", href: "/hotels" },
      { label: "Seven tables we love", href: "/eat" },
    ],
  },
  {
    slug: "beach-access",
    title: "Bal Harbour beach access,",
    titleAccent: "how to get on, explained.",
    seoTitle: "Bal Harbour Beach Access (2026) — The Public Entrance, Parking & Rules",
    description:
      "Yes, Bal Harbour Beach is public. The one public entrance at 96th & Collins, where to park, the pretty-but-residents-only 102nd Street path, cabana etiquette and the rules nobody posts — a local's complete access guide.",
    eyebrow: "THE PRACTICAL ONE",
    heroImage: "/img/ocean-horizon.jpg",
    heroAlt: "Wide Atlantic Ocean horizon from Bal Harbour Beach at sunrise",
    published: "2026-07-03",
    updated: "2026-08-24",
    intro:
      "The number-one question tourists ask us — usually while standing on Collins Avenue looking suspiciously at a resort gate — is 'can we even get on this beach?' Yes. All Florida beaches are public below the mean high-tide line, and Bal Harbour has a proper public entrance — with parking, restrooms and a shower — that doesn't involve walking through a hotel lobby pretending you're a guest. Here's exactly how it works.",
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
      {
        type: "tip",
        text: "Spotted the gorgeous paver path with the wood benches at 102nd Street? That's the village's Enzo Enea–designed access path — and its gates open only with a resident All Access Card. Admire it, then use 96th like the rest of us.",
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
          "Very — calm surf and a shallow sandbar near the 96th Street entrance. One honest caveat: the village doesn\u2019t publish a lifeguard schedule, so treat it as an unguarded beach unless you see a staffed tower, and keep kids near other swimmers. Mornings before the UV peaks are the sweet spot.",
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
    updated: "2026-08-06",
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
  {
    slug: "bay-harbor-islands",
    title: "Bay Harbor Islands:",
    titleAccent: "the dinner island next door.",
    seoTitle:
      "Bay Harbor Islands vs Bal Harbour — Yes, They're Different Places (Local's Guide)",
    description:
      "Bal Harbour and Bay Harbor Islands: nearly identical names, two different municipalities, one short bridge apart. What the islands actually are, the Kane Concourse strip where locals eat breakfast through dinner, and why you sleep by the ocean but cross the bridge to eat.",
    eyebrow: "THE NAME-TWIN NEXT DOOR",
    heroImage: "/img/bal-harbour-skyline.jpg",
    heroAlt:
      "The Bal Harbour skyline seen across Biscayne Bay, near Bay Harbor Islands",
    published: "2026-08-07",
    updated: "2026-09-06",
    intro:
      "Type 'Bal Harbour' into a map and you'll see its near-twin floating right there in the bay: Bay Harbor Islands. One letter of difference ('Harbour' with a u, 'Harbor' without), two entirely separate towns, and a short bridge between them at 96th Street. Tourists mix them up daily. Locals use them as one neighborhood — ocean on one side, breakfast on the other. Here's how the islands actually work.",
    blocks: [
      {
        type: "h2",
        text: "Is Bay Harbor Islands the same place as Bal Harbour?",
      },
      {
        type: "answer",
        text: "No. The Village of Bal Harbour sits on the oceanfront barrier island; the Town of Bay Harbor Islands is two islands in Biscayne Bay just west of it, connected by the 96th Street bridge (Kane Concourse). Different governments, different vibe — and mind the spelling: Bal Harbour keeps the 'u', Bay Harbor drops it.",
      },
      {
        type: "p",
        text: "The islands themselves are almost entirely residential — a town of roughly 5,900 people (2020 census) on two leafy man-made islands, incorporated back in 1947, with a beloved K-8 school and zero oceanfront. What they do have is the area's most local-feeling commercial strip: Kane Concourse.",
      },
      { type: "h2", text: "Why would a visitor cross the bridge?" },
      {
        type: "answer",
        text: "To eat where the neighborhood eats, breakfast through dinner. Kane Concourse — the continuation of 96th Street across the bay — is a five-minute walk from the Bal Harbour Shops and runs on cafecito, fresh bakeries and unhurried mornings at a third of resort prices; by evening it turns into a genuine dinner strip.",
      },
      {
        type: "list",
        items: [
          "**Bay Harbor Bistro & Bakery** (1023 Kane) — the neighborhood breakfast institution: pancakes, omelets, proper pastry case.",
          "**Bay Harbor Cafe** (1048 Kane) — Cuban sandwiches and cafecito, with keto/vegan/gluten-free corners for the yoga crowd.",
          "**Pura Vida** (1001 Kane) — the açaí-bowl and smoothie stop after the beach path.",
          "**PAON Eatery** (1076 Kane) — the newer all-day spot locals are quietly protective of.",
        ],
      },
      { type: "h2", text: "And for dinner — this really is 'the dinner island,' right?" },
      {
        type: "answer",
        text: "Right. Once the sun sets, Kane Concourse holds two of the area's better dinner tables: Meat Bar, a high-end kosher steakhouse, and Emilio's Trattoria, an old-school Italian room locals have been ordering the same pasta at for years.",
      },
      {
        type: "list",
        items: [
          "**Meat Bar** (1009 Kane) — glatt kosher steakhouse, elegant and pricey ($50+ entrées); open evenings, Saturday after sundown.",
          "**Emilio's Trattoria** (Kane Concourse) — traditional Italian, excellent salads and pasta, a fairly priced wine list and the kind of unhurried service a neighborhood spot earns after decades.",
        ],
      },
      { type: "h2", text: "Should I stay on Bay Harbor Islands instead?" },
      {
        type: "answer",
        text: "For most visitors, no — the islands are residential and have no beach of their own. The play is: sleep by the ocean at one of [Bal Harbour's three hotels](/hotels), then cross the bridge for breakfast. Ten minutes on foot from the Shops and you're at the bakery counter.",
      },
      {
        type: "tip",
        text: "Bal Harbour faces east, so it owns sunrise — but the 96th Street bridge faces west over the bay, and it's the area's best free sunset. Grab a cortadito at [the Kane strip](/eat), walk back across at golden hour, thank us later.",
      },
    ],
    faqs: [
      {
        question: "Are Bal Harbour and Bay Harbor Islands the same place?",
        answer:
          "No — they're separate municipalities with confusingly similar names. Bal Harbour (with a 'u') is the oceanfront village with the Shops and the hotels; Bay Harbor Islands (no 'u') is the residential two-island town in Biscayne Bay just west, across the 96th Street bridge.",
      },
      {
        question: "Can you walk from Bal Harbour to Bay Harbor Islands?",
        answer:
          "Easily — it's about ten flat minutes from the Bal Harbour Shops across the 96th Street bridge (Kane Concourse) to the east island's café strip.",
      },
      {
        question: "Does Bay Harbor Islands have a beach?",
        answer:
          "No — the islands sit in Biscayne Bay and have no ocean beach. The nearest sand is Bal Harbour Beach, via the public access at 96th Street and Collins Avenue.",
      },
    ],
    related: [
      { label: "Where to stay (the ocean side)", href: "/hotels" },
      { label: "Seven tables we love", href: "/eat" },
      { label: "The beach guide", href: "/beach" },
    ],
  },
  {
    slug: "haulover-park",
    title: "Haulover Park:",
    titleAccent: "the wild beach next door.",
    seoTitle:
      "Haulover Park Guide — Sandbar, Kite Beach, Marina & the Famous North End",
    description:
      "Across the inlet from polished Bal Harbour sits its opposite: Haulover Park — 1.5 miles of wide county beach, the famous boat-only sandbar, a kite field, a marina, and yes, the clothing-optional north end. A local's honest guide.",
    eyebrow: "ACROSS THE INLET",
    heroImage: "/img/haulover-inlet.jpg",
    heroAlt: "Haulover Park greenery across the inlet from Bal Harbour",
    published: "2026-08-07",
    updated: "2026-08-07",
    intro:
      "Stand at the end of Bal Harbour's Jetty Walk and look north: everything on the other side of the inlet is Haulover Park. It is the village's perfect opposite — county-run where Bal Harbour is manicured, big where the village is tiny, gloriously unbothered where the Shops are polished. Locals use both. Here's how.",
    blocks: [
      { type: "h2", text: "What is Haulover Park, exactly?" },
      {
        type: "answer",
        text: "A Miami-Dade county park directly across Haulover Inlet from Bal Harbour: about 1.5 miles of wide Atlantic beach backed by dunes, plus the Bill Bird Marina, a kite field, a dog park, a pump track and picnic pavilions with grills. It's the biggest stretch of unbuilt beachfront for miles.",
      },
      { type: "h2", text: "How do I get there, and what does parking cost?" },
      {
        type: "answer",
        text: "Drive or bike over the A1A bridge from Bal Harbour — it's five minutes. Parking is paid (roughly $7–10 a day), lots open at 8am and close around sunset, and enforcement is real. On busy weekends, going early isn't a tip, it's a requirement.",
      },
      { type: "h2", text: "What's the sandbar everyone posts about?" },
      {
        type: "answer",
        text: "The Haulover Sandbar — a shallow flat just inside the inlet where dozens of boats raft up on weekends into South Florida's most famous floating party. It is boat-only: you cannot walk or swim to it, and it has no lifeguards and no facilities. No boat? The show is fully visible (and honestly better) from Bal Harbour's own Jetty Walk.",
      },
      { type: "h2", text: "And the famous clothing-optional section?" },
      {
        type: "answer",
        text: "Yes, that Haulover. The north section of the beach has been officially clothing-optional since the early 1990s — it's clearly signposted, long-established and self-contained. If it's not your scene, simply stay at the south end near the marina; the beach is a mile and a half long and the sections don't mix.",
      },
      { type: "h2", text: "What's worth it with kids?" },
      {
        type: "list",
        items: [
          "**The kite field** — at the southeast corner of the marina lot, open 10am to sunset; on breezy weekends the sky over Haulover is its own attraction.",
          "**The marina** — watch charter boats come in and fishers clean the catch at Bill Bird Marina.",
          "**The pump track** — bring the bikes or the skateboard.",
          "**Grills and pavilions** — the picnic infrastructure Bal Harbour is far too chic to build.",
        ],
      },
      {
        type: "tip",
        text: "The perfect local day: sunrise on [Bal Harbour Beach](/beach), morning at Haulover while the light is soft, then back across the bridge for a late lunch at [one of the seven tables](/eat). Wide wild beach and polished village, five minutes apart — that's the whole magic of this corner of the coast.",
      },
    ],
    faqs: [
      {
        question: "Can you walk from Bal Harbour to Haulover Park?",
        answer:
          "It's a short hop over the A1A bridge across Haulover Inlet — quick by bike or car, walkable if you don't mind the bridge stretch. Most villagers drive or ride the five minutes.",
      },
      {
        question: "Can you walk to the Haulover Sandbar?",
        answer:
          "No — the sandbar is a boat-only anchorage inside the inlet, not reachable on foot or by swimming. Watch it instead from Bal Harbour's Jetty Walk, which has the best land view of the raft-up.",
      },
      {
        question: "How much is parking at Haulover Park?",
        answer:
          "Roughly $7–10 per day in the county lots. Lots open at 8am and close around sunset (earlier gates on weekends), and paid-parking enforcement is active.",
      },
    ],
    related: [
      { label: "The beach guide", href: "/beach" },
      { label: "Beach access, explained", href: "/guides/beach-access" },
      { label: "Lunch after", href: "/eat" },
    ],
  },
  {
    slug: "surfside",
    title: "Surfside:",
    titleAccent: "the neighbor with the Michelin star.",
    seoTitle:
      "Surfside, FL Guide (2026) — Hotels, Harding Avenue Restaurants & the Beach",
    description:
      "Five minutes south of Bal Harbour, Surfside quietly punches above its weight: a Michelin-Key hotel in a reimagined 1930s beach club, a Michelin Guide deli, and its own string of beach access points on the same Atlantic sand. A local's complete guide.",
    eyebrow: "THE FULL NEIGHBOR GUIDE",
    heroImage: "/img/sun-harbour-surfside.jpg",
    heroAlt:
      "Sun Harbour Boutique Hotel on Collins Avenue at the Surfside–Bal Harbour line",
    published: "2026-09-06",
    updated: "2026-09-06",
    intro:
      "We already sent you south of 96th for breakfast and for Thomas Keller's dining room. Here's the rest of Surfside — its own hotels, its own restaurant strip on Harding Avenue, and its own stretch of the same beach, with its own rules. It's five minutes from the Shops and different enough to be worth the walk on its own merits.",
    blocks: [
      { type: "h2", text: "Where should I stay in Surfside?" },
      {
        type: "answer",
        text: "The headline stay is the Four Seasons Hotel at The Surf Club — the restored 1930s Surf Club, now a 77-room hotel carrying two Michelin Keys and a spot on the World's 50 Best Hotels list. For more rooms and a lower rate, Grand Beach Hotel Surfside sits at 9449 Collins with direct beach access and an adults-only rooftop pool.",
      },
      {
        type: "list",
        items: [
          "**Four Seasons Hotel at The Surf Club** (9101 Collins Ave) — 77 rooms in new buildings around the original 1930s clubhouse; two Michelin Keys, World's 50 Best Hotels. The splurge, and the reason design and food people know Surfside's name at all.",
          "**Grand Beach Hotel Surfside** (9449 Collins Ave) — two connected properties: Surfside East is oceanfront with a 200-foot private beach and adults-only rooftop pool; Surfside West sits across Collins, a short walk to the sand at a gentler rate.",
          "**Residence Inn by Marriott Miami Beach Surfside** (9200 Collins Ave) — the extended-stay option, useful if you're here a week or more and want a kitchen.",
          "**Sun Harbour Boutique Hotel** (9576 Collins Ave) — a two-story Italian-villa-style property with 19 suites, one block off the beach, right at the Bal Harbour line — the small, quiet, independent option.",
        ],
      },
      {
        type: "tip",
        text: "The Four Seasons Surf Club is often just called 'the Surf Club' or lumped into 'Bal Harbour' in casual conversation and even some travel write-ups — it is not in the village. It's in Surfside, about five minutes south on Collins.",
      },
      { type: "h2", text: "Where do locals actually eat on Harding Avenue?" },
      {
        type: "answer",
        text: "Harding Avenue, one block off Collins, is Surfside's real commercial spine — delis, a kosher steakhouse, sushi and an Israeli kitchen, mostly between 94th and 96th Streets. It's the anti-resort dining scene: counter service, regulars, no valet required.",
      },
      {
        type: "list",
        items: [
          "**Josh's Deli** (9517 Harding) — a Glatt Kosher deli in the Michelin Guide, reworking classics (a Cuban-Jewish 'Jewban,' latkes topped with spicy tuna). Breakfast through dinner.",
          "**The Harbour Grill** (9415 Harding) — Glatt Kosher steakhouse, dry-aged steaks and house charcuterie, the fine-dining anchor of the strip.",
          "**Neya Restaurant** — modern Israeli and Mediterranean, an open kitchen and a full tasting menu for the occasion-worthy night.",
          "**Sushi Republic** (9583 Harding) — the neighborhood's established Japanese room: sushi, sashimi, tempura, katsu.",
          "**Flanigan's** (9516 Harding) — the casual American fallback, wings and a full bar, for when nobody wants to decide.",
          "**Morelia Ice Cream Paletas** — Mexican-style ice pops, water- and milk-based, the walk-off-dinner stop.",
        ],
      },
      {
        type: "p",
        text: "For the fine-dining night out, Keller's [Surf Club Restaurant](/eat) at the Four Seasons is still the one to book ahead — Harding Avenue is where you eat on the nights you don't have a reservation, and often the better decision anyway.",
      },
      { type: "h2", text: "Is Surfside's beach different from Bal Harbour's?" },
      {
        type: "answer",
        text: "Same sand and ocean, very different access model. Bal Harbour funnels everyone through one public entrance at 96th Street; Surfside spreads visitors across multiple marked access points along Collins Avenue, so it feels less like 'finding the entrance' and more like just walking toward the water from wherever you are.",
      },
      {
        type: "list",
        items: [
          "**Parking:** on-street meters run $5/hour with a 3-hour maximum (steeper than Bal Harbour's roughly $1–2/hour) — or use one of the town's six municipal lots (Abbott Ave at 95th; both sides of 95th St; 94th & Harding; 93rd St; 93rd & Collins), open 24/7.",
          "**Accessibility:** wheelchair-accessible beach entrances are at 88th Street and 96th Street; a loaner beach wheelchair is based at 93rd Street for residents and Surfside hotel guests.",
          "**Vibe:** quieter and more residential than the resort-cabana rows up in the village — bring your own chair, or ask your hotel about beach service.",
        ],
      },
      {
        type: "tip",
        text: "Doing both towns in a day? Park once — either in Bal Harbour or Surfside — and just walk the beach between them. It's the same continuous strand; the only thing that changes is which street sign is above your beach towel.",
      },
    ],
    faqs: [
      {
        question: "Is the Four Seasons Surf Club in Bal Harbour?",
        answer:
          "No — it's in Surfside, about five minutes south of the Bal Harbour village line on Collins Avenue (9101 Collins Ave). It's easy to conflate the two since they share the same beach and a five-minute walk, but they're separate municipalities.",
      },
      {
        question: "What is the best hotel in Surfside?",
        answer:
          "The Four Seasons Hotel at The Surf Club is the headline property — 77 rooms, two Michelin Keys, a World's 50 Best Hotels listing, built around the restored 1930s Surf Club. For a lower rate with direct beach access, Grand Beach Hotel Surfside is the practical alternative.",
      },
      {
        question: "Where should I eat on Harding Avenue in Surfside?",
        answer:
          "Josh's Deli (Michelin Guide-listed, Glatt Kosher) and The Harbour Grill (Glatt Kosher steakhouse) anchor the strip, with Neya for modern Israeli, Sushi Republic for Japanese, and Flanigan's for an easy, casual American fallback.",
      },
      {
        question: "Does Surfside have more beach access than Bal Harbour?",
        answer:
          "Yes, structurally — Surfside spreads access across multiple points along Collins Avenue rather than one funnel, with wheelchair-accessible entrances specifically at 88th and 96th Streets. Bal Harbour, by contrast, routes everyone through a single public entrance at 96th Street. Same beach, different access model.",
      },
    ],
    related: [
      { label: "Bal Harbour vs Surfside", href: "/guides/bal-harbour-vs-surfside" },
      { label: "Where to stay in Bal Harbour", href: "/hotels" },
      { label: "Seven tables we love", href: "/eat" },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function relatedGuides(slug: string, count = 2): Guide[] {
  return GUIDES.filter((g) => g.slug !== slug).slice(0, count);
}
