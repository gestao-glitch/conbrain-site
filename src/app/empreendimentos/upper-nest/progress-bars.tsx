"use client";

import { useEffect, useRef, useState } from "react";

const ETAPAS = [
  { label: "Fundação", percent: 100 },
  { label: "Estrutura", percent: 46 },
];

export function ProgressBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto mb-12 flex max-w-2xl flex-col gap-6">
      {ETAPAS.map((etapa) => (
        <div key={etapa.label}>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm font-bold text-[#302E29]">{etapa.label}</span>
            <span className="text-sm font-normal text-[#AE5D32]">
              {etapa.percent}%
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full border border-[#302E29]/15 bg-[#EFEBE1]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#AE5D32] to-[#7C3F1E] transition-[width] duration-1000 ease-out"
              style={{ width: visible ? `${etapa.percent}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
