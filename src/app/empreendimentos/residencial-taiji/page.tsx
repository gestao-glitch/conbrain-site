import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { RodapeEmpreendimento } from "@/components/rodape-empreendimento";
import { contato } from "@/content";
import { AreaComumCarousel, type Slide } from "./area-comum-carousel";

const jost = Lato({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dmSans = Lato({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  alternates: { canonical: "/empreendimentos/residencial-taiji" },
  title: "Residencial Taiji | Conbrain",
  description:
    "O equilíbrio entre a calma e o movimento. Oito apartamentos de 170 m², um por andar, no Centro de Porto União (SC) — 100% vendido e entregue.",
};

const waHref = (msg: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;

const NUMEROS = [
  { valor: "170", sufixo: " m²", label: "de área por apartamento" },
  { valor: "3", label: "suítes, sendo uma master com closet" },
  { valor: "2", label: "vagas de garagem" },
  { valor: "2024", label: "ano de entrega" },
  { valor: "8", label: "apartamentos no total" },
  { valor: "10", label: "pavimentos" },
];

const TIPOLOGIA = [
  {
    titulo: "Área íntima",
    desc: "Suíte master com closet e mais duas suítes.",
  },
  {
    titulo: "Área social",
    desc: "Hall de entrada, sala de estar, sala de jantar, varanda gourmet com churrasqueira e lavabo social.",
  },
  {
    titulo: "Área de serviço",
    desc: "Cozinha de preparo, cozinha integrada e lavanderia com acesso independente.",
  },
];

const AREA_COMUM: Slide[] = [
  { src: "/images/taiji/hall-entrada-hd.jpg", caption: "Hall de entrada", alt: "Hall de entrada com poltronas e pé-direito duplo" },
  { src: "/images/taiji/salao-festas-hd.jpg", caption: "Salão de festas", alt: "Salão de festas com mesas e bar" },
  { src: "/images/taiji/bar-churrasqueira-hd.jpg", caption: "Salão de festas", alt: "Bar com banquetas no salão de festas" },
  { src: "/images/taiji/cozinha-salao-hd.jpg", caption: "Salão de festas", alt: "Cozinha do salão de festas com marcenaria azul e bancada em granito" },
  { src: "/images/taiji/espaco-zen-hd.jpg", caption: "Espaço zen", alt: "Espaço zen com tapetes de yoga e jardim interno" },
  { src: "/images/taiji/cobertura-jardim-hd.jpg", caption: "Cobertura jardim", alt: "Cobertura jardim com cadeiras e vista para os morros" },
  { src: "/images/taiji/vista-cobertura-hd.jpg", caption: "Cobertura jardim", alt: "Terraço da cobertura com jardineiras e vista para o rio" },
];

const PROXIMOS = [
  {
    slug: "upper-nest",
    nome: "Upper Nest",
    status: "Em obras · Financiável",
    foto: "/images/upper-nest/fachada-noturna.jpg",
  },
  {
    slug: "beos-grand-central",
    nome: "BËOS Grand Central",
    status: "Em obras · Últimas unidades",
    foto: "/images/beos/fachada-noturna-hd.jpg",
  },
  {
    slug: "monverdant",
    nome: "Mon'Verdant",
    status: "Em obras · Últimas unidades",
    foto: "/images/monverdant/fachada-mv.jpg",
  },
] as const;

export default function ResidencialTaijiLanding() {
  return (
    <div
      className={`${jost.variable} ${dmSans.variable} bg-[#F4F1EB] font-[family-name:var(--font-dm-sans)] text-[#1F1E1C]`}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1F1E1C]">
        <div className="relative min-h-[680px] lg:min-h-[900px]">
          <Image
            src="/images/taiji/hero-vista-aerea.jpg"
            alt="Vista aérea do Residencial Taiji com o Rio Iguaçu ao fundo"
            fill
            // Abertura alta no celular: a imagem é cortada nas laterais.
            sizes="(max-width: 768px) 300vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "60% 50%" }}
            priority
          />
          <video
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            poster="/videos/hero-home-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            {/* No celular, versão recortada na vertical (mesma nitidez, 3 MB em vez de 4,9 MB). */}
            <source src="/videos/hero-home-celular-hd.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/videos/hero-home.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#141311]/62 via-[#141311]/12 to-[#141311]/86" />
          <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 py-8 lg:px-[120px]">
            <Image
              src="/images/taiji/logo-white.png"
              alt="Taiji Residencial"
              width={800}
              height={280}
              className="h-12 w-auto self-start lg:h-16"
            />
            <ProjectNav atual="residencial-taiji" tema={{ texto: "#F4F1EB", botaoFundo: "#D8952B", botaoTexto: "#1F1E1C", painelFundo: "#2E2C29", painelTexto: "#F4F1EB", painelBorda: "rgba(255,255,255,0.15)" }} ctaHref={waHref("Olá! Vi o Residencial Taiji e gostaria de conhecer os próximos empreendimentos da Conbrain.")} />
          </header>
          <div className="absolute right-6 bottom-8 left-6 flex max-w-3xl flex-col items-start gap-4 lg:right-auto lg:bottom-[110px] lg:left-[120px] lg:gap-7">
            <div className="flex w-fit items-center gap-2.5 rounded-full border border-[#D8952B] bg-[#141311]/55 px-4 py-2 text-xs font-normal tracking-[0.1em] whitespace-nowrap text-[#F4F1EB] uppercase sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm sm:tracking-[0.18em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#D8952B]" />
              <span>Entregue em 2024 · 100% vendido</span>
            </div>
            <h1 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.08] font-normal tracking-tight text-white lg:text-[76px] lg:leading-[1.05]">
              O equilíbrio entre a calma e o movimento.
            </h1>
            <p className="max-w-[680px] text-base leading-relaxed text-[#E9E4DA] lg:text-xl">
              Residencial Taiji: oito apartamentos de 170&nbsp;m², um por andar,
              no Centro de Porto União (SC).
            </p>
          </div>
        </div>
      </section>

      {/* Conceito */}
      <section id="conceito" className="flex flex-col items-center gap-16 px-6 py-16 sm:flex-row sm:items-center lg:gap-24 lg:px-[120px] lg:py-24">
        <div className="flex flex-1 flex-col gap-7">
          <span className="text-[13px] font-bold tracking-[0.24em] text-[#8A5A0E] uppercase">
            O conceito
          </span>
          <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[52px]">
            Inspirado na filosofia oriental da dualidade que equilibra a
            vida.
          </h2>
          <p className="max-w-[640px] text-lg leading-relaxed text-[#4F4B45]">
            De um lado, a harmonia, a suavidade e o bem-estar trazidos pela
            arquitetura. Do outro, o dinamismo e a comodidade oferecidos
            pela tecnologia. O Taiji foi pensado para que esses dois lados
            convivam no dia a dia.
          </p>
          <div className="font-[family-name:var(--font-jost)] flex items-center gap-3 text-[15px] font-bold tracking-[0.2em] whitespace-nowrap uppercase sm:gap-5 sm:text-lg sm:tracking-[0.28em]">
            <span>Modernidade</span>
            <span className="h-px w-8 shrink-0 bg-[#D8952B] sm:w-10" />
            <span>Bem-estar</span>
          </div>
        </div>
        <div className="relative shrink-0">
          <div className="absolute -top-8 -left-8 hidden h-[300px] w-[300px] rounded-full border-2 border-r-transparent border-b-transparent border-[#D8952B] sm:block" />
          <div className="relative h-[360px] w-[300px] overflow-hidden rounded-sm sm:h-[520px] sm:w-[420px]">
            <Image
              src="/images/taiji/hall-lustre.jpg"
              alt="Lustre de anéis iluminados no pé-direito duplo do hall"
              fill
              sizes="(max-width: 640px) 300px, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="grid grid-cols-2 gap-8 bg-[#2E2C29] px-6 py-14 text-[#F4F1EB] sm:grid-cols-3 lg:grid-cols-6 lg:px-[120px]">
        {NUMEROS.map((n) => (
          <div key={n.label} className="flex flex-col gap-2.5">
            <div className="font-[family-name:var(--font-jost)] text-5xl leading-none font-light text-[#E3A443] lg:text-6xl">
              {n.valor}
              {n.sufixo && <span className="text-2xl">{n.sufixo}</span>}
            </div>
            <div className="text-[15px] leading-tight text-[#CFC9BE]">
              {n.label}
            </div>
          </div>
        ))}
      </section>

      {/* Arquitetura */}
      <section className="flex flex-col gap-12 px-6 py-16 sm:flex-row lg:gap-16 lg:px-[120px] lg:py-24">
        <div className="relative h-[300px] shrink-0 overflow-hidden rounded-sm sm:h-[440px] sm:w-[420px] lg:h-[660px] lg:w-[680px]">
          <Image
            src="/images/taiji/fachada-varandas.jpg"
            alt="Fachada do Taiji com varandas envidraçadas e jardineiras"
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-12">
          <div className="flex flex-col gap-6">
            <span className="text-[13px] font-bold tracking-[0.24em] text-[#8A5A0E] uppercase">
              Arquitetura
            </span>
            <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.15] font-normal lg:text-[44px]">
              Uma fachada que respira.
            </h2>
            <p className="text-lg leading-relaxed text-[#4F4B45]">
              Varandas envidraçadas e jardineiras em todos os pavimentos
              trazem verde para a fachada e luz natural para dentro de cada
              apartamento. Do alto, a vista se abre para a cidade, os
              morros e o rio.
            </p>
          </div>
          <div className="relative h-[220px] w-full max-w-[460px] overflow-hidden rounded-sm sm:h-[320px]">
            <Image
              src="/images/taiji/vista-esquina.jpg"
              alt="Vista aérea do Taiji na esquina, no Centro de Porto União"
              fill
              sizes="(max-width: 640px) 100vw, 460px"
              className="scale-[1.04] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tipologia */}
      <section id="tipologia" className="flex flex-col gap-14 bg-[#E7E2D8] px-6 py-16 lg:px-[120px] lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <span className="text-[13px] font-bold tracking-[0.24em] text-[#8A5A0E] uppercase">
              A tipologia
            </span>
            <h2 className="font-[family-name:var(--font-jost)] max-w-2xl text-3xl leading-[1.12] font-normal lg:text-[48px]">
              170&nbsp;m² com ambientes amplos e layout flexível.
            </h2>
          </div>
          <div className="font-[family-name:var(--font-jost)] shrink-0 text-base font-bold tracking-[0.2em] uppercase lg:text-right">
            Um apartamento por andar
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {TIPOLOGIA.map((t) => (
            <div key={t.titulo} className="flex flex-col gap-3 border-t border-[#B9B0A1] pt-7">
              <div className="font-[family-name:var(--font-jost)] text-2xl font-bold tracking-[0.06em]">
                {t.titulo}
              </div>
              <div className="text-lg leading-relaxed text-[#4F4B45]">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Áreas comuns */}
      <section id="areas" className="px-6 py-16 lg:px-[120px] lg:py-24">
        <AreaComumCarousel slides={AREA_COMUM} />
      </section>

      {/* Localização */}
      <section className="flex flex-col items-center gap-14 bg-[#2E2C29] px-6 py-16 text-[#F4F1EB] sm:flex-row lg:gap-20 lg:px-[120px] lg:py-24">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-sm sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[700px]">
          <Image
            src="/images/taiji/topo-rio.jpg"
            alt="Topo do Taiji com o Rio Iguaçu e a ponte ao fundo"
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <span className="text-[13px] font-bold tracking-[0.24em] text-[#E3A443] uppercase">
            Localização
          </span>
          <h2 className="font-[family-name:var(--font-jost)] text-3xl leading-[1.12] font-normal lg:text-[46px]">
            No Centro de Porto União, com vista para o Rio Iguaçu.
          </h2>
          <p className="text-lg leading-relaxed text-[#CFC9BE]">
            Perto do comércio e dos serviços do centro, e a poucos minutos
            da ponte que liga Porto União a União da Vitória.
          </p>
          <div className="flex flex-col gap-1.5 border-t border-[#55514B] pt-6 text-lg leading-snug">
            <span>{contato.endereco_linha1}</span>
            <span className="text-[#CFC9BE]">{contato.endereco_linha2}</span>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Visconde+de+Guarapuava+110+Porto+Uni%C3%A3o+SC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 self-start rounded-full border border-[#E3A443] px-6 text-base font-bold"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E3A443" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <span>Abrir no Google Maps</span>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden bg-[#E7E2D8] px-6 py-20 lg:px-[120px] lg:py-28">
        <div className="absolute top-[-140px] right-[-180px] hidden h-[420px] w-[420px] rounded-full border-2 border-t-transparent border-r-transparent border-[#D8952B] lg:block" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-[13px] font-bold tracking-[0.24em] text-[#8A5A0E] uppercase">
              Taiji · 100% vendido
            </span>
            <h2 className="font-[family-name:var(--font-jost)] max-w-3xl text-3xl leading-[1.1] font-normal lg:text-[56px]">
              O Taiji já tem todos os moradores.{" "}
              <strong className="font-bold">O próximo pode ser seu.</strong>
            </h2>
            <p className="max-w-[640px] text-lg leading-relaxed text-[#4F4B45]">
              Conheça os projetos que a Conbrain está construindo agora.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PROXIMOS.map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-sm bg-white transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={p.foto}
                    alt={`Fachada do ${p.nome}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-jost)] text-xl font-bold">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#8A5A0E] uppercase">
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={waHref("Olá! Vi o Residencial Taiji e gostaria de conhecer os próximos empreendimentos da Conbrain.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center gap-2.5 rounded-full bg-[#D8952B] px-8.5 text-base font-bold text-[#1F1E1C]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F1E1C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3A8.5 8.5 0 1 1 20.5 11.6z" />
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
            <Link
              href="/#empreendimentos"
              className="flex min-h-14 items-center rounded-full border border-[#1F1E1C] px-7.5 text-base font-bold"
            >
              Ver todos os empreendimentos
            </Link>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <RodapeEmpreendimento
        marca={
          <Image src="/images/taiji/logo-white.png" alt="Residencial Taiji" width={800} height={280} className="h-14 w-auto self-start" />
        }
        frase={"O equilíbrio entre a calma e o movimento."}
        tema={{ fundo: "#1F1E1C", texto: "#CFC9BE", forte: "#F4F1EB", destaque: "#E3A443", borda: "rgba(255,255,255,0.12)" }}
        mensagemWhatsApp={"Olá! Vi o Residencial Taiji e gostaria de conhecer os próximos empreendimentos da Conbrain."}
      />
    </div>
  );
}
