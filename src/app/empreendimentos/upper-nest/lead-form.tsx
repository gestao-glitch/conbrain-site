"use client";

import { useState, type FormEvent } from "react";
import { registrarContato } from "@/lib/registrar-contato";
import { contato } from "@/content";

const ROTULO =
  "mb-1.5 block font-[family-name:var(--font-manrope)] text-[12.5px] font-bold tracking-wide text-[#655F53]";

const CAMPO =
  "w-full rounded-sm border border-[#302E29]/15 bg-white px-3.5 py-3 font-[family-name:var(--font-manrope)] text-sm text-[#302E29] focus:ring-2 focus:ring-[#AE5D32] focus:outline-none";

export function LeadForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const campo = (nome: string) => String(dados.get(nome) ?? "").trim();

    const linhas = [
      `Olá! Meu nome é ${campo("nome")}.`,
      "Tenho interesse no Upper Nest e quero simular meu financiamento.",
      campo("telefone") ? `Meu WhatsApp: ${campo("telefone")}` : "",
      campo("email") ? `Meu e-mail: ${campo("email")}` : "",
    ].filter(Boolean);

    registrarContato("Upper Nest — simulação de financiamento", { Nome: campo("nome"), WhatsApp: campo("telefone"), "E-mail": campo("email") }, linhas.join("\n"));

    window.open(
      `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <p className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#302E29]">
          Quase lá.
        </p>
        <p className="text-[15px] text-[#655F53]">
          Abrimos o WhatsApp da Conbrain com a sua mensagem pronta. É só
          enviar por lá que um consultor responde para simular o seu
          financiamento.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="cursor-pointer border-b border-[#302E29] pb-0.5 font-[family-name:var(--font-manrope)] text-sm font-bold text-[#302E29]"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <label className="block">
        <span className={ROTULO}>Nome completo</span>
        <input
          name="nome"
          type="text"
          required
          placeholder="Seu nome"
          className={CAMPO}
        />
      </label>
      <label className="block">
        <span className={ROTULO}>WhatsApp / telefone</span>
        <input
          name="telefone"
          type="tel"
          placeholder="(42) 9 9999-9999"
          className={CAMPO}
        />
      </label>
      <label className="block">
        <span className={ROTULO}>E-mail (opcional)</span>
        <input
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          className={CAMPO}
        />
      </label>
      <label className="flex items-start gap-2.5 font-[family-name:var(--font-manrope)] text-[12.5px] leading-relaxed text-[#655F53]">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#AE5D32]"
        />
        <span>
          Concordo em ser contatado por telefone, e-mail ou WhatsApp sobre o
          Upper Nest e com a{" "}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            className="font-bold text-[#302E29] underline"
          >
            Política de Privacidade
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        className="mt-1.5 w-full cursor-pointer rounded-sm bg-[#AE5D32] py-3.5 text-center font-[family-name:var(--font-manrope)] text-[15px] font-bold text-white transition-colors hover:bg-[#7C3F1E]"
      >
        Quero ser contatado
      </button>
    </form>
  );
}
