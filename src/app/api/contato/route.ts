// Recebe os formulários de contato do site e envia por e-mail para o comercial,
// para que nenhum contato se perca se a pessoa não concluir o envio no WhatsApp.
//
// Configuração (variáveis de ambiente no EasyPanel):
//   CONTATO_EMAIL_DESTINO   quem recebe (vírgula para mais de um). Padrão: comercial@conbrain.com.br
//   A conta que envia é configurada em src/lib/email.ts (SMTP_*).

import { emailModoTeste, remetente, tabelaHtml, transporteEmail } from "@/lib/email";

export const runtime = "nodejs";

const DESTINO_PADRAO = "comercial@conbrain.com.br";

// Limite simples contra envios em massa (fica só na memória).
const tentativas = new Map<string, number[]>();
function excedeuLimite(chave: string) {
  const agora = Date.now();
  const recentes = (tentativas.get(chave) ?? []).filter((t) => agora - t < 10 * 60 * 1000);
  recentes.push(agora);
  tentativas.set(chave, recentes);
  return recentes.length > 8;
}

const texto = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  if (excedeuLimite(ip)) return Response.json({ ok: false }, { status: 429 });

  let corpo: Record<string, unknown>;
  try {
    corpo = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const formulario = texto(corpo.formulario, 80) || "Site";
  const camposBrutos = (corpo.campos ?? {}) as Record<string, unknown>;
  const campos = Object.entries(camposBrutos)
    .map(([k, v]) => [texto(k, 60), texto(v)] as [string, string])
    .filter(([k, v]) => k && v)
    .slice(0, 20);
  const nome = campos.find(([k]) => /^nome/i.test(k))?.[1] ?? "";
  const telefone = campos.find(([k]) => /whatsapp|telefone/i.test(k))?.[1] ?? "";
  const email = campos.find(([k]) => /e-?mail/i.test(k))?.[1] ?? "";

  if (!nome || (!telefone && !email)) return Response.json({ ok: false }, { status: 400 });

  const origem = (corpo.origem ?? {}) as Record<string, unknown>;
  const digitos = telefone.replace(/\D/g, "");
  const linhas: [string, string][] = [
    ["Formulário", formulario],
    ["Recebido em", new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })],
    ...campos,
    ...(digitos.length >= 10 ? [["Chamar no WhatsApp", `https://wa.me/55${digitos.replace(/^55/, "")}`] as [string, string]] : []),
    ["Mensagem montada para o WhatsApp", texto(corpo.mensagem, 3000) || "—"],
    ["Página", texto(origem.pagina, 300) || "—"],
    ["Chegou ao site por", texto(origem.entrada, 500) || "—"],
    ["Site de origem", texto(origem.referencia, 300) || "Acesso direto"],
    ["Campanha (UTM)", texto(origem.utm, 500) || "—"],
  ];

  const transporte = transporteEmail();
  if (!transporte) {
    console.error("[contato] envio de e-mail não configurado (SMTP_* ausentes) — contato não salvo:", formulario);
    return Response.json({ ok: false }, { status: 503 });
  }

  try {
    await transporte.sendMail({
      from: `"Site Conbrain" <${remetente() ?? "teste@localhost"}>`,
      to: process.env.CONTATO_EMAIL_DESTINO || DESTINO_PADRAO,
      replyTo: email || undefined,
      subject: `[Site] ${formulario} — ${nome}`,
      text: linhas.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: tabelaHtml(
        `Novo contato pelo site — ${formulario}`,
        linhas,
        "Contato enviado pelo site conbrain.com.br. A pessoa também foi direcionada ao WhatsApp comercial, mas pode não ter concluído o envio por lá."
      ),
    });
    if (emailModoTeste) {
      console.log(`[contato] MODO TESTE — e-mail de "${formulario}" (${nome}) montado, nada foi enviado:`);
      console.log(linhas.map(([k, v]) => `  ${k}: ${v}`).join("\n"));
    }
  } catch (e) {
    console.error("[contato] falha ao enviar e-mail:", (e as Error).message);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
