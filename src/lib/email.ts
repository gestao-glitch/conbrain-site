// Envio de e-mails do site (formulários de contato e Canal de Denúncias).
//
// Configuração (variáveis de ambiente no EasyPanel):
//   SMTP_USUARIO   conta Google Workspace que envia (ex.: site@conbrain.com.br)
//   SMTP_SENHA     "senha de app" dessa conta (não é a senha normal)
//   SMTP_HOST      opcional, padrão smtp.gmail.com
//   SMTP_PORTA     opcional, padrão 465
// As antigas DENUNCIA_SMTP_* continuam valendo, caso já estejam configuradas.
// Para testar no computador sem enviar nada: EMAIL_MODO_TESTE=1 (ou DENUNCIA_MODO_TESTE=1).

import nodemailer from "nodemailer";

const env = (nome: string) => process.env[`SMTP_${nome}`] || process.env[`DENUNCIA_SMTP_${nome}`];

export const emailModoTeste =
  process.env.EMAIL_MODO_TESTE === "1" || process.env.DENUNCIA_MODO_TESTE === "1";

export function remetente() {
  return env("USUARIO");
}

/** Devolve o transporte de e-mail, ou null se o envio não estiver configurado. */
export function transporteEmail() {
  if (emailModoTeste) return nodemailer.createTransport({ jsonTransport: true });
  const usuario = env("USUARIO");
  const senha = env("SENHA");
  if (!usuario || !senha) return null;
  const porta = Number(env("PORTA") || 465);
  return nodemailer.createTransport({
    host: env("HOST") || "smtp.gmail.com",
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
