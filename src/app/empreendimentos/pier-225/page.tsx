import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contato } from "@/content";
import { VipForm } from "./vip-form";

const jost = Lato({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const sourceSans = Lato({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Pier 225 | Conbrain",
  description:
    "O primeiro hub corporativo de Porto União. Negócios, saúde e bem-estar reunidos em 21 pavimentos no centro da cidade.",
};

const waHref = (msg: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;

const NUMEROS = [
  { valor: "21", label: "pavimentos" },
  { valor: "124", label: "vagas rotativas e privativas" },
  { valor: "3", label: "elevadores" },
  { valor: "40 m²", label: "salas a partir de, integráveis" },
];

const PUBLICOS = [
  {
    titulo: "Profissionais da saúde",
    desc: "Os 6 primeiros pavimentos são exclusivos para a saúde, com infraestrutura para consultórios e hospitais a menos de 5 minutos.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9A5A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v6a4 4 0 0 0 8 0V3" />
        <path d="M9 13v2a5 5 0 0 0 10 0v-2" />
        <circle cx="19" cy="11" r="2" />
      </svg>
    ),
  },
  {
    titulo: "Empresas e escritórios",
    desc: "Salas a partir de 40 m² que podem ser integradas, ou um andar inteiro para uma operação sob medida.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9A5A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path d="M8 7V4h8v3" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
  {
    titulo: "Investidores",
    desc: "Localização central, um conceito inédito na cidade e unidades flexíveis que atendem a diferentes perfis de ocupação.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9A5A2E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <path d="M5 20V11" />
        <path d="M10 20V7" />
        <path d="M15 20v-6" />
        <path d="M20 20V4" />
      </svg>
    ),
  },
];

const SERVICOS = [
  "Coworking",
  "Academia com vestiários",
  "Espaço de podcast e reunião",
  "Living externo",
  "Mini-mercado",
  "Refeitório com copa",
];

export default function Pier225Landing() {
  return (
    <div
      className={`${jost.variable} ${sourceSans.variable} bg-[#EAE5E1] font-[family-name:var(--font-source-sans)] text-[#221A15]`}
    >
      {/* Hero */}
      <section className="relative flex flex-col bg-[#221A15] text-[#F5F2EE]">
        <div className="absolute inset-0">
          <Image
            src="/images/pier225/hero-fachada-sem-texto.jpg"
            alt="Detalhe da fachada do Pier 225 ao pôr do sol, com o rio ao fundo"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            priority
          />
          <div className="absolute inset-0 bg-[#18120E]/62" />
        </div>
        <header className="relative flex items-center justify-between gap-3 px-5 py-8 sm:px-8 lg:px-24">
          <div className="flex items-center gap-2 font-[family-name:var(--font-jost)] sm:gap-3.5">
            <div className="flex flex-col gap-0.5">
              <span className="text-xl leading-none font-light tracking-wide sm:text-3xl">
                PIER
              </span>
              <span className="text-[6px] tracking-[1px] sm:text-[9px] sm:tracking-[2px]">
                BUSINESS &amp; CARE
              </span>
            </div>
            <span className="h-7 w-px bg-[#F5F2EE]/60 sm:h-10" />
            <span className="border border-[#F5F2EE]/70 px-1.5 py-1 text-xl leading-none font-light sm:px-2.5 sm:text-3xl">
              225
            </span>
          </div>
          <ProjectNav atual="pier-225" tema={{ texto: "#F5F2EE", botaoFundo: "#9A5A2E", botaoTexto: "#FFFFFF", painelFundo: "#221A15", painelTexto: "#F5F2EE", painelBorda: "rgba(255,255,255,0.15)" }} ctaHref="#cadastro" ctaRadius="0px" />
        </header>
        <div className="relative flex flex-grow flex-col justify-center gap-8 px-8 py-16 sm:max-w-xl lg:max-w-3xl lg:px-24 lg:py-24">
          <div className="flex items-center gap-3.5 font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#C5824B]">
            <span className="h-px w-12 bg-[#C5824B]" />
            <span>PRÉ-LANÇAMENTO · EM BREVE</span>
          </div>
          <h1 className="font-[family-name:var(--font-jost)] text-4xl leading-[1.05] font-normal tracking-tight lg:text-[76px]">
            O primeiro hub corporativo de Porto União.
          </h1>
          <p className="max-w-[600px] text-lg leading-relaxed text-[#E4DDD6] lg:text-xl">
            Negócios, saúde e bem-estar reunidos em 21 pavimentos no centro
            da cidade. Cadastre-se e receba as novidades antes de todo
            mundo.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cadastro"
              className="bg-[#9A5A2E] px-9 py-5 font-[family-name:var(--font-jost)] text-base font-bold tracking-wide text-white"
            >
              Quero ser avisado primeiro
            </a>
            <a
              href={waHref("Olá! Tenho interesse no Pier 225.")}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#F5F2EE]/50 px-6 py-5 font-[family-name:var(--font-jost)] text-base"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Conceito */}
      <section className="grid grid-cols-1 gap-12 px-8 py-16 sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-24 lg:py-24">
        <div className="flex flex-col gap-7">
          <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#9A5A2E]">
            O CONCEITO
          </span>
          <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[48px]">
            Mais que um prédio de salas. Um ponto de encontro.
          </h2>
          <p className="text-lg leading-relaxed text-[#4F463F]">
            Inspirado na tradição portuária de Porto União e nos grandes
            piers de Nova York, como o Pier 55, o Pier 225 nasce para
            conectar negócios, pessoas e cidade.
          </p>
          <p className="text-lg leading-relaxed text-[#4F463F]">
            Uma arquitetura biofílica que traz a natureza para dentro da
            rotina profissional: trabalho, conexão, bem-estar e convivência
            no mesmo endereço.
          </p>
        </div>
        <div className="relative h-[280px] overflow-hidden sm:h-[380px] lg:h-[520px]">
          <Image
            src="/images/pier225/praca-privativa.jpg"
            alt="Praça privativa com deck de madeira, vegetação e área de convivência"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Números */}
      <section className="grid grid-cols-1 bg-[#221A15] text-[#F5F2EE] sm:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[520px]">
          <Image
            src="/images/pier225/torre.jpg"
            alt="Torre do Pier 225 com 21 pavimentos às margens do rio"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-12 px-8 py-16 lg:px-24 lg:py-24">
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#C5824B]">
              EM NÚMEROS
            </span>
            <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.15] font-normal lg:text-[44px]">
              Estrutura para operar com excelência.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {NUMEROS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 border-t border-[#F5F2EE]/25 pt-5"
              >
                <span className="font-[family-name:var(--font-jost)] text-6xl leading-none font-light text-[#C5824B]">
                  {item.valor}
                </span>
                <span className="text-lg text-[#D9D1C9]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="flex flex-col gap-14 px-8 py-16 lg:px-24 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#9A5A2E]">
              PARA QUEM É
            </span>
            <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[48px]">
              Pensado para quem faz acontecer.
            </h2>
          </div>
          <a
            href="#cadastro"
            className="inline-flex items-center bg-[#9A5A2E] px-8 py-4.5 font-[family-name:var(--font-jost)] text-base font-bold whitespace-nowrap text-white"
          >
            Fazer meu cadastro
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PUBLICOS.map((item) => (
            <article
              key={item.titulo}
              className="flex flex-col gap-5 bg-[#F5F2EE] px-10 py-11"
            >
              {item.icon}
              <h3 className="font-[family-name:var(--font-jost)] text-2xl font-bold">
                {item.titulo}
              </h3>
              <p className="text-lg leading-relaxed text-[#4F463F]">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Experiência */}
      <section className="flex flex-col gap-12 bg-[#F5F2EE] px-8 py-16 lg:px-24 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-end lg:gap-24">
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#9A5A2E]">
              EXPERIÊNCIA
            </span>
            <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[48px]">
              Um hub de serviços completo.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#4F463F]">
            Tudo o que a sua rotina precisa, sem sair do prédio. Uma prévia
            do que vem por aí:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <figure className="flex flex-col gap-3.5">
            <div className="relative h-[280px] sm:h-[400px]">
              <Image
                src="/images/pier225/auditorio.jpg"
                alt="Auditório com poltronas verdes e iluminação indireta"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-[family-name:var(--font-jost)] text-[17px] tracking-wide">
              Auditório
            </figcaption>
          </figure>
          <figure className="flex flex-col gap-3.5">
            <div className="relative h-[280px] sm:h-[400px]">
              <Image
                src="/images/pier225/quiosque-cafe.jpg"
                alt="Quiosque de café com mesas e jardim vertical"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-[family-name:var(--font-jost)] text-[17px] tracking-wide">
              Quiosque de café
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {SERVICOS.map((s) => (
            <span
              key={s}
              className="border border-[#C9BFB6] px-5 py-2.5 text-[17px]"
            >
              {s}
            </span>
          ))}
          <span className="font-[family-name:var(--font-jost)] px-2 py-2.5 text-[17px] text-[#9A5A2E]">
            e mais a revelar no lançamento
          </span>
        </div>
      </section>

      {/* Localização */}
      <section className="grid grid-cols-1 gap-12 px-8 py-16 sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-24 lg:py-24">
        <div className="relative h-[280px] sm:h-[380px] lg:h-[480px]">
          <Image
            src="/images/pier225/entrada-noturna.jpg"
            alt="Entrada do Pier 225 iluminada ao anoitecer"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-7">
          <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#9A5A2E]">
            LOCALIZAÇÃO
          </span>
          <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[48px]">
            No coração de Porto União.
          </h2>
          <p className="text-lg leading-relaxed text-[#4F463F]">
            Entre a Avenida João Pessoa, a Rua Coronel Amazonas e a Rua
            Prudente de Morais, perto de escolas e com hospitais a menos de
            5 minutos.
          </p>
          <div className="flex gap-10 border-t border-[#C9BFB6] pt-3">
            <div className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-jost)] text-3xl">
                &lt; 5 min
              </span>
              <span className="text-base text-[#5E544C]">dos hospitais</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-jost)] text-3xl">
                Centro
              </span>
              <span className="text-base text-[#5E544C]">
                de Porto União
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cadastro */}
      <section
        id="cadastro"
        className="grid grid-cols-1 gap-12 bg-[#221A15] px-8 py-16 text-[#F5F2EE] sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-24 lg:py-24"
      >
        <div className="flex flex-col gap-7">
          <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#C5824B]">
            CADASTRO
          </span>
          <h2 className="font-[family-name:var(--font-jost)] text-5xl leading-[1.08] font-normal lg:text-[60px]">
            Seja o primeiro a saber.
          </h2>
          <p className="text-xl leading-relaxed text-[#D9D1C9]">
            Quem se cadastra recebe em primeira mão as plantas, as
            condições de lançamento e o convite para conhecer o projeto de
            perto.
          </p>
          <div className="flex flex-col gap-3.5 text-lg text-[#D9D1C9]">
            <span className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#C5824B]" />
              Acesso antecipado às informações
            </span>
            <span className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#C5824B]" />
              Atendimento prioritário da equipe comercial
            </span>
            <span className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#C5824B]" />
              Sem compromisso
            </span>
          </div>
        </div>
        <VipForm />
      </section>

      {/* Conheça também */}
      <section className="px-8 py-16 lg:px-24 lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-[family-name:var(--font-jost)] text-sm tracking-[3px] text-[#9A5A2E]">
              CONHEÇA TAMBÉM
            </span>
            <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[44px]">
              Outros empreendimentos da Conbrain.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                slug: "upper-nest",
                nome: "Upper Nest",
                status: "Em obras · Financiável",
                foto: "/images/upper-nest/fachada-noturna.jpg",
              },
              {
                slug: "beos-grand-central",
                nome: "Bëos Grand Central",
                status: "Em obras · Últimas unidades",
                foto: "/images/beos/fachada-noturna.jpg",
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={p.foto}
                    alt={`Fachada do ${p.nome}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-7 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-jost)] text-2xl font-bold">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#9A5A2E] uppercase">
                      {p.status}
                    </span>
                  </div>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conbrain + rodapé */}
      <footer className="flex flex-col gap-10 px-8 pt-18 pb-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-3.5">
            <span className="font-[family-name:var(--font-jost)] text-[13px] tracking-[3px] text-[#5E544C]">
              REALIZAÇÃO
            </span>
            <Image
              src="/images/logo/conbrain-logo.png"
              alt="Conbrain Incorporadora e Construtora"
              width={1600}
              height={800}
              className="-ml-2 h-20 w-auto self-start"
            />
            <p className="text-base leading-relaxed text-[#4F463F]">
              Empreendimentos guiados por relevância contextual, curadoria
              de produto e viabilidade estratégica.
            </p>
            <p className="text-sm leading-relaxed text-[#5E544C]">
              Incorporadora Conbrain LTDA · CNPJ 36.325.713/0001-72
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-[family-name:var(--font-jost)] text-[13px] tracking-[3px] text-[#5E544C]">
              CONTATO
            </span>
            <a
              href={waHref("Olá! Tenho interesse no Pier 225.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              WhatsApp {contato.telefone}
            </a>
            <a
              href={`https://instagram.com/${contato.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Instagram @{contato.instagram}
            </a>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="font-[family-name:var(--font-jost)] text-[13px] tracking-[3px] text-[#5E544C]">
              INFORMAÇÕES
            </span>
            <a href="/politica-de-privacidade" className="text-lg">
              Política de Privacidade
            </a>
            <Link
              href="/"
              className="text-sm tracking-widest text-[#5E544C] uppercase hover:text-[#221A15]"
            >
              &larr; Voltar para a Conbrain
            </Link>
          </div>
        </div>
        <p className="border-t border-[#C9BFB6] pt-6 text-[13px] leading-relaxed text-[#5E544C]">
          Empreendimento em fase de elaboração preliminar, sujeito a
          alterações de projeto. Imagens meramente ilustrativas. Este
          material tem caráter informativo e não constitui oferta de venda.
          A comercialização terá início somente após o registro da
          incorporação no Cartório de Registro de Imóveis, nos termos da
          Lei nº 4.591/64.
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
