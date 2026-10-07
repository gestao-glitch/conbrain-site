"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ANEXOS,
  GRAUS_CERTEZA,
  LOCAIS,
  RELACOES,
  SIM_NAO,
  TIPOS_RELATO,
} from "@/data/canal-denuncias";

const CAMPO =
  "w-full rounded-[10px] border border-[#dddcd8] bg-white px-4 py-3.5 text-base text-chumbo outline-none transition-colors focus:border-verde focus:ring-4 focus:ring-verde/25";

function Pergunta({
  numero,
  titulo,
  ajuda,
  children,
}: {
  numero: number;
  titulo: string;
  ajuda?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-4 border-t border-[#dddcd8] pt-7">
      <legend className="sr-only">{titulo}</legend>
      <div className="flex gap-4">
        <span className="font-heading text-sm font-bold text-[#6b8a2a]">
          {String(numero).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold text-chumbo">
            {titulo}
            <span className="text-[#6b8a2a]"> *</span>
          </p>
          {ajuda && <p className="text-sm leading-relaxed text-[#5f5c64]">{ajuda}</p>}
        </div>
      </div>
      <div className="sm:pl-9">{children}</div>
    </fieldset>
  );
}

function Opcoes({
  nome,
  opcoes,
  valor,
  aoMudar,
  colunas = false,
}: {
  nome: string;
  opcoes: readonly string[];
  valor: string;
  aoMudar: (v: string) => void;
  colunas?: boolean;
}) {
  return (
    <div className={colunas ? "grid gap-2.5 sm:grid-cols-2" : "flex flex-wrap gap-2.5"}>
      {opcoes.map((o) => {
        const ligado = valor === o;
        return (
          <label
            key={o}
            className={`flex cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3 text-[15px] transition-colors ${
              ligado
                ? "border-[#333136] bg-[#333136] text-white"
                : "border-[#dddcd8] bg-white text-chumbo hover:border-[#333136]"
            }`}
          >
            <input
              type="radio"
              name={nome}
              value={o}
              required
              checked={ligado}
              onChange={() => aoMudar(o)}
              className="h-4 w-4 shrink-0 accent-[#a3c859]"
            />
            {o}
          </label>
        );
      })}
    </div>
  );
}

export function FormularioRelato() {
  const [concorda, setConcorda] = useState(false);
  const [relacao, setRelacao] = useState("");
  const [tipo, setTipo] = useState("");
  const [local, setLocal] = useState("");
  const [certeza, setCerteza] = useState("");
  const [liderCiente, setLiderCiente] = useState("");
  const [envolvido, setEnvolvido] = useState("");
  const [evidencias, setEvidencias] = useState("");
  const [arquivos, setArquivos] = useState<File[]>([]);
  const [estado, setEstado] = useState<"editando" | "enviando" | "enviado">("editando");
  const [erro, setErro] = useState("");
  const [protocolo, setProtocolo] = useState("");

  function escolherArquivos(lista: FileList | null) {
    const novos = Array.from(lista ?? []);
    const total = novos.reduce((t, a) => t + a.size, 0);
    if (novos.length > ANEXOS.maxArquivos) {
      setErro(`Envie no máximo ${ANEXOS.maxArquivos} arquivos.`);
      return;
    }
    if (total > ANEXOS.maxBytesTotal) {
      setErro("Os anexos passam de 10 MB. Escolha arquivos menores.");
      return;
    }
    setErro("");
    setArquivos(novos);
  }

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    const dados = new FormData(e.currentTarget);
    dados.delete("anexos");
    arquivos.forEach((a) => dados.append("anexos", a));
    setEstado("enviando");
    try {
      const resposta = await fetch("/api/denuncia", { method: "POST", body: dados });
      const json = (await resposta.json()) as { ok: boolean; protocolo?: string; erro?: string };
      if (!json.ok) throw new Error(json.erro ?? "Não foi possível enviar o relato.");
      setProtocolo(json.protocolo ?? "");
      setEstado("enviado");
      window.scrollTo({ top: document.getElementById("relato")!.offsetTop - 100, behavior: "smooth" });
    } catch (falha) {
      setErro(
        falha instanceof Error && falha.message
          ? falha.message
          : "Não foi possível enviar o relato. Verifique sua conexão e tente novamente."
      );
      setEstado("editando");
    }
  }

  if (estado === "enviado") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-[20px] bg-[#333136] p-8 text-white lg:p-12">
        <p className="text-xs font-bold tracking-[0.25em] text-[#a3c859] uppercase">
          Relato enviado
        </p>
        <p className="font-heading text-[28px] leading-tight font-normal lg:text-[34px]">
          Obrigado por relatar<span className="text-[#a3c859]">.</span>
        </p>
        <p className="max-w-xl text-base leading-relaxed text-white/75">
          Seu relato foi recebido e será analisado pela CIPA com sigilo e
          imparcialidade. Guarde o número de protocolo abaixo, ele identifica o
          seu relato sem revelar quem você é.
        </p>
        {protocolo && (
          <p className="rounded-[10px] border border-white/20 px-5 py-3 font-heading text-2xl font-bold tracking-wider">
            {protocolo}
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-8" noValidate={false}>
      {/* campo invisível contra robôs */}
      <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-4 rounded-[14px] bg-white p-6 text-sm leading-relaxed text-[#55525a] lg:p-8">
        <p className="text-base font-bold text-chumbo">
          Proteção de dados e termo de consentimento
        </p>
        <p>
          A veracidade das informações relatadas é de responsabilidade exclusiva
          do denunciante. Todas as denúncias recebidas passam por análise e
          apuração, e as ações são tomadas conforme a gravidade e os elementos
          apurados em cada caso.
        </p>
        <p>
          As informações são tratadas de forma estritamente confidencial e usadas
          unicamente para verificar possíveis violações ao Código de Conduta, às
          políticas internas da empresa ou à legislação. Dados pessoais
          eventualmente informados são tratados conforme a LGPD, com segurança e
          uso exclusivo para a apuração.
        </p>
        <p>
          As informações são armazenadas pelo tempo necessário à apuração e à
          deliberação sobre os fatos. Dados consolidados podem ser usados para
          fins estatísticos, sem identificação das pessoas envolvidas.
        </p>
        <label className="mt-2 flex cursor-pointer items-start gap-3 text-[15px] font-bold text-chumbo">
          <input
            type="checkbox"
            name="concorda"
            value="Sim"
            required
            checked={concorda}
            onChange={(e) => setConcorda(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#a3c859]"
          />
          Li e concordo com os termos acima.
        </label>
      </div>

      <Pergunta numero={1} titulo="Qual a sua relação com a empresa?">
        <Opcoes nome="relacao" opcoes={RELACOES} valor={relacao} aoMudar={setRelacao} />
      </Pergunta>

      <Pergunta numero={2} titulo="Tipo do relato">
        <Opcoes nome="tipo" opcoes={TIPOS_RELATO} valor={tipo} aoMudar={setTipo} colunas />
      </Pergunta>

      <fieldset className="flex flex-col gap-4 border-t border-[#dddcd8] pt-7">
        <div className="flex gap-4">
          <span className="font-heading text-sm font-bold text-[#6b8a2a]">03</span>
          <label htmlFor="r-data" className="text-lg font-bold text-chumbo">
            Data da ocorrência <span className="text-sm font-normal text-[#5f5c64]">(se souber)</span>
          </label>
        </div>
        <div className="sm:pl-9">
          <input id="r-data" name="data" type="date" className={`${CAMPO} max-w-[240px]`} />
        </div>
      </fieldset>

      <Pergunta numero={4} titulo="Local da ocorrência">
        <Opcoes nome="local" opcoes={LOCAIS} valor={local} aoMudar={setLocal} colunas />
      </Pergunta>

      <Pergunta numero={5} titulo="Sobre o fato que você está relatando, você tem:">
        <Opcoes nome="certeza" opcoes={GRAUS_CERTEZA} valor={certeza} aoMudar={setCerteza} />
      </Pergunta>

      <Pergunta
        numero={6}
        titulo="Algum líder de setor ou responsável está ciente da ocorrência?"
        ajuda="Por exemplo: mestre de obras, engenheiros ou RH."
      >
        <div className="flex flex-col gap-4">
          <Opcoes nome="lider_ciente" opcoes={SIM_NAO} valor={liderCiente} aoMudar={setLiderCiente} />
          {liderCiente === "Sim" && (
            <input name="quem_ciente" required placeholder="Quem está ciente?" className={CAMPO} />
          )}
        </div>
      </Pergunta>

      <Pergunta numero={7} titulo="Algum colaborador da empresa está envolvido?">
        <div className="flex flex-col gap-4">
          <Opcoes nome="colaborador_envolvido" opcoes={SIM_NAO} valor={envolvido} aoMudar={setEnvolvido} />
          {envolvido === "Sim" && (
            <input name="quem_envolvido" required placeholder="Quem está envolvido?" className={CAMPO} />
          )}
        </div>
      </Pergunta>

      <Pergunta
        numero={8}
        titulo="Detalhes do ocorrido"
        ajuda="Inclua o máximo de informações possível: datas, circunstâncias, pessoas envolvidas e período da ocorrência. Isso permite a apuração dos fatos."
      >
        <textarea
          name="detalhes"
          required
          minLength={10}
          rows={7}
          placeholder="Descreva o que aconteceu"
          className={`${CAMPO} resize-y`}
        />
      </Pergunta>

      <Pergunta numero={9} titulo="Existem evidências do ocorrido?">
        <div className="flex flex-col gap-4">
          <Opcoes nome="evidencias" opcoes={SIM_NAO} valor={evidencias} aoMudar={setEvidencias} />
          {evidencias === "Sim" && (
            <input
              name="onde_evidencias"
              required
              placeholder="Onde essas evidências podem ser encontradas?"
              className={CAMPO}
            />
          )}
        </div>
      </Pergunta>

      <fieldset className="flex flex-col gap-4 border-t border-[#dddcd8] pt-7">
        <div className="flex gap-4">
          <span className="font-heading text-sm font-bold text-[#6b8a2a]">10</span>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold text-chumbo">
              Anexos <span className="text-sm font-normal text-[#5f5c64]">(opcional)</span>
            </p>
            <p className="text-sm text-[#5f5c64]">
              Fotos, documentos ou áudios. Até {ANEXOS.maxArquivos} arquivos e 10 MB no total.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:pl-9">
          <label className="flex w-fit cursor-pointer items-center gap-3 rounded-full border border-[#333136] px-5 py-3 text-sm font-bold text-chumbo transition-colors hover:bg-[#333136] hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.5 12.5 21a6 6 0 0 1-8.5-8.5L13 3.5a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8L15 7.3" />
            </svg>
            Escolher arquivos
            <input
              type="file"
              name="anexos"
              multiple
              accept={ANEXOS.aceitos}
              onChange={(e) => escolherArquivos(e.target.files)}
              className="sr-only"
            />
          </label>
          {arquivos.length > 0 && (
            <ul className="text-sm text-[#55525a]">
              {arquivos.map((a) => (
                <li key={a.name}>• {a.name}</li>
              ))}
            </ul>
          )}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-4 border-t border-[#dddcd8] pt-7">
        <div className="flex gap-4">
          <span className="font-heading text-sm font-bold text-[#6b8a2a]">11</span>
          <div className="flex flex-col gap-1">
            <label htmlFor="r-contato" className="text-lg font-bold text-chumbo">
              Quer receber retorno? <span className="text-sm font-normal text-[#5f5c64]">(opcional)</span>
            </label>
            <p className="text-sm text-[#5f5c64]">
              Deixe em branco para continuar 100% anônimo. Se quiser, informe um
              e-mail ou telefone para a CIPA falar com você.
            </p>
          </div>
        </div>
        <div className="sm:pl-9">
          <input id="r-contato" name="contato" placeholder="E-mail ou telefone (opcional)" className={CAMPO} />
        </div>
      </fieldset>

      {erro && (
        <p role="alert" className="rounded-[10px] bg-[#fbe9e4] px-5 py-4 text-[15px] font-bold text-[#8a2f1c]">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="h-14 w-full cursor-pointer rounded-full bg-[#333136] text-base font-bold text-white transition-colors hover:bg-[#1f1d22] disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:self-start sm:px-12"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar relato"}
      </button>
    </form>
  );
}
