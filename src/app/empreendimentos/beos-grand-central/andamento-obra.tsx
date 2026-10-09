"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Atualize todo mês: foto nova do drone em /public/images/beos/obra
// (sempre do mesmo ângulo) e os percentuais enviados pela engenharia.
const ATUALIZADO_EM = "outubro de 2026";

const FOTOS = [
  { src: "/images/beos/obra/2026-01-hd.jpg", mes: "Jan", legenda: "Janeiro de 2026" },
  { src: "/images/beos/obra/2026-05-hd.jpg", mes: "Mai", legenda: "Maio de 2026" },
  { src: "/images/beos/obra/2026-08-hd.jpg", mes: "Ago", legenda: "Agosto de 2026" },
  { src: "/images/beos/obra/2026-10-hd.jpg", mes: "Out", legenda: "Outubro de 2026" },
];

// Percentuais da engenharia. Enquanto houver algum vazio (null), o gráfico
// não aparece e no lugar dele fica a foto do detalhe da obra.
const GERAL: number | null = null;
const ETAPAS: { etapa: string; pct: number | null }[] = [
  { etapa: "Fundação", pct: null },
  { etapa: "Estrutura", pct: null },
  { etapa: "Alvenaria", pct: null },
  { etapa: "Instalações", pct: null },
  { etapa: "Acabamentos", pct: null },
];

const temGrafico = GERAL !== null && ETAPAS.every((e) => e.pct !== null);

export function AndamentoObra() {
  const [atual, setAtual] = useState(FOTOS.length - 1);
  const foto = FOTOS[atual];

  return (
    <section
      id="obra"
      className="flex flex-col gap-12 bg-[#4E4F4A] px-8 py-26 text-[#EAE5E1] lg:px-[72px]"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <div className="text-[13px] font-normal tracking-[0.22em] text-[#B5CF95] uppercase">
            Andamento da obra
          </div>
          <h2 className="max-w-[680px] font-[family-name:var(--font-outfit)] text-4xl leading-tight font-normal lg:text-5xl">
            A obra avança.{" "}
            <span className="font-bold text-[#B5CF95]">Acompanhe de perto.</span>
          </h2>
        </div>
        <p className="max-w-[480px] text-lg leading-relaxed text-[#D9D4CF]">
          Imagens de drone feitas no canteiro ao longo do ano, sempre do
          mesmo ângulo. Última atualização: {ATUALIZADO_EM}.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-[20px] bg-[#2A2B28]">
            {FOTOS.map((f, i) => (
              <Image
                key={f.src}
                src={f.src}
                alt={`Vista aérea da obra do BËOS Grand Central em ${f.legenda.toLowerCase()}`}
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
                quality={90}
                className={`object-cover transition-opacity duration-700 ${i === atual ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-[#2A2B28]/75 px-4 py-2 text-sm font-bold backdrop-blur-sm">
              {foto.legenda}
            </figcaption>
          </figure>
          <div className="flex items-center gap-2" role="tablist" aria-label="Escolha o mês">
            {FOTOS.map((f, i) => (
              <button
                key={f.src}
                type="button"
                role="tab"
                aria-selected={i === atual}
                onClick={() => setAtual(i)}
                className={`flex-1 rounded-full py-2.5 text-sm font-bold transition-colors ${
                  i === atual
                    ? "bg-[#B5CF95] text-[#1F201D]"
                    : "bg-white/[0.07] text-[#D9D4CF] hover:bg-white/[0.14]"
                }`}
              >
                {f.mes}
              </button>
            ))}
          </div>
        </div>

        {temGrafico ? (
          <Grafico />
        ) : (
          <figure className="relative m-0 min-h-[320px] overflow-hidden rounded-[20px] bg-[#2A2B28]">
            <Image
              src="/images/beos/obra/2026-10-laje-hd.jpg"
              alt="Equipe trabalhando no topo da estrutura do BËOS Grand Central"
              fill
              // O quadro é mais alto que a foto 4:3 e corta as laterais: pede uma versão maior.
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={90}
              className="object-cover"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-[#2A2B28]/75 px-4 py-2 text-sm font-bold backdrop-blur-sm">
              Outubro de 2026 · topo da estrutura
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

function Grafico() {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  // As barras "enchem" quando o gráfico entra na tela.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-7 rounded-[20px] bg-white/[0.07] p-8 lg:p-10"
    >
      <div className="flex flex-col gap-3">
        <div className="text-[13px] tracking-[0.18em] text-[#B5CF95] uppercase">
          Andamento geral
        </div>
        <div className="font-[family-name:var(--font-outfit)] text-7xl leading-none font-light tabular-nums">
          {GERAL}
          <span className="text-4xl text-[#B5CF95]">%</span>
        </div>
        <Barra pct={visivel ? GERAL! : 0} grossa />
      </div>
      <div className="flex flex-col gap-5 border-t border-white/[0.14] pt-7">
        {ETAPAS.map((e) => (
          <div key={e.etapa} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between text-[15px]">
              <span>{e.etapa}</span>
              <span className="font-bold tabular-nums">
                {e.pct === 100 ? "Concluída" : `${e.pct}%`}
              </span>
            </div>
            <Barra pct={visivel ? e.pct! : 0} />
          </div>
        ))}
      </div>
      <p className="mt-auto text-[13px] text-[#BDB8B2]">
        Dados da engenharia Conbrain · {ATUALIZADO_EM}.
      </p>
    </div>
  );
}

function Barra({ pct, grossa = false }: { pct: number; grossa?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-full bg-white/[0.12] ${grossa ? "h-2.5" : "h-1.5"}`}
    >
      <div
        className="h-full rounded-full bg-[#B5CF95] transition-[width] duration-1000 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
