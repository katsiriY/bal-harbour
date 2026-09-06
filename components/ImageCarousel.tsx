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
  // The just-left photo, kept mounted only long enough to fade out on top of
  // the new one underneath — an instant src swap otherwise reads as broken.
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  function changeTo(newIndex: number) {
    setPrevIndex((current) => (newIndex === index ? current : index));
    setIndex(newIndex);
  }

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    changeTo((index - 1 + images.length) % images.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    changeTo((index + 1) % images.length);
  }

  function goTo(e: React.MouseEvent, i: number) {
    e.preventDefault();
    e.stopPropagation();
    changeTo(i);
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
      {prevIndex !== null && prevIndex !== index && (
        <Image
          key={prevIndex}
          src={images[prevIndex]}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="object-cover opacity-0 starting:opacity-100 transition-opacity duration-300 ease-out"
          onTransitionEnd={() => setPrevIndex(null)}
        />
      )}
      {children}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_2px_8px_rgba(13,47,37,0.2)] transition-[opacity,transform] duration-150 ease-out hover:bg-white active:scale-90"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={next}
            className="absolute right-3 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-[0_2px_8px_rgba(13,47,37,0.2)] transition-[opacity,transform] duration-150 ease-out hover:bg-white active:scale-90"
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
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                  i === index ? "bg-ivory" : "bg-ivory/45 hover:bg-ivory/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
