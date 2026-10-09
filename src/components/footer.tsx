import Link from "next/link";
import Image from "next/image";
import { contato } from "@/content";

export function Footer() {
  return (
    <footer className="bg-chumbo-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="block w-fit">
              <Image
                src="/images/logo/conbrain-logo-completo-white.png"
                alt="Conbrain Incorporadora"
                width={228}
                height={120}
                className="h-[120px] w-auto max-w-full object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Edificamos cidades que transformam vidas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-verde uppercase">Navegação</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/sobre", label: "Sobre" },
                { href: "/#empreendimentos", label: "Empreendimentos" },
                { href: "/contato", label: "Contato" },
                { href: "/politica-de-privacidade", label: "Política de Privacidade" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-verde uppercase">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <p>{contato.endereco_linha1}</p>
              <p>{contato.endereco_linha2}</p>
              <a
                href={`https://wa.me/${contato.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-verde"
              >
                {contato.telefone}
              </a>
              <a
                href="mailto:comercial@conbrain.com.br"
                className="w-fit transition-colors hover:text-verde"
              >
                comercial@conbrain.com.br
              </a>
              <a
                href={`https://instagram.com/${contato.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-verde"
              >
                @{contato.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <span className="text-xs tracking-widest text-white/55">
            &copy; {new Date().getFullYear()} Incorporadora Conbrain LTDA · CNPJ
            36.325.713/0001-72
          </span>
          <a
            href={`https://instagram.com/${contato.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-white/55 uppercase transition-colors hover:text-verde"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
