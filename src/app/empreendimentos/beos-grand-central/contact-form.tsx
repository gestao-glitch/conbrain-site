"use client";

import { useState, type FormEvent } from "react";
import { registrarContato } from "@/lib/registrar-contato";
import { contato } from "@/content";

const OPCOES = [
  { id: "investir", label: "Investir" },
  { id: "morar", label: "Morar" },
  { id: "ambos", label: "Os dois" },
] as const;

const CAMPO =
  "h-13 rounded-xl border border-[#CFC9C3] bg-[#FAF8F6] px-4 font-[family-name:var(--font-dm-sans)] text-base font-normal focus:border-[#7A9956] focus:outline-none";

export function ContactForm() {
  const [interesse, setInteresse] = useState<(typeof OPCOES)[number]["id"]>("investir");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const campo = (nome: string) => String(dados.get(nome) ?? "").trim();
    const opcao = OPCOES.find((o) => o.id === interesse)?.label.toLowerCase();

    const linhas = [
      `Olá! Meu nome é ${campo("nome")}.`,
      `Tenho interesse no BËOS Grand Central para: ${opcao}.`,
      campo("telefone") ? `Meu WhatsApp: ${campo("telefone")}` : "",
      campo("email") ? `Meu e-mail: ${campo("email")}` : "",
    ].filter(Boolean);

    registrarContato("BËOS Grand Central", { Nome: campo("nome"), WhatsApp: campo("telefone"), "E-mail": campo("email"), Interesse: OPCOES.find((o) => o.id === interesse)?.label ?? "" }, linhas.join("\n"));

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-4 py-6 font-[family-name:var(--font-dm-sans)]">
        <p className="font-[family-name:var(--font-outfit)] text-3xl font-normal text-[#2A2B28]">
          Quase lá.
        </p>
        <p className="text-base leading-relaxed text-[#55564F]">
          Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só enviar
          por lá e um consultor responde o mais breve possível.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="border-b border-[#2A2B28] pb-0.5 text-sm font-bold text-[#2A2B28]"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#2A2B28]">
        Nome
        <input
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className={CAMPO}
        />
      </label>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <label className="flex flex-col gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#2A2B28]">
          WhatsApp
          <input
            name="telefone"
            type="tel"
            placeholder="(42) 90000-0000"
            className={CAMPO}
          />
        </label>
        <label className="flex flex-col gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#2A2B28]">
          E-mail
          <input
            name="email"
            type="email"
            placeholder="voce@email.com"
            className={CAMPO}
          />
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="font-[family-name:var(--font-dm-sans)] text-sm font-bold text-[#2A2B28]">
          Seu interesse
        </div>
        <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-2.5">
          {OPCOES.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setInteresse(opt.id)}
              className={`h-12 rounded-full px-3 font-[family-name:var(--font-dm-sans)] text-sm font-bold whitespace-nowrap sm:px-5.5 sm:text-[15px] transition-colors ${
                interesse === opt.id
                  ? "border border-[#2A2B28] bg-[#2A2B28] text-[#EAE5E1]"
                  : "border border-[#CFC9C3] bg-transparent text-[#2A2B28]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-3 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#55564F]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#4F6B34]"
        />
        <span>
          Concordo em receber contato e com a{" "}
          <a href="/politica-de-privacidade" target="_blank" className="text-[#2A2B28] underline">
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="min-h-14 rounded-full border-none bg-[#7A9956] px-4 py-3 font-[family-name:var(--font-dm-sans)] text-base sm:min-h-14.5 sm:text-[17px] font-bold text-[#1F201D] transition-colors hover:bg-[#8DAE68]"
      >
        Quero conhecer o empreendimento
      </button>
    </form>
  );
}
