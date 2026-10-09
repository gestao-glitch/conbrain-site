import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ProjectNav } from "@/components/project-nav";
import { RodapeEmpreendimento } from "@/components/rodape-empreendimento";
import { contato } from "@/content";
import { AreaSocialCarousel, InterioresCarousel } from "./photo-carousel";

const display = Lato({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const text = Lato({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  alternates: { canonical: "/empreendimentos/residencial-agave" },
  title: "Residencial Ágave | Conbrain",
  description:
    "Inspirado em um farol, feito para ser referência. Apartamentos de 84 a 126 m² na Av. João Pessoa, em Porto União — 100% vendido e entregue.",
};

const waHref = (msg: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;

const INTERIORES = [
  { src: "/images/agave/living-jantar.jpg", label: "Living e jantar", alt: "Living com sala de jantar integrada e porta de vidro para a varanda" },
  { src: "/images/agave/living-cozinha.jpg", label: "Living e cozinha", alt: "Sala de TV integrada à cozinha com bancada" },
  { src: "/images/agave/cozinha-ilha.jpg", label: "Cozinha com ilha", alt: "Cozinha com ilha e banquetas de madeira" },
  { src: "/images/agave/cozinha.jpg", label: "Cozinha", alt: "Cozinha com armários grafite e bancada de mármore" },
  { src: "/images/agave/sala-tv.jpg", label: "Sala de TV", alt: "Sala de TV com painel amadeirado iluminado" },
  { src: "/images/agave/suite.jpg", label: "Suíte", alt: "Suíte com painel ripado, TV e armário planejado" },
  { src: "/images/agave/dormitorio.jpg", label: "Dormitório", alt: "Dormitório com janela ampla e cabeceira ripada" },
  { src: "/images/agave/banheiro.jpg", label: "Banheiro", alt: "Banheiro com box de vidro e bancada de pedra" },
];

const AREA_SOCIAL = [
  { src: "/images/agave/salao-gourmet.jpg", label: "Salão gourmet", alt: "Salão gourmet com ilha de mármore, banquetas de madeira e jardim vertical" },
  { src: "/images/agave/academia.jpg", label: "Academia", alt: "Academia com esteira, elíptico e estação de musculação" },
  { src: "/images/agave/brinquedoteca.jpg", label: "Brinquedoteca", alt: "Brinquedoteca com casinha, escorregador e piscina de bolinhas" },
  { src: "/images/agave/playground-academia.jpg", label: "Playground", alt: "Playground com gramado, escorregador e brinquedos infantis" },
  { src: "/images/agave/praca-privativa.jpg", label: "Praça privativa", alt: "Praça privativa com bancos de madeira e árvores" },
];

const AREA_SOCIAL_ITENS = [
  "Salão gourmet",
  "Academia",
  "Brinquedoteca",
  "Playground",
  "Praça privativa",
];

const LOCALIZACAO = [
  "Mercado / comércio",
  "Escolas",
  "Bancos e serviços",
  "Divisa com União da Vitória",
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

export default function ResidencialAgaveLanding() {
  return (
    <div
      className={`${display.variable} ${text.variable} bg-[#15130F] font-[family-name:var(--font-text)] text-[#2A2621]`}
    >
      {/* Hero */}
      <section className="relative grid bg-[#15130F] sm:grid-cols-[520px_1fr] sm:grid-rows-[auto_1fr] lg:grid-cols-[600px_1fr]">
        <div className="relative z-20 order-1 flex items-center justify-between gap-3 px-5 pt-10 sm:order-none sm:col-span-2 sm:col-start-1 sm:row-start-1 sm:px-8 lg:px-[72px] lg:pt-16">
          <Image
            src="/images/agave/logo-cream.png"
            alt="Residencial Ágave"
            width={1200}
            height={340}
            className="h-9 w-auto min-w-0 shrink self-start sm:h-[54px] sm:shrink-0"
          />
          <ProjectNav atual="residencial-agave" tema={{ texto: "#C9BFAE", botaoFundo: "#C4A574", botaoTexto: "#15130F", painelFundo: "#1E1B16", painelTexto: "#F4EFE6", painelBorda: "rgba(255,255,255,0.15)" }} ctaHref={waHref("Olá! Vi o Residencial Ágave e gostaria de conhecer os próximos empreendimentos da Conbrain.")} ctaRadius="0px" />
        </div>
        <div className="relative z-10 order-3 flex flex-col justify-between gap-10 px-8 pt-8 pb-10 sm:order-none sm:col-start-1 sm:row-start-2 sm:pt-10 lg:px-[72px] lg:pt-16 lg:pb-16">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#C4A574] uppercase">
              <span className="h-px w-10 bg-[#C4A574]" />
              <span>Entregue em 2026 · 100% vendido</span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] flex flex-col gap-3.5 text-4xl leading-[1.05] font-normal text-[#F4EFE6] lg:text-[60px]">
              <span className="block">Inspirado em um farol.</span>
              <span className="block text-[#C4A574] italic">
                Feito para ser referência.
              </span>
            </h1>
            <p className="max-w-[430px] text-lg leading-relaxed font-normal text-[#C9BFAE]">
              Apartamentos de 84 a 126&nbsp;m² na Av. João Pessoa, com área social
              completa e 1 ou 2 vagas de garagem. Um projeto entregue e 100%
              vendido, que hoje é o lar de quem escolheu viver no centro.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-5 border-t border-[#332E27] pt-7 whitespace-nowrap">
            <div className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-display)] text-3xl text-[#F4EFE6]">
                3
              </span>
              <span className="text-[13px] tracking-[0.12em] text-[#A79D8D] uppercase">
                plantas
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-display)] text-3xl text-[#F4EFE6]">
                84–126 m²
              </span>
              <span className="text-[13px] tracking-[0.12em] text-[#A79D8D] uppercase">
                área privativa
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-[family-name:var(--font-display)] text-3xl text-[#F4EFE6]">
                1 ou 2
              </span>
              <span className="text-[13px] tracking-[0.12em] text-[#A79D8D] uppercase">
                vagas
              </span>
            </div>
          </div>
        </div>
        <div className="relative order-2 min-h-[360px] overflow-hidden sm:order-none sm:col-start-2 sm:row-start-1 sm:row-span-2">
          <Image
            src="/images/agave/hero-fachada-noturna-hd.jpg"
            alt="Fachada noturna do Residencial Ágave vista de drone"
            fill
            // O quadro é quase quadrado e corta as laterais da foto: pede uma versão mais larga.
            sizes="(max-width: 640px) 140vw, 80vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: "50% 45%" }}
            priority
          />
          <div className="absolute inset-x-0 top-0 hidden h-44 bg-gradient-to-b from-black/60 to-transparent sm:block" />
          
        </div>
      </section>

      {/* Conceito */}
      <section id="projeto" className="grid grid-cols-1 gap-16 bg-[#F4EFE6] px-8 py-20 sm:grid-cols-2 sm:items-center lg:gap-24 lg:px-20 lg:py-32">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#7A6242] uppercase">
            <span className="h-px w-10 bg-[#7A6242]" />
            <span>O projeto</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-normal text-[#1E1B16] lg:text-[56px]">
            Um farol no centro da cidade.
          </h2>
          <p className="max-w-[600px] text-lg leading-relaxed font-normal text-[#4A443B]">
            A arquitetura do Ágave é uma homenagem a João Pessoa, cidade que
            dá nome à avenida onde ele está, e se inspira nas linhas do
            monumento do Farol do Cabo Branco, um dos cartões-postais da
            capital paraibana.
          </p>
          <p className="max-w-[600px] text-lg leading-relaxed font-normal text-[#4A443B]">
            O nome carrega significados como brilho, saúde, longevidade e
            festa, traduzidos na fachada, nos ambientes internos e nas áreas
            sociais. À noite, o filete de luz dourada que percorre o prédio
            faz dele uma referência na paisagem.
          </p>
        </div>
        <div className="relative h-[320px] overflow-hidden sm:h-[440px] lg:h-[680px]">
          <Image
            src="/images/agave/fachada-morro-hd.jpg"
            alt="Residencial Ágave iluminado à noite, com o morro ao fundo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Interiores */}
      <section className="bg-[#F4EFE6] px-8 py-20 lg:px-20 lg:py-24">
        <InterioresCarousel
          slides={INTERIORES}
          kicker="Por dentro"
          titulo="Ambientes para viver bem."
        />
      </section>

      {/* Lazer */}
      <section id="lazer" className="bg-[#15130F] px-8 py-20 lg:px-20 lg:py-32">
        <AreaSocialCarousel
          slides={AREA_SOCIAL}
          kicker="Área social"
          titulo="Lazer e convivência sem sair de casa."
          destaques={AREA_SOCIAL_ITENS}
        />
      </section>

      {/* Localização */}
      <section id="localizacao" className="grid grid-cols-1 bg-[#F4EFE6] sm:grid-cols-2">
        <div className="flex flex-col gap-7 px-8 py-20 lg:px-20 lg:py-32">
          <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#7A6242] uppercase">
            <span className="h-px w-10 bg-[#7A6242]" />
            <span>Localização</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-normal text-[#1E1B16] lg:text-[56px]">
            No centro, na esquina da Av. João Pessoa.
          </h2>
          <p className="text-lg leading-relaxed font-normal text-[#4A443B]">
            Tudo o que você precisa a poucos passos: comércio, serviços e a
            praticidade de morar no coração de Porto União.
          </p>
          <div className="flex flex-col border-t border-[#D8CFBF]">
            {LOCALIZACAO.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-[#D8CFBF] py-4 text-base text-[#2A2621]"
              >
                <span>{item}</span>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rotate-45 bg-[#7A6242]"
                />
              </div>
            ))}
          </div>
          <div className="mt-2 h-[340px] overflow-hidden border border-[#D8CFBF]">
            <iframe
              title="Mapa — Rua Coronel Rupp, 33, Cidade Nova, Porto União - SC"
              src="https://www.google.com/maps?q=Rua+Coronel+Rupp,+33,+Cidade+Nova,+Porto+União+-+SC,+89400-000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="relative min-h-[320px]">
          <Image
            src="/images/agave/vista-aerea-esquina-hd.jpg"
            alt="Vista aérea do prédio na esquina, com as ruas do centro"
            fill
            // A partir de 640px o quadro fica alto e estreito (~1100px de altura) e corta
            // as laterais da foto 4:3; por isso pede sempre uma versão de ~1500px de largura.
            sizes="(max-width: 640px) 100vw, 1500px"
            quality={90}
            className="object-cover"
            style={{ objectPosition: "55% 55%" }}
          />
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-[#1E1B16] px-8 py-20 lg:px-20 lg:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-3.5 text-[13px] tracking-[0.32em] text-[#C4A574] uppercase">
              <span className="h-px w-10 bg-[#C4A574]" />
              <span>Fale com a gente</span>
              <span className="h-px w-10 bg-[#C4A574]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] max-w-3xl text-3xl leading-[1.1] font-normal text-[#F4EFE6] sm:text-5xl sm:leading-[1.05] lg:text-[56px]">
              O Ágave já está 100% vendido.{" "}
              <span className="text-[#C4A574] italic">O próximo pode ser seu.</span>
            </h2>
            <p className="max-w-[560px] text-lg leading-relaxed font-normal text-[#C9BFAE]">
              Conheça os projetos que a Conbrain está construindo agora.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PROXIMOS.map((p) => (
              <Link
                key={p.slug}
                href={`/empreendimentos/${p.slug}`}
                className="group flex flex-col overflow-hidden bg-[#2A2621] transition-transform duration-300 hover:-translate-y-1"
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
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[#F4EFE6]">
                      {p.nome}
                    </span>
                    <span className="text-xs tracking-[0.12em] text-[#C4A574] uppercase">
                      {p.status}
                    </span>
                  </div>
                  <span className="text-xl text-[#F4EFE6] transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={waHref("Olá! Vi o Residencial Ágave e gostaria de conhecer os próximos empreendimentos da Conbrain.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C4A574] px-8 py-4.5 text-[15px] font-bold tracking-[0.1em] text-[#15130F] uppercase transition-colors hover:bg-[#F4EFE6]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#15130F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5z" />
                </svg>
                Falar no WhatsApp
              </a>
              <Link
                href="/#empreendimentos"
                className="inline-flex items-center border border-[#C4A574] px-8 py-4.5 text-[15px] font-bold tracking-[0.1em] text-[#F4EFE6] uppercase transition-colors hover:bg-[#C4A574] hover:text-[#15130F]"
              >
                Ver todos os empreendimentos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="hidden h-[460px] gap-1 bg-[#15130F] sm:grid sm:grid-cols-3">
        <div className="relative h-full">
          <Image
            src="/images/agave/lateral-terraco-hd.jpg"
            alt="Vista lateral do prédio com o terraço iluminado"
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: "45% 50%" }}
          />
        </div>
        <div className="relative h-full">
          <Image
            src="/images/agave/fachada-morro-hd.jpg"
            alt="Fachada com o filete de luz dourada"
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            quality={90}
            className="object-cover"
            style={{ objectPosition: "45% 45%" }}
          />
        </div>
        <div className="relative h-full">
          <Image
            src="/images/agave/fachada-avenida-hd.jpg"
            alt="Prédio visto a partir da avenida"
            fill
            sizes="(max-width: 640px) 100vw, 45vw"
            quality={90}
            className="object-cover"
          />
        </div>
      </section>

      {/* Rodapé */}
      <RodapeEmpreendimento
        marca={
          <Image src="/images/agave/logo-gold.png" alt="Residencial Ágave" width={1200} height={340} className="h-[52px] w-auto self-start" />
        }
        frase={"Inspirado em um farol. Feito para ser referência."}
        tema={{ fundo: "#15130F", texto: "#A79D8D", forte: "#E6DDCD", destaque: "#C4A574", borda: "#332E27" }}
        mensagemWhatsApp={"Olá! Vi o Residencial Ágave e gostaria de conhecer os próximos empreendimentos da Conbrain."}
      />
    </div>
  );
}
