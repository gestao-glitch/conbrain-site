import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { contato } from "@/content";
import { empreendimentos, getEmpreendimento } from "@/data/empreendimentos";

export function generateStaticParams() {
  return empreendimentos.map((emp) => ({ slug: emp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const emp = getEmpreendimento(slug);
  if (!emp) return {};

  return {
    title: `${emp.nome} | Conbrain`,
    description: emp.descricao,
  };
}

export default async function EmpreendimentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const emp = getEmpreendimento(slug);

  if (!emp) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-chumbo pt-20">
        {emp.status === "Pré-lançamento" ? (
          <div className="absolute inset-0 flex items-center justify-center bg-chumbo-dark">
            <span className="text-3xl font-light tracking-[0.4em] text-white/10 uppercase">
              Em breve
            </span>
          </div>
        ) : (
          <Image
            src={emp.imagem}
            alt={emp.nome}
            fill
            sizes="100vw"
            className="object-cover opacity-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-chumbo via-chumbo/40 to-chumbo/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
          <Link
            href="/empreendimentos"
            className="mb-6 inline-block text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-verde"
          >
            &larr; Todos os empreendimentos
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-sm border border-verde/30 px-2.5 py-1 text-[10px] tracking-widest text-verde uppercase">
              {emp.status}
            </span>
            {emp.caixa && (
              <span className="inline-block rounded-sm bg-white/10 px-2.5 py-1 text-[10px] tracking-widest text-white/60 uppercase">
                Financiamento Caixa
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-2xl text-3xl font-light leading-snug tracking-wide text-white lg:text-5xl">
            {emp.nome}
          </h1>
          <p className="mt-2 text-xs tracking-[0.3em] text-verde uppercase">
            {emp.tipo}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll>
            <p className="max-w-2xl text-sm leading-loose text-chumbo/60 lg:text-base">
              {emp.descricao}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
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

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
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
                  <p className="mt-1 text-sm text-chumbo">{item.valor}</p>
                </div>
              ))}
            </div>

            {emp.status !== "Entregue" && (
              <a
                href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(`Olá, tenho interesse no ${emp.nome}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-sm bg-verde px-8 py-3 text-xs font-medium tracking-[0.15em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
              >
                Tenho interesse
              </a>
            )}
          </AnimateOnScroll>

          {emp.galeria.length > 0 && (
            <AnimateOnScroll>
              <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {emp.galeria.map((img) => (
                  <div
                    key={img.alt}
                    className="relative min-h-[220px] overflow-hidden rounded lg:min-h-[280px]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-chumbo px-6 py-20 text-center lg:py-28">
        <AnimateOnScroll>
          <p className="mb-2 text-xs tracking-[0.4em] text-verde uppercase">
            Interessado no {emp.nome}?
          </p>
          <h2 className="text-xl font-light tracking-wide text-white lg:text-2xl">
            Fale com nossa equipe comercial
          </h2>
          <a
            href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(`Olá, tenho interesse no ${emp.nome}.`)}`}
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
