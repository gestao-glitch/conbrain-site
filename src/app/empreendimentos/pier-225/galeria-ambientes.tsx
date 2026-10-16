"use client";

import Image from "next/image";
import { useState } from "react";

/* Área social do Pier 225: a pessoa escolhe o ambiente (Café, Academia…) e vê
   as fotos dele. No celular os botões dos ambientes rolam para o lado. */

type Foto = { src: string; alt: string; legenda: string };
type Ambiente = { nome: string; fotos: Foto[] };

const P = "/images/pier225/social/";

const AMBIENTES: Ambiente[] = [
  {
    nome: "Coworking e lounge",
    fotos: [
      { src: P + "lounge-por-do-sol.jpg", alt: "Lounge com sofás e mesas de trabalho, com vista para o rio ao pôr do sol", legenda: "Lounge com vista para o rio ao pôr do sol" },
      { src: P + "lounge-mesas.jpg", alt: "Lounge com sofá curvo, poltronas e mesas de trabalho junto às janelas", legenda: "Mesas de trabalho e área de descanso" },
      { src: P + "coworking-sofas.jpg", alt: "Coworking com sofás verdes, poltronas e mesas, com vista para a cidade", legenda: "Coworking com vista para a cidade" },
      { src: P + "coworking-mesas.jpg", alt: "Mesas redondas do coworking junto às janelas, com salas de reunião ao fundo", legenda: "Mesas compartilhadas e salas de reunião" },
    ],
  },
  {
    nome: "Café",
    fotos: [
      { src: P + "cafe-salao.jpg", alt: "Café com sofá verde, mesas redondas e balcão de madeira", legenda: "Café com mesas e sofás" },
      { src: P + "cafe-conveniencia.jpg", alt: "Café com cobertura de vidro, geladeiras e prateleiras de produtos", legenda: "Café e conveniência" },
      { src: P + "cafe-balcao.jpg", alt: "Balcão do café com cardápio na parede e saída para o terraço", legenda: "Balcão com saída para o terraço" },
    ],
  },
  {
    nome: "Academia",
    fotos: [
      { src: P + "academia-peso-livre.jpg", alt: "Academia com área de peso livre, gaiola de musculação e caixas de salto", legenda: "Área de peso livre e treino funcional" },
      { src: P + "academia-aparelhos.jpg", alt: "Academia com aparelhos de musculação e cardio junto às janelas", legenda: "Aparelhos de musculação e cardio" },
      { src: P + "academia-vista.jpg", alt: "Academia com esteiras e aparelhos, com vista para a cidade", legenda: "Academia com vista para a cidade" },
      { src: P + "treino-ao-ar-livre.jpg", alt: "Área de treino ao ar livre com barras, ao lado da academia, ao pôr do sol", legenda: "Área de treino ao ar livre" },
    ],
  },
  {
    nome: "Auditório",
    fotos: [
      { src: P + "auditorio-palco.jpg", alt: "Auditório com palco, púlpito e tela de projeção, ladeados por jardins verticais", legenda: "Palco com tela de projeção" },
      { src: P + "auditorio-plateia.jpg", alt: "Plateia do auditório com poltronas verdes e janelas para a cidade", legenda: "Plateia com luz natural" },
    ],
  },
  {
    nome: "Podcast e reunião",
    fotos: [
      { src: P + "podcast-estudio.jpg", alt: "Estúdio de podcast com mesa, microfones e jardins verticais", legenda: "Estúdio de podcast e reunião" },
      { src: P + "podcast-espera.jpg", alt: "Sala de espera do estúdio de podcast com poltronas de couro e vista para a cidade", legenda: "Sala de espera do estúdio" },
    ],
  },
  {
    nome: "Copa",
    fotos: [
      { src: P + "copa-vista-rio.jpg", alt: "Copa com ilha, banquetas e vista para o rio ao pôr do sol", legenda: "Copa equipada com vista para o rio" },
    ],
  },
];

export function GaleriaAmbientes() {
  const [ambiente, setAmbiente] = useState(0);
  const [foto, setFoto] = useState(0);
  const atual = AMBIENTES[ambiente];
  const total = atual.fotos.length;
  const f = atual.fotos[foto % total];

  function escolherAmbiente(i: number, botao: HTMLElement) {
    setAmbiente(i);
    setFoto(0);
    // No celular, traz o botão escolhido para dentro da tela.
    botao.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  const seta =
    "flex h-11 w-11 items-center justify-center bg-[#F5F2EE]/90 text-xl text-[#221A15] transition-colors hover:bg-white";

  return (
    <div className="flex flex-col gap-5">
      <div
        role="tablist"
        aria-label="Ambientes da área social"
        className="no-scrollbar -mx-8 flex scroll-px-8 gap-2.5 overflow-x-auto px-8 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {AMBIENTES.map((a, i) => (
          <button
            key={a.nome}
            type="button"
            role="tab"
            aria-selected={i === ambiente}
            onClick={(e) => escolherAmbiente(i, e.currentTarget)}
            className={`min-h-11 shrink-0 border px-5 py-2.5 text-[17px] whitespace-nowrap transition-colors ${
              i === ambiente
                ? "border-[#221A15] bg-[#221A15] text-[#F5F2EE]"
                : "border-[#C9BFB6] text-[#221A15] hover:border-[#221A15]"
            }`}
          >
            {a.nome}
          </button>
        ))}
      </div>

      <figure className="relative m-0 aspect-[4/3] overflow-hidden bg-[#221A15] sm:aspect-[2/1]">
        <Image
          key={f.src}
          src={f.src}
          alt={f.alt}
          fill
          sizes="(max-width: 768px) 180vw, 1400px"
          quality={90}
          className="object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#18120E]/80 to-transparent px-5 pt-16 pb-4 text-[#F5F2EE] sm:px-7 sm:pb-6">
          <span className="flex flex-col gap-1">
            <span className="font-[family-name:var(--font-jost)] text-xs tracking-[3px] text-[#E0A877] uppercase">
              {atual.nome}
            </span>
            <span className="text-base sm:text-lg">{f.legenda}</span>
          </span>
          {total > 1 && (
            <span className="shrink-0 font-[family-name:var(--font-jost)] text-sm tracking-wide">
              {(foto % total) + 1} / {total}
            </span>
          )}
        </figcaption>
        {total > 1 && (
          <div className="absolute top-1/2 right-3 left-3 flex -translate-y-1/2 justify-between">
            <button type="button" aria-label="Foto anterior" onClick={() => setFoto((foto - 1 + total) % total)} className={seta}>
              &lsaquo;
            </button>
            <button type="button" aria-label="Próxima foto" onClick={() => setFoto((foto + 1) % total)} className={seta}>
              &rsaquo;
            </button>
          </div>
        )}
      </figure>

      {total > 1 && (
        <div className="grid grid-cols-4 gap-2.5 sm:flex">
          {atual.fotos.map((ft, i) => (
            <button
              key={ft.src}
              type="button"
              aria-label={`Ver foto: ${ft.legenda}`}
              onClick={() => setFoto(i)}
              className={`relative aspect-[3/2] cursor-pointer overflow-hidden border-2 bg-[#221A15] p-0 transition-opacity sm:h-20 sm:w-32 ${
                i === foto % total ? "border-[#9A5A2E] opacity-100" : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <Image src={ft.src} alt={ft.alt} fill sizes="140px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
