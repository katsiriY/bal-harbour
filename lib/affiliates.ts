// Central affiliate link config. Every monetizable link on the site is built
// here, from IDs in env vars so they can be set on Vercel without a code
// change. With no ID set, each builder returns a plain working link.
//
// Stay22 is the main rail: one affiliate ID monetizes Booking.com, Expedia,
// Hotels.com and GetYourGuide, with no traffic minimum. (Booking.com's own
// program dropped small publishers in 2025 and the legacy `aid` param no
// longer attributes for new partners, so we don't use it directly.)
// Docs: https://dev.stay22.com/docs/allez/parameters
const STAY22_AID = process.env.NEXT_PUBLIC_STAY22_AID;
// Marriott Bonvoy affiliate program (Partnerize). One camref covers every
// Bonvoy brand, so it monetizes the St. Regis and the Ritz-Carlton.
const MARRIOTT_CAMREF = process.env.NEXT_PUBLIC_MARRIOTT_CAMREF;

const DESTINATION = "Bal Harbour, Florida";

type Stay22Provider = "booking" | "expedia" | "roam" | "getyourguide";

function stay22Url(provider: Stay22Provider, params: Record<string, string>): string {
  const url = new URL(`https://www.stay22.com/allez/${provider}`);
  url.searchParams.set("aid", STAY22_AID!);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  return url.toString();
}

export function bookingSearchUrl(hotelName: string, address = DESTINATION): string {
  if (STAY22_AID) return stay22Url("booking", { hotelname: hotelName, address });
  const url = new URL("https://www.booking.com/searchresults.html");
  url.searchParams.set("ss", hotelName);
  return url.toString();
}

export function expediaSearchUrl(hotelName: string, address = DESTINATION): string {
  if (STAY22_AID) return stay22Url("expedia", { hotelname: hotelName, address });
  const url = new URL("https://www.expedia.com/Hotel-Search");
  url.searchParams.set("destination", hotelName);
  return url.toString();
}

// Lets Stay22 pick whichever booking site converts best for this visitor.
// Used for properties we don't keep a full rate table for.
export function hotelSearchUrl(hotelName: string, address: string): string {
  if (STAY22_AID) return stay22Url("roam", { hotelname: hotelName, address });
  const url = new URL("https://www.booking.com/searchresults.html");
  url.searchParams.set("ss", `${hotelName}, ${address}`);
  return url.toString();
}

export function toursUrl(query: string): string {
  if (STAY22_AID) return stay22Url("getyourguide", { address: query });
  const url = new URL("https://www.getyourguide.com/s/");
  url.searchParams.set("q", query);
  return url.toString();
}

// Wraps a marriott.com destination in a Partnerize tracking URL. Falls back
// to the clean direct link until the camref is configured.
export function marriottUrl(destination: string): string {
  if (!MARRIOTT_CAMREF) return destination;
  return `https://prf.hn/click/camref:${MARRIOTT_CAMREF}/destination:${encodeURIComponent(destination)}`;
}

export function openTableSearchUrl(restaurantName: string): string {
  const url = new URL("https://www.opentable.com/s");
  url.searchParams.set("term", `${restaurantName} Bal Harbour`);
  return url.toString();
}

export function isAffiliateUrl(href: string): boolean {
  const host = new URL(href).hostname;
  return host === "www.stay22.com" || host === "prf.hn";
}

// Tags a link with where on the site it was clicked, so partner dashboards
// show which pages earn. Stay22 uses `campaign` (underscores only — a dash
// splits the value in their reports); Partnerize uses a `pubref` path segment.
export function withPlacement(href: string, placement: string): string {
  const tag = placement.replace(/[^a-z0-9]+/gi, "_");
  const url = new URL(href);
  if (url.hostname === "www.stay22.com") {
    url.searchParams.set("campaign", tag);
    return url.toString();
  }
  if (url.hostname === "prf.hn") {
    return href.replace("/destination:", `/pubref:${tag}/destination:`);
  }
  return href;
}
