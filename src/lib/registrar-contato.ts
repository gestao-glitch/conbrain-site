"use client";

// Guarda em segundo plano cada contato enviado pelos formulários, antes de abrir
// o WhatsApp. Não atrasa nem bloqueia o WhatsApp: se o envio falhar, segue igual.

import { registrarConversao } from "./medicao";

const CHAVE_ORIGEM = "conbrain-origem";

type Origem = { entrada: string; referencia: string; utm: string };

/** Anota por onde a pessoa chegou ao site (só na primeira página da visita). */
export function anotarOrigem() {
  try {
    if (sessionStorage.getItem(CHAVE_ORIGEM)) return;
    const url = new URL(window.location.href);
    const utm = [...url.searchParams]
      .filter(([k]) => k.startsWith("utm_") || k === "gclid" || k === "fbclid")
      .map(([k, v]) => `${k}=${v}`)
      .join(" · ");
    const referencia = document.referrer && !document.referrer.startsWith(url.origin) ? document.referrer : "";
    const origem: Origem = { entrada: url.pathname + url.search, referencia, utm };
    sessionStorage.setItem(CHAVE_ORIGEM, JSON.stringify(origem));
  } catch {
    // Navegação privada ou armazenamento bloqueado: segue sem a origem.
  }
}

function lerOrigem(): Partial<Origem> {
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE_ORIGEM) ?? "{}");
  } catch {
    return {};
  }
}

export function registrarContato(
  formulario: string,
  campos: Record<string, string>,
  mensagem: string
) {
  try {
    registrarConversao("formulario", formulario);
  } catch {
    // Medição nunca pode impedir o contato.
  }
  try {
    void fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // keepalive: o envio continua mesmo se a pessoa sair da página para o WhatsApp.
      keepalive: true,
      body: JSON.stringify({
        formulario,
        campos,
        mensagem,
        origem: { pagina: window.location.pathname, ...lerOrigem() },
      }),
    }).catch(() => {});
  } catch {
    // Nunca impedir o WhatsApp por causa do registro.
  }
}
