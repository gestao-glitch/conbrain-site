import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { LeadForm } from "./lead-form";
import { contato } from "@/content";
import { Carousel } from "./carousel";
import { ProgressBars } from "./progress-bars";

const manrope = Lato({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Lato({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Upper Nest — Seu novo lar em Porto União | Conbrain",
  description:
    "Apartamentos de 1 ou 2 dormitórios + home office, em região privilegiada, com financiamento facilitado pela Caixa.",
};

const AMBIENTES_SLIDES = [
  {
    src: "/images/upper-nest/interiores/cozinha.jpg",
    alt: "Cozinha planejada de um apartamento Upper Nest",
    titulo: "Cozinha planejada",
    legenda: "Acabamento sofisticado e integração com a área social.",
  },
  {
    src: "/images/upper-nest/interiores/home-office.jpg",
    alt: "Home office integrado de um apartamento Upper Nest",
    titulo: "Home office integrado",
    legenda: "Espaço pensado para quem trabalha ou estuda em casa.",
  },
  {
    src: "/images/upper-nest/interiores/sala-estar.jpg",
    alt: "Sala de estar decorada de um apartamento Upper Nest",
    titulo: "Sala de estar",
    legenda: "Ambiente integrado, iluminação planejada e acabamento em madeira.",
  },
  {
    src: "/images/upper-nest/interiores/lavanderia.jpg",
    alt: "Lavanderia planejada de um apartamento Upper Nest",
    titulo: "Lavanderia planejada",
    legenda: "Espaço funcional com bancada e armários sob medida.",
  },
];

const AREA_COMUM_SLIDES = [
  {
    src: "/images/upper-nest/area-comum/academia.jpg",
    alt: "Academia do Upper Nest",
    titulo: "Academia",
    legenda: "Equipamentos completos para treinar sem sair de casa.",
  },
  {
    src: "/images/upper-nest/area-comum/espaco-kids.jpg",
    alt: "Espaço Kids do Upper Nest",
    titulo: "Espaço Kids",
    legenda: "Um cantinho lúdico e seguro para a criançada.",
  },
  {
    src: "/images/upper-nest/area-comum/garden-lounge.jpg",
    alt: "Garden Lounge do Upper Nest",
    titulo: "Living Garden Lounge",
    legenda: "Vista para a cidade, ao ar livre, para relaxar ao fim do dia.",
  },
  {
    src: "/images/upper-nest/area-comum/mini-mercado.jpg",
    alt: "Mini-mercado do Upper Nest",
    titulo: "Mini-Mercado",
    legenda: "Praticidade para o dia a dia, sem sair do condomínio.",
  },
  {
    src: "/images/upper-nest/area-comum/piscina.jpg",
    alt: "Piscina do Upper Nest",
    titulo: "Piscina",
    legenda: "Área aquática coberta, para usar em qualquer estação.",
  },
  {
    src: "/images/upper-nest/area-comum/salao-gourmet.jpg",
    alt: "Salão gourmet do Upper Nest",
    titulo: "Salão Gourmet",
    legenda: "Espaço completo para reunir família e amigos.",
  },
];

const OBRA_SLIDES = [
  {
    src: "/images/upper-nest/obra/vista-geral-set2026.jpg",
    alt: "Vista aérea geral da obra do Upper Nest",
    legenda: "Vista aérea geral da obra, estrutura em avanço.",
  },
  {
    src: "/images/upper-nest/obra/laje-superior-set2026.jpg",
    alt: "Vista aérea da laje superior do Upper Nest em concretagem",
    legenda: "Concretagem da laje superior em andamento.",
  },
  {
    src: "/images/upper-nest/obra/concretagem-equipe-set2026.jpg",
    alt: "Equipe realizando a concretagem da laje do Upper Nest",
    legenda: "Equipe em campo durante a concretagem da laje.",
  },
];

const AMENIDADES = [
  {
    label: "Lavanderia de Autoatendimento",
    icon: (
      <>
        <rect x="4" y="4" width="7" height="9" rx="1" />
        <rect x="13" y="4" width="7" height="9" rx="1" />
        <circle cx="6.5" cy="8.2" r="1" />
        <circle cx="15.5" cy="8.2" r="1" />
        <path d="M5 20h14" />
      </>
    ),
  },
  {
    label: "Aluguel de Bicicletas",
    icon: (
      <>
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M5.5 17.5 9 9h4l4 4.5M9 9l2-3h3" />
      </>
    ),
  },
  {
    label: "Praça Privativa",
    icon: (
      <>
        <path d="M12 3 4 9v11h16V9L12 3Z" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    label: "Espaço Pet",
    icon: (
      <>
        <circle cx="9" cy="7" r="1.6" />
        <circle cx="15" cy="7" r="1.6" />
        <circle cx="5.5" cy="11" r="1.4" />
        <circle cx="18.5" cy="11" r="1.4" />
        <path d="M12 22c-3 0-5-2-5-4.5S9 13 12 13s5 1.9 5 4.5S15 22 12 22Z" />
      </>
    ),
  },
  {
    label: "Espaço Coworking",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M2 20h20M8 12l3-4 2 3 3-5" />
      </>
    ),
  },
  {
    label: "Sala de Jogos",
    icon: (
      <>
        <rect x="3" y="8" width="18" height="9" rx="4" />
        <path d="M8 12h-2m1-1v2M16 12h.01M18.5 10.5h.01" />
      </>
    ),
  },
];

const waHref = (msg: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;

export default function UpperNestLanding() {
  return (
    <div
      className={`${manrope.variable} ${sourceSerif.variable} bg-[#E4DFD1] font-[family-name:var(--font-source-serif)] text-[17px] leading-relaxed text-[#302E29]`}
    >
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-[#302E29]/15 bg-[#E4DFD1]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5 lg:px-7">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/upper-nest/logo/logo-dark.png"
              alt="Upper Nest by BËOS — Conbrain"
              width={900}
              height={441}
              className="h-11 w-auto sm:h-12"
            />
          </Link>
          <ProjectNav atual="upper-nest" tema={{ texto: "#302E29", botaoFundo: "#2E2D2C", botaoTexto: "#F5F2E9", painelFundo: "#E4DFD1", painelTexto: "#302E29", painelBorda: "rgba(48,46,41,0.15)" }} ctaHref="#lead-form" ctaRadius="2px" />
        </div>
      </header>

      {/* Hero */}
      <section className="grid bg-[#4E4C48] md:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[340px] md:min-h-[680px]">
          <Image
            src="/images/upper-nest/fachada-01.png"
            alt="Render noturno da fachada do Upper Nest"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
            style={{ objectPosition: "50% 40%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14181e]/55" />
        </div>
        <div className="flex flex-col justify-center gap-7 px-7 py-16 text-[#EFEAdc] md:py-16 lg:px-10">
          <Image
            src="/images/upper-nest/logo/logo-light-completo-transparente.png"
            alt="Upper Nest by BËOS — Conbrain"
            width={1651}
            height={785}
            className="h-24 w-auto self-start lg:h-28"
          />
          <h1 className="font-[family-name:var(--font-manrope)] text-[40px] leading-[1.06] font-normal tracking-tight text-[#F5F2E9] lg:text-[56px]">
            Um novo jeito de{" "}
            <em className="font-[family-name:var(--font-manrope)] text-[1.15em] font-bold text-[#AE5D32] italic">
              viver
            </em>{" "}
            em Porto União
          </h1>
          <p className="max-w-[46ch] text-[1.14rem] text-[#D8D3C4]">
            Apartamentos de 1 ou 2 dormitórios + home office, em região
            privilegiada, com financiamento facilitado pela Caixa. Vaga de
            garagem inclusa, a poucos minutos da Havan de Porto União e da
            UNC.
          </p>
          <p className="text-[13px] text-[#B7B1A0]">
            <strong className="text-[#F5F2E9]">Financiável até 90%</strong> pela
            Caixa Econômica Federal
          </p>
        </div>
      </section>

      {/* Conceito */}
      <section className="bg-[#4E4C48] py-13 text-[#EFEAdc] lg:py-18">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-7">
          <p className="mb-4.5 font-[family-name:var(--font-manrope)] text-3xl font-normal text-[#F5F2E9] italic lg:text-4xl">
            Simplifique. Conecte-se. Viva.
          </p>
          <h2 className="mb-4.5 font-[family-name:var(--font-manrope)] text-[28px] leading-tight font-normal tracking-tight text-[#F5F2E9] lg:text-[36px]">
            Um espaço{" "}
            <em className="font-bold text-[#AE5D32] not-italic">exclusivo</em> e{" "}
            <em className="font-bold text-[#AE5D32] not-italic">acolhedor</em>,
            pensado para o conforto de seus moradores
          </h2>
          <p className="text-[1.05rem] text-[#C7C1B1]">
            Inspirado no prestigiado bairro{" "}
            <b className="font-bold text-[#F5F2E9]">Upper West Side</b> de
            Nova York, conhecido por seu estilo urbano vivo e acolhedor — o
            Upper Nest une sofisticação e exclusividade em Porto União.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-b border-[#302E29]/15 bg-[#FBF9F4]">
        <div className="grid md:grid-cols-3">
          {[
            {
              titulo: "Financiamento facilitado",
              desc: "Até 90% financiável pela Caixa Econômica Federal, com condições para quem busca o primeiro imóvel.",
              icon: (
                <>
                  <rect x="3" y="10" width="18" height="10" rx="1" />
                  <path d="M7 10V6a5 5 0 0 1 10 0v4" />
                </>
              ),
            },
            {
              titulo: "Região privilegiada",
              desc: "Próximo à Havan de Porto União e à UNC, perto de tudo o que importa no dia a dia.",
              icon: (
                <>
                  <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </>
              ),
            },
            {
              titulo: "Smart Living BËOS",
              desc: "Moradias conectadas a serviços no próprio condomínio, com cada detalhe pensado para descomplicar sua rotina.",
              icon: (
                <>
                  <path d="M4 21V9l8-6 8 6v12" />
                  <path d="M9 21v-6h6v6" />
                </>
              ),
            },
          ].map((item, i, arr) => (
            <div
              key={item.titulo}
              className={`p-8 lg:p-10 ${i < arr.length - 1 ? "border-b border-[#302E29]/15 md:border-r md:border-b-0" : ""}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="mb-3.5 h-[26px] w-[26px] text-[#AE5D32]"
              >
                {item.icon}
              </svg>
              <h3 className="mb-2 font-[family-name:var(--font-manrope)] text-lg font-bold text-[#302E29]">
                {item.titulo}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#655F53]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambientes */}
      <section className="bg-[#FBF9F4] py-16 lg:py-22">
        <div className="mx-auto max-w-6xl px-6 lg:px-7">
          <div className="mb-11 max-w-xl">
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Ambientes
            </span>
            <h2 className="mb-3.5 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal tracking-tight text-[#302E29] lg:text-[44px]">
              Acabamento e conforto em cada detalhe
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] text-[#655F53]">
              Cozinha planejada e home office integrado — pensados para o seu
              dia a dia.
            </p>
          </div>
          <Carousel slides={AMBIENTES_SLIDES} aspect="aspect-[4/3] lg:aspect-[16/9]" />
        </div>
      </section>

      {/* Área comum */}
      <section className="bg-[#4E4C48] py-16 text-[#EFEAdc] lg:py-22">
        <div className="mx-auto max-w-6xl px-6 lg:px-7">
          <div className="mb-11 max-w-xl">
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Área comum
            </span>
            <h2 className="mb-3.5 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal tracking-tight text-[#EFEAdc] lg:text-[44px]">
              Tudo o que o seu lar precisa, sem sair do prédio
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] text-[#C7C1B1]">
              Moradias inteligentes conectadas a serviços para você ganhar mais
              tempo, com cada detalhe pensado para descomplicar sua rotina.
            </p>
          </div>

          <Carousel slides={AREA_COMUM_SLIDES} aspect="aspect-[4/3] lg:aspect-[16/9]" />

          <div className="mt-11 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {AMENIDADES.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3.5 bg-[#4E4C48] px-4 py-6.5 text-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-[26px] w-[26px] text-[#AE5D32]"
                >
                  {item.icon}
                </svg>
                <span className="max-w-[160px] font-[family-name:var(--font-manrope)] text-[15px] leading-snug font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="bg-[#FBF9F4] py-16 lg:py-22">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:px-7">
          <div>
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Localização
            </span>
            <h2 className="mb-3.5 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal tracking-tight text-[#302E29] lg:text-[44px]">
              Perto de tudo o que importa
            </h2>
            <p className="max-w-[52ch] text-[#655F53]">
              Inspirado no equilíbrio entre rotina e bem-estar, o Upper Nest
              fica em um bairro conectado aos principais pontos de Porto
              União.
            </p>
            <ul className="mt-5.5 flex flex-col gap-3.5">
              {[
                <>
                  <b className="font-[family-name:var(--font-manrope)] text-[#302E29]">
                    Havan de Porto União
                  </b>{" "}
                  a poucos minutos
                </>,
                <>
                  <b className="font-[family-name:var(--font-manrope)] text-[#302E29]">
                    UNC
                  </b>{" "}
                  nas proximidades
                </>,
                <>Bairro conectado aos principais pontos da cidade</>,
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-[#655F53]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#AE5D32]"
                  >
                    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#302E29]/15 bg-[#EFEBE1]">
            <iframe
              src="https://www.google.com/maps?q=R.+Venceslau+Braz,+478,+S%C3%A3o+Pedro,+Porto+Uni%C3%A3o,+SC,+89400-000&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Andamento da obra */}
      <section className="bg-[#FBF9F4] py-16 lg:py-22">
        <div className="mx-auto max-w-6xl px-6 lg:px-7">
          <div className="mb-11 max-w-xl">
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Andamento da obra
            </span>
            <h2 className="mb-3.5 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal tracking-tight text-[#302E29] lg:text-[44px]">
              Acompanhe a evolução, etapa por etapa
            </h2>
            <p className="max-w-[56ch] text-[1.02rem] text-[#655F53]">
              Transparência do início ao fim — veja como está o progresso da
              construção do Upper Nest.
            </p>
          </div>

          <ProgressBars />
          <Carousel slides={OBRA_SLIDES} aspect="aspect-[4/3] lg:aspect-[16/9]" />

          <p className="mt-7 text-center font-[family-name:var(--font-manrope)] text-[13px] text-[#655F53]">
            Fotos e percentuais atualizados periodicamente conforme o avanço
            da obra.
          </p>
        </div>
      </section>

      {/* Financiamento Caixa */}
      <section className="bg-[#E9D8C9] py-16 lg:py-22">
        <div className="mx-auto max-w-6xl px-6 lg:px-7">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#7C3F1E] uppercase">
              Financiamento
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal tracking-tight text-[#302E29] lg:text-[44px]">
              Até <span className="font-bold text-[#7C3F1E]">90% financiável</span> pela
              Caixa Econômica Federal
            </h2>
            <p className="mx-auto max-w-[52ch] text-[1.02rem] text-[#4E4C48]">
              Condições facilitadas para quem busca o primeiro imóvel, com
              parcelas que cabem no bolso e a possibilidade de usar o FGTS na
              entrada.
            </p>
          </div>

          <div className="mt-11 grid gap-px overflow-hidden rounded-md border border-[#302E29]/10 bg-[#302E29]/10 sm:grid-cols-3">
            {[
              {
                titulo: "Até 90% financiado",
                desc: "Menos entrada, mais facilidade para sair do aluguel.",
              },
              {
                titulo: "Use seu FGTS",
                desc: "Abata parte da entrada ou das parcelas com o saldo do FGTS.",
              },
              {
                titulo: "Parcelas facilitadas",
                desc: "Condições pensadas para caber no orçamento de quem busca o primeiro imóvel.",
              },
            ].map((item) => (
              <div key={item.titulo} className="bg-[#FBF9F4] p-7 text-center">
                <h3 className="mb-2 font-[family-name:var(--font-manrope)] text-base font-bold text-[#302E29]">
                  {item.titulo}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#655F53]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#AE5D32] px-7 py-3.5 font-[family-name:var(--font-manrope)] text-[15px] font-bold text-white transition-colors hover:bg-[#7C3F1E]"
            >
              Quero simular meu financiamento
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA final / formulário */}
      <section id="lead-form" className="bg-[#2E2D2C] py-16 text-[#F5F2E9] lg:py-22">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-7">
          <div>
            <span className="mb-3 block font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Fale com a gente
            </span>
            <h2 className="mb-4 font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal lg:text-[44px]">
              Pronto para conhecer seu novo lar?
            </h2>
            <p className="mb-5.5 max-w-[48ch] text-[#CFC9B9]">
              Preencha seus dados e um consultor entra em contato para
              simular seu financiamento e agendar uma visita ao decorado.
            </p>
            <p className="text-[13px] text-[#B7B1A0]">
              <strong className="text-[#F5F2E9]">Financiável até 90%</strong>{" "}
              pela Caixa Econômica Federal
            </p>
            <a
              href={waHref("Olá! Tenho interesse no Upper Nest e gostaria de mais informações.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4.5 inline-flex items-center rounded-sm border border-[#F5F2E9]/40 px-6 py-3.5 font-[family-name:var(--font-manrope)] text-[15px] font-bold transition-colors hover:border-[#F5F2E9]"
            >
              Prefiro falar por WhatsApp &rarr;
            </a>
          </div>

          <div className="rounded-md bg-[#FBF9F4] p-7 text-[#302E29]">
            <h3 className="mb-1 text-lg">Quero simular meu financiamento</h3>
            <p className="mb-5 font-[family-name:var(--font-manrope)] text-[13.5px] text-[#655F53]">
              Resposta em até 1 dia útil.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Conheça também */}
      <section className="bg-[#E4DFD1] py-16 lg:py-22">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:px-7">
          <div className="flex flex-col gap-3">
            <span className="font-[family-name:var(--font-manrope)] text-xs font-bold tracking-[0.25em] text-[#AE5D32] uppercase">
              Conheça também
            </span>
            <h2 className="font-[family-name:var(--font-manrope)] text-[30px] leading-[1.12] font-normal text-[#302E29] lg:text-[44px]">
              Outros empreendimentos da Conbrain.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                slug: "beos-grand-central",
                nome: "Bëos Grand Central",
                status: "Em obras · Últimas unidades",
                foto: "/images/beos/fachada-noturna.jpg",
              },
              {
                slug: "monverdant",
                nome: "Mon'Verdant",
                status: "Em obras · Últimas unidades",
                foto: "/images/monverdant/fachada-02.webp",
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-md bg-[#FBF9F4] transition-transform duration-300 hover:-translate-y-1"
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
                    <span className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-[#302E29]">
                      {p.nome}
                    </span>
                    <span className="font-[family-name:var(--font-manrope)] text-xs tracking-[0.12em] text-[#AE5D32] uppercase">
                      {p.status}
                    </span>
                  </div>
                  <span className="text-xl text-[#302E29] transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#4E4C48] px-6 pt-11 pb-8 text-[#B7B1A0] lg:px-7">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6.5">
            <Image
              src="/images/upper-nest/logo/logo-light-completo-transparente.png"
              alt="Upper Nest by BËOS — Conbrain"
              width={1651}
              height={785}
              className="h-14 w-auto self-start"
            />
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-manrope)] text-[13.5px] font-bold text-[#EFEAdc]"
            >
              Falar com um consultor &rarr;
            </a>
          </div>
          <div className="mb-3.5 flex flex-wrap gap-x-4.5 gap-y-1.5 font-[family-name:var(--font-manrope)] text-[13px] text-[#D8D3C4]">
            <span>
              {contato.endereco_linha1} — {contato.endereco_linha2}
            </span>
            <span>{contato.telefone}</span>
            <span>comercial@conbrain.com.br</span>
          </div>
          <p className="font-[family-name:var(--font-manrope)] text-xs leading-relaxed">
            Upper Nest é um empreendimento Conbrain. Imagens meramente
            ilustrativas, sujeitas a alterações. Condições de financiamento
            sujeitas à análise e aprovação da instituição financeira.
            Consulte um consultor de vendas para mais informações.
          </p>
          <p className="mt-2 font-[family-name:var(--font-manrope)] text-xs">
            Incorporadora Conbrain LTDA · CNPJ 36.325.713/0001-72
          </p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={waHref("Olá! Tenho interesse no Upper Nest.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#AE5D32] text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6.5 w-6.5">
          <path d="M20.5 3.5A10.6 10.6 0 0 0 12.1 0C6 0 1 5 1 11.2c0 2 .5 3.9 1.5 5.6L1 24l7.4-1.9a11 11 0 0 0 3.8.7c6.1 0 11-5 11-11.2 0-3-1.2-5.8-3.3-7.9ZM12.1 20.5c-1.2 0-2.5-.3-3.5-.9l-.3-.1-3.7 1 1-3.6-.2-.3a9.3 9.3 0 0 1-1.4-4.9c0-5.1 4.2-9.3 9.4-9.3a9.3 9.3 0 0 1 6.6 2.8 9.1 9.1 0 0 1 2.7 6.5c0 5.1-4.2 9.3-9.3 9.3Zm5.1-6.9c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
    </div>
  );
}
