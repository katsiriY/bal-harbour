"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageCarousel({
  images,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 380px",
  priority = false,
  children,
}: {
  images: string[];
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  }

  function goTo(e: React.MouseEvent, i: number) {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  }

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {children}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_2px_8px_rgba(13,47,37,0.2)] transition-opacity hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={next}
            className="absolute right-3 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_2px_8px_rgba(13,47,37,0.2)] transition-opacity hover:bg-white"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={(e) => goTo(e, i)}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-ivory" : "bg-ivory/45"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
