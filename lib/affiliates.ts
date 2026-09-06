// Central affiliate link config. Partner IDs come from env vars so they can
// be set per-environment on Vercel without code changes — the links still
// work as plain search URLs before the IDs exist. All affiliate CTAs across
// the site build their URLs here so there is one place to update.
const BOOKING_AID = process.env.NEXT_PUBLIC_BOOKING_AID;
const EXPEDIA_CAMREF = process.env.NEXT_PUBLIC_EXPEDIA_CAMREF;
const OPENTABLE_REF = process.env.NEXT_PUBLIC_OPENTABLE_REF;
// Marriott Bonvoy affiliate program (runs on Partnerize). The camref is the
// publisher campaign reference from the Partnerize dashboard — one id covers
// every Bonvoy brand, so it monetizes both the St. Regis and the
// Ritz-Carlton pages.
const MARRIOTT_CAMREF = process.env.NEXT_PUBLIC_MARRIOTT_CAMREF;

const DESTINATION = "Bal Harbour, Florida";

export function bookingSearchUrl(query: string = DESTINATION): string {
  const url = new URL("https://www.booking.com/searchresults.html");
  url.searchParams.set("ss", query);
  if (BOOKING_AID) url.searchParams.set("aid", BOOKING_AID);
  return url.toString();
}

export function expediaSearchUrl(query: string = "Bal Harbour, FL"): string {
  const url = new URL("https://www.expedia.com/Hotel-Search");
  url.searchParams.set("destination", query);
  if (EXPEDIA_CAMREF) url.searchParams.set("camref", EXPEDIA_CAMREF);
  return url.toString();
}

// Wraps a marriott.com destination in a Partnerize tracking click URL
// (standard format: prf.hn/click/camref:X/destination:URL). Falls back to
// the clean direct link until NEXT_PUBLIC_MARRIOTT_CAMREF is configured,
// so nothing breaks while the affiliate approval is pending.
export function marriottUrl(destination: string): string {
  if (!MARRIOTT_CAMREF) return destination;
  return `https://prf.hn/click/camref:${MARRIOTT_CAMREF}/destination:${encodeURIComponent(destination)}`;
}

export function openTableSearchUrl(restaurantName: string): string {
  const url = new URL("https://www.opentable.com/s");
  url.searchParams.set("term", `${restaurantName} Bal Harbour`);
  if (OPENTABLE_REF) url.searchParams.set("ref", OPENTABLE_REF);
  return url.toString();
}
