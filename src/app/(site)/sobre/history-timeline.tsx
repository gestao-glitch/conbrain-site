"use client";

import { useEffect, useRef, useState } from "react";

const YEARS = [2015, 2016, 2020, 2022, 2023, 2024, 2025, 2026];

const MARCOS = [
  {
    ano: "2015",
    texto: "Fundada em Porto União como Stanza, com projetos e regularizações.",
  },
  {
    ano: "2016–19",
    texto: "Escritório maior e expansão no mercado de construção.",
  },
  {
    ano: "2020",
    texto: "Viramos incorporadora, nasce a Conbrain e o Residencial Taiji.",
  },
  {
    ano: "2022",
    texto: "Sede própria e lançamento do Residencial Ágave.",
  },
  {
    ano: "2023",
    texto: "Lançamento do BËOS e do Mon'Verdant.",
  },
  {
    ano: "2024",
    texto: "Entrega do Residencial Taiji.",
  },
  {
    ano: "2025",
    texto: "10 anos e lançamento do Upper Nest.",
  },
  {
    ano: "Hoje",
    texto: "Mais de 80 edificadores e expansão pelo Vale do Iguaçu.",
  },
] as const;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function HistoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(() =>
    prefersReducedMotion() ? YEARS.length : 0
  );
  const [done, setDone] = useState(prefersReducedMotion);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 3400;
        function step(now: number) {
          const k = Math.min(1, (now - start) / duration);
          const y = Math.round(2015 + 11 * (1 - Math.pow(1 - k, 2)));
          setActiveCount(YEARS.filter((yr) => yr <= y).length);
          if (k < 1) requestAnimationFrame(step);
          else setDone(true);
        }
        requestAnimationFrame(step);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const thresholdIndex =
    hovered !== null ? hovered : done ? MARCOS.length - 1 : activeCount - 1;

  return (
    <div
      ref={ref}
      onMouseLeave={() => setHovered(null)}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-6 lg:gap-y-0">
        {MARCOS.map((m, i) => (
          <div
            key={m.ano}
            onMouseEnter={() => done && setHovered(i)}
            className="relative flex cursor-default flex-col gap-3 pt-6"
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-verde" />
            <span className="absolute top-[-3px] left-px h-2 w-2 rotate-45 rounded-[1.5px] bg-verde" />
            <span
              className={`font-heading text-[24px] leading-none font-light text-white transition-opacity duration-300 lg:text-[26px] ${
                i <= thresholdIndex ? "opacity-100" : "opacity-30"
              }`}
            >
              {m.ano}
            </span>
            <span
              className={`text-[15px] leading-[1.55] text-white/75 transition-opacity duration-300 ${
                i <= thresholdIndex ? "opacity-100" : "opacity-30"
              }`}
            >
              {m.texto}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
