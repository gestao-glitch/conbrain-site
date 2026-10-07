"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function Carousel({
  children,
  escuro = false,
}: {
  children: ReactNode;
  /** Use em seções de fundo escuro (setas claras). */
  escuro?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Foto anterior"
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-colors ${escuro ? "border-white/30 text-white hover:bg-white hover:text-[#1E2B17]" : "border-[#1E2B17]/15 text-[#1E2B17] hover:bg-[#1E2B17] hover:text-white"}`}
        >
          &lsaquo;
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Próxima foto"
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-colors ${escuro ? "border-white/30 text-white hover:bg-white hover:text-[#1E2B17]" : "border-[#1E2B17]/15 text-[#1E2B17] hover:bg-[#1E2B17] hover:text-white"}`}
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
}

export function CarouselSlide({
  label,
  src,
  children,
}: {
  label: string;
  src?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative flex aspect-[4/3] w-[80%] shrink-0 snap-start items-center justify-center overflow-hidden rounded-lg bg-[#E7D9B8] sm:w-[45%] lg:w-[31%]">
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 31vw"
          className="object-cover"
        />
      ) : (
        children ?? (
          <span className="px-6 text-center text-xs tracking-widest text-[#5c5c50] uppercase">
            {label}
          </span>
        )
      )}
    </div>
  );
}
