"use client";

/* Medição de resultados (Google Analytics e Meta Pixel).

   - Só liga no domínio oficial (conbrain.com.br): testes no computador e o
     endereço provisório do servidor não entram nas estatísticas.
   - Só liga depois que a pessoa aceita os cookies no aviso (LGPD).
   - Nunca mede o Canal de Denúncias, que precisa ser anônimo.

   Os códigos (Analytics e Pixel) ficam em ./medicao-ids.ts. */

import { GA_ID, PIXEL_ID } from "./medicao-ids";

const DOMINIOS_OFICIAIS = ["conbrain.com.br", "www.conbrain.com.br"];
const PAGINAS_SEM_MEDICAO = ["/canal-de-denuncias"];

const CHAVE_CONSENTIMENTO = "conbrain-cookies";
export type Consentimento = "aceito" | "recusado";

type Janela = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
};

export function lerConsentimento(): Consentimento | null {
  try {
    const v = localStorage.getItem(CHAVE_CONSENTIMENTO);
    return v === "aceito" || v === "recusado" ? v : null;
  } catch {
    return null;
  }
}

export function salvarConsentimento(v: Consentimento) {
  try {
    localStorage.setItem(CHAVE_CONSENTIMENTO, v);
  } catch {
    // Armazenamento bloqueado: vale só para esta visita.
  }
}

export function dominioOficial() {
  return DOMINIOS_OFICIAIS.includes(window.location.hostname);
}

export function paginaSemMedicao(caminho = window.location.pathname) {
  return PAGINAS_SEM_MEDICAO.some((p) => caminho.startsWith(p));
}

let ligada = false;

/** Carrega o Google Analytics e o Meta Pixel (uma vez por visita). */
export function ligarMedicao() {
  if (ligada || !dominioOficial() || paginaSemMedicao() || lerConsentimento() !== "aceito") return;
  ligada = true;
  const w = window as Janela;

  if (GA_ID) {
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", GA_ID);
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  if (PIXEL_ID) {
    // Código padrão do Meta Pixel, sem o <noscript>.
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) (fbq.callMethod as (...a: unknown[]) => void)(...args);
      else fbq.queue!.push(args);
    } as NonNullable<Janela["fbq"]>;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    w.fbq = fbq;
    w._fbq = fbq;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }
}

/** Visualização de página após navegação interna (o Analytics já conta sozinho). */
export function registrarVisualizacao() {
  if (!ligada || paginaSemMedicao()) return;
  (window as Janela).fbq?.("track", "PageView");
}

/** Contato feito pelo site: formulário enviado ou clique no WhatsApp/e-mail. */
export function registrarConversao(
  tipo: "formulario" | "whatsapp" | "email",
  detalhe: string
) {
  const pagina = window.location.pathname;
  if (!ligada || paginaSemMedicao()) {
    if (!dominioOficial()) console.info("[medição desligada fora do domínio oficial]", tipo, detalhe, pagina);
    return;
  }
  const w = window as Janela;
  if (tipo === "formulario") {
    w.gtag?.("event", "generate_lead", { formulario: detalhe, pagina });
    w.fbq?.("track", "Lead", { content_name: detalhe });
  } else {
    w.gtag?.("event", tipo === "whatsapp" ? "contato_whatsapp" : "contato_email", { origem: detalhe, pagina });
    w.fbq?.("track", "Contact", { content_name: tipo });
  }
}
