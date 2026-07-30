import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const empreendimentos = [
  {
    slug: "beos-grand-central",
    nome: "Bëos Grand Central",
    tipo: "Residencial de alto padrão",
    status: "Em obras",
    caixa: true,
    imagem: "/images/beos/fachada-01.png",
    galeria: [
      { src: "/images/beos/fachada-02.png", alt: "Entrada Bëos" },
      { src: "/images/interiores/beos-sala.png", alt: "Sala Studio" },
      { src: "/images/interiores/beos-cozinha.png", alt: "Cozinha Studio" },
    ],
    descricao:
      "O mais ambicioso projeto da Conbrain. Fachada contemporânea com design orgânico, acabamentos premium e conceito Smart Living integrado. Apartamentos de 1 e 2 dormitórios pensados para quem valoriza sofisticação e praticidade.",
    destaques: ["Smart Living", "Fachada autoral", "Rooftop", "1 e 2 dormitórios"],
  },
  {
    slug: "upper-nest",
    nome: "Upper Nest",
    tipo: "Residencial",
    status: "Lançamento",
    caixa: true,
    imagem: "/images/upper-nest/fachada-01.png",
    galeria: [
      { src: "/images/interiores/upper-nest-sala.png", alt: "Sala Upper Nest" },
    ],
    descricao:
      "Viver acima do comum. Fachada com linhas orgânicas e curvas que marcam a paisagem de Porto União. Apartamentos de 55m² e 75m² com acabamentos de alto padrão e vista privilegiada.",
    destaques: ["Fachada icônica", "Vista panorâmica", "55m² e 75m²", "Acabamento premium"],
  },
  {
    slug: "monverdant",
    nome: "Mon'Verdant",
    tipo: "Residencial",
    status: "Em obras",
    caixa: true,
    imagem: "/images/monverdant/fachada-01.png",
    galeria: [],
    descricao:
      "A natureza como vizinha. Empreendimento que integra verde e arquitetura em harmonia, com jardim vertical na fachada e áreas de lazer que privilegiam o contato com a natureza.",
    destaques: ["Jardim vertical", "Integração com natureza", "Lazer completo"],
  },
  {
    slug: "residencial-taiji",
    nome: "Residencial Taiji",
    tipo: "Residencial",
    status: "Entregue",
    caixa: false,
    imagem: "/images/taiji/fachada-01.png",
    galeria: [],
    descricao:
      "O empreendimento que inaugurou a trajetória da Conbrain. Equilíbrio entre funcionalidade e design, entregue com excelência e dentro do prazo. Todas as unidades comercializadas.",
    destaques: ["100% vendido", "Entregue no prazo", "Primeiro empreendimento"],
  },
  {
    slug: "residencial-agave",
    nome: "Residencial Ágave",
    tipo: "Residencial",
    status: "Entregue",
    caixa: false,
    imagem: "/images/agave/fachada-01.png",
    galeria: [],
    descricao:
      "Resistência e elegância inspiradas na natureza. Projeto consolidado no portfólio Conbrain, com todas as unidades entregues e moradores satisfeitos.",
    destaques: ["100% vendido", "Entregue no prazo", "Portfólio consolidado"],
  },
  {
    slug: "mastro",
    nome: "Mastro",
    tipo: "Residencial",
    status: "Em obras",
    caixa: true,
    imagem: "/images/mastro/obra-drone.jpg",
    galeria: [],
    descricao:
      "Empreendimento que traz um conceito náutico sofisticado para Porto União. Com obra em andamento e financiamento pela Caixa, o Mastro combina design diferenciado com acessibilidade.",
    destaques: ["Conceito náutico", "Em construção", "Financiamento Caixa"],
  },
  {
    slug: "pier-225",
    nome: "Pier 225",
    tipo: "Residencial",
    status: "Pré-lançamento",
    caixa: false,
    imagem: "/images/pier225/logo.png",
    galeria: [],
    descricao:
      "O mais novo projeto da Conbrain está chegando. Pier 225 traz uma proposta única com paleta que combina verde musgo, grafite e cobre — sofisticação e natureza em equilíbrio. Em breve, mais detalhes.",
    destaques: ["Em breve", "Novo conceito", "Pré-lançamento"],
  },
];

