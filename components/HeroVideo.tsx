"use client";

import { useEffect, useRef } from "react";

/**
 * The homepage hero background: a real, muted, looping video (not AI —
 * verified frame-by-frame during production, it's the actual Bal Harbour
 * skyline across Biscayne Bay). A tiny client wrapper only so we can skip
 * autoplay for prefers-reduced-motion — the poster frame (a real photo
 * in its own right) then just sits there as a still image.
 */
export default function HeroVideo({
  poster,
  className = "",
}: {
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduceMotion) {
      video.play().catch(() => {
        // Autoplay can be blocked by the browser; the poster frame remains
        // visible either way, so there's nothing more to do here.
      });
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src="/img/hero-drone.webm" type="video/webm" />
      <source src="/img/hero-drone.mp4" type="video/mp4" />
    </video>
  );
}
