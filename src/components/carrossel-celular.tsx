"use client";

import { Children, useRef, useState, type ReactNode } from "react";

/* No celular, os itens viram cartões que se arrastam para o lado (com o próximo
   aparecendo na borda, dica e pontinhos de posição). A partir do tablet, usa a
   grade passada em `classeGrade`. */
export function CarrosselCelular({
  children,
  classeGrade,
  rotuloPontos = "Ir para o item",
  escuro = false,
  margem = "-mx-6 px-6 scroll-px-6",
}: {
  children: ReactNode;
  classeGrade: string;
  rotuloPontos?: string;
  escuro?: boolean;
  /** Faz o trilho ir até a borda da tela: use o mesmo recuo lateral da seção. */
  margem?: string;
}) {
  const itens = Children.toArray(children);
  const trilhoRef = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);
  const [arrastou, setArrastou] = useState(false);

  function aoRolar() {
    const el = trilhoRef.current;
    const primeiro = el?.firstElementChild as HTMLElement | null;
    if (!el || !primeiro) return;
    const passo = primeiro.getBoundingClientRect().width + 16;
    const fim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    setAtivo(fim ? itens.length - 1 : Math.round(el.scrollLeft / passo));
    if (el.scrollLeft > 8) setArrastou(true);
  }

  function irPara(i: number) {
    const el = trilhoRef.current;
    const alvo = el?.children[i] as HTMLElement | undefined;
    if (el && alvo)
      el.scrollTo({ left: alvo.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: "smooth" });
  }

  const corDica = escuro ? "text-white/50" : "text-[#5f5c64]";
  const corPonto = escuro ? "bg-white/25" : "bg-chumbo/20";

  return (
    <div>
      <p
        className={`mb-5 text-xs tracking-[0.2em] uppercase transition-opacity duration-500 sm:hidden ${corDica} ${
          arrastou ? "opacity-0" : "opacity-100"
        }`}
      >
        Arraste para o lado &rarr;
      </p>

      <div
        ref={trilhoRef}
        onScroll={aoRolar}
        className={`no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:px-0 ${margem} ${classeGrade}`}
      >
        {itens.map((item, i) => (
          <div key={i} className="w-[78vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-2 sm:hidden">
        {itens.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${rotuloPontos} ${i + 1}`}
            onClick={() => irPara(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === ativo ? "w-6 bg-verde" : `w-1.5 ${corPonto}`}`}
          />
        ))}
      </div>
    </div>
  );
}
