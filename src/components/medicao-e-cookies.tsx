"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  lerConsentimento,
  ligarMedicao,
  paginaSemMedicao,
  registrarConversao,
  registrarVisualizacao,
  salvarConsentimento,
  type Consentimento,
} from "@/lib/medicao";

/** Abre o aviso de cookies de novo (link "Preferências de cookies" nos rodapés). */
export const EVENTO_ABRIR_COOKIES = "conbrain:abrir-cookies";
const EVENTO_ESCOLHA = "conbrain:cookies-escolhidos";

// A escolha fica guardada no navegador; no servidor ainda não se sabe qual é.
function assinarEscolha(avisar: () => void) {
  window.addEventListener(EVENTO_ESCOLHA, avisar);
  window.addEventListener("storage", avisar);
  return () => {
    window.removeEventListener(EVENTO_ESCOLHA, avisar);
    window.removeEventListener("storage", avisar);
  };
}
const escolhaAtual = () => lerConsentimento() ?? "nenhuma";
const escolhaNoServidor = () => "servidor";

/* Aviso de cookies + medição. Fica no layout principal, então vale para o site
   todo, inclusive as páginas dos empreendimentos. */
export function MedicaoECookies() {
  const caminho = usePathname();
  const escolha = useSyncExternalStore(assinarEscolha, escolhaAtual, escolhaNoServidor);
  const [reaberto, setReaberto] = useState(false);
  const primeiraPagina = useRef(true);

  // Se a pessoa já aceitou (agora ou numa visita anterior), liga a medição.
  useEffect(() => {
    if (escolha === "aceito") ligarMedicao();
  }, [escolha]);

  // "Preferências de cookies" no rodapé abre o aviso de novo.
  useEffect(() => {
    const abrir = () => setReaberto(true);
    window.addEventListener(EVENTO_ABRIR_COOKIES, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR_COOKIES, abrir);
  }, []);

  // Navegação entre páginas do site (sem recarregar).
  useEffect(() => {
    if (primeiraPagina.current) {
      primeiraPagina.current = false;
      return;
    }
    registrarVisualizacao();
  }, [caminho]);

  // Cliques em qualquer link de WhatsApp ou e-mail contam como contato.
  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (!link) return;
      const detalhe = (link.getAttribute("aria-label") || link.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60);
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) registrarConversao("whatsapp", detalhe);
      else if (href.startsWith("mailto:")) registrarConversao("email", detalhe);
    }
    document.addEventListener("click", aoClicar, true);
    return () => document.removeEventListener("click", aoClicar, true);
  }, []);

  function escolher(v: Consentimento) {
    salvarConsentimento(v);
    setReaberto(false);
    window.dispatchEvent(new Event(EVENTO_ESCOLHA));
    // Quem recusa depois de ter aceitado: a medição para na próxima página carregada.
  }

  // Primeira visita (ainda sem escolha) ou pedido pelo rodapé. No Canal de
  // Denúncias, que é anônimo e não tem medição, o aviso não aparece.
  const aberto = reaberto || escolha === "nenhuma";
  if (!aberto || paginaSemMedicao(caminho)) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl bg-[#1f1d22] p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6 sm:p-6"
    >
      <p className="text-sm leading-relaxed text-white/85">
        Usamos cookies para entender como o site é usado e melhorar a sua
        experiência. Você pode aceitar ou recusar; o site funciona do mesmo jeito.{" "}
        <Link href="/politica-de-privacidade#cookies" className="font-bold text-[#a3c859] underline underline-offset-2">
          Saiba mais
        </Link>
      </p>
      <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
        <button
          type="button"
          onClick={() => escolher("recusado")}
          className="min-h-11 flex-1 rounded-full border border-white/35 px-5 text-sm font-bold transition-colors hover:border-white sm:flex-none"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => escolher("aceito")}
          className="min-h-11 flex-1 rounded-full bg-[#a3c859] px-6 text-sm font-bold text-[#1f1d22] transition-opacity hover:opacity-90 sm:flex-none"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

/** Link discreto nos rodapés para mudar a escolha de cookies. */
export function BotaoPreferenciasCookies({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(EVENTO_ABRIR_COOKIES))}
      className={`cursor-pointer text-left ${className}`}
    >
      Preferências de cookies
    </button>
  );
}
