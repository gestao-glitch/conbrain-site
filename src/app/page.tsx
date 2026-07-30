import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const empreendimentos = [
  { slug: "beos-grand-central", nome: "Bëos Grand Central", tipo: "Residencial de alto padrão", status: "Em obras", caixa: true, featured: true, imagem: "/images/beos/fachada-01.png" },
  { slug: "upper-nest", nome: "Upper Nest", tipo: "Residencial", status: "Lançamento", caixa: true, imagem: "/images/upper-nest/fachada-01.png" },
  { slug: "monverdant", nome: "Mon'Verdant", tipo: "Residencial", status: "Em obras", caixa: true, imagem: "/images/monverdant/fachada-01.png" },
  { slug: "residencial-taiji", nome: "Residencial Taiji", tipo: "Residencial", status: "Entregue", caixa: false, imagem: "/images/taiji/fachada-01.png" },
  { slug: "residencial-agave", nome: "Residencial Ágave", tipo: "Residencial", status: "Entregue", caixa: false, imagem: "/images/agave/fachada-01.png" },
  { slug: "mastro", nome: "Mastro", tipo: "Residencial", status: "Em obras", caixa: true, imagem: "/images/mastro/obra-drone.jpg" },
  { slug: "pier-225", nome: "Pier 225", tipo: "Residencial", status: "Pré-lançamento", caixa: false, imagem: "/images/pier225/logo.png" },
];

