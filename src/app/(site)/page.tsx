import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ClosingCta } from "@/components/closing-cta";
import { CountUp } from "@/components/count-up";
import { ProjectMap } from "@/components/project-map";
import { getEmpreendimento } from "@/data/empreendimentos";

const PILARES = [
  {
    numero: "01",
    titulo: "Relevância contextual",
    frase: "O imóvel certo, no lugar certo, para a pessoa certa.",
    desc: "Cada projeto nasce do estudo do contexto: quem vive na região, como a demanda se comporta e quais serviços estão no entorno.",
    tags: "Geográfico · Econômico · Social",
    tema: "escuro",
  },
  {
    numero: "02",
    titulo: "Curadoria de produto",
    frase: "Empreendimentos pensados no usuário.",
    desc: "Cada empreendimento é uma marca, com conceito, identidade e personalidade próprios. É o que chamamos de branded building.",
    tags: "Foco no usuário · Branded building",
    tema: "verde",
  },
  {
    numero: "03",
    titulo: "Viabilidade estratégica",
    frase: "Ganho para todas as partes envolvidas.",
    desc: "Projetos estruturados para gerar valor real e duradouro para todos que participam deles.",
    tags: "Clientes · Investidores · Terrenistas · Parceiros · Empresa",
    tema: "claro",
  },
] as const;

const TEMAS_PILAR = {
  escuro: {
    card: "bg-[#333136] text-white",
    numero: "text-white/40",
    texto: "text-white/70",
    linha: "border-white/20 text-white/60",
  },
  verde: {
    card: "bg-[#a3c859] text-[#1f1d22]",
    numero: "text-[#1f1d22]/40",
    texto: "text-[#1f1d22]/75",
    linha: "border-[#1f1d22]/20 text-[#1f1d22]/65",
  },
  claro: {
    card: "bg-[#f2f6e8] text-[#1f1d22]",
    numero: "text-[#1f1d22]/30",
    texto: "text-[#1f1d22]/70",
    linha: "border-[#1f1d22]/15 text-[#1f1d22]/60",
  },
} as const;

