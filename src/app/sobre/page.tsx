import Image from "next/image";
import { sobre } from "@/content";

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-center bg-chumbo pt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <p className="mb-6 text-xs tracking-[0.4em] text-verde uppercase">
            Sobre a Conbrain
          </p>
          <h1 className="max-w-2xl text-3xl font-light leading-snug tracking-wide text-white lg:text-4xl">
            Inteligência construtiva a serviço de quem vive a cidade
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40">
            Construtora e incorporadora em Porto União, Santa Catarina.
            Transformamos terrenos em cenários onde histórias são vividas.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
              Nossa história
            </p>
            <h2 className="text-2xl font-light text-chumbo">
              {sobre.historia_titulo}
            </h2>
            <div className="mt-2 h-[3px] w-8 rounded-sm bg-verde" />
            <p className="mt-6 text-sm leading-loose text-chumbo/60">
              {sobre.historia_texto1}
            </p>
            <p className="mt-4 text-sm leading-loose text-chumbo/60">
              {sobre.historia_texto2}
            </p>
          </div>

          <div className="flex min-h-[300px] items-center justify-center rounded bg-chumbo/5">
            <span className="text-xs tracking-widest text-chumbo/20 uppercase">
              Foto — vista aérea drone Porto União
            </span>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="relative min-h-[450px] overflow-hidden rounded lg:col-span-2">
              <Image
                src="/images/equipe/bruno-sucharski.jpg"
                alt="Bruno Sucharski — Fundador e CEO da Conbrain"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <div className="lg:col-span-3">
              <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
                Liderança
              </p>
              <h2 className="text-2xl font-light text-chumbo lg:text-3xl">
                Bruno Sucharski
              </h2>
              <p className="mt-1 text-sm tracking-widest text-chumbo/40 uppercase">
                Fundador &bull; CEO
              </p>
              <p className="mt-6 text-sm leading-loose text-chumbo/60">
                {sobre.fundador_bio1}
              </p>
              <p className="mt-4 text-sm leading-loose text-chumbo/60">
                {sobre.fundador_bio2}
              </p>
              <blockquote className="mt-8 border-l-2 border-verde pl-4 text-sm leading-relaxed text-chumbo/70 italic">
                &ldquo;{sobre.fundador_quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs tracking-[0.4em] text-verde uppercase">
            O que nos move
          </p>
          <h2 className="mb-12 text-2xl font-light text-chumbo">
            Nossos valores
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Inovação",
                desc: "Soluções construtivas inteligentes que desafiam o convencional e antecipam tendências.",
              },
              {
                titulo: "Excelência",
                desc: "Cada detalhe importa — do projeto estrutural ao acabamento da última unidade.",
              },
              {
                titulo: "Transparência",
                desc: "Relações claras com clientes, parceiros e investidores em todas as etapas.",
              },
              {
                titulo: "Compromisso",
                desc: "Prazos cumpridos, qualidade garantida e satisfação como prioridade absoluta.",
              },
            ].map((valor) => (
              <div key={valor.titulo} className="border-t-2 border-verde/20 pt-6">
                <h3 className="mb-3 text-sm font-medium tracking-widest text-chumbo uppercase">
                  {valor.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-chumbo/50">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-chumbo px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { valor: "7", label: "Empreendimentos" },
            { valor: "+20mil", label: "m² desenvolvidos" },
            { valor: "+300", label: "Unidades projetadas" },
            { valor: "2", label: "Entregues" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-light text-verde">{item.valor}</p>
              <p className="mt-1 text-[11px] tracking-widest text-white/30 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
