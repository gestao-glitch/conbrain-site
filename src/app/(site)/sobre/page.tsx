import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { CarrosselCelular } from "@/components/carrossel-celular";
import { ClosingCta } from "@/components/closing-cta";
import { sobre } from "@/content";
import { HistoryTimeline } from "./history-timeline";

export const metadata: Metadata = {
  alternates: { canonical: "/sobre" },
  title: "Sobre a Conbrain | Incorporadora em Porto União (SC)",
  description:
    "Conheça a história da Conbrain, o fundador Bruno Sucharski e os valores da incorporadora que nasceu em Porto União e cresce com o Vale do Iguaçu.",
};

const VALORES = [
  { nome: "Integridade", frase: "Mantenha seus princípios" },
  { nome: "Comprometimento", frase: "Valorize sua palavra" },
  { nome: "Autenticidade", frase: "Aja com personalidade" },
  { nome: "Colaboração", frase: "Seja útil e saiba ser ajudado" },
  { nome: "Desenvolvimento", frase: "Abomine a zona de conforto" },
  { nome: "Curiosidade", frase: "Tenha sede de conhecimento" },
  { nome: "Humor", frase: "Divirta-se" },
] as const;

const TEMAS_VALOR = [
  { card: "bg-[#333136] text-white", frase: "text-white/70" },
] as const;

