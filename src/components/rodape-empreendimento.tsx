import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { contato } from "@/content";
import { BotaoPreferenciasCookies } from "./medicao-e-cookies";

/* Rodapé padrão das páginas de empreendimento: mesma estrutura e conteúdo em
   todas (marca, atendimento, links, CNPJ e aviso legal), com as cores e o logo
   de cada uma. */

export type TemaRodape = {
  fundo: string;
  texto: string;
  /** Frase, links em destaque e títulos. */
  forte: string;
  /** Rótulos das colunas e cor ao passar o mouse. */
  destaque: string;
  /** Linha divisória. */
  borda: string;
  /** Fundo da faixa final (opcional; padrão: o mesmo do rodapé). */
  faixa?: string;
  /** true quando o fundo é claro: usa o logo escuro da Conbrain. */
  claro?: boolean;
};

export function RodapeEmpreendimento({
  marca,
  frase,
  tema,
  mensagemWhatsApp,
  aviso,
}: {
  /** Logo do empreendimento. */
  marca: ReactNode;
  frase?: string;
  tema: TemaRodape;
  mensagemWhatsApp: string;
  /** Aviso legal do empreendimento (imagens ilustrativas, incorporação etc.). */
  aviso?: string;
}) {
  const wa = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
  const estilo = {
    "--rod-forte": tema.forte,
    "--rod-destaque": tema.destaque,
    "--rod-borda": tema.borda,
    backgroundColor: tema.fundo,
    color: tema.texto,
  } as CSSProperties;
  const rotulo = "mb-1 text-xs font-bold tracking-[0.2em] uppercase text-[var(--rod-destaque)]";
  const link = "flex min-h-8 w-fit items-center transition-colors hover:text-[var(--rod-destaque)]";

  return (
    <footer style={estilo}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-14 pb-10 sm:px-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12 lg:px-16">
        <div className="flex flex-col gap-5">
          {marca}
          {frase && (
            <p className="max-w-[320px] text-[15px] leading-relaxed text-[var(--rod-forte)]">{frase}</p>
          )}
          <Link href="/" className="mt-1 flex w-fit flex-col gap-2" aria-label="Conbrain — página inicial">
            <span className="text-xs tracking-[0.2em] uppercase opacity-80">Realização</span>
            {tema.claro ? (
              <Image src="/images/logo/conbrain-logo-2025.png" alt="Conbrain" width={1600} height={674} className="h-10 w-auto" />
            ) : (
              <Image src="/images/logo/conbrain-logo-white-recortado.png" alt="Conbrain" width={1050} height={88} className="h-[18px] w-auto" />
            )}
          </Link>
        </div>

        <div className="flex flex-col gap-1.5 text-[15px]">
          <span className={rotulo}>Atendimento</span>
          <a href={wa} target="_blank" rel="noopener noreferrer" className={link}>
            WhatsApp {contato.telefone}
          </a>
          <a href={`mailto:${contato.email}`} className={link}>
            {contato.email}
          </a>
          <a href={`https://instagram.com/${contato.instagram}`} target="_blank" rel="noopener noreferrer" className={link}>
            Instagram @{contato.instagram}
          </a>
          <span className="mt-2 text-sm leading-relaxed">
            Stand comercial: {contato.stand_endereco}
            <br />
            {contato.horario_dias}, {contato.horario_horas}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 text-[15px]">
          <span className={rotulo}>Conbrain</span>
          <Link href="/#empreendimentos" className={link}>
            Todos os empreendimentos
          </Link>
          <Link href="/contato#visita" className={link}>
            Agendar uma visita
          </Link>
          <Link href="/politica-de-privacidade" className={link}>
            Política de Privacidade
          </Link>
          <BotaoPreferenciasCookies className={link} />
          <Link href="/" className={`${link} mt-1 text-sm tracking-widest uppercase`}>
            &larr; Voltar para a Conbrain
          </Link>
        </div>
      </div>

      <div
        className="border-t border-[var(--rod-borda)] px-6 pt-6 pb-24 text-[13px] leading-relaxed sm:px-10 sm:pb-6 lg:px-16"
        style={tema.faixa ? { backgroundColor: tema.faixa } : undefined}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          <p>&copy; {new Date().getFullYear()} Incorporadora Conbrain LTDA · CNPJ 36.325.713/0001-72</p>
          {aviso && <p className="opacity-80">{aviso}</p>}
        </div>
      </div>
    </footer>
  );
}
