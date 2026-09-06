"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, navKeyForPath } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const activeKey = navKeyForPath(pathname);
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20 flex items-center justify-between px-6 py-5 md:px-11">
      <Link
        href="/"
        className="whitespace-nowrap text-xl font-bold tracking-tight text-ink no-underline"
      >
        bal-harbour<span className="text-gold">.com</span>
      </Link>

      <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
        {NAV_LINKS.map((link) => {
          const active = link.key === activeKey;
          const homeWhitish = isHome && link.key === "hotels";
          return (
            <Link
              key={link.key}
              href={link.href}
              className={[
                "rounded-full px-4 py-2.5 text-ink no-underline transition-colors",
                active
                  ? "bg-ink text-ivory"
                  : homeWhitish
                    ? "bg-white/70 hover:bg-white/90"
                    : "hover:bg-black/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/hotels"
          className="btn-dark hidden rounded-full px-5 py-2.5 text-sm font-semibold text-ivory no-underline sm:block"
        >
          Book a stay
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Always mounted (not conditionally rendered) so open/close can
          transition — a conditional {open && ...} mount snaps instantly with
          no way to animate the exit. inert removes it from tab order and the
          accessibility tree while closed; origin-top-right anchors the scale
          to the hamburger button rather than the panel's own center. */}
      <div
        data-state={open ? "open" : "closed"}
        inert={!open}
        className="absolute left-0 right-0 top-full mx-4 mt-2 flex origin-top-right flex-col gap-1 rounded-2xl bg-white p-3 shadow-elevated transition-[transform,opacity] duration-200 ease-out data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 md:hidden"
      >
        {NAV_LINKS.map((link) => {
          const active = link.key === activeKey;
          return (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className={[
                "rounded-xl px-4 py-3 text-sm font-medium no-underline",
                active ? "bg-ink text-ivory" : "text-ink hover:bg-black/5",
              ].join(" ")}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/hotels"
          onClick={() => setOpen(false)}
          className="btn-dark mt-1 rounded-xl px-4 py-3 text-center text-sm font-semibold text-ivory no-underline"
        >
          Book a stay
        </Link>
      </div>
    </div>
  );
}
