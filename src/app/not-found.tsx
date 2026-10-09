import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { contato } from "@/content";

export const metadata: Metadata = {
  title: "Página não encontrada | Conbrain",
  description: "O endereço que você procurou não existe ou mudou de lugar.",
};

export default function NaoEncontrada() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#1f1d22] px-6 py-20 text-center text-white">
      <Link href="/" className="relative h-10 w-36">
        <Image
          src="/images/logo/conbrain-logo-white.png"
          alt="Conbrain"
          fill
          className="object-contain"
          priority
        />
      </Link>
      <div className="flex max-w-xl flex-col gap-5">
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
          Erro 404
        </p>
        <h1 className="font-heading text-[34px] leading-[1.12] font-normal sm:text-[48px]">
          Esta página não existe
          <span className="text-[#a3c859]">.</span>
        </h1>
        <p className="text-base leading-relaxed text-white/75">
          O endereço pode ter mudado ou estar digitado errado. Que tal
          começar pela página inicial ou falar direto com a gente?
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-[#a3c859] px-7 py-3.5 text-sm font-bold text-[#1f1d22] transition-opacity hover:opacity-85"
        >
          Ir para a página inicial
        </Link>
        <a
          href={`https://wa.me/${contato.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold transition-colors hover:border-white"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </main>
  );
}