export default function Sobre() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex h-[78svh] min-h-[560px] items-end overflow-hidden bg-[#1f1d22]">
        <Image
          src="/images/sobre/vista-aerea-rio-iguacu-hd.jpg"
          alt="Vista aérea da ponte sobre o rio Iguaçu, que une Porto União e União da Vitória"
          fill
          priority
          // No celular a abertura é alta e estreita e a foto é panorâmica:
          // precisa de uma versão bem mais larga que a tela.
          sizes="(max-width: 768px) 380vw, 100vw"
          quality={90}
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.4)_32%,rgba(0,0,0,0)_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 to-transparent"
        />
        <div className="relative z-10 w-full px-6 pb-16 sm:px-10 lg:px-[120px] lg:pb-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center text-white lg:gap-7">
            <p
              className="hero-in text-xs tracking-[0.22em] text-white/90 uppercase [text-shadow:0_1px_14px_rgba(0,0,0,0.5)] sm:text-xs sm:tracking-[0.4em]"
              style={{ animationDelay: "0.2s" }}
            >
              Sobre a Conbrain
            </p>
            <h1
              className="hero-in font-heading text-[34px] leading-[1.12] font-normal tracking-[-0.5px] text-balance [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:text-[48px] lg:text-[60px]"
              style={{ animationDelay: "0.45s" }}
            >
              Uma empresa que{" "}
              <strong className="font-bold">
                nasceu aqui<span className="text-[#a3c859]">.</span>
              </strong>
            </h1>
            <p
              className="hero-in max-w-xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)] lg:text-lg"
              style={{ animationDelay: "0.7s" }}
            >
              Somos uma incorporadora natural de Porto União (SC) que reúne mais
              de 80 edificadores movidos pelo propósito de transformar cidades e
              vidas.
            </p>
            <nav
              aria-label="Nesta página"
              className="hero-in mt-1 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-bold"
              style={{ animationDelay: "0.95s" }}
            >
              {[
                { href: "#fundador", label: "O fundador" },
                { href: "#historia", label: "Nossa história" },
                { href: "#valores", label: "Nossos valores" },
              ].map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="border-b border-white pb-1 transition-colors hover:border-[#a3c859] hover:text-[#a3c859]"
                >
                  {a.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* O fundador */}
      <section
        id="fundador"
        className="px-6 py-16 sm:px-10 lg:px-[120px] lg:py-[120px]"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-10 lg:gap-24">
          <AnimateOnScroll className="w-full max-w-[340px] shrink-0 md:w-[300px] md:max-w-none lg:w-[480px]">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[20px] md:h-[440px] lg:h-[600px]">
              <Image
                src="/images/equipe/bruno-sucharski-fundador-hd.jpg"
                alt="Bruno Sucharski, fundador e diretor da Conbrain"
                fill
                sizes="(max-width: 768px) 340px, (max-width: 1024px) 300px, 480px"
                quality={90}
                className="object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
          </AnimateOnScroll>
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">
              O fundador
            </p>
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-[32px] leading-[1.2] font-normal tracking-tight text-chumbo lg:text-[48px]">
                Bruno <strong className="font-bold">Sucharski</strong>
              </h2>
              <p className="text-base text-[#5f5c64]">
                Fundador e diretor da Conbrain
              </p>
            </div>
            <p className="text-base leading-loose text-[#55525a] lg:text-lg">
              Com formação pela Fundação Getulio Vargas e experiência em
              projetos de engenharia, regularizações e prevenção contra
              incêndio, Bruno fundou a empresa em 2015, em Porto União, ainda
              com o nome Stanza. Da técnica para a construção, da construção
              para a incorporação: hoje lidera mais de 80 edificadores e uma
              empresa que desenvolve empreendimentos autorais em Porto União,
              União da Vitória e região.
            </p>
            <blockquote className="border-l-2 border-verde py-1 pl-6 text-lg leading-relaxed font-normal text-chumbo/80 italic lg:text-xl">
              &ldquo;{sobre.fundador_quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section
        id="historia"
        className="overflow-hidden bg-[#1f1d22] px-6 py-20 text-white sm:px-10 lg:px-[120px] lg:py-[110px]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-14 lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
              Nossa história
            </p>
            <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] sm:text-[36px] lg:text-[44px] max-w-3xl text-white">
              Há mais de 10 anos transformando{" "}
              <strong className="font-bold">
                planos em realidade<span className="text-verde">.</span>
              </strong>
            </h2>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      {/* Propósito e valores */}
      <section
        id="valores"
        className="bg-[#f7f7f5] px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[120px]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:gap-20">
          <div className="grid gap-10 sm:grid-cols-3 lg:gap-14">
            {[
              {
                label: "Propósito",
                texto: "Gerar desenvolvimento urbano e humano.",
              },
              {
                label: "Missão",
                texto: "Edificar cidades que transformam vidas.",
              },
              {
                label: "Visão",
                texto:
                  "Triplicar nosso campo de atuação, eficiência produtiva e geração de valor até 2030.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 border-t border-chumbo pt-6"
              >
                <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">
                  {item.label}
                </p>
                <p className="text-lg leading-snug font-normal text-chumbo lg:text-[22px]">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">
              Nossos valores
            </p>
            <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] sm:text-[36px] lg:text-[44px] max-w-3xl text-chumbo">
              O que guia{" "}
              <strong className="font-bold">
                cada decisão<span className="text-verde">.</span>
              </strong>
            </h2>
          </div>

          <CarrosselCelular classeGrade="sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4" rotuloPontos="Ir para o valor">
            {VALORES.map((v, i) => {
              const t = TEMAS_VALOR[i % TEMAS_VALOR.length];
              return (
                <AnimateOnScroll key={v.nome} delay={(i % 4) * 80} className="h-full">
                  <div
                    className={`flex h-full min-h-[200px] flex-col justify-between gap-8 rounded-md p-7 ${t.card}`}
                  >
                    <span className="font-heading text-sm tracking-[0.2em] opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-2">
                      <p className="font-heading text-xl font-bold text-[#a3c859]">{v.nome}</p>
                      <p className={`text-[15px] italic ${t.frase}`}>
                        &ldquo;{v.frase}&rdquo;
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
            <AnimateOnScroll delay={(VALORES.length % 4) * 80} className="h-full">
              <div className="flex h-full min-h-[200px] flex-col justify-end rounded-md bg-[#333136] p-7">
                <p className="font-heading text-xl leading-snug font-normal text-white">
                  Somos parte do todo e um pouco de{" "}
                  <strong className="font-bold text-[#a3c859]">
                    tudo.
                  </strong>
                </p>
              </div>
            </AnimateOnScroll>
          </CarrosselCelular>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