const EMPREENDIMENTOS_HOME = [
  {
    slug: "residencial-taiji",
    nomeCurto: "Taiji",
    status: "Esgotado",
    fase: "Entregue",
    conceito:
      "Um apartamento por andar, inspirado no equilíbrio da filosofia oriental.",
    cta: "Conhecer",
    cor: "#a8700f",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/taiji/hero-vista-aerea.jpg",
  },
  {
    slug: "residencial-agave",
    nomeCurto: "Ágave",
    status: "Esgotado",
    fase: "Entregue",
    conceito: "Bem-estar, boa localização e plantas personalizáveis.",
    cta: "Conhecer",
    cor: "#7a6242",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/agave/hero-fachada-noturna-hd.jpg",
  },
  {
    slug: "beos-grand-central",
    nomeCurto: "BËOS",
    status: "Últimas unidades",
    fase: "Em obras",
    conceito:
      "Moradia urbana, compacta e inteligente no centro de Porto União.",
    cta: "Conhecer",
    cor: "#2a2b28",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/beos/fachada-noturna-hd.jpg",
  },
  {
    slug: "monverdant",
    nomeCurto: "Mon'Verdant",
    status: "Últimas unidades",
    fase: "Em obras",
    conceito: "Casas suspensas com vista para as Gêmeas do Iguaçu.",
    cta: "Conhecer",
    cor: "#4a5a3a",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/monverdant/fachada-mv.jpg",
  },
  {
    slug: "upper-nest",
    nomeCurto: "Upper Nest",
    status: "Financiável",
    fase: "Em obras",
    conceito: "Smart living com serviços, sofisticação e praticidade.",
    cta: "Conhecer",
    cor: "#ae5d32",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/upper-nest/fachada-noturna.jpg",
  },
  {
    slug: "mastro",
    nomeCurto: "Mastro",
    status: "Em breve",
    fase: "Pré-lançamento",
    conceito: "Um novo cenário está chegando. Cadastre-se para saber primeiro.",
    cta: "Quero ser avisado",
    cor: "#041e37",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/mastro/hero-perspectiva.jpg",
  },
  {
    slug: "pier-225",
    nomeCurto: "Pier 225",
    status: "Em breve",
    fase: "Pré-lançamento",
    conceito: "Um novo cenário está chegando. Cadastre-se para saber primeiro.",
    cta: "Quero ser avisado",
    cor: "#221a15",
    detalhe: "rgba(255,255,255,0.75)",
    foto: "/images/pier225/hero-fachada.jpg",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex h-svh min-h-[600px] items-end overflow-hidden bg-[#1f1d22]">
        <Image
          src="/videos/hero-home-poster.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          src="/videos/hero-home.mp4"
          poster="/videos/hero-home-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.4)_32%,rgba(0,0,0,0)_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/45 to-transparent"
        />
        <div className="relative z-10 w-full px-6 pb-28 sm:px-10 lg:pb-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center text-white lg:gap-8">
            <p
              className="hero-in flex flex-col gap-1.5 text-[11px] font-bold tracking-[0.28em] text-white uppercase sm:block sm:tracking-[0.4em] [text-shadow:0_1px_14px_rgba(0,0,0,0.6)] sm:text-xs"
              style={{ animationDelay: "0.3s" }}
            >
              <span>Incorporadora e construtora</span>
              <span className="hidden sm:inline"> · </span>
              <span>Porto União (SC)</span>
            </p>
            <h1
              className="hero-in font-heading text-[34px] leading-[1.12] font-normal tracking-[-0.5px] text-balance [text-shadow:0_2px_28px_rgba(0,0,0,0.4)] sm:text-[48px] lg:text-[60px]"
              style={{ animationDelay: "0.6s" }}
            >
              Edificamos cidades que{" "}
              <strong className="font-bold">transformam vidas.</strong>
            </h1>
            <Link
              href="/sobre"
              className="hero-in mt-2 inline-flex h-12 items-center rounded-full border border-white/70 px-8 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:bg-white hover:text-[#333136]"
              style={{ animationDelay: "0.9s" }}
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="hero-in absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-white/70 uppercase"
          style={{ animationDelay: "1.4s" }}
        >
          Role
          <span className="relative h-10 w-px overflow-hidden bg-white/25">
            <span className="hero-scroll absolute inset-x-0 top-0 h-4 bg-white" />
          </span>
        </div>
      </section>

      {/* Números */}
      <section className="bg-[#1f1d22] px-6 py-20 text-white sm:px-10 lg:px-[120px] lg:py-[110px]">
        <AnimateOnScroll>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {[
              { end: 10, label: "anos de história" },
              { end: 400, label: "unidades entregues e em desenvolvimento" },
              { end: 67, suffix: " mil", label: "m² de cenários em construção" },
              { end: 80, label: "edificadores" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2.5 border-t border-white/20 pt-7"
              >
                <div className="font-heading text-[40px] leading-none font-light tracking-[-1px] text-white lg:text-[56px]">
                  <span className="text-[#a3c859]">+</span>
                  <CountUp end={item.end} suffix={item.suffix} />
                </div>
                <div className="text-[15px] text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* Sobre (resumo) */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[120px]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll>
            <div className="relative h-[320px] overflow-hidden rounded-md sm:h-[420px] lg:h-[540px]">
              <Image
                src="/images/sobre/vista-aerea-rio-iguacu-hd.jpg"
                alt="Vista aérea da ponte sobre o rio Iguaçu, que une Porto União e União da Vitória"
                fill
                // Quadro quase quadrado com foto panorâmica: a foto é cortada nas laterais,
                // então pede uma versão bem mais larga que o quadro.
                sizes="(max-width: 1024px) 200vw, 1200px"
                quality={90}
                className="object-cover object-[35%_center]"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <div className="flex flex-col gap-7">
              <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">Sobre a Conbrain</p>
              <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] text-[#333136] sm:text-[36px] lg:text-[44px]">
                Nascemos em Porto União.{" "}
                <strong className="font-bold">
                  Crescemos com o Vale do Iguaçu
                  <span className="text-[#a3c859]">.</span>
                </strong>
              </h2>
              <p className="text-[18px] leading-[1.7] text-[#55525a]">
                Desde 2015, da engenharia à incorporação, desenvolvemos
                empreendimentos com identidade própria que participam da
                transformação das nossas cidades. Nossa missão é edificar
                cidades que transformam vidas.
              </p>
              <Link
                href="/sobre"
                className="self-start border-b border-[#333136] pb-0.5 text-[15px] font-bold text-[#333136] transition-colors hover:border-[#a3c859] hover:text-[#6b8a2a]"
              >
                Conheça nossa história &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Os 3 pilares */}
      <section className="bg-white px-6 pb-20 sm:px-10 lg:px-[120px] lg:pb-[120px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          <AnimateOnScroll>
            <div className="flex flex-col gap-5">
              <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">Como desenvolvemos</p>
              <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] text-[#333136] sm:text-[36px] lg:text-[44px] max-w-[720px]">
                Nossos empreendimentos se baseiam em{" "}
                <strong className="font-bold">
                  3 pilares<span className="text-[#a3c859]">.</span>
                </strong>
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {PILARES.map((p, i) => {
              const t = TEMAS_PILAR[p.tema];
              return (
                <AnimateOnScroll key={p.numero} delay={i * 120}>
                  <div
                    className={`flex h-full flex-col gap-4 rounded-md p-8 lg:min-h-[440px] lg:p-10 ${t.card}`}
                  >
                    <span
                      className={`font-heading text-[56px] leading-none font-light ${t.numero}`}
                    >
                      {p.numero}
                    </span>
                    <h3 className="font-heading mt-8 text-2xl font-bold lg:mt-14">
                      {p.titulo}
                    </h3>
                    <p className="text-[17px] leading-[1.5]">{p.frase}</p>
                    <p className={`text-[15px] leading-[1.65] ${t.texto}`}>
                      {p.desc}
                    </p>
                    <p
                      className={`mt-auto border-t pt-4 text-xs tracking-wide ${t.linha}`}
                    >
                      {p.tags}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empreendimentos */}
      <section id="empreendimentos" className="bg-[#f7f7f5] px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[110px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          <AnimateOnScroll>
            <div className="flex flex-col gap-5">
              <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">Portfólio</p>
              <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] text-[#333136] sm:text-[36px] lg:text-[44px]">
                Empreendimentos que{" "}
                <strong className="font-bold">
                  constroem histórias<span className="text-[#a3c859]">.</span>
                </strong>
              </h2>
              <p className="text-sm text-[#5f5c64] sm:hidden">
                Deslize para ver todos &rarr;
              </p>
            </div>
          </AnimateOnScroll>
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {EMPREENDIMENTOS_HOME.map((item, i) => {
              const emp = getEmpreendimento(item.slug);
              if (!emp) return null;
              const emBreve = item.status === "Em breve";
              return (
                <AnimateOnScroll key={item.slug} delay={(i % 4) * 80} className="w-[80%] shrink-0 snap-start sm:w-auto">
                  <Link
                    href={`/empreendimentos/${item.slug}`}
                    className="group relative flex h-[460px] flex-col overflow-hidden rounded-md text-white transition-transform duration-300 hover:-translate-y-1 lg:h-[500px]"
                    style={{ background: item.cor }}
                  >
                    <div className="px-6 pt-7 text-[11px] tracking-[3px] whitespace-nowrap text-white/60 uppercase">
                      {item.fase}
                    </div>
                    <div className="flex flex-1 items-end justify-between gap-3 px-6 pt-4 pb-6">
                      <p className="min-w-0 text-[15px] leading-[1.5] text-white/90">
                        {item.conceito}
                      </p>
                      <div
                        className={`font-heading shrink-0 rotate-180 leading-none font-bold tracking-tight whitespace-nowrap [writing-mode:vertical-rl] ${
                          item.nomeCurto.length > 9
                            ? "text-[36px]"
                            : item.nomeCurto.length > 6
                              ? "text-[46px]"
                              : "text-[64px]"
                        }`}
                      >
                        {item.nomeCurto}
                      </div>
                    </div>
                    <div className="relative h-[190px] shrink-0 overflow-hidden bg-white/10 lg:h-[200px]">
                      <Image
                        src={item.foto}
                        alt={emBreve ? "" : `Fachada do ${emp.nome}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                        className={`object-cover transition-transform duration-700 ${
                          emBreve
                            ? "scale-110 blur-md"
                            : "group-hover:scale-105"
                        }`}
                      />
                      {!emBreve && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-[10px] tracking-[2px] whitespace-nowrap text-white uppercase backdrop-blur-sm">
                          <span
                            className="h-[5px] w-[5px] shrink-0 rotate-45 bg-current"
                            aria-hidden="true"
                          />
                          {item.status}
                        </span>
                      )}
                      {emBreve && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <span className="text-xs tracking-[0.3em] text-white uppercase">
                            Em breve
                          </span>
                        </div>
                      )}
                      <span
                        className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center bg-white text-lg font-bold transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: item.cor }}
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
            <AnimateOnScroll delay={(EMPREENDIMENTOS_HOME.length % 4) * 80} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <div className="flex h-[460px] flex-col justify-center gap-5.5 rounded-md bg-[#f2f6e8] p-9 lg:h-[500px]">
                <p className="font-heading text-[28px] leading-[1.25] font-normal text-[#333136]">
                  Seja o primeiro a conhecer os{" "}
                  <strong className="font-bold">
                    próximos lançamentos<span className="text-[#a3c859]">.</span>
                  </strong>
                </p>
                <Link
                  href="/contato"
                  className="inline-flex h-12 items-center self-start rounded-full bg-[#333136] px-6 text-sm font-bold text-white transition-colors hover:bg-[#a3c859] hover:text-[#1f1d22]"
                >
                  Quero ser avisado
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section id="mapa" className="bg-[#1f1d22] px-6 py-20 text-white sm:px-10 lg:px-[120px] lg:py-[110px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-12">
          <AnimateOnScroll>
            <div className="flex flex-col gap-5">
              <p className="text-sm tracking-[0.3em] text-white/60 uppercase">
                Onde estamos
              </p>
              <h2 className="font-heading max-w-[760px] text-[30px] leading-[1.15] font-normal tracking-[-0.5px] sm:text-[36px] lg:text-[44px]">
                Cenários que estão mudando{" "}
                <strong className="font-bold">
                  Porto União e União da Vitória
                  <span className="text-[#a3c859]">.</span>
                </strong>
              </h2>
              <p className="max-w-xl text-[17px] leading-relaxed text-white/70">
                Clique em um empreendimento para ver onde ele está.
              </p>
            </div>
          </AnimateOnScroll>
          <ProjectMap />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
