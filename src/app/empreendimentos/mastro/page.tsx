import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contato } from "@/content";
import { GalleryCarousel } from "./gallery-carousel";
import { VipForm } from "./vip-form";

const cormorant = Lato({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const manrope = Lato({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Mastro | Conbrain",
  description:
    "Um novo conceito náutico sofisticado chegando a União da Vitória. Cadastre-se e seja o primeiro a conhecer o Mastro.",
};

const DESTAQUES = [
  { valor: "30", label: "pavimentos no centro da cidade" },
  { valor: "2", label: "apartamentos por andar" },
  { valor: "3", label: "suítes, com suíte master e closet" },
  { valor: "Até 3", label: "vagas de garagem" },
  { valor: "Vista", italic: true, label: "definitiva para o Rio Iguaçu" },
  { valor: "Rooftop", italic: true, label: "com sky lounge no ponto mais alto" },
];

export default function MastroLanding() {
  return (
    <div
      className={`${cormorant.variable} ${manrope.variable} bg-[#EAE5E1] font-[family-name:var(--font-manrope)] text-[#1A1F26]`}
    >
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#041E37]/95 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 px-6 py-4 lg:px-[88px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/mastro/logo-white.png"
              alt="Mastro"
              width={900}
              height={240}
              className="h-8 w-auto sm:h-10 lg:h-11"
            />
          </Link>
          <ProjectNav atual="mastro" tema={{ texto: "#B9C3CF", botaoFundo: "#C2A36B", botaoTexto: "#041E37", painelFundo: "#06284A", painelTexto: "#F2F5F8", painelBorda: "rgba(255,255,255,0.15)" }} ctaHref="#lista" ctaRadius="2px" />
        </div>
      </header>

      {/* Hero */}
      <section className="grid bg-[#041E37] text-white md:grid-cols-[50%_1fr]">
        <div className="relative z-10 order-2 flex flex-col justify-between gap-10 px-8 py-14 md:order-none lg:px-[88px] lg:py-18">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C2A36B]" />
              <span className="text-[13px] font-normal tracking-[0.28em] text-[#C2A36B] uppercase">
                Em breve · União da Vitória
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl leading-[1.05] font-normal text-white lg:text-[76px]">
              Onde a cidade
              <br />
              encontra o rio.
            </h1>
            <p className="max-w-[480px] text-lg leading-relaxed text-[#B9C3CF]">
              Inspirado pela força das águas e pela verticalidade de seus 30
              pavimentos, o Mastro nasce para se tornar um novo ponto de
              referência no horizonte da cidade.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#lista"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-[#EAE5E1] px-8 text-[15px] font-bold tracking-[0.04em] text-[#041E37]"
              >
                <span className="md:hidden">Quero saber mais</span>
                <span className="hidden md:inline">
                  Quero saber mais sobre o empreendimento
                </span>
              </a>
            </div>
          </div>
          <span className="text-xs text-[#8A94A3]">
            Imagem ilustrativa.
          </span>
        </div>
        <div className="relative order-1 min-h-[360px] md:order-none">
          <Image
            src="/images/mastro/hero-perspectiva-mobile.webp"
            alt="Perspectiva ilustrativa do edifício Mastro às margens do rio"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: "65% 55%" }}
            priority
          />
        </div>
      </section>

      {/* Conceito */}
      <section className="grid grid-cols-1 gap-12 bg-[#EAE5E1] px-8 py-16 sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-[88px] lg:py-28">
        <div className="flex flex-col gap-7">
          <span className="text-[13px] font-bold tracking-[0.28em] text-[#6B5A3A] uppercase">
            O conceito
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.08] font-normal text-[#041E37] lg:text-[56px]">
            Mais que um edifício, um novo ponto de referência.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#4A4F57]">
            Um mastro é uma estrutura que se eleva e pode ser reconhecida à
            distância. O nome nasce dessa ideia e da relação com o rio que
            define a paisagem de União da Vitória.
          </p>
          <p className="text-[17px] leading-relaxed text-[#4A4F57]">
            A horizontalidade das águas encontra a verticalidade da
            arquitetura. O resultado é um empreendimento pensado para fazer
            parte da forma como as pessoas enxergam a cidade.
          </p>
        </div>
        <div className="relative h-[280px] overflow-hidden rounded-sm sm:h-[380px] lg:h-[520px]">
          <Image
            src="/images/mastro/vista-aerea-rio.jpg"
            alt="Vista aérea do Rio Iguaçu e da cidade"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Destaques */}
      <section className="flex flex-col gap-14 bg-[#041E37] px-8 py-16 text-white lg:px-[88px] lg:py-24">
        <div className="flex flex-col gap-5">
          <span className="text-[13px] font-normal tracking-[0.28em] text-[#C2A36B] uppercase">
            O que já podemos revelar
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] font-normal lg:text-[52px]">
            Exclusividade na medida ideal.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 border-t border-[#2A4460] pt-8 sm:grid-cols-3">
          {DESTAQUES.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <span
                className={`font-[family-name:var(--font-cormorant)] text-5xl leading-none ${item.italic ? "italic" : ""}`}
              >
                {item.valor}
              </span>
              <span className="text-[15px] text-[#B9C3CF]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section className="flex flex-col gap-10 bg-[#EAE5E1] px-8 py-16 lg:px-[88px] lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] font-normal text-[#041E37] lg:text-[52px]">
            Um primeiro olhar.
          </h2>
          <span className="text-[13px] text-[#4A4F57]">
            Imagens meramente ilustrativas. Projeto em fase de elaboração,
            sujeito a alterações.
          </span>
        </div>
        <GalleryCarousel
          slides={[
            { src: "/images/mastro/piscina.jpg", alt: "Piscina" },
            { src: "/images/mastro/salao-festas.jpg", alt: "Salão de festas" },
            { src: "/images/mastro/living-apartamento.jpg", alt: "Living do apartamento" },
          ]}
        />
        <div className="hidden gap-4 sm:grid sm:grid-cols-3 sm:[grid-template-rows:280px_280px]">
          <div className="relative min-h-[280px] overflow-hidden rounded-sm sm:col-span-2 sm:row-span-2">
            <Image
              src="/images/mastro/piscina.jpg"
              alt="Piscina"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-sm">
            <Image
              src="/images/mastro/salao-festas.jpg"
              alt="Salão de festas"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-sm">
            <Image
              src="/images/mastro/living-apartamento.jpg"
              alt="Living do apartamento"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Conbrain */}
      <section className="flex flex-col bg-white lg:flex-row">
        <div className="relative min-h-[320px] lg:w-[50%] lg:shrink-0">
          <Image
            src="/images/mastro/fachada.jpg"
            alt="Fachada do Mastro"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-7 px-8 py-16 lg:px-[88px] lg:py-24">
          <span className="text-[13px] font-bold tracking-[0.28em] text-[#6B5A3A] uppercase">
            Um novo capítulo
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] font-normal text-[#041E37] lg:text-[52px]">
            A Conbrain atravessa o rio.
          </h2>
          <p className="max-w-xl text-[17px] leading-relaxed text-[#4A4F57]">
            Depois de construir sua trajetória em Porto União, a Conbrain
            chega a União da Vitória. O Mastro é o primeiro empreendimento da
            marca no município e carrega o significado de abrir caminhos e
            expandir horizontes.
          </p>
        </div>
      </section>

      {/* Cadastro */}
      <section
        id="lista"
        className="grid grid-cols-1 gap-14 bg-[#041E37] px-8 py-16 text-white sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-[88px] lg:py-24"
      >
        <div className="flex flex-col gap-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl leading-[1.05] font-normal lg:text-[60px]">
            Quer ser um dos primeiros a conhecer o Mastro?
          </h2>
          <p className="max-w-[460px] text-lg leading-relaxed text-[#B9C3CF]">
            Cadastre-se e receba as novidades do lançamento, as condições
            especiais e o convite para conhecer o empreendimento antes de
            todo mundo.
          </p>
        </div>
        <VipForm />
      </section>

      {/* Conheça também */}
      <section className="bg-[#EAE5E1] px-8 py-16 lg:px-[88px] lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[13px] tracking-[0.28em] text-[#7A6A45] uppercase">
              Conheça também
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl leading-[1.1] font-normal text-[#041E37] lg:text-[48px]">
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
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[#041E37]">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#7A6A45] uppercase">
                      {p.status}
                    </span>
                  </div>
                  <span className="text-xl text-[#041E37] transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer
        id="privacidade"
        className="flex flex-col justify-between gap-10 bg-[#031629] px-8 py-14 text-[#B9C3CF] lg:px-[88px]"
      >
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/mastro/logo-white.png"
              alt="Mastro"
              width={900}
              height={240}
              className="h-11 w-auto self-start"
            />
            <Link
              href="/"
              className="text-xs tracking-widest text-[#8A94A3] uppercase transition-colors hover:text-white"
            >
              &larr; Voltar para a Conbrain
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm sm:text-right">
            <span className="font-bold text-white">
              Uma realização Conbrain
            </span>
            <span>
              Incorporadora Conbrain LTDA · CNPJ: 36.325.713/0001-72
            </span>
            <span>Telefone: {contato.telefone}</span>
            <a href="/politica-de-privacidade" className="font-bold text-white">
              Política de Privacidade
            </a>
          </div>
        </div>
        <div className="border-t border-[#1E3550] pt-6 text-xs leading-relaxed text-[#8A94A3]">
          Empreendimento em fase de elaboração preliminar, sujeito a
          alterações de projeto. Imagens meramente ilustrativas, com o
          objetivo de representar a proposta do empreendimento. Esta página
          não constitui oferta de venda.
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
