"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";
import { isAffiliateUrl, withPlacement } from "@/lib/affiliates";

// Every commercial outbound link (booking sites, reservations, tours) goes
// through here: it tags the placement for partner reports, marks real
// affiliate links rel="sponsored", and logs the click to Vercel Analytics.
export default function OutboundLink({
  href,
  placement,
  item,
  className,
  children,
}: {
  href: string;
  placement: string;
  item: string;
  className?: string;
  children: ReactNode;
}) {
  const affiliate = isAffiliateUrl(href);
  const finalHref = affiliate ? withPlacement(href, placement) : href;

  return (
    <a
      href={finalHref}
      target="_blank"
      rel={affiliate ? "sponsored noopener" : "noopener"}
      className={className}
      onClick={() =>
        track("outbound_click", {
          placement,
          item,
          partner: new URL(finalHref).hostname,
          affiliate,
        })
      }
    >
      {children}
    </a>
  );
}
