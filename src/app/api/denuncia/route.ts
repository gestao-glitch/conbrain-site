// Recebe os relatos do Canal de Denúncias e envia por e-mail para a CIPA.
//
// O relato é anônimo: não guardamos nem enviamos IP, nome ou qualquer dado de
// quem relata (a não ser que a pessoa escreva um contato no campo opcional).
//
// Configuração (variáveis de ambiente no EasyPanel):
//   DENUNCIA_EMAIL_DESTINO   e-mail(s) que recebem os relatos, separados por vírgula
//   DENUNCIA_SMTP_USUARIO    conta Google Workspace que envia (ex.: canal@conbrain.com.br)
//   DENUNCIA_SMTP_SENHA      "senha de app" dessa conta (não é a senha normal)
//   DENUNCIA_SMTP_HOST       opcional, padrão smtp.gmail.com
//   DENUNCIA_SMTP_PORTA      opcional, padrão 465
// Para testar no computador sem enviar e-mail: DENUNCIA_MODO_TESTE=1

import nodemailer from "nodemailer";
import {
  ANEXOS,
  GRAUS_CERTEZA,
  LOCAIS,
  RELACOES,
  SIM_NAO,
  TIPOS_RELATO,
} from "@/data/canal-denuncias";

export const runtime = "nodejs";

// Limite simples contra envios em massa (fica só na memória, nada é gravado).
const tentativas = new Map<string, number[]>();
function excedeuLimite(chave: string) {
  const agora = Date.now();
  const recentes = (tentativas.get(chave) ?? []).filter(
    (t) => agora - t < 10 * 60 * 1000
  );
  recentes.push(agora);
  tentativas.set(chave, recentes);
  return recentes.length > 5;
}

function gerarProtocolo() {
  const d = new Date();
  const data = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const alfabeto = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const sufixo = Array.from(
    crypto.getRandomValues(new Uint8Array(5)),
    (b) => alfabeto[b % alfabeto.length]
  ).join("");
  return `CD-${data}-${sufixo}`;
}

