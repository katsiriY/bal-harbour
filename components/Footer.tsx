import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-footer-gradient relative flex flex-col gap-5 px-6 py-8 md:gap-6 md:px-11">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-bold text-ivory no-underline">
          bal-harbour<span className="text-gold-light">.com</span>
        </Link>
        <div className="flex flex-wrap gap-4 text-sm font-medium sm:gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-ivory/75 no-underline hover:text-ivory"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-ivory/15 pt-4 text-xs text-ivory/50 sm:flex-row sm:justify-between sm:pt-[18px]">
        <div>© 2026 bal-harbour.com · an independent local guide</div>
        <div>Some links earn us a commission — it keeps the sunscreen stocked</div>
      </div>
    </footer>
  );
}
