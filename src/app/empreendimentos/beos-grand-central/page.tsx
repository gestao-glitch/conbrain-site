import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contato } from "@/content";
import { AndamentoObra } from "./andamento-obra";
import { CarrosselCelular } from "@/components/carrossel-celular";
import { ContactForm } from "./contact-form";

const outfit = Lato({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dmSans = Lato({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bëos Grand Central | Conbrain",
  description:
    "Studios, lofts e apartamentos de 1 a 3 dormitórios no centro de Porto União, para morar ou investir.",
};

const ENDERECO = "Av. Getúlio Vargas, 418 - Cidade Nova, Porto União - SC, 89400-000";

const waHref = (msg: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;

const AREA_SOCIAL = [
  { src: "/images/beos/area-social/academia.jpg", alt: "Academia", titulo: "Academia" },
  { src: "/images/beos/area-social/mini-mercado.jpg", alt: "Mini-mercado", titulo: "Mini-mercado" },
  { src: "/images/beos/area-social/pub.jpg", alt: "Pub", titulo: "Pub" },
  { src: "/images/beos/area-social/sports-lounge.jpg", alt: "Sports Lounge", titulo: "Sports Lounge" },
  { src: "/images/beos/area-social/praca-privativa.jpg", alt: "Praça privativa", titulo: "Praça Privativa" },
  { src: "/images/beos/area-social/espaco-pet.jpg", alt: "Espaço pet", titulo: "Espaço Pet" },
];

const CONCEITO_ITENS = [
  { titulo: "Dinamismo", desc: "Uma moradia compatível com uma vida sempre em movimento." },
  { titulo: "Eficiência", desc: "Espaços compactos e planejados para o que realmente importa." },
  { titulo: "Conexão", desc: "Pessoas, serviços e tecnologia integrados no mesmo endereço." },
  { titulo: "Flexibilidade", desc: "Diferentes tipologias e a possibilidade de integrar unidades." },
];


export default function BeosGrandCentralLanding() {
  return (
    <div
      className={`${outfit.variable} ${dmSans.variable} bg-[#3A3B37] font-[family-name:var(--font-dm-sans)] text-[#2A2B28]`}
    >
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 flex h-20 items-center justify-between gap-3 border-b border-white/[0.14] bg-[#4E4F4A] px-5 text-[#EAE5E1] sm:h-24 sm:px-6 lg:px-[72px]">
        <Link href="/" className="min-w-0 shrink">
          <Image
            src="/images/beos/logo.png"
            alt="Bëos Grand Central — Conbrain"
            width={900}
            height={220}
            className="h-8 w-auto sm:h-11"
          />
        </Link>
        <ProjectNav atual="beos-grand-central" tema={{ texto: "#EAE5E1", botaoFundo: "#7A9956", botaoTexto: "#1F201D", painelFundo: "#2E2F2B", painelTexto: "#EAE5E1", painelBorda: "rgba(255,255,255,0.15)" }} ctaHref="#contato" />
      </header>

      {/* Hero */}
      <section id="topo" className="relative flex flex-col bg-[#4E4F4A] text-[#EAE5E1]">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center gap-7 px-8 py-16 md:w-[46%] md:shrink-0 lg:px-[72px] lg:py-22">
            <div className="text-[13px] font-normal tracking-[0.22em] text-[#B5CF95] uppercase">
              Em obras · Últimas unidades · Centro de Porto União
            </div>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl leading-[1.05] font-normal tracking-tight lg:text-6xl">
              Um novo jeito de{" "}
              <span className="font-bold text-[#B5CF95]">viver</span> e{" "}
              <span className="font-bold text-[#B5CF95]">investir</span> no
              centro de tudo.
            </h1>
            <p className="max-w-[500px] text-lg leading-relaxed text-[#D9D4CF]">
              Studios, lofts e apartamentos de 1 a 3 dormitórios no centro
              de Porto União, para morar ou investir.
            </p>
            <div className="mt-2 flex flex-wrap gap-3.5">
              <a
                href={waHref("Olá! Tenho interesse no Bëos Grand Central.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2.5 rounded-full bg-[#7A9956] px-7.5 text-base font-bold text-[#1F201D]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {["1 a 3 dormitórios", "Com ou sem vaga de garagem", "Smart Living"].map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-4 py-2.5 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative order-first min-h-[320px] md:order-none md:flex-1">
            <Image
              src="/images/beos/fachada-noturna-hd.jpg"
              alt="Fachada noturna do BËOS Grand Central"
              fill
              // O quadro é quase quadrado (ou mais alto que largo) e corta as laterais
              // do render 16:9; por isso pede sempre a versão de 1920px, a maior que existe.
              sizes="(max-width: 768px) 200vw, 1920px"
              quality={90}
              className="object-cover"
              style={{ objectPosition: "40% center" }}
              priority
            />
            <div className="absolute bottom-7 left-8 rounded-md bg-[#2A2B28]/70 px-3 py-1.5 text-xs">
              Imagem ilustrativa
            </div>
          </div>
        </div>
      </section>

      {/* Dois caminhos */}
      <section className="flex flex-col gap-10 bg-[#EAE5E1] px-8 py-22 lg:px-[72px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-[family-name:var(--font-outfit)] text-3xl leading-tight font-normal text-[#2A2B28] lg:text-[42px]">
            Um empreendimento, dois motivos para escolher.
          </h2>
          <p className="max-w-[460px] text-lg leading-relaxed text-[#55564F]">
            O BËOS Grand Central atende tanto quem busca morar com
            inteligência quanto quem enxerga valor em investir com
            segurança.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="#contato"
            className="flex flex-col gap-4.5 rounded-[20px] bg-[#4E4F4A] p-11 text-[#EAE5E1]"
          >
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#B5CF95]/16 text-[#B5CF95]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M15 7h6v6" />
              </svg>
            </div>
            <div className="font-[family-name:var(--font-outfit)] text-3xl font-normal">Quero investir</div>
            <p className="max-w-[480px] text-lg leading-relaxed text-[#D9D4CF]">
              Studios e lofts compactos no centro de Porto União, perto de
              tudo o que o morador procura.
            </p>
            <div className="mt-1.5 text-base font-bold text-[#B5CF95]">
              Falar com um consultor &rarr;
            </div>
          </a>
          <a
            href="#morar"
            className="flex flex-col gap-4.5 rounded-[20px] bg-white p-11 text-[#2A2B28]"
          >
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EAE5E1] text-[#4F6B34]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l9-7 9 7" />
                <path d="M5 10v10h14V10" />
                <path d="M10 20v-6h4v6" />
              </svg>
            </div>
            <div className="font-[family-name:var(--font-outfit)] text-3xl font-normal">Quero morar</div>
            <p className="max-w-[480px] text-lg leading-relaxed text-[#55564F]">
              Um prédio que funciona como extensão da sua casa, no centro
              de Porto União. Mais praticidade e mais tempo para você.
            </p>
            <div className="mt-1.5 text-base font-bold text-[#4F6B34]">
              Ver as áreas sociais &rarr;
            </div>
          </a>
        </div>
      </section>

      {/* Conceito */}
      <section className="flex flex-col items-center gap-14 bg-[#F5F2EF] px-8 py-24 lg:flex-row lg:px-[72px]">
        <div className="h-[320px] w-full shrink-0 overflow-hidden rounded-[20px] lg:h-[440px] lg:w-[620px]">
          <Image
            src="/images/beos/studio-sala.jpg"
            alt="Sala de estar e cozinha de um studio decorado do BËOS"
            width={1000}
            height={667}
            sizes="(max-width: 1024px) 100vw, 660px"
            quality={90}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="text-[13px] font-bold tracking-[0.22em] text-[#4F6B34] uppercase">
            O conceito
          </div>
          <h2 className="max-w-2xl font-[family-name:var(--font-outfit)] text-3xl leading-snug font-normal lg:text-[40px]">
            Viver melhor significa ter o{" "}
            <span className="font-bold">espaço certo, no lugar certo.</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {CONCEITO_ITENS.map((item) => (
              <div key={item.titulo} className="flex flex-col gap-1.5 border-t border-[#CFC9C3] pt-4">
                <div className="text-base font-bold">{item.titulo}</div>
                <div className="text-[15px] leading-relaxed text-[#55564F]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas sociais */}
      <section id="morar" className="flex flex-col gap-12 bg-[#2A2B28] px-8 py-26 text-[#EAE5E1] lg:px-[72px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-normal tracking-[0.22em] text-[#B5CF95] uppercase">
              Smart living · Áreas sociais
            </div>
            <h2 className="max-w-[680px] font-[family-name:var(--font-outfit)] text-4xl leading-tight font-normal lg:text-5xl">
              O prédio como{" "}
              <span className="font-bold text-[#B5CF95]">
                extensão da sua casa.
              </span>
            </h2>
          </div>
          <p className="max-w-[480px] text-lg leading-relaxed text-[#D9D4CF]">
            Treine, faça compras, receba amigos e relaxe sem sair do
            empreendimento. Espaços pensados para a rotina, não para
            ocasiões especiais. Também conta com Salão Gourmet.
          </p>
        </div>
        <CarrosselCelular
          classeGrade="sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          rotuloPontos="Ir para a foto"
          escuro
          margem="-mx-8 px-8 scroll-px-8"
        >
          {AREA_SOCIAL.map((item) => (
            <div key={item.src} className="flex flex-col gap-3.5">
              <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[220px] lg:h-[290px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="origin-top scale-[1.16] object-cover object-top"
                />
              </div>
              <div className="text-[17px] font-bold">{item.titulo}</div>
            </div>
          ))}
        </CarrosselCelular>
        <div className="text-[13px] text-[#BDB8B2]">
          Imagens meramente ilustrativas, sujeitas a alterações.
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="flex flex-col gap-12 bg-[#F5F2EF] px-8 py-26 lg:flex-row lg:items-center lg:px-[72px]">
        <div className="flex flex-col gap-6 lg:w-[480px] lg:shrink-0">
          <div className="text-[13px] font-bold tracking-[0.22em] text-[#4F6B34] uppercase">
            Localização
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl leading-tight font-normal lg:text-5xl">
            No centro de tudo.
          </h2>
          <p className="text-lg leading-relaxed text-[#55564F]">
            Comércio, serviços e entretenimento por perto. Mais mobilidade
            para quem mora e mais demanda por locação para quem investe.
          </p>
          <div className="flex items-start gap-3 text-base font-normal">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4F6B34" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
              <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <span>{ENDERECO}</span>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-[#2A2B28]/25 px-6 text-[15px] font-bold text-[#2A2B28] transition-colors hover:border-[#4F6B34] hover:text-[#4F6B34]"
          >
            Abrir no Google Maps &rarr;
          </a>
        </div>
        <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-[#C8C8BF] lg:ml-auto lg:h-[579px] lg:w-[600px] lg:shrink-0">
          <iframe
            title={`Mapa — ${ENDERECO}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`}
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Andamento da obra */}
      <AndamentoObra />

      {/* Contato */}
      <section id="contato" className="flex flex-col gap-14 bg-[#EAE5E1] px-8 py-26 lg:flex-row lg:px-[72px]">
        <div className="flex flex-col gap-6 pt-4 lg:w-[560px] lg:shrink-0">
          <div className="text-[13px] font-bold tracking-[0.22em] text-[#4F6B34] uppercase">
            Fale com a gente
          </div>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl leading-tight font-normal lg:text-5xl">
            Conheça mais detalhes do empreendimento.
          </h2>
          <p className="text-lg leading-relaxed text-[#55564F]">
            Um consultor entra em contato para apresentar as unidades
            disponíveis e tirar suas dúvidas.
          </p>
          <a
            href={waHref("Olá! Tenho interesse no Bëos Grand Central.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-14 w-fit items-center gap-2.5 rounded-full bg-[#2A2B28] px-7 text-base font-bold text-[#EAE5E1]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5z" />
            </svg>
            Prefiro falar pelo WhatsApp
          </a>
        </div>
        <div className="flex-1 rounded-3xl bg-white p-11">
          <ContactForm />
        </div>
      </section>

      {/* Conheça também */}
      <section className="bg-[#F5F2EF] px-8 py-20 lg:px-[72px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="text-[13px] font-bold tracking-[0.22em] text-[#4F6B34] uppercase">
              Conheça também
            </div>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl leading-tight font-normal lg:text-4xl">
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
                slug: "monverdant",
                nome: "Mon'Verdant",
                status: "Em obras · Últimas unidades",
                foto: "/images/monverdant/fachada-mv.jpg",
              },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white transition-transform duration-300 hover:-translate-y-1"
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
                    <span className="font-[family-name:var(--font-outfit)] text-2xl font-bold">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#4F6B34] uppercase">
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

      {/* Rodapé */}
      <footer className="bg-[#2E2F2B] text-[#D9D4CF]">
        <div className="flex flex-col gap-10 px-8 pt-14 pb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-[72px]">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/beos/logo.png"
              alt="Bëos Grand Central — Conbrain"
              width={900}
              height={220}
              className="h-11 w-auto self-start"
            />
            <p className="max-w-[300px] font-[family-name:var(--font-outfit)] text-lg leading-snug font-normal text-[#EAE5E1]">
              Uma maneira mais inteligente de viver e investir no centro de
              Porto União.
            </p>
            <div className="flex gap-2.5">
              <a
                href={`https://instagram.com/${contato.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-[#EAE5E1] transition-colors hover:border-[#B5CF95] hover:text-[#B5CF95]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" />
                </svg>
              </a>
              <a
                href={waHref("Olá! Tenho interesse no Bëos Grand Central.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-[#EAE5E1] transition-colors hover:border-[#B5CF95] hover:text-[#B5CF95]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid gap-8 text-[15px] leading-snug sm:grid-cols-2 sm:gap-14">
            <div className="flex flex-col gap-3">
              <div className="mb-1 text-xs font-bold tracking-[0.2em] text-[#B5CF95] uppercase">
                Atendimento
              </div>
              <a
                href={waHref("Olá! Tenho interesse no Bëos Grand Central.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-[#B5CF95]"
              >
                WhatsApp {contato.telefone}
              </a>
              <a
                href="mailto:comercial@conbrain.com.br"
                className="w-fit transition-colors hover:text-[#B5CF95]"
              >
                comercial@conbrain.com.br
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="mb-1 text-xs font-bold tracking-[0.2em] text-[#B5CF95] uppercase">
                Plantão de vendas
              </div>
              <span>
                {contato.stand_endereco}
                <br />
                {contato.stand_complemento}
              </span>
              <span>
                {contato.horario_dias}, {contato.horario_horas}
              </span>
              <Link
                href="/contato#visita"
                className="mt-1 inline-flex h-10 w-fit items-center rounded-full bg-[#7A9956] px-5 text-sm font-bold text-[#1F201D] transition-colors hover:bg-[#B5CF95]"
              >
                Agendar visita
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/[0.14] bg-[#262724] px-8 py-6 text-[13px] leading-relaxed text-[#BDB8B2] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-[72px]">
          <p className="max-w-3xl">
            &copy; {new Date().getFullYear()} Incorporadora Conbrain LTDA · CNPJ
            36.325.713/0001-72. Imagens meramente ilustrativas, sujeitas a
            alterações. Móveis e objetos de decoração não fazem parte do
            imóvel.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-2 font-bold text-[#EAE5E1]">
            <Link href="/politica-de-privacidade" className="hover:text-[#B5CF95]">
              Privacidade
            </Link>
            <Link href="/" className="hover:text-[#B5CF95]">
              &larr; Voltar para a Conbrain
            </Link>
            <a href="#topo" className="inline-flex items-center gap-1.5 hover:text-[#B5CF95]">
              Topo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5M6 11l6-6 6 6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
