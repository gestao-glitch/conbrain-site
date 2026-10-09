"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  titulo?: string;
  legenda: string;
};

export function Carousel({
  slides,
  aspect = "aspect-[3/2]",
}: {
  slides: Slide[];
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  function goTo(i: number) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(diff) > 40) goTo(index + (diff > 0 ? -1 : 1));
          }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className={`relative ${aspect} w-full shrink-0`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pt-10 pb-5">
                {slide.titulo && (
                  <h3 className="text-lg font-bold text-white">{slide.titulo}</h3>
                )}
                <p className="text-sm text-[#E6E1D4]">{slide.legenda}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Anterior"
        className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition-colors hover:bg-black/80"
      >
        &lsaquo;
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Próximo"
        className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-xl text-white transition-colors hover:bg-black/80"
      >
        &rsaquo;
      </button>

      <div className="mt-2 flex justify-center">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className="flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`block h-2 w-2 rounded-full transition-all ${
                i === index ? "scale-125 bg-[#AE5D32]" : "bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
