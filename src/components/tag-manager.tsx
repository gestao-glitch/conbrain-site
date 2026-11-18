"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { GTM_ID } from "@/lib/medicao-ids";
import { dominioOficial, paginaSemMedicao } from "@/lib/medicao";
import { assinarEscolha, escolhaAtual, escolhaNoServidor } from "./medicao-e-cookies";

/* Google Tag Manager (componente oficial do Next.js), no layout raiz para valer em
   todas as páginas. Segue as mesmas regras do Analytics e do Pixel:
   - só carrega depois que a pessoa clica em "Aceitar" no aviso de cookies (LGPD);
   - só no domínio oficial (conbrain.com.br), nunca em testes;
   - nunca no Canal de Denúncias, que precisa ser anônimo.
   As tags em si (o que medir, como os cliques em links wa.me) são configuradas
   no painel do Tag Manager, não aqui. */
export function TagManager() {
  const caminho = usePathname();
  const escolha = useSyncExternalStore(assinarEscolha, escolhaAtual, escolhaNoServidor);
  if (!GTM_ID || escolha !== "aceito" || !dominioOficial() || paginaSemMedicao(caminho)) return null;
  return <GoogleTagManager gtmId={GTM_ID} />;
}
