"use client";

import { useEffect, useRef, useState } from "react";

// Como a linha do tempo aparece no celular: "horizontal" (arrastar para o lado)
// ou "vertical" (linha descendo, que se preenche com a rolagem).
const MODO_CELULAR: "horizontal" | "vertical" = "horizontal";

const LABELS = ["2015", "2016", "2020", "2022", "2023", "2024", "2025", "2026", "2026"];
const YEARS = [2015, 2016, 2020, 2022, 2023, 2024, 2025, 2026, 2026];

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
    ano: "2026",
    texto: "Entrega do Residencial Ágave.",
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
  const [yearLabel, setYearLabel] = useState(() =>
    prefersReducedMotion() ? "2026" : "2015"
  );
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
          setYearLabel(String(y));
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
  const displayYear =
    hovered !== null ? LABELS[hovered] : done ? "2026" : yearLabel;

  return (
    <div
      ref={ref}
      onMouseLeave={() => setHovered(null)}
      className="relative"
    >
      {/* Ano gigante por trás da linha do tempo: conta de 2015 até hoje e acompanha o mouse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 z-0 hidden -translate-y-1/2 font-heading sm:block leading-none font-bold tracking-[-0.04em] text-white/[0.07] tabular-nums select-none"
        style={{ fontSize: "clamp(120px, 24vw, 380px)" }}
      >
        {displayYear}
      </div>
      <div className="relative z-10 hidden gap-x-6 gap-y-10 sm:grid sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 xl:gap-x-5 xl:gap-y-0">
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

      {MODO_CELULAR === "horizontal" ? <LinhaHorizontalCelular /> : <LinhaVerticalCelular />}
    </div>
  );
}

/* No celular: uma linha vertical contínua que se preenche conforme a rolagem,
   com cada marco acendendo ao chegar no meio da tela. */
function LinhaVerticalCelular() {
  const listaRef = useRef<HTMLOListElement>(null);
  const itensRef = useRef<(HTMLLIElement | null)[]>([]);
  const [progresso, setProgresso] = useState(() => (prefersReducedMotion() ? 1 : 0));
  const [ativo, setAtivo] = useState(() => (prefersReducedMotion() ? MARCOS.length - 1 : -1));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let quadro = 0;
    function medir() {
      quadro = 0;
      const lista = listaRef.current;
      if (!lista) return;
      const linhaDeLeitura = window.innerHeight * 0.6;
      const r = lista.getBoundingClientRect();
      setProgresso(Math.min(1, Math.max(0, (linhaDeLeitura - r.top) / r.height)));
      let ultimo = -1;
      itensRef.current.forEach((item, i) => {
        if (item && item.getBoundingClientRect().top < linhaDeLeitura) ultimo = i;
      });
      setAtivo(ultimo);
    }
    function aoRolar() {
      if (!quadro) quadro = requestAnimationFrame(medir);
    }
    medir();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, []);

  return (
    <div className="relative sm:hidden">
      {/* Ano discreto que acompanha a rolagem */}
      <div aria-hidden="true" className="pointer-events-none sticky top-[42vh] z-0 h-0 text-right">
        <span className="inline-block -translate-y-1/2 font-heading text-[72px] leading-none font-bold tracking-[-0.04em] text-white/[0.06] tabular-nums">
          {MARCOS[Math.max(ativo, 0)].ano}
        </span>
      </div>

      <ol ref={listaRef} className="relative z-10">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-[2px] bg-white/15" />
        <span
          aria-hidden="true"
          className="absolute top-2 left-[5px] w-[2px] bg-verde transition-[height] duration-150"
          style={{ height: `calc((100% - 16px) * ${progresso})` }}
        />
        {MARCOS.map((m, i) => {
          const aceso = i <= ativo;
          return (
            <li
              key={m.ano}
              ref={(el) => {
                itensRef.current[i] = el;
              }}
              className="relative pb-9 pl-9 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`absolute top-[7px] left-0 h-3 w-3 rotate-45 rounded-[2px] border-2 transition-colors duration-300 ${
                  aceso ? "border-verde bg-verde" : "border-white/30 bg-[#1f1d22]"
                }`}
              />
              <div className={`flex flex-col gap-2 transition-opacity duration-300 ${aceso ? "opacity-100" : "opacity-40"}`}>
                <span className="font-heading text-[24px] leading-none font-light text-white">{m.ano}</span>
                <span className="text-[15px] leading-[1.55] text-white/75">{m.texto}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* No celular: cartões que se arrastam para o lado, com o próximo aparecendo na
   borda, linha contínua por trás e pontinhos indicando a posição. */
function LinhaHorizontalCelular() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);
  const [arrastou, setArrastou] = useState(false);

  function aoRolar() {
    const el = trilhoRef.current;
    if (!el) return;
    const cartao = el.querySelector("li");
    if (!cartao) return;
    const passo = cartao.getBoundingClientRect().width + 16;
    const fim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setAtivo(fim ? MARCOS.length - 1 : Math.round(el.scrollLeft / passo));
    if (el.scrollLeft > 8) setArrastou(true);
  }

  function irPara(i: number) {
    const el = trilhoRef.current;
    const cartao = el?.querySelectorAll("li")[i];
    if (el && cartao) el.scrollTo({ left: (cartao as HTMLElement).offsetLeft - 24, behavior: "smooth" });
  }

  return (
    <div className="relative sm:hidden">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 -bottom-2 z-0 font-heading text-[88px] leading-none font-bold tracking-[-0.04em] text-white/[0.06] tabular-nums">
        {MARCOS[ativo].ano}
      </div>

      <p className={`mb-5 text-xs tracking-[0.2em] text-white/50 uppercase transition-opacity duration-500 ${arrastou ? "opacity-0" : "opacity-100"}`}>
        Arraste para o lado &rarr;
      </p>

      <div
        ref={trilhoRef}
        onScroll={aoRolar}
        className="no-scrollbar relative z-10 -mx-6 snap-x snap-mandatory scroll-px-6 overflow-x-auto px-6"
      >
        <ol className="relative flex w-max gap-4 pr-6">
          <span aria-hidden="true" className="absolute top-[5px] right-6 left-0 h-[2px] bg-white/15" />
          {MARCOS.map((m, i) => {
            const aceso = i <= ativo;
            return (
              <li key={m.ano} className="relative w-[78vw] max-w-[320px] shrink-0 snap-start pt-9">
                <span aria-hidden="true" className={`absolute top-[5px] right-[-16px] left-0 h-[2px] transition-colors duration-300 ${aceso ? "bg-verde" : "bg-transparent"}`} />
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 h-3 w-3 rotate-45 rounded-[2px] border-2 transition-colors duration-300 ${
                    aceso ? "border-verde bg-verde" : "border-white/30 bg-[#1f1d22]"
                  }`}
                />
                <div className={`flex flex-col gap-3 pr-4 transition-opacity duration-300 ${aceso ? "opacity-100" : "opacity-40"}`}>
                  <span className="font-heading text-[32px] leading-none font-light text-white">{m.ano}</span>
                  <span className="text-[15px] leading-[1.55] text-white/75">{m.texto}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative z-10 mt-6 -ml-1 flex">
        {MARCOS.map((m, i) => (
          <button
            key={m.ano}
            type="button"
            aria-label={`Ir para ${m.ano}`}
            onClick={() => irPara(i)}
            className="flex h-6 min-w-6 items-center justify-center px-1"
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === ativo ? "w-6 bg-verde" : "w-1.5 bg-white/25"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