export default function Empreendimentos() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center bg-chumbo pt-20">
        <Image
          src="/images/beos/fachada-02.png"
          alt="Empreendimentos Conbrain"
          fill
                    sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-chumbo/90 to-chumbo/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="mb-6 text-xs tracking-[0.4em] text-verde uppercase">
            Portfólio
          </p>
          <h1 className="max-w-2xl text-3xl font-light leading-snug tracking-wide text-white lg:text-4xl">
            Nossos empreendimentos
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40">
            7 projetos que estão transformando Porto União. Do conceito Smart
            Living ao design autoral de fachadas — cada empreendimento é uma
            assinatura Conbrain.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-28">
            {empreendimentos.map((emp, i) => (
              <AnimateOnScroll key={emp.slug}>
                <div id={emp.slug} className="scroll-mt-24">
                  <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Imagem principal + galeria */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative min-h-[360px] overflow-hidden rounded lg:min-h-[440px]">
                        {emp.status === "Pré-lançamento" ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-chumbo/5">
                            <span className="text-3xl font-light tracking-[0.4em] text-chumbo/10 uppercase">Em breve</span>
                          </div>
                        ) : (
                          <Image
                            src={emp.imagem}
                            alt={emp.nome}
                            fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                      {emp.galeria.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-3">
                          {emp.galeria.map((img) => (
                            <div
                              key={img.alt}
                              className="relative min-h-[100px] overflow-hidden rounded"
                            >
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block rounded-sm border border-verde/30 px-2.5 py-1 text-[10px] tracking-widest text-verde uppercase">
                          {emp.status}
                        </span>
                        {emp.caixa && (
                          <span className="inline-block rounded-sm bg-chumbo/5 px-2.5 py-1 text-[10px] tracking-widest text-chumbo/50 uppercase">
                            Financiamento Caixa
                          </span>
                        )}
                      </div>

                      <h2 className="mt-4 text-2xl font-light tracking-wide text-chumbo lg:text-3xl">
                        {emp.nome}
                      </h2>
                      <p className="mt-1 text-xs tracking-widest text-verde uppercase">
                        {emp.tipo}
                      </p>
                      <p className="mt-6 text-sm leading-loose text-chumbo/60">
                        {emp.descricao}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {emp.destaques.map((d) => (
                          <span
                            key={d}
                            className="rounded-sm bg-verde/10 px-3 py-1.5 text-[11px] tracking-wider text-verde-dark"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 h-[3px] w-8 rounded-sm bg-verde" />

                      <div className="mt-8 grid grid-cols-2 gap-6">
                        {[
                          { label: "Localização", valor: "Porto União, SC" },
                          { label: "Tipologia", valor: "Apartamentos" },
                          { label: "Incorporação", valor: "Conbrain" },
                          { label: "Construção", valor: "Conbrain" },
                        ].map((item) => (
                          <div key={item.label}>
                            <p className="text-[11px] tracking-widest text-chumbo/35 uppercase">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-chumbo">
                              {item.valor}
                            </p>
                          </div>
                        ))}
                      </div>

                      {emp.status !== "Entregue" && (
                        <a
                          href={`https://wa.me/5542998756915?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20${encodeURIComponent(emp.nome)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-8 inline-block rounded-sm bg-verde px-8 py-3 text-xs font-medium tracking-[0.15em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
                        >
                          Tenho interesse
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-chumbo px-6 py-20 text-center lg:py-28">
        <AnimateOnScroll>
          <p className="mb-2 text-xs tracking-[0.4em] text-verde uppercase">
            Não encontrou o que procura?
          </p>
          <h2 className="text-xl font-light tracking-wide text-white lg:text-2xl">
            Fale com nossa equipe comercial
          </h2>
          <a
            href="https://wa.me/5542998756915"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-verde px-10 py-3.5 text-xs font-medium tracking-[0.2em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
          >
            Falar pelo WhatsApp
          </a>
        </AnimateOnScroll>
      </section>
    </>
  );
}
