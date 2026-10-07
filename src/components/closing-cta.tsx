import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { contato } from "@/content";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#1f1d22] px-6 py-24 text-center text-white sm:px-10 lg:py-36">
      <Image
        src="/images/home/fechamento-noturno.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <AnimateOnScroll className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7">
          <p className="text-sm tracking-[0.3em] text-white/70 uppercase">
            Fale com a Conbrain
          </p>
          <h2 className="font-heading text-[30px] leading-[1.15] font-normal tracking-[-0.5px] text-balance sm:text-[42px] lg:text-[52px]">
            Vamos conversar sobre o seu próximo{" "}
            <strong className="font-bold">
              cenário<span className="text-[#a3c859]">.</span>
            </strong>
          </h2>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${contato.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-xs font-bold tracking-[0.2em] text-[#333136] uppercase transition-colors hover:bg-[#a3c859] hover:text-[#1f1d22]"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
