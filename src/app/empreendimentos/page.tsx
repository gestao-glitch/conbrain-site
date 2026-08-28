import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { contato } from "@/content";
import { empreendimentos } from "@/data/empreendimentos";

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
            {empreendimentos.length} projetos que estão transformando Porto
            União. Do conceito Smart Living ao design autoral de fachadas —
            cada empreendimento é uma assinatura Conbrain.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {empreendimentos.map((emp, i) => (
              <AnimateOnScroll key={emp.slug} delay={i * 80}>
                <Link
                  href={`/empreendimentos/${emp.slug}`}
                  className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded transition-transform hover:scale-[1.01]"
                >
                  {emp.status === "Pré-lançamento" ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-chumbo">
                      <span className="text-2xl font-light tracking-[0.3em] text-white/10 uppercase">
                        Em breve
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={emp.imagem}
                      alt={emp.nome}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-chumbo/95 via-chumbo/40 to-transparent" />
                  <div className="relative z-10 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block rounded-sm border border-verde/30 px-2.5 py-1 text-[10px] tracking-widest text-verde uppercase">
                        {emp.status}
                      </span>
                      {emp.caixa && (
                        <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-[10px] tracking-widest text-white/60 uppercase">
                          Financ. Caixa
                        </span>
                      )}
                    </div>
                    <h2 className="mt-3 text-lg font-normal tracking-[0.15em] text-white uppercase">
                      {emp.nome}
                    </h2>
                    <p className="mt-1 text-xs tracking-[0.15em] text-verde uppercase">
                      {emp.tipo}
                    </p>
                    <span className="mt-4 inline-block text-xs tracking-widest text-white/50 uppercase transition-colors group-hover:text-verde">
                      Ver empreendimento &rarr;
                    </span>
                  </div>
                </Link>
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
            href={`https://wa.me/${contato.whatsapp}`}
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