function escapar(texto: string) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function erro(mensagem: string, status = 400) {
  return Response.json({ ok: false, erro: mensagem }, { status });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  if (excedeuLimite(ip)) {
    return erro("Muitos envios em pouco tempo. Tente novamente em alguns minutos.", 429);
  }

  let dados: FormData;
  try {
    dados = await request.formData();
  } catch {
    return erro("Não foi possível ler o formulário.");
  }
  const campo = (nome: string) => String(dados.get(nome) ?? "").trim();

  // Campo invisível: só robôs preenchem.
  if (campo("site")) return Response.json({ ok: true, protocolo: gerarProtocolo() });

  if (campo("concorda") !== "Sim") return erro("É preciso concordar com os termos.");

  const escolha = (nome: string, opcoes: readonly string[]) => {
    const v = campo(nome);
    return opcoes.includes(v) ? v : null;
  };
  const relacao = escolha("relacao", RELACOES);
  const tipo = escolha("tipo", TIPOS_RELATO);
  const local = escolha("local", LOCAIS);
  const certeza = escolha("certeza", GRAUS_CERTEZA);
  const liderCiente = escolha("lider_ciente", SIM_NAO);
  const colaboradorEnvolvido = escolha("colaborador_envolvido", SIM_NAO);
  const evidencias = escolha("evidencias", SIM_NAO);
  const detalhes = campo("detalhes");

  if (!relacao || !tipo || !local || !certeza || !liderCiente || !colaboradorEnvolvido || !evidencias) {
    return erro("Responda todas as perguntas obrigatórias.");
  }
  if (detalhes.length < 10) return erro("Descreva o ocorrido com mais detalhes.");
  if (liderCiente === "Sim" && !campo("quem_ciente")) return erro("Informe quem está ciente.");
  if (colaboradorEnvolvido === "Sim" && !campo("quem_envolvido")) return erro("Informe quem está envolvido.");
  if (evidencias === "Sim" && !campo("onde_evidencias")) return erro("Informe onde estão as evidências.");

  const arquivos = dados
    .getAll("anexos")
    .filter((a): a is File => a instanceof File && a.size > 0);
  if (arquivos.length > ANEXOS.maxArquivos) {
    return erro(`Envie no máximo ${ANEXOS.maxArquivos} arquivos.`);
  }
  if (arquivos.reduce((t, a) => t + a.size, 0) > ANEXOS.maxBytesTotal) {
    return erro("Os anexos passam de 10 MB. Envie arquivos menores.");
  }

  const protocolo = gerarProtocolo();
  const linhas: [string, string][] = [
    ["Protocolo", protocolo],
    ["Recebido em", new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })],
    ["Relação com a empresa", relacao],
    ["Tipo do relato", tipo],
    ["Data da ocorrência", campo("data") ? campo("data").split("-").reverse().join("/") : "Não informada"],
    ["Local da ocorrência", local],
    ["Sobre o fato, a pessoa tem", certeza],
    ["Algum líder ou responsável está ciente?", liderCiente],
    ...(liderCiente === "Sim" ? [["Quem está ciente", campo("quem_ciente")] as [string, string]] : []),
    ["Algum colaborador está envolvido?", colaboradorEnvolvido],
    ...(colaboradorEnvolvido === "Sim" ? [["Quem está envolvido", campo("quem_envolvido")] as [string, string]] : []),
    ["Existem evidências?", evidencias],
    ...(evidencias === "Sim" ? [["Onde estão as evidências", campo("onde_evidencias")] as [string, string]] : []),
    ["Detalhes do ocorrido", detalhes],
    ["Contato para retorno (opcional)", campo("contato") || "Anônimo — não informado"],
    ["Anexos", arquivos.length ? arquivos.map((a) => a.name).join(", ") : "Nenhum"],
  ];

  const texto = linhas.map(([k, v]) => `${k}:\n${v}`).join("\n\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
<p style="font-size:16px"><strong>Novo relato no Canal de Denúncias</strong></p>
<table cellpadding="8" style="border-collapse:collapse;max-width:680px">
${linhas
  .map(
    ([k, v]) =>
      `<tr><td style="border-bottom:1px solid #ddd;vertical-align:top;width:220px;color:#555">${escapar(k)}</td><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escapar(v)}</td></tr>`
  )
  .join("\n")}
</table>
<p style="color:#777;font-size:12px">Relato enviado pelo site conbrain.com.br. O canal não registra IP nem dados de quem relata.</p>
</div>`;

  const destino = process.env.DENUNCIA_EMAIL_DESTINO;
  const usuario = process.env.DENUNCIA_SMTP_USUARIO;
  const senha = process.env.DENUNCIA_SMTP_SENHA;
  const modoTeste = process.env.DENUNCIA_MODO_TESTE === "1";

  if (!modoTeste && (!destino || !usuario || !senha)) {
    console.error("[canal-denuncias] envio não configurado (variáveis DENUNCIA_* ausentes)");
    return erro(
      "O canal está temporariamente indisponível. Tente novamente mais tarde.",
      503
    );
  }

  const transporte = modoTeste
    ? nodemailer.createTransport({ jsonTransport: true })
    : nodemailer.createTransport({
        host: process.env.DENUNCIA_SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.DENUNCIA_SMTP_PORTA || 465),
        secure: Number(process.env.DENUNCIA_SMTP_PORTA || 465) === 465,
        auth: { user: usuario, pass: senha },
      });

  try {
    const resultado = await transporte.sendMail({
      from: `"Canal de Denúncias Conbrain" <${usuario ?? "teste@localhost"}>`,
      to: destino ?? "teste@localhost",
      subject: `[Canal de Denúncias] ${tipo} — ${protocolo}`,
      text: texto,
      html,
      attachments: await Promise.all(
        arquivos.map(async (a) => ({
          filename: a.name,
          content: Buffer.from(await a.arrayBuffer()),
          contentType: a.type || undefined,
        }))
      ),
    });
    if (modoTeste) {
      console.log(`[canal-denuncias] MODO TESTE — relato ${protocolo} montado (${arquivos.length} anexo(s)), nada foi enviado.`);
      void resultado;
    }
  } catch (e) {
    console.error("[canal-denuncias] falha ao enviar e-mail:", (e as Error).message);
    return erro(
      "Não foi possível enviar o relato agora. Tente novamente em alguns minutos.",
      502
    );
  }

  return Response.json({ ok: true, protocolo });
}
