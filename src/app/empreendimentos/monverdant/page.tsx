import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { RodapeEmpreendimento } from "@/components/rodape-empreendimento";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contato } from "@/content";
import { LeadForm } from "./lead-form";
import { Carousel, CarouselSlide } from "./carousel";
import { CarrosselCelular } from "@/components/carrossel-celular";
import { VistaAndar } from "./vista-andar";

const fraunces = Lato({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const workSans = Lato({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  alternates: { canonical: "/empreendimentos/monverdant" },
  title: "Mon'Verdant — Casas Suspensas | Conbrain",
  description:
    "O conforto de uma casa. A liberdade de um apartamento. Vista de 300° das paisagens das Gêmeas do Iguaçu, no centro de Porto União.",
};

const DIFERENCIAIS = [
  {
    titulo: "Luz natural",
    subtitulo: "em todos os ambientes",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    ),
  },
  {
    titulo: "Vista de 300°",
    subtitulo: "das Gêmeas do Iguaçu",
    icon: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    titulo: "Personalizável",
    subtitulo: "conforme seu projeto",
    icon: (
      <>
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </>
    ),
  },
];

const CASAS_SUSPENSAS_ITENS = [
  "3 Suítes",
  "Até 3 vagas de garagem",
  "Vista de 300°",
];

const CASAS_SUSPENSAS_GALERIA = [
  { label: "Sala de estar e jantar integradas", src: "/images/monverdant/interiores/sala-estar-jantar.webp" },
  { label: "Cozinha integrada", src: "/images/monverdant/interiores/cozinha.webp" },
  { label: "Suíte principal", src: "/images/monverdant/interiores/suite-principal.webp" },
  { label: "Quarto", src: "/images/monverdant/interiores/quarto-penteadeira.webp" },
  { label: "Quarto", src: "/images/monverdant/interiores/quarto-ripado.webp" },
  { label: "Banheiro da suíte", src: "/images/monverdant/interiores/banheiro-suite.webp" },
  { label: "Closet", src: "/images/monverdant/interiores/closet.webp" },
  { label: "Área de serviço", src: "/images/monverdant/interiores/lavanderia.webp" },
  { label: "Varanda gourmet", src: "/images/monverdant/interiores/varanda-gourmet.webp" },
  { label: "Banheira de hidromassagem", src: "/images/monverdant/interiores/banheira-hidro.webp" },
];

const PENTHOUSE_GALERIA = [
  { label: "Cozinha da Penthouse", src: "/images/monverdant/penthouse/cozinha.webp" },
  { label: "Cozinha integrada à escada em caracol", src: "/images/monverdant/penthouse/cozinha-escada.webp" },
  { label: "Sala de estar e jantar integradas", src: "/images/monverdant/penthouse/sala-estar-jantar.webp" },
  { label: "Sala de estar com pé-direito duplo", src: "/images/monverdant/penthouse/sala-pe-direito-duplo.webp" },
  { label: "Sala de estar com vista para o lago", src: "/images/monverdant/penthouse/sala-vista-lago.webp" },
  { label: "Sala de jantar com escada em caracol", src: "/images/monverdant/penthouse/jantar-escada-caracol.webp" },
  { label: "Área gourmet no terraço", src: "/images/monverdant/penthouse/area-gourmet-terraco.webp" },
  { label: "Lounge com lareira ao ar livre ao pôr do sol", src: "/images/monverdant/penthouse/lounge-lareira.webp" },
  { label: "Hidromassagem com espreguiçadeiras", src: "/images/monverdant/penthouse/hidro-espreguicadeiras.webp" },
  { label: "Hidromassagem com vista para o pôr do sol", src: "/images/monverdant/penthouse/hidro-por-do-sol.webp" },
];

const AMENIDADES = [
  "Piscina aquecida com raia",
  "Spa Lounge",
  "Sunset Grill",
  "Espaço Fitness",
  "Pool Bar",
  "Praça Privativa",
  "Sala de Jogos",
  "Lounge",
];

const AREA_SOCIAL_GALERIA = [
  { label: "Piscina aquecida com raia", src: "/images/monverdant/area-social/piscina.jpg" },
  { label: "Espaço Fitness", src: "/images/monverdant/area-social/fitness.jpg" },
  { label: "Spa Lounge", src: "/images/monverdant/area-social/spa-lounge.jpg" },
  { label: "Sunset Grill", src: "/images/monverdant/area-social/sunset-grill.jpg" },
  { label: "Pool Bar", src: "/images/monverdant/area-social/pool-bar.jpg" },
  { label: "Praça Privativa", src: "/images/monverdant/area-social/praca-privativa.jpg" },
  { label: "Sala de Jogos", src: "/images/monverdant/area-social/sala-jogos.jpg" },
  { label: "Lounge", src: "/images/monverdant/area-social/lounge.jpg" },
];


const enderecoMaps = encodeURIComponent(
  `${contato.stand_endereco}, ${contato.stand_complemento}`
);

export default function MonVerdantLanding() {
  return (
    <div
      className={`${fraunces.variable} ${workSans.variable} bg-[#FAF7EE] font-[family-name:var(--font-work-sans)] text-[#1E2B17]`}
    >
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-[#1E2B17]/10 bg-[#FAF7EE]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/monverdant/logo-simbolo.png"
              alt="Mon'Verdant"
              width={173}
              height={173}
              className="h-10 w-auto sm:hidden"
            />
            <Image
              src="/images/monverdant/logo-palavra.png"
              alt="Mon'Verdant"
              width={602}
              height={114}
              className="hidden h-9 w-auto sm:block"
            />
          </Link>
          <ProjectNav atual="monverdant" tema={{ texto: "#4A4A3D", botaoFundo: "#1E2B17", botaoTexto: "#FAF7EE", painelFundo: "#FAF7EE", painelTexto: "#1E2B17", painelBorda: "rgba(30,43,23,0.15)" }} ctaHref={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no Mon'Verdant.")}`} />
        </div>
      </header>

      {/* Hero */}
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[45vh] md:min-h-[85vh]">
          <Image
            src="/images/monverdant/fachada-mv.jpg"
            alt="Fachada Mon'Verdant"
            fill
            // O quadro é mais alto que o render e corta as laterais: pede sempre a
            // versão de 2000px, a maior que existe.
            sizes="(max-width: 768px) 100vw, 2000px"
            quality={90}
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-[#FAF7EE] px-6 py-16 md:min-h-[85vh] md:px-12 md:py-0">
          <Image
            src="/images/monverdant/logo-recortado.png"
            alt="Mon'Verdant — Casas Suspensas"
            width={602}
            height={321}
            className="mb-10 hidden h-32 w-auto self-start md:block"
          />
          <span className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#5B6B49]/40 bg-white/60 px-4 py-2 text-xs font-bold tracking-[0.14em] whitespace-nowrap text-[#4A5A3A] uppercase sm:tracking-[0.18em]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#7A8F5C]" />
            Em obras · Últimas unidades
          </span>
          <h1 className="max-w-lg font-[family-name:var(--font-fraunces)] text-[36px] leading-[1.1] font-normal text-[#1E2B17] sm:text-[40px] lg:text-[56px]">
            {/* Cada frase em seu bloco, com quebras equilibradas */}
            <span className="block [text-wrap:balance]">O conforto de uma casa.</span>
            <span className="mt-1 block text-[#5B6B49] italic [text-wrap:balance]">
              A liberdade de um apartamento.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#3F3F33] lg:text-lg">
            Vista de 300° das paisagens das Gêmeas do Iguaçu, no centro de
            Porto União.
          </p>

          <a
            href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent("Olá, tenho interesse no Mon'Verdant.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block w-fit rounded-full bg-[#4A5A3A] px-8 py-3.5 text-xs font-bold tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#3a4830]"
          >
            Quero Conhecer
          </a>
          <a
            href="#vista"
            className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-bold tracking-[0.15em] text-[#4A5A3A] uppercase underline-offset-4 hover:underline"
          >
            Ver a vista do seu andar &darr;
          </a>
        </div>
      </section>

      {/* Sobre + diferenciais */}
      <section id="sobre" className="scroll-mt-20 bg-[#F2EFE1] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#5B6B49] uppercase">
                Sobre o empreendimento
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-[#1E2B17] lg:text-[44px]">
                Harmonia entre urbanidade e natureza
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-base leading-[1.8] text-[#3F3F33] lg:pt-9 lg:text-[17px]">
              <p>
                No centro de Porto União, o Mon&apos;Verdant une a conveniência
                da cidade a uma vista de 300° das Gêmeas do Iguaçu. A
                arquitetura privilegia luz natural, ambientes integrados e uma
                estética elegante e atemporal.
              </p>
              <p>
                Mais do que metragem, foi desenhado para quem busca uma nova
                fase de vida: conforto, privacidade e uma rotina mais leve, sem
                abrir mão da localização.
              </p>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg bg-[#1E2B17]/10 sm:grid-cols-3">
            {DIFERENCIAIS.map((d) => (
              <div
                key={d.titulo}
                className="flex items-center gap-4 bg-[#F2EFE1] px-2 py-5 sm:flex-col sm:items-start sm:px-8 sm:py-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 shrink-0 text-[#5B6B49]"
                >
                  {d.icon}
                </svg>
                <div>
                  <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#1E2B17]">
                    {d.titulo}
                  </p>
                  <p className="text-[15px] text-[#4A4A3D]">{d.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A vista do seu andar (com a localização) */}
      <section id="vista" className="scroll-mt-20 bg-[#4A5A3A] px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#C7D1B3] uppercase">
                Vista 360° · Gêmeas do Iguaçu
              </p>
              <h2 className="font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.08] font-normal lg:text-[56px]">
                A vista do <em className="text-[#C7D1B3]">seu</em> andar.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-white/80 lg:text-lg">
              Antes mesmo de visitar, escolha a altura e veja, em 360°, a
              paisagem que vai estar na sua janela.
            </p>
          </div>

          <VistaAndar />

          <div
            id="localizacao"
            className="grid scroll-mt-24 gap-6 border-t border-white/15 pt-12 lg:grid-cols-2 lg:items-end lg:gap-16"
          >
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#C7D1B3] uppercase">
                Localização
              </p>
              <h3 className="font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.15] font-normal lg:text-[34px]">
                No centro de Porto União
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Perto do que a cidade tem de melhor, mas afastado da correria:
                conveniência urbana e tranquilidade na mesma janela.
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border border-white/15 p-5">
              <p className="text-sm font-bold">Stand comercial Conbrain</p>
              <p className="text-sm text-white/70">
                {contato.stand_endereco} · {contato.stand_complemento}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${enderecoMaps}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-fit text-xs font-bold tracking-widest text-[#C7D1B3] uppercase underline underline-offset-4"
              >
                Abrir no Google Maps
              </a>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-lg border border-white/15 lg:col-span-2 lg:h-[420px]">
              <iframe
                title={`Mapa — ${contato.stand_endereco}, ${contato.stand_complemento}`}
                src={`https://www.google.com/maps?q=${enderecoMaps}&output=embed`}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casas Suspensas */}
      <section
        id="casas-suspensas"
        className="scroll-mt-20 bg-[#FAF7EE] px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#5B6B49] uppercase">
            Casas Suspensas
          </p>
          <h2 className="mb-8 max-w-xl font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-[#1E2B17] lg:text-[44px]">
            Apartamentos que passam a sensação de viver em uma casa
          </h2>
          <div className="mb-10 flex flex-wrap gap-3">
            {CASAS_SUSPENSAS_ITENS.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#F2EFE1] px-4 py-2 text-xs tracking-wider text-[#4A4A3D] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
          <Carousel>
            {CASAS_SUSPENSAS_GALERIA.map((foto) => (
              <CarouselSlide key={foto.src} label={foto.label} src={foto.src} />
            ))}
          </Carousel>
          <p className="mt-4 text-base text-[#4A4A3D]">
            Com uma vista única das paisagens das Gêmeas do Iguaçu
          </p>
        </div>
      </section>

      {/* Penthouses */}
      <section
        id="penthouses"
        className="scroll-mt-20 bg-[#4A5A3A] px-6 py-20 text-white lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#C7D1B3] uppercase">
                Ainda mais exclusividade
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-white lg:text-[44px]">
                Apenas 2 unidades de Penthouse
              </h2>
              <p className="text-base leading-[1.8] text-white/80 lg:text-[17px]">
                O nível máximo de exclusividade dentro do próprio
                Mon&apos;Verdant: um produto premium dentro de um produto já
                premium, para quem busca uma residência verdadeiramente
                diferenciada.
              </p>
              <a
                href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent("Olá, quero saber mais sobre as Penthouses do Mon'Verdant.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-xs font-bold tracking-widest text-[#C7D1B3] uppercase underline underline-offset-4"
              >
                Saiba mais sobre as Penthouses
              </a>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#C7D1B3] uppercase">
                Só para você
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-white lg:text-[44px]">
                Uma área de lazer só sua
              </h2>
              <p className="text-base leading-[1.8] text-white/80 lg:text-[17px]">
                O andar de cima da Penthouse é dedicado inteiramente ao seu
                lazer particular — um espaço privativo, longe de qualquer
                área comum, para receber quem você quiser ou simplesmente
                aproveitar sozinho. Mais um nível de exclusividade que só as
                unidades de Penthouse do Mon&apos;Verdant oferecem.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Carousel escuro>
              {PENTHOUSE_GALERIA.map((foto) => (
                <CarouselSlide key={foto.src} label={foto.label} src={foto.src} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Área Social */}
      <section
        id="area-social"
        className="scroll-mt-20 bg-[#FAF7EE] px-6 py-20 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#5B6B49] uppercase">
            Áreas sociais
          </p>
          <h2 className="mb-8 max-w-xl font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-[#1E2B17] lg:text-[44px]">
            Uma área social feita sob medida para o seu conforto
          </h2>

          <div className="mb-10 flex flex-wrap gap-2">
            {AMENIDADES.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#1E2B17]/10 px-4 py-2 text-xs tracking-wider text-[#4A4A3D] uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          <CarrosselCelular classeGrade="sm:grid sm:grid-cols-4 sm:gap-4" rotuloPontos="Ir para a foto">
            {AREA_SOCIAL_GALERIA.map((foto) => (
              <div
                key={foto.src}
                className="relative aspect-square overflow-hidden rounded-lg bg-[#E7D9B8]"
              >
                <Image
                  src={foto.src}
                  alt={foto.label}
                  fill
                  // Quadro quadrado com render 4:3: pede uma versão um pouco mais larga.
                  sizes="(max-width: 640px) 110vw, 34vw"
                  quality={90}
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E2B17]/70 to-transparent px-3 pt-6 pb-3 text-center text-xs tracking-widest text-white uppercase sm:pt-2 sm:pb-2">
                  {foto.label}
                </span>
              </div>
            ))}
          </CarrosselCelular>
        </div>
      </section>

      {/* Visita */}
      <section id="visita" className="scroll-mt-20 bg-[#F2EFE1] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_480px] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#5B6B49] uppercase">
              Agende sua visita
            </p>
            <h2 className="mb-6 max-w-xl font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-[#1E2B17] lg:text-[44px]">
              Visite a obra e conheça cada detalhe
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-[#4A4A3D] lg:text-lg">
              Preencha seus dados e o nosso time comercial entra em contato
              para agendar a sua visita e apresentar as condições de pagamento.
            </p>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Conheça também */}
      <section className="bg-[#FAF7EE] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#5B6B49] uppercase">
              Conheça também
            </span>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] font-normal text-[#1E2B17] lg:text-[44px]">
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
                nome: "BËOS Grand Central",
                status: "Em obras · Últimas unidades",
                foto: "/images/beos/fachada-noturna-hd.jpg",
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={p.foto}
                    alt={`Fachada do ${p.nome}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[#1E2B17]">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#4A5A3A] uppercase">
                      {p.status}
                    </span>
                  </div>
                  <span className="text-xl text-[#1E2B17] transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer própria da landing */}
      {/* Rodapé */}
      <RodapeEmpreendimento
        marca={
          <Image src="/images/monverdant/logo-white-recortado.png" alt="Mon'Verdant" width={587} height={127} className="h-10 w-auto self-start" />
        }
        frase={"O conforto de uma casa. A liberdade de um apartamento."}
        tema={{ fundo: "#4A5A3A", texto: "rgba(255,255,255,0.8)", forte: "#FFFFFF", destaque: "#C7D1B3", borda: "rgba(255,255,255,0.15)", faixa: "#3F4E31" }}
        mensagemWhatsApp={"Olá! Tenho interesse no Mon'Verdant."}
        aviso={"Imagens meramente ilustrativas, sujeitas a alterações."}
      />
      <WhatsAppButton mensagem="Olá! Tenho interesse no Mon'Verdant." />
    </div>
  );
}
