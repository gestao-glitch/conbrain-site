// Envio de e-mails do site. Cada formulário envia pela própria conta, para que
// nenhuma veja os e-mails da outra:
//
//   Formulários de contato (vão para o comercial):
//     SMTP_USUARIO            conta Google Workspace que envia (ex.: comercial@conbrain.com.br)
//     SMTP_SENHA              "senha de app" dessa conta (não é a senha normal)
//
//   Canal de Denúncias (vai para o RH) — conta própria, por sigilo:
//     DENUNCIA_SMTP_USUARIO   conta que envia os relatos (ex.: a do RH)
//     DENUNCIA_SMTP_SENHA     "senha de app" dessa conta
//   As denúncias nunca usam a conta dos contatos: sem DENUNCIA_SMTP_*, o canal
//   fica "indisponível" em vez de deixar cópia dos relatos em outra caixa.
//
//   Opcionais para as duas: *_HOST (padrão smtp.gmail.com) e *_PORTA (padrão 465).
// Para testar no computador sem enviar nada: EMAIL_MODO_TESTE=1 (ou DENUNCIA_MODO_TESTE=1).

import nodemailer from "nodemailer";

export type ContaEmail = "contato" | "denuncia";

const PREFIXO: Record<ContaEmail, string> = { contato: "SMTP_", denuncia: "DENUNCIA_SMTP_" };

const env = (conta: ContaEmail, nome: string) => process.env[`${PREFIXO[conta]}${nome}`];

export const emailModoTeste =
  process.env.EMAIL_MODO_TESTE === "1" || process.env.DENUNCIA_MODO_TESTE === "1";

/** Endereço que aparece como remetente dos e-mails dessa conta. */
export function remetente(conta: ContaEmail) {
  return env(conta, "USUARIO");
}

/** Devolve o transporte de e-mail da conta, ou null se ela não estiver configurada. */
export function transporteEmail(conta: ContaEmail) {
  if (emailModoTeste) return nodemailer.createTransport({ jsonTransport: true });
  const usuario = env(conta, "USUARIO");
  const senha = env(conta, "SENHA");
  if (!usuario || !senha) return null;
  const porta = Number(env(conta, "PORTA") || 465);
  return nodemailer.createTransport({
    host: env(conta, "HOST") || "smtp.gmail.com",
    port: porta,
    secure: porta === 465,
    auth: { user: usuario, pass: senha },
  });
}

export function escaparHtml(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Tabela simples de "campo: valor" para o corpo do e-mail. */
export function tabelaHtml(titulo: string, linhas: [string, string][], rodape: string) {
  return `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
<p style="font-size:16px"><strong>${escaparHtml(titulo)}</strong></p>
<table cellpadding="8" style="border-collapse:collapse;max-width:680px">
${linhas
  .map(
    ([k, v]) =>
      `<tr><td style="border-bottom:1px solid #ddd;vertical-align:top;width:200px;color:#555">${escaparHtml(k)}</td><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escaparHtml(v)}</td></tr>`
  )
  .join("\n")}
</table>
<p style="color:#777;font-size:12px">${escaparHtml(rodape)}</p>
</div>`;
}
