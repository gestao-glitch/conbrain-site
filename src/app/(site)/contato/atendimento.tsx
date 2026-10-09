"use client";

import {
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";
import { contato } from "@/content";
import { registrarContato } from "@/lib/registrar-contato";

type Perfil = "morar" | "investir" | "visita" | "terreno" | "parceiro";

const PERFIS: {
  id: Perfil;
  titulo: string;
  desc: string;
  icone: ReactNode;
}[] = [
  {
    id: "morar",
    titulo: "Quero morar",
    desc: "Encontre o apartamento certo para a sua fase de vida.",
    icone: (
      <>
        <path d="M4 11 12 4l8 7" />
        <path d="M6 10v10h12V10" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  },
  {
    id: "investir",
    titulo: "Quero investir",
    desc: "Renda com aluguel, valorização ou salas comerciais.",
    icone: (
      <>
        <path d="M4 18 10 12l4 4 6-7" />
        <path d="M15 9h5v5" />
      </>
    ),
  },
  {
    id: "visita",
    titulo: "Agendar visita",
    desc: "Escolha o dia e o horário para conhecer de perto.",
    icone: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M9 3v4M15 3v4" />
      </>
    ),
  },
  {
    id: "terreno",
    titulo: "Tenho um terreno",
    desc: "Avaliamos o seu terreno para um novo empreendimento.",
    icone: (
      <>
        <path d="M3 18 9 8l4 6 3-4 5 8Z" />
        <circle cx="17" cy="6" r="2" />
      </>
    ),
  },
  {
    id: "parceiro",
    titulo: "Sou parceiro",
    desc: "Corretores, imobiliárias, fornecedores e investidores.",
    icone: (
      <>
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 19c0-3 2.2-5 5-5s5 2 5 5M11 19c0-3 2.2-5 5-5s5 2 5 5" />
      </>
    ),
  },
];

const EMPREENDIMENTOS_MORAR = [
  "Ainda não sei",
  "BËOS Grand Central",
  "Mon'Verdant",
  "Upper Nest",
  "Mastro (lançamento)",
];
const EMPREENDIMENTOS_INVESTIR = [...EMPREENDIMENTOS_MORAR, "Pier 225 (lançamento)"];
const LOCAIS_VISITA = [
  "Stand comercial (Av. Getúlio Vargas, 418)",
  "Obra de um empreendimento",
];
// Mesmos horários do atendimento (8h30 às 12h e 13h30 às 18h), com a última
// visita de cada turno começando 1 hora antes do fechamento.
const HORARIOS = ["8h30", "9h30", "10h30", "11h", "13h30", "14h30", "15h30", "16h30", "17h"];
const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

/** Próximos dias úteis (seg a sex), a partir de amanhã. */
function proximosDiasUteis(quantidade: number) {
  const dias: Date[] = [];
  const d = new Date();
  while (dias.length < quantidade) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) dias.push(new Date(d));
  }
  return dias;
}

