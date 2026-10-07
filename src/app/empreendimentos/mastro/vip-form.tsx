"use client";

import { useState, type FormEvent } from "react";
import { contato } from "@/content";

const CAMPO =
  "h-13 rounded-sm border border-[#B3AAA0] bg-white px-4 text-base font-normal focus:border-[#041E37] focus:outline-none";

export function VipForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const campo = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      `Olá! Meu nome é ${campo("nome")}.`,
      "Quero ser avisado em primeira mão sobre o lançamento do Mastro.",
      campo("telefone") ? `Meu WhatsApp: ${campo("telefone")}` : "",
      campo("email") ? `Meu e-mail: ${campo("email")}` : "",
    ].filter(Boolean);

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm bg-[#EAE5E1] p-10 text-[#1A1F26]">
        <p className="font-[family-name:var(--font-cormorant)] text-4xl text-[#041E37]">
          Quase lá.
        </p>
        <p className="text-base leading-relaxed text-[#4A4F57]">
          Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só enviar
          por lá e você entra na lista de quem será avisado primeiro.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="border-b border-[#041E37] pb-0.5 text-sm font-bold text-[#041E37]"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-sm bg-[#EAE5E1] p-10"
    >
      <label className="flex flex-col gap-2 text-sm font-normal text-[#1A1F26]">
        Nome completo
        <input
          name="nome"
          type="text"
          required
          placeholder="Seu nome"
          className={CAMPO}
        />
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 text-sm font-normal text-[#1A1F26]">
          WhatsApp
          <input
            name="telefone"
            type="tel"
            placeholder="(42) 90000-0000"
            className={CAMPO}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-normal text-[#1A1F26]">
          E-mail
          <input
            name="email"
            type="email"
            placeholder="voce@email.com"
            className={CAMPO}
          />
        </label>
      </div>
      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-[#4A4F57]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#041E37]"
        />
        <span>
          Autorizo a Conbrain a entrar em contato por WhatsApp e e-mail sobre
          o Mastro, conforme a{" "}
          <a href="/politica-de-privacidade" target="_blank" className="font-bold text-[#041E37] underline">
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="h-14.5 rounded-sm border-none bg-[#041E37] text-base font-bold tracking-[0.04em] text-white transition-colors hover:bg-[#0A2E52]"
      >
        Quero ser avisado em primeira mão
      </button>
    </form>
  );
}
