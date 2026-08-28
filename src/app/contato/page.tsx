"use client";

import { useState, type FormEvent } from "react";
import { contato } from "@/content";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <>
      <section className="flex min-h-[50vh] items-center bg-chumbo pt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="mb-6 text-xs tracking-[0.4em] text-verde uppercase">
            Contato
          </p>
          <h1 className="max-w-2xl text-3xl font-light leading-snug tracking-wide text-white lg:text-4xl">
            Fale conosco
          </h1>
          <p className="mt-4 text-sm text-white/50">
            Estamos prontos para atender você.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* Formulário */}
          <div>
            {enviado ? (
              <div className="rounded bg-verde/10 p-8 text-center">
                <p className="text-lg font-light text-chumbo">
                  Mensagem enviada!
                </p>
                <p className="mt-2 text-sm text-chumbo/60">
                  Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-[11px] tracking-widest text-chumbo/50 uppercase"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    className="w-full border-b border-chumbo/15 bg-transparent py-3 text-sm text-chumbo outline-none transition-colors focus:border-verde"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] tracking-widest text-chumbo/50 uppercase"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-chumbo/15 bg-transparent py-3 text-sm text-chumbo outline-none transition-colors focus:border-verde"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-[11px] tracking-widest text-chumbo/50 uppercase"
                  >
                    Telefone
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    className="w-full border-b border-chumbo/15 bg-transparent py-3 text-sm text-chumbo outline-none transition-colors focus:border-verde"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interesse"
                    className="mb-2 block text-[11px] tracking-widest text-chumbo/50 uppercase"
                  >
                    Empreendimento de interesse
                  </label>
                  <select
                    id="interesse"
                    name="interesse"
                    className="w-full border-b border-chumbo/15 bg-transparent py-3 text-sm text-chumbo outline-none transition-colors focus:border-verde"
                  >
                    <option value="">Selecione</option>
                    <option value="beos">Bëos Grand Central</option>
                    <option value="upper-nest">Upper Nest</option>
                    <option value="monverdant">Mon&apos;Verdant</option>
                    <option value="taiji">Residencial Taiji</option>
                    <option value="agave">Residencial Ágave</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-[11px] tracking-widest text-chumbo/50 uppercase"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="w-full border-b border-chumbo/15 bg-transparent py-3 text-sm text-chumbo outline-none transition-colors focus:border-verde"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 self-start rounded-sm bg-verde px-10 py-3.5 text-xs font-medium tracking-[0.2em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-verde uppercase">
                Endereço
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-chumbo/60">
                {contato.endereco_linha1}
                <br />
                {contato.endereco_linha2}
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-verde uppercase">
                Telefone
              </h3>
              <a
                href={`tel:+${contato.whatsapp}`}
                className="mt-3 block text-sm text-chumbo/60 transition-colors hover:text-verde"
              >
                {contato.telefone}
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-verde uppercase">
                Horário
              </h3>
              <p className="mt-3 text-sm text-chumbo/60">{contato.horario}</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-verde uppercase">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${contato.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-sm border border-verde/30 px-6 py-3 text-xs tracking-widest text-verde uppercase transition-colors hover:bg-verde hover:text-chumbo"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
