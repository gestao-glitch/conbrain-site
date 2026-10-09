import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { contato } from "@/content";
import { Atendimento } from "./atendimento";

const SEDE_MAPS_QUERY = `${contato.endereco_linha1} ${contato.endereco_linha2}`;
const STAND_MAPS_QUERY = `${contato.stand_endereco} ${contato.stand_complemento}`;

const CANAIS = [
  {
    label: "WhatsApp comercial",
    valor: contato.telefone,
    href: `https://wa.me/${contato.whatsapp}`,
    desc: "Atendimento para quem quer morar ou investir.",
  },
  {
    label: "E-mail",
    valor: "comercial@conbrain.com.br",
    href: "mailto:comercial@conbrain.com.br",
    desc: "Propostas, parcerias e informações gerais.",
  },
  {
    label: "Sede",
    valor: contato.endereco_linha1,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SEDE_MAPS_QUERY)}`,
    desc: contato.endereco_linha2,
  },
  {
    label: "Stand comercial",
    valor: contato.stand_endereco,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STAND_MAPS_QUERY)}`,
    desc: (
      <>
        {contato.stand_complemento}
        <br />
        Conheça os empreendimentos com nossos consultores.
      </>
    ),
  },
] as const;

export default function Contato() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex h-[70svh] min-h-[540px] items-end overflow-hidden bg-[#1f1d22]">
        <Image
          src="/images/contato/equipe-concretagem-hd.jpg"
          alt="Equipe da Conbrain durante a concretagem de uma laje do Upper Nest, com a cidade ao fundo"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: "65% 55%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.15)_100%)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0)_75%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/65 to-transparent"
        />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-10 lg:px-[120px] lg:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 text-white lg:gap-7">
            <p
              className="hero-in text-sm tracking-[0.3em] text-white/80 uppercase"
              style={{ animationDelay: "0.2s" }}
            >
              Contato
            </p>
            <h1
              className="hero-in font-heading max-w-3xl text-[34px] leading-[1.1] font-normal tracking-[-0.5px] [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:text-[48px] lg:text-[60px]"
              style={{ animationDelay: "0.45s" }}
            >
              Vamos construir juntos o futuro da{" "}
              <strong className="font-bold">
                nossa região<span className="text-[#a3c859]">?</span>
              </strong>
            </h1>
            <p
              className="hero-in max-w-xl text-base leading-relaxed text-white/85 lg:text-lg"
              style={{ animationDelay: "0.7s" }}
            >
              Para morar, investir, vender um terreno ou ser nosso parceiro:
              escolha como podemos ajudar e fale direto com a nossa equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Atendimento: perfis, canais e formulário */}
      <section
        id="contato"
        className="px-6 py-16 sm:px-10 lg:px-[120px] lg:py-[110px]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">
              Atendimento
            </p>
            <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] text-[#333136] sm:text-[36px] lg:text-[44px]">
              Como podemos{" "}
              <strong className="font-bold">
                ajudar<span className="text-[#a3c859]">?</span>
              </strong>
            </h2>
          </div>
          <Atendimento
            canais={
              <div className="flex flex-col border-b border-[#dddcd8]">
                {CANAIS.map((canal, i) => (
                  <AnimateOnScroll key={canal.label} delay={i * 80}>
                    <div className="flex flex-col gap-4 border-t border-[#dddcd8] py-6 sm:flex-row sm:gap-8">
                      <div className="shrink-0 pt-1 text-sm tracking-wide text-[#5f5c64] sm:w-[180px]">
                        {canal.label}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <a
                          href={canal.href}
                          target={canal.href.startsWith("http") ? "_blank" : undefined}
                          rel={canal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="self-start border-b border-chumbo pb-0.5 text-lg font-bold text-chumbo hover:border-verde-dark hover:text-verde-dark"
                        >
                          {canal.valor}
                        </a>
                        <div className="text-sm leading-relaxed text-[#5f5c64]">
                          {canal.desc}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
                <AnimateOnScroll delay={CANAIS.length * 80}>
                  <div className="flex flex-col gap-4 border-t border-[#dddcd8] py-6 sm:flex-row sm:gap-8">
                    <div className="shrink-0 pt-1 text-sm tracking-wide text-[#5f5c64] sm:w-[180px]">
                      Horário
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="text-lg font-bold text-chumbo">
                        {contato.horario_dias}
                      </div>
                      <div className="text-sm leading-relaxed text-[#5f5c64]">
                        {contato.horario_horas}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            }
          />
        </div>
      </section>

      {/* Mapa */}
      <section className="relative h-[340px] bg-[#efeeeb] lg:h-[420px]">
        <iframe
          title="Localização da sede da Conbrain em Porto União"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SEDE_MAPS_QUERY)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SEDE_MAPS_QUERY)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-full border border-[#e6e6e3] bg-white py-2 pr-2 pl-5 text-[13px] shadow-lg sm:right-auto sm:bottom-8 sm:left-8 sm:gap-4 sm:py-2.5 sm:pr-2.5 sm:text-sm"
        >
          <span>
            <strong className="font-bold">Sede Conbrain</strong> ·{" "}
            {contato.endereco_linha1}
          </span>
          <span className="flex h-9 shrink-0 items-center rounded-full bg-chumbo px-4 text-xs font-bold whitespace-nowrap text-white">
            Abrir no Maps ↗
          </span>
        </a>
      </section>
    </>
  );
}