const diferenciais = [
  {
    titulo: "Smart Living",
    desc: "Apartamentos com infraestrutura inteligente, automação e eficiência energética para o morar contemporâneo.",
    icone: "◇",
  },
  {
    titulo: "Design Autoral",
    desc: "Fachadas com identidade própria — cada empreendimento é uma assinatura arquitetônica na cidade.",
    icone: "△",
  },
  {
    titulo: "Financiamento Caixa",
    desc: "Empreendimentos financiados pela Caixa Econômica Federal com as melhores condições do mercado.",
    icone: "□",
  },
  {
    titulo: "Entrega Completa",
    desc: "Do projeto à entrega das chaves, cuidamos de cada detalhe para que sua experiência seja impecável.",
    icone: "○",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-chumbo text-center">
        <Image
          src="/images/upper-nest/fachada-01.png"
          alt="Upper Nest — Empreendimento Conbrain"
          fill
                    sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chumbo/30 via-chumbo/50 to-chumbo/90" />
        <div className="relative z-10 px-6">
          <p className="mb-6 text-xs tracking-[0.4em] text-verde uppercase">
            Incorporadora &bull; Construtora
          </p>
          <h1 className="text-3xl font-light tracking-[0.3em] text-white uppercase sm:text-4xl lg:text-5xl lg:tracking-[0.4em]">
            Edificamos cidades
            <br />
            que transformam vidas
          </h1>
          <p className="mt-6 text-sm tracking-widest text-white/50">
            Inteligência construtiva e design urbano em Porto União, SC
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/empreendimentos"
              className="rounded-sm bg-verde px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
            >
              Conheça nossos empreendimentos
            </Link>
            <a
              href="https://wa.me/5542998756915"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-white/15 px-8 py-3.5 text-xs tracking-[0.15em] text-white/60 uppercase transition-colors hover:border-verde hover:text-verde"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] text-white/25 uppercase">
            Explore
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-verde to-transparent" />
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mb-16 max-w-xl">
              <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
                Por que Conbrain
              </p>
              <h2 className="text-2xl font-light leading-relaxed text-chumbo lg:text-3xl">
                Mais do que imóveis — criamos experiências de morar
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => (
              <AnimateOnScroll key={d.titulo} delay={i * 100}>
                <div className="group">
                  <span className="mb-4 block text-2xl text-verde transition-transform group-hover:scale-110">
                    {d.icone}
                  </span>
                  <h3 className="mb-2 text-sm font-medium tracking-widest text-chumbo uppercase">
                    {d.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-chumbo/50">
                    {d.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Empreendimentos */}
      <section className="bg-chumbo px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
                  Empreendimentos
                </p>
                <h2 className="text-2xl font-light text-white lg:text-3xl">
                  Cada projeto, um cenário único
                </h2>
              </div>
              <Link
                href="/empreendimentos"
                className="hidden text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-verde sm:block"
              >
                Ver todos &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-3 sm:grid-cols-2">
            {empreendimentos.map((emp, i) => (
              <AnimateOnScroll key={emp.slug} delay={i * 80}>
                <Link
                  href={`/empreendimentos#${emp.slug}`}
                  className={`group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded p-6 transition-transform hover:scale-[1.01] ${
                    emp.featured ? "sm:col-span-2 sm:min-h-[320px]" : ""
                  }`}
                >
                  {emp.status === "Pré-lançamento" ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-chumbo-dark">
                      <span className="text-2xl font-light tracking-[0.3em] text-white/10 uppercase">Em breve</span>
                    </div>
                  ) : (
                    <Image
                      src={emp.imagem}
                      alt={emp.nome}
                      fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-chumbo/90 via-chumbo/30 to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-normal tracking-[0.2em] text-white uppercase lg:text-lg">
                        {emp.nome}
                      </h3>
                      {emp.caixa && (
                        <span className="rounded-sm bg-white/10 px-2 py-0.5 text-[9px] tracking-wider text-white/60 uppercase">
                          Financ. Caixa
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs tracking-[0.15em] text-verde uppercase">
                      {emp.tipo}
                    </p>
                    <span className="mt-2 inline-block rounded-sm border border-verde/30 px-2.5 py-1 text-[10px] tracking-widest text-verde uppercase">
                      {emp.status}
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <Link
            href="/empreendimentos"
            className="mt-6 block text-center text-xs tracking-widest text-white/40 uppercase transition-colors hover:text-verde sm:hidden"
          >
            Ver todos &rarr;
          </Link>
        </div>
      </section>

      {/* Galeria de interiores */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
              Interiores
            </p>
            <h2 className="mb-10 text-2xl font-light text-chumbo lg:text-3xl">
              Acabamentos que fazem a diferença
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { src: "/images/interiores/beos-sala.png", alt: "Sala — Bëos Grand Central" },
              { src: "/images/interiores/beos-cozinha.png", alt: "Cozinha — Bëos Grand Central" },
              { src: "/images/interiores/upper-nest-sala.png", alt: "Sala — Upper Nest" },
            ].map((img, i) => (
              <AnimateOnScroll key={img.alt} delay={i * 100}>
                <div className="relative min-h-[280px] overflow-hidden rounded">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative min-h-[400px] overflow-hidden rounded">
                <Image
                  src="/images/equipe/bruno-sucharski.jpg"
                  alt="Bruno Sucharski — Fundador e CEO da Conbrain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
                  Quem está por trás
                </p>
                <h2 className="text-2xl font-light text-chumbo lg:text-3xl">
                  Bruno Sucharski
                </h2>
                <p className="mt-1 text-sm tracking-widest text-chumbo/40 uppercase">
                  Fundador &bull; CEO
                </p>
                <p className="mt-6 text-sm leading-loose text-chumbo/60">
                  Engenheiro civil com visão empreendedora, Bruno fundou a
                  Conbrain com o propósito de elevar o padrão construtivo de Porto
                  União. Com experiência em gestão de obras e incorporação
                  imobiliária, lidera uma equipe comprometida com inovação,
                  qualidade e transparência em cada projeto.
                </p>
                <blockquote className="mt-6 border-l-2 border-verde pl-4 text-sm leading-relaxed text-chumbo/70 italic">
                  &ldquo;Nosso compromisso não é apenas construir — é transformar a
                  forma como as pessoas vivem a cidade.&rdquo;
                </blockquote>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Números */}
      <section className="bg-chumbo px-6 py-16 lg:py-24">
        <AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4 sm:gap-12">
            {[
              { valor: "7", label: "Empreendimentos" },
              { valor: "+20mil", label: "m² em desenvolvimento" },
              { valor: "+300", label: "Unidades projetadas" },
              { valor: "2", label: "Empreendimentos entregues" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-light text-verde lg:text-4xl">
                  {item.valor}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.3em] text-white/30 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 text-center lg:py-28">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
              Realize seu investimento
            </p>
            <h2 className="text-xl font-light tracking-wide text-chumbo lg:text-2xl">
              Encontre o empreendimento ideal para você
            </h2>
            <p className="mt-4 text-sm text-chumbo/50">
              Financiamento facilitado pela Caixa Econômica Federal. Condições
              especiais para as primeiras unidades.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5542998756915?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20conhecer%20os%20empreendimentos%20da%20Conbrain."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-verde px-10 py-3.5 text-xs font-medium tracking-[0.2em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
              >
                Falar com um consultor
              </a>
              <Link
                href="/contato"
                className="rounded-sm border border-chumbo/15 px-8 py-3.5 text-xs tracking-[0.15em] text-chumbo/60 uppercase transition-colors hover:border-verde hover:text-verde"
              >
                Enviar mensagem
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
