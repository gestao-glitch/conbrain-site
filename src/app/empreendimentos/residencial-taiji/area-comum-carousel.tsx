"use client";

import Image from "next/image";
import { useState } from "react";

export type Slide = { src: string; alt: string; caption: string };

export function AreaComumCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;
  const go = (i: number) => setIndex(((i % n) + n) % n);
  const current = slides[index];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.1] font-normal text-[#1F1E1C] lg:text-[52px]">
          Convivência e descanso, do térreo à cobertura.
        </h2>
        <div className="flex items-center gap-5">
          <span className="font-[family-name:var(--font-jost)] text-lg font-normal tracking-[0.16em] text-[#1F1E1C]">
            {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Foto anterior"
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[#1F1E1C] bg-transparent p-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F1E1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próxima foto"
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[#D8952B] bg-[#D8952B] p-0"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F1E1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative h-[280px] overflow-hidden rounded-sm bg-[#2E2C29] sm:h-[420px] lg:h-[660px]">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        <figcaption className="absolute bottom-6 left-6 rounded-full bg-[#14130F]/74 px-4.5 py-2.5 text-sm tracking-[0.06em] text-[#F4F1EB]">
          {current.caption}
        </figcaption>
      </div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ver foto: ${s.caption}`}
            className="relative h-[84px] cursor-pointer overflow-hidden rounded-sm border-2 bg-[#2E2C29] p-0"
            style={{
              borderColor: i === index ? "#D8952B" : "transparent",
              opacity: i === index ? 1 : 0.6,
            }}
          >
            <Image src={s.src} alt="" fill sizes="160px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
