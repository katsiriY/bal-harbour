export type NavKey =
  | "hotels"
  | "eat"
  | "shops"
  | "beach"
  | "guides"
  | "real-estate";

export const NAV_LINKS: { key: NavKey; label: string; href: string }[] = [
  { key: "hotels", label: "Hotels", href: "/hotels" },
  { key: "eat", label: "Eat & drink", href: "/eat" },
  { key: "shops", label: "Shops", href: "/shops" },
  { key: "beach", label: "Beach", href: "/beach" },
  { key: "guides", label: "Guides", href: "/guides" },
  { key: "real-estate", label: "Real estate", href: "/real-estate" },
];

export function navKeyForPath(pathname: string): NavKey | null {
  if (pathname.startsWith("/hotels")) return "hotels";
  if (pathname.startsWith("/eat")) return "eat";
  if (pathname.startsWith("/shops")) return "shops";
  if (pathname.startsWith("/beach")) return "beach";
  if (pathname.startsWith("/guides")) return "guides";
  if (pathname.startsWith("/real-estate")) return "real-estate";
  return null;
}
