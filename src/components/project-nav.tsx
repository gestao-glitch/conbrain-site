"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MENU_EMPREENDIMENTOS } from "@/data/menu-empreendimentos";

export type ProjectNavTema = {
  texto: string;
  botaoFundo: string;
  botaoTexto: string;
  painelFundo: string;
  painelTexto: string;
  painelBorda: string;
};

export function ProjectNav({
  atual,
  tema,
  ctaHref,
  ctaRadius = "9999px",
}: {
  atual: string;
  tema: ProjectNavTema;
  ctaHref: string;
  /** Arredondamento do botão: use o mesmo dos botões da página. */
  ctaRadius?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const externo = ctaHref.startsWith("http");

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const temHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  return (
    <nav
      aria-label="Navegação do empreendimento"
      className="flex shrink-0 items-center gap-2 text-xs font-bold tracking-[0.06em] whitespace-nowrap uppercase sm:gap-7 sm:tracking-[0.15em]"
      style={{ color: tema.texto }}
    >
      <Link href="/" className="-my-3 py-3 transition-opacity hover:opacity-70 sm:my-0 sm:py-0">
        <span className="hidden sm:inline">&larr; Página inicial</span>
        <span className="sm:hidden">&larr; Início</span>
      </Link>

      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => temHover() && setOpen(true)}
        onMouseLeave={() => temHover() && setOpen(false)}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-label="Empreendimentos"
          onClick={() => setOpen((o) => (temHover() ? true : !o))}
          className="-m-2 flex items-center gap-2 p-2 uppercase transition-opacity hover:opacity-70 sm:m-0 sm:p-0"
        >
          <span className="hidden sm:inline">Empreendimentos</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="sm:hidden"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={`hidden transition-transform duration-200 sm:block ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M2 3.5l3 3 3-3" />
          </svg>
        </button>

        <div
          className={`absolute top-full right-0 z-50 pt-3 transition-all duration-200 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            className="w-72 max-w-[calc(100vw-3rem)] overflow-hidden rounded-md py-2 text-right text-xs tracking-[0.15em] uppercase shadow-xl"
            style={{
              background: tema.painelFundo,
              color: tema.painelTexto,
              border: `1px solid ${tema.painelBorda}`,
            }}
          >
            {MENU_EMPREENDIMENTOS.map((emp) => (
              <Link
                key={emp.slug}
                href={`/empreendimentos/${emp.slug}`}
                aria-current={emp.slug === atual ? "page" : undefined}
                className={`flex flex-col items-end gap-0.5 px-5 py-3 transition-opacity hover:opacity-100 ${
                  emp.slug === atual ? "opacity-100" : "opacity-85"
                }`}
              >
                <span className="font-bold">
                  {emp.nome}
                </span>
                <span className="text-xs tracking-wider opacity-70">
                  {emp.slug === atual ? "Você está aqui" : emp.status}
                </span>
              </Link>
            ))}
            <Link
              href="/#empreendimentos"
              className="mt-1 block px-5 pt-3 pb-2 font-bold opacity-70 hover:opacity-100"
              style={{ borderTop: `1px solid ${tema.painelBorda}` }}
            >
              Ver todos &rarr;
            </Link>
          </div>
        </div>
      </div>

      <a
        href={ctaHref}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex h-9 items-center px-3.5 transition-opacity hover:opacity-85 sm:h-10 sm:px-5"
        style={{ background: tema.botaoFundo, color: tema.botaoTexto, borderRadius: ctaRadius }}
      >
        <span className="sm:hidden">Saber mais</span>
        <span className="hidden sm:inline">Quero saber mais</span>
      </a>
    </nav>
  );
}
