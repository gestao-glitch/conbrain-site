"use client";

import { useState, type FormEvent } from "react";
import { registrarContato } from "@/lib/registrar-contato";
import { contato } from "@/content";

const INTERESSES = ["Saúde", "Empresa", "Investimento"] as const;

const CAMPO =
  "border border-[#B7ACA2] bg-white px-4 py-3.5 font-[family-name:var(--font-source-sans)] text-[17px] text-[#221A15] focus:border-[#221A15] focus:outline-none";

export function VipForm() {
  const [interesse, setInteresse] = useState<string | null>(null);
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const campo = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      `Olá! Meu nome é ${campo("nome")}.`,
      "Quero me cadastrar para receber as novidades do Pier 225.",
      interesse ? `Meu interesse: ${interesse}.` : "",
      campo("telefone") ? `Meu WhatsApp: ${campo("telefone")}` : "",
      campo("email") ? `Meu e-mail: ${campo("email")}` : "",
    ].filter(Boolean);

    registrarContato("Pier 225 — cadastro", { Nome: campo("nome"), WhatsApp: campo("telefone"), "E-mail": campo("email"), Interesse: interesse ?? "" }, linhas.join("\n"));

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-4 bg-[#F5F2EE] p-6 text-[#221A15] sm:p-12">
        <p className="font-[family-name:var(--font-jost)] text-3xl">
          Quase lá.
        </p>
        <p className="text-[17px] leading-relaxed text-[#5E544C]">
          Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só enviar
          por lá e você entra na lista de quem recebe as novidades primeiro.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="cursor-pointer border-b border-[#221A15] pb-0.5 text-sm font-bold"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5.5 bg-[#F5F2EE] p-6 text-[#221A15] sm:p-12"
    >
      <label className="flex flex-col gap-2">
        <span className="text-[15px] font-normal">Nome</span>
        <input
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className={CAMPO}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[15px] font-normal">WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            placeholder="(42) 9 0000-0000"
            className={CAMPO}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[15px] font-normal">E-mail (opcional)</span>
          <input
            name="email"
            type="email"
            placeholder="voce@email.com"
            className={CAMPO}
          />
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[15px] font-normal">Qual é o seu interesse?</span>
        <div className="flex flex-wrap gap-2.5">
          {INTERESSES.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                setInteresse((cur) => (cur === label ? null : label))
              }
              className={`min-h-12 flex-grow cursor-pointer border px-2.5 py-3.5 font-[family-name:var(--font-source-sans)] text-base font-bold transition-colors ${
                interesse === label
                  ? "border-[#221A15] bg-[#221A15] text-[#F5F2EE]"
                  : "border-[#B7ACA2] bg-white text-[#221A15]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#5E544C]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[#9A5A2E]"
        />
        <span>
          Concordo em receber comunicações sobre o Pier 225 e com a{" "}
          <a href="/politica-de-privacidade" target="_blank" className="underline">Política de Privacidade</a>, conforme a LGPD.
        </span>
      </label>
      <button
        type="submit"
        className="cursor-pointer border-0 bg-[#9A5A2E] px-5 py-5 font-[family-name:var(--font-jost)] text-[17px] font-bold tracking-wide text-white transition-colors hover:bg-[#B26A39]"
      >
        Quero me cadastrar
      </button>
    </form>
  );
}
