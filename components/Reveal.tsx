"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades a section up into place the first time it scrolls into view.
 * This is the "motion you actually see" pattern — it fires for every
 * visitor scrolling the homepage, with no click/hover/mobile-only gate.
 * IntersectionObserver toggles a class; the actual animation is plain
 * CSS (.reveal / .reveal-visible in globals.css) so it stays off the
 * main thread and respects prefers-reduced-motion automatically.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
