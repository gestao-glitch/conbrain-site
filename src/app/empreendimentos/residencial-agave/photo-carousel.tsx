"use client";

import Image from "next/image";
import { useState } from "react";

export type Slide = { src: string; alt: string; label: string };

function useCarousel(slides: Slide[]) {
  const [posicao, setIndex] = useState(0);
  const n = slides.length;
  // Mantém o índice válido se a lista de fotos diminuir com o carrossel aberto.
  const index = posicao % n;
  const go = (i: number) => setIndex(((i % n) + n) % n);
  return {
    current: slides[index],
    index,
    total: n,
    prev: () => go(index - 1),
    next: () => go(index + 1),
    goTo: go,
  };
}

const counterLabel = (i: number, n: number) =>
  `${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;

const NavButton = ({
  onClick,
  dir,
  variant,
}: {
  onClick: () => void;
  dir: "prev" | "next";
  variant: "light" | "dark";
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={dir === "prev" ? "Imagem anterior" : "Próxima imagem"}
    className={`flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center border transition-colors ${
      variant === "light"
        ? "border-[#2A2621] bg-transparent text-[#2A2621] hover:bg-[#2A2621] hover:text-[#F4EFE6]"
        : "border-[#5A5246] bg-[#15130F] text-[#F4EFE6] hover:bg-[#332E27]"
    }`}
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "prev" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  </button>
);

export function InterioresCarousel({
  slides,
  titulo,
  kicker,
}: {
  slides: Slide[];
  titulo: string;
  kicker: string;
}) {
  const { current, index, total, prev, next, goTo } = useCarousel(slides);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#7A6242] uppercase">
            <span className="h-px w-10 bg-[#7A6242]" />
            <span>{kicker}</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-normal text-[#1E1B16] lg:text-[56px]">
            {titulo}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-display)] mr-1 text-2xl text-[#1E1B16]">
            {counterLabel(index, total)}
          </span>
          <NavButton onClick={prev} dir="prev" variant="light" />
          <NavButton onClick={next} dir="next" variant="light" />
        </div>
      </div>
      <figure className="relative m-0 h-[340px] overflow-hidden bg-[#E8E0D2] sm:h-[460px] lg:h-[680px]">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1280px"
          className="object-cover"
        />
        <figcaption className="absolute bottom-0 left-0 bg-[#15130F] px-5 py-3.5 text-sm tracking-[0.14em] text-[#F4EFE6] uppercase">
          {current.label}
        </figcaption>
      </figure>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver ${s.label}`}
            className="relative h-[84px] cursor-pointer border-0 bg-[#E8E0D2] p-0"
            style={{
              opacity: i === index ? 1 : 0.5,
              boxShadow: i === index ? "0 0 0 2px #C4A574" : "none",
            }}
          >
            <Image src={s.src} alt="" fill sizes="140px" className="object-cover" />
          </button>
        ))}
      </div>
      <p className="text-[13px] text-[#5E574D]">
        Imagens ilustrativas. Os móveis não fazem parte do contrato.
      </p>
    </div>
  );
}

export function AreaSocialCarousel({
  slides,
  titulo,
  kicker,
  destaques,
}: {
  slides: Slide[];
  titulo: string;
  kicker: string;
  destaques: string[];
}) {
  const { current, index, total, prev, next, goTo } = useCarousel(slides);

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 items-end gap-10 sm:grid-cols-2 sm:gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#C4A574] uppercase">
            <span className="h-px w-10 bg-[#C4A574]" />
            <span>{kicker}</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-normal text-[#F4EFE6] lg:text-[56px]">
            {titulo}
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          {destaques.map((d) => (
            <div
              key={d}
              className="border-b border-[#332E27] py-3.5 text-[17px] text-[#E6DDCD]"
            >
              {d}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <figure className="relative m-0 h-[300px] overflow-hidden bg-[#1E1B16] sm:h-[420px] lg:h-[680px]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1280px"
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-[#15130F] px-5 py-3.5 text-sm tracking-[0.14em] text-[#F4EFE6] uppercase">
            {current.label}
          </figcaption>
          <div className="absolute right-6 bottom-6 flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] mr-2 bg-[#15130F] px-3 py-1.5 text-2xl text-[#F4EFE6]">
              {counterLabel(index, total)}
            </span>
            <NavButton onClick={prev} dir="prev" variant="dark" />
            <NavButton onClick={next} dir="next" variant="dark" />
          </div>
        </figure>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver ${s.label}`}
              className="relative h-[84px] cursor-pointer border-0 bg-[#1E1B16] p-0"
              style={{
                opacity: i === index ? 1 : 0.5,
                boxShadow: i === index ? "0 0 0 2px #C4A574" : "none",
              }}
            >
              <Image src={s.src} alt="" fill sizes="140px" className="object-cover" />
            </button>
          ))}
        </div>
        <p className="text-[13px] text-[#A79D8D]">
          Imagens ilustrativas.
        </p>
      </div>
    </div>
  );
}
