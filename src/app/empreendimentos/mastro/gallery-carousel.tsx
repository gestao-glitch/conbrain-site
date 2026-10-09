"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Slide = { src: string; alt: string };

export function GalleryCarousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className="flex flex-col gap-4 sm:hidden">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s) => (
          <div
            key={s.src}
            className="relative h-[280px] w-full shrink-0 snap-start overflow-hidden rounded-sm"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {slides.map((s, i) => (
          <span
            key={s.src}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === active ? "20px" : "6px",
              background: i === active ? "#C2A36B" : "#C9BFAE",
            }}
          />
        ))}
      </div>
    </div>
  );
}
