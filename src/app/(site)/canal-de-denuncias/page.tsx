import type { Metadata } from "next";
import { FormularioRelato } from "./formulario-relato";

export const metadata: Metadata = {
  title: "Canal de Denúncias | Conbrain",
  description:
    "Canal seguro e sigiloso para relatar condutas que violem o Código de Conduta, as políticas internas ou a legislação, conforme a Lei nº 14.457/22.",
};

const GARANTIAS = [
  {
    titulo: "Anônimo",
    texto: "Você não precisa se identificar. O canal não registra nome, IP ou dados de quem relata.",
  },
  {
    titulo: "Sigiloso",
    texto: "Os relatos são tratados com total confidencialidade e usados só para a apuração.",
  },
  {
    titulo: "Apurado pela CIPA",
    texto: "A apuração é conduzida com isenção e imparcialidade pela Comissão Interna de Prevenção de Acidentes.",
  },
];

export default function CanalDeDenuncias() {
  return (
    <>
      <section className="bg-[#1f1d22] px-6 pt-36 pb-16 text-white sm:px-10 lg:px-[120px] lg:pt-44 lg:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <p className="text-sm tracking-[0.3em] text-white/70 uppercase">
            Lei nº 14.457/22
          </p>
          <h1 className="font-heading max-w-3xl text-[34px] leading-[1.1] font-normal sm:text-[48px] lg:text-[60px]">
            Canal de <strong className="font-bold">Denúncias</strong>
            <span className="text-[#a3c859]">.</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Este espaço foi criado para que colaboradores, prestadores de serviço
            e fornecedores possam relatar, com segurança e sigilo, condutas que
            violem o nosso Código de Conduta, nossas políticas internas ou a
            legislação, inclusive casos de assédio moral e sexual.
          </p>
          <a
            href="#relato"
            className="mt-2 inline-flex h-12 w-fit items-center rounded-full bg-[#a3c859] px-7 text-sm font-bold text-[#1f1d22] transition-colors hover:bg-white"
          >
            Fazer um relato
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:px-10 lg:px-[120px] lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-md bg-[#dddcd8] sm:grid-cols-3">
          {GARANTIAS.map((g) => (
            <div key={g.titulo} className="flex flex-col gap-2 bg-white p-7 lg:p-9">
              <p className="font-heading text-xl font-bold text-chumbo">
                {g.titulo}
                <span className="text-[#a3c859]">.</span>
              </p>
              <p className="text-[15px] leading-relaxed text-[#55525a]">{g.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="relato"
        className="scroll-mt-24 bg-[#f7f7f5] px-6 py-16 sm:px-10 lg:px-[120px] lg:py-24"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm tracking-[0.3em] text-[#5f5c64] uppercase">
              Realizar relato
            </p>
            <h2 className="font-heading text-[30px] leading-[1.15] font-normal text-[#333136] sm:text-[36px] lg:text-[44px]">
              Conte o que <strong className="font-bold">aconteceu</strong>
              <span className="text-[#a3c859]">.</span>
            </h2>
            <p className="text-base leading-relaxed text-[#55525a]">
              Sua participação é fundamental para construirmos, juntos, um
              ambiente cada vez mais seguro, transparente e alinhado aos nossos
              valores. As perguntas com * são obrigatórias.
            </p>
          </div>
          <FormularioRelato />
        </div>
      </section>
    </>
  );
}
