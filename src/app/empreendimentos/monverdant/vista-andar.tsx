"use client";

import { useState } from "react";

// Panoramas 360° do tour do Mon'Verdant no Kuula (coleção 7T2qH), um por altura.
// Para trocar ou acrescentar uma vista, basta mudar o código do panorama ("id").
const ALTURAS = [
  {
    metros: 40,
    vistas: [{ nome: "Vista", id: "LHn9g" }],
  },
  {
    metros: 50,
    vistas: [
      { nome: "Vista 1", id: "LHn9x" },
      { nome: "Vista 2", id: "LHn9V" },
    ],
  },
  {
    metros: 60,
    vistas: [
      { nome: "Vista 1", id: "LHn9s" },
      { nome: "Vista 2", id: "LHn9w" },
    ],
  },
] as const;

const urlPanorama = (id: string) =>
  `https://kuula.co/share/${id}?logo=0&info=0&fs=1&vr=0&gyro=0&autorotate=0.16&thumbs=0&inst=pt`;

export function VistaAndar() {
  const [altura, setAltura] = useState(0);
  const [vista, setVista] = useState(0);
  const [aberto, setAberto] = useState(false);
  const atual = ALTURAS[altura];
  const panorama = atual.vistas[Math.min(vista, atual.vistas.length - 1)];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
      {/* Seletor de altura */}
      <div className="flex flex-col gap-5 lg:w-[300px] lg:shrink-0">
        <p className="text-xs font-bold tracking-[0.25em] text-[#C7D1B3] uppercase">
          Escolha a altura
        </p>
        <div
          className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3"
          role="radiogroup"
          aria-label="Altura da vista"
        >
          {[...ALTURAS].reverse().map((a) => {
            const i = ALTURAS.indexOf(a);
            const ligado = i === altura;
            return (
              <button
                key={a.metros}
                type="button"
                role="radio"
                aria-checked={ligado}
                onClick={() => {
                  setAltura(i);
                  setVista(0);
                  setAberto(true);
                }}
                className={`group flex cursor-pointer flex-col items-start gap-1 rounded-lg border px-4 py-4 text-left transition-colors lg:flex-row lg:items-center lg:justify-between lg:px-5 ${
                  ligado
                    ? "border-[#C7D1B3] bg-[#C7D1B3] text-[#1E2B17]"
                    : "border-white/20 text-white hover:border-white/50"
                }`}
              >
                <span className="font-[family-name:var(--font-fraunces)] text-3xl leading-none font-bold lg:text-4xl">
                  {a.metros}
                  <span className="ml-1 text-base font-normal">m</span>
                </span>
                <span
                  className={`text-xs leading-snug ${ligado ? "text-[#1E2B17]/75" : "text-white/60"} lg:max-w-[130px] lg:text-right`}
                >
                  de altura
                </span>
              </button>
            );
          })}
        </div>
        <p className="hidden text-sm leading-relaxed text-white/60 lg:block">
          Gire a imagem com o mouse ou o dedo para ver os 360° ao redor.
        </p>
      </div>

      {/* Panorama */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#13200f] sm:aspect-[16/10]">
          {aberto ? (
            <iframe
              key={panorama.id}
              src={urlPanorama(panorama.id)}
              title={`Vista 360° do Mon'Verdant a ${atual.metros} metros de altura`}
              className="absolute inset-0 h-full w-full border-0"
              allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button
              type="button"
              onClick={() => setAberto(true)}
              className="group absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-5 bg-[url('/images/monverdant/vista-panoramica-v2.webp')] bg-cover bg-center text-white"
            >
              <span className="absolute inset-0 bg-[#13200f]/55 transition-colors group-hover:bg-[#13200f]/40" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/70 font-[family-name:var(--font-fraunces)] text-lg font-bold backdrop-blur-sm transition-transform group-hover:scale-105">
                360°
              </span>
              <span className="relative text-xs font-bold tracking-[0.25em] uppercase">
                Ver a vista a {atual.metros} metros
              </span>
            </button>
          )}
          <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1.5 text-xs tracking-[0.2em] text-white uppercase backdrop-blur-sm">
            {atual.metros} m de altura
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          {atual.vistas.length > 1 ? (
            <div className="flex gap-2" role="radiogroup" aria-label="Direção da vista">
              {atual.vistas.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  role="radio"
                  aria-checked={i === vista}
                  onClick={() => {
                    setVista(i);
                    setAberto(true);
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                    i === vista
                      ? "border-white bg-white text-[#1E2B17]"
                      : "border-white/25 text-white hover:border-white/60"
                  }`}
                >
                  {v.nome}
                </button>
              ))}
            </div>
          ) : (
            <span />
          )}
          <span className="text-xs text-white/50">
            Panoramas 360° captados na altura de cada andar.
          </span>
        </div>
      </div>
    </div>
  );
}
