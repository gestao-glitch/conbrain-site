"use client";

import { useState, type FormEvent } from "react";
import { registrarContato } from "@/lib/registrar-contato";
import { contato } from "@/content";

const OPCOES = ["Casa suspensa", "Penthouse"] as const;

const CAMPO =
  "w-full rounded-md border border-[#1E2B17]/15 px-3 py-2.5 text-sm text-[#1E2B17] placeholder:text-[#9a9a8f] focus:border-[#4A5A3A] focus:outline-none";

const ROTULO =
  "mb-1 block text-xs tracking-[0.16em] text-[#5c5c50] uppercase";

export function LeadForm() {
  const [interesse, setInteresse] = useState<(typeof OPCOES)[number]>("Casa suspensa");
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const campo = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      `Olá! Meu nome é ${campo("nome")}.`,
      `Quero visitar a obra do Mon'Verdant e conhecer: ${interesse}.`,
      campo("telefone") ? `Meu WhatsApp: ${campo("telefone")}` : "",
      campo("email") ? `Meu e-mail: ${campo("email")}` : "",
    ].filter(Boolean);

    registrarContato("Mon'Verdant — visita", { Nome: campo("nome"), WhatsApp: campo("telefone"), "E-mail": campo("email"), Interesse: interesse }, linhas.join("\n"));

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-start gap-4 rounded-xl bg-white p-8 text-left">
        <p className="font-[family-name:var(--font-fraunces)] text-2xl text-[#1E2B17]">
          Quase lá.
        </p>
        <p className="text-sm leading-relaxed text-[#5c5c50]">
          Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só enviar
          por lá e nosso time comercial responde para agendar a sua visita.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="border-b border-[#1E2B17] pb-0.5 text-xs font-bold tracking-[0.1em] text-[#1E2B17] uppercase"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-4 rounded-xl bg-white p-8 text-left"
    >
      <label>
        <span className={ROTULO}>Nome completo</span>
        <input
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className={CAMPO}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={ROTULO}>WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            placeholder="(42) 90000-0000"
            className={CAMPO}
          />
        </label>
        <label>
          <span className={ROTULO}>E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="seu@email.com"
            className={CAMPO}
          />
        </label>
      </div>
      <div>
        <span className={ROTULO}>Tenho interesse em</span>
        <div className="flex flex-wrap gap-2.5">
          {OPCOES.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInteresse(opt)}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors ${
                interesse === opt
                  ? "border-[#1E2B17] bg-[#1E2B17] text-[#FAF7EE]"
                  : "border-[#1E2B17]/20 text-[#1E2B17]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-2 text-xs leading-relaxed text-[#4A4A3D]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#1E2B17]/25 accent-[#4A5A3A]"
        />
        <span>
          Concordo em receber contato da Conbrain e com a{" "}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            className="text-[#1E2B17] underline"
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 rounded-md bg-[#4A5A3A] px-6 py-3 text-xs font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#3a4a2d]"
      >
        Quero ser contatado
      </button>
    </form>
  );
}