function formatarDia(d: Date) {
  return `${DIAS_SEMANA[d.getDay()]}, ${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}

// Permite abrir a página já num perfil: /contato#visita, /contato#terreno...
function assinarHash(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}
function perfilDoHash(): Perfil | null {
  const h = window.location.hash.replace("#", "");
  return PERFIS.some((p) => p.id === h) ? (h as Perfil) : null;
}

const CAMPO =
  "h-13 w-full rounded-[10px] border border-transparent bg-white px-4 text-base text-chumbo outline-none transition-colors focus:border-verde focus:ring-4 focus:ring-verde/30";
const ROTULO = "text-sm text-white/75";

function Opcoes({
  nome,
  opcoes,
  valor,
  aoMudar,
}: {
  nome: string;
  opcoes: string[];
  valor: string;
  aoMudar: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={nome}>
      {opcoes.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={valor === o}
          onClick={() => aoMudar(o)}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
            valor === o
              ? "border-[#a3c859] bg-[#a3c859] font-bold text-[#1f1d22]"
              : "border-white/25 text-white hover:border-white/60"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Atendimento({ canais }: { canais: ReactNode }) {
  const hash = useSyncExternalStore(assinarHash, perfilDoHash, () => null);
  const [escolhido, setEscolhido] = useState<Perfil | null>(null);
  const perfil: Perfil = escolhido ?? hash ?? "morar";
  const atual = PERFIS.find((p) => p.id === perfil)!;

  const [enviado, setEnviado] = useState(false);
  const [objetivo, setObjetivo] = useState("Renda com aluguel");
  const [local, setLocal] = useState(LOCAIS_VISITA[0]);
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [situacao, setSituacao] = useState("Vender");
  const [tipoParceiro, setTipoParceiro] = useState("Corretor ou imobiliária");
  const [erro, setErro] = useState("");

  function escolher(id: Perfil) {
    setEscolhido(id);
    setEnviado(false);
    setErro("");
    history.replaceState(null, "", `#${id}`);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document
        .getElementById("formulario")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (perfil === "visita" && (!dia || !horario)) {
      setErro("Escolha um dia e um horário para a visita.");
      return;
    }
    const dados = new FormData(e.currentTarget);
    const campo = (n: string) => String(dados.get(n) ?? "").trim();

    const linhas: string[] = [`Olá! Meu nome é ${campo("nome")}.`];
    if (perfil === "morar") {
      linhas.push("Estou procurando um imóvel para morar.");
      linhas.push(`Empreendimento de interesse: ${campo("empreendimento")}.`);
    } else if (perfil === "investir") {
      linhas.push("Tenho interesse em investir em um empreendimento da Conbrain.");
      linhas.push(`Objetivo: ${objetivo}.`);
      linhas.push(`Empreendimento de interesse: ${campo("empreendimento")}.`);
    } else if (perfil === "visita") {
      linhas.push("Gostaria de agendar uma visita.");
      linhas.push(`Local: ${local}${campo("empreendimento") && local !== LOCAIS_VISITA[0] ? ` — ${campo("empreendimento")}` : ""}.`);
      linhas.push(`Data e horário de preferência: ${dia}, às ${horario}.`);
    } else if (perfil === "terreno") {
      linhas.push("Tenho um terreno e gostaria que a Conbrain avaliasse.");
      linhas.push(`Localização: ${campo("localizacao")}.`);
      if (campo("area")) linhas.push(`Área aproximada: ${campo("area")} m².`);
      linhas.push(`Tenho interesse em: ${situacao}.`);
    } else {
      linhas.push("Quero ser parceiro da Conbrain.");
      linhas.push(`Tipo de parceria: ${tipoParceiro}.`);
      if (campo("empresa")) linhas.push(`Empresa: ${campo("empresa")}.`);
    }
    if (campo("mensagem")) linhas.push(`Mensagem: ${campo("mensagem")}`);
    if (campo("telefone")) linhas.push(`Meu WhatsApp: ${campo("telefone")}`);
    if (campo("email")) linhas.push(`Meu e-mail: ${campo("email")}`);

    const extras: Record<string, string> =
      perfil === "investir"
        ? { Objetivo: objetivo }
        : perfil === "visita"
          ? { "Local da visita": local, "Dia e horário": `${dia}, às ${horario}` }
          : perfil === "terreno"
            ? { "Localização do terreno": campo("localizacao"), "Área (m²)": campo("area"), "Interesse no terreno": situacao }
            : perfil === "parceiro"
              ? { "Tipo de parceria": tipoParceiro, Empresa: campo("empresa") }
              : {};
    registrarContato(
      `Contato — ${atual.titulo}`,
      {
        Nome: campo("nome"),
        WhatsApp: campo("telefone"),
        "E-mail": campo("email"),
        Empreendimento: campo("empreendimento"),
        ...extras,
        Mensagem: campo("mensagem"),
      },
      linhas.join("\n")
    );

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  const dias = perfil === "visita" ? proximosDiasUteis(10) : [];

  return (
    <div className="flex flex-col gap-14 lg:gap-16">
      {/* Perfis */}
      <div
        className="no-scrollbar -mx-6 flex snap-x scroll-px-6 gap-3 overflow-x-auto px-6 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5"
        role="tablist"
        aria-label="Como podemos ajudar"
      >
        {PERFIS.map((p) => {
          const ligado = p.id === perfil;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={ligado}
              aria-controls="formulario"
              onClick={() => escolher(p.id)}
              className={`group flex w-[210px] shrink-0 snap-start cursor-pointer flex-col gap-4 rounded-md border p-6 text-left transition-all duration-300 sm:w-auto ${
                ligado
                  ? "border-[#333136] bg-[#333136] text-white"
                  : "border-[#dddcd8] bg-white text-chumbo hover:-translate-y-1 hover:border-[#333136]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-8 w-8 ${ligado ? "text-[#a3c859]" : "text-[#6b8a2a]"}`}
                aria-hidden="true"
              >
                {p.icone}
              </svg>
              <span className="font-heading text-xl font-bold">{p.titulo}</span>
              <span
                className={`text-sm leading-relaxed ${ligado ? "text-white/70" : "text-[#5f5c64]"}`}
              >
                {p.desc}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
        <div className="order-2 flex min-w-0 flex-1 flex-col lg:order-1">{canais}</div>

        {/* Formulário */}
        <div
          id="formulario"
          role="tabpanel"
          className="order-1 w-full min-w-0 shrink-0 scroll-mt-24 rounded-[20px] bg-[#333136] p-8 text-white lg:order-2 lg:w-[480px] lg:p-11"
        >
          {enviado ? (
            <div className="flex flex-col items-start gap-4 py-6">
              <p className="font-heading text-[26px] leading-tight font-normal">
                Quase lá<span className="text-[#a3c859]">.</span>
              </p>
              <p className="text-[15px] leading-relaxed text-white/75">
                {perfil === "visita"
                  ? "Abrimos o WhatsApp da Conbrain com o seu pedido de visita. É só enviar por lá que um consultor confirma o horário com você."
                  : "Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só enviar por lá e nossa equipe responde o mais breve possível."}
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-2 cursor-pointer border-b border-white pb-0.5 text-sm font-bold transition-colors hover:border-[#a3c859] hover:text-[#a3c859]"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold tracking-[0.25em] text-[#a3c859] uppercase">
                  {atual.titulo}
                </p>
                <p className="font-heading text-[26px] leading-tight font-normal">
                  {perfil === "visita" ? (
                    <>
                      Agende a sua <strong className="font-bold">visita</strong>
                    </>
                  ) : perfil === "terreno" ? (
                    <>
                      Conte sobre o seu <strong className="font-bold">terreno</strong>
                    </>
                  ) : perfil === "parceiro" ? (
                    <>
                      Vamos construir <strong className="font-bold">juntos</strong>
                    </>
                  ) : (
                    <>
                      Fale com um <strong className="font-bold">consultor</strong>
                    </>
                  )}
                </p>
                <p className="text-sm text-white/65">
                  O envio abre direto no nosso WhatsApp comercial.
                </p>
              </div>

              <label className="flex flex-col gap-2">
                <span className={ROTULO}>Nome</span>
                <input name="nome" type="text" required placeholder="Seu nome completo" className={CAMPO} />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={ROTULO}>WhatsApp</span>
                  <input name="telefone" type="tel" placeholder="(42) 90000-0000" className={CAMPO} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={ROTULO}>E-mail</span>
                  <input name="email" type="email" placeholder="seu@email.com" className={CAMPO} />
                </label>
              </div>

              {perfil === "investir" && (
                <div className="flex flex-col gap-2.5">
                  <span className={ROTULO}>Objetivo</span>
                  <Opcoes
                    nome="Objetivo"
                    opcoes={["Renda com aluguel", "Valorização", "Sala comercial"]}
                    valor={objetivo}
                    aoMudar={setObjetivo}
                  />
                </div>
              )}

              {perfil === "visita" && (
                <>
                  <div className="flex flex-col gap-2.5">
                    <span className={ROTULO}>Onde</span>
                    <Opcoes nome="Local da visita" opcoes={LOCAIS_VISITA} valor={local} aoMudar={setLocal} />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className={ROTULO}>Dia</span>
                    <div
                      className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
                      role="radiogroup"
                      aria-label="Dia da visita"
                    >
                      {dias.map((d) => {
                        const rotulo = formatarDia(d);
                        const ligado = dia === rotulo;
                        return (
                          <button
                            key={rotulo}
                            type="button"
                            role="radio"
                            aria-checked={ligado}
                            onClick={() => {
                              setDia(rotulo);
                              setErro("");
                            }}
                            className={`flex w-[62px] shrink-0 cursor-pointer flex-col items-center gap-0.5 rounded-[10px] border py-2.5 transition-colors ${
                              ligado
                                ? "border-[#a3c859] bg-[#a3c859] text-[#1f1d22]"
                                : "border-white/25 hover:border-white/60"
                            }`}
                          >
                            <span className="text-xs tracking-wide uppercase opacity-75">
                              {DIAS_SEMANA[d.getDay()]}
                            </span>
                            <span className="font-heading text-xl font-bold">
                              {String(d.getDate()).padStart(2, "0")}
                            </span>
                            <span className="text-xs opacity-75">
                              {String(d.getMonth() + 1).padStart(2, "0")}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className={ROTULO}>Horário</span>
                    <Opcoes
                      nome="Horário da visita"
                      opcoes={HORARIOS}
                      valor={horario}
                      aoMudar={(v) => {
                        setHorario(v);
                        setErro("");
                      }}
                    />
                    <p className="text-xs text-white/55">
                      Atendimento de {contato.horario_dias.toLowerCase()}, {contato.horario_horas}. Um consultor confirma o horário com você.
                    </p>
                  </div>
                </>
              )}

              {(perfil === "morar" ||
                perfil === "investir" ||
                (perfil === "visita" && local !== LOCAIS_VISITA[0])) && (
                <label className="flex flex-col gap-2">
                  <span className={ROTULO}>Empreendimento de interesse</span>
                  <select name="empreendimento" className={`${CAMPO} px-3.5`}>
                    {(perfil === "investir" ? EMPREENDIMENTOS_INVESTIR : EMPREENDIMENTOS_MORAR).map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              )}

              {perfil === "terreno" && (
                <>
                  <div className="grid gap-4 sm:grid-cols-[1fr_140px]">
                    <label className="flex flex-col gap-2">
                      <span className={ROTULO}>Onde fica o terreno</span>
                      <input name="localizacao" type="text" required placeholder="Cidade e bairro ou rua" className={CAMPO} />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className={ROTULO}>Área (m²)</span>
                      <input name="area" type="text" inputMode="numeric" placeholder="Ex.: 800" className={CAMPO} />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className={ROTULO}>Tenho interesse em</span>
                    <Opcoes
                      nome="Interesse sobre o terreno"
                      opcoes={["Vender", "Permuta por unidades", "Parceria"]}
                      valor={situacao}
                      aoMudar={setSituacao}
                    />
                  </div>
                </>
              )}

              {perfil === "parceiro" && (
                <>
                  <div className="flex flex-col gap-2.5">
                    <span className={ROTULO}>Tipo de parceria</span>
                    <Opcoes
                      nome="Tipo de parceria"
                      opcoes={["Corretor ou imobiliária", "Fornecedor", "Investidor", "Outro"]}
                      valor={tipoParceiro}
                      aoMudar={setTipoParceiro}
                    />
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className={ROTULO}>Empresa (opcional)</span>
                    <input name="empresa" type="text" placeholder="Nome da empresa" className={CAMPO} />
                  </label>
                </>
              )}

              <label className="flex flex-col gap-2">
                <span className={ROTULO}>
                  Mensagem{perfil === "visita" || perfil === "terreno" ? " (opcional)" : ""}
                </span>
                <textarea
                  name="mensagem"
                  rows={3}
                  placeholder={
                    perfil === "terreno"
                      ? "Frente, topografia, documentação..."
                      : "Conte como podemos ajudar"
                  }
                  className={`${CAMPO} h-auto resize-none py-3.5`}
                />
              </label>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#a3c859]"
                />
                <span>
                  Concordo com a{" "}
                  <a href="/politica-de-privacidade" target="_blank" className="text-white underline">
                    Política de Privacidade
                  </a>{" "}
                  e autorizo o contato da Conbrain.
                </span>
              </label>

              {erro && (
                <p role="alert" className="text-sm font-bold text-[#f0b4a4]">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                className="h-13 cursor-pointer rounded-full bg-[#a3c859] text-[15px] font-bold text-[#1f1d22] transition-colors hover:bg-white"
              >
                {perfil === "visita" ? "Pedir agendamento" : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
