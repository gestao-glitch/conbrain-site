import Link from "next/link";
import { contato } from "@/content";

export function Footer() {
  return (
    <footer className="bg-chumbo-dark">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-[0.35em] text-white uppercase">
              Con<span className="text-verde">brain</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              Edificamos cidades que transformam vidas.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-verde uppercase">Navegação</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/sobre", label: "Sobre" },
                { href: "/empreendimentos", label: "Empreendimentos" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs tracking-[0.2em] text-verde uppercase">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <p>{contato.endereco_linha1}</p>
              <p>{contato.endereco_linha2}</p>
              <p>{contato.telefone}</p>
              <a
                href={`https://instagram.com/${contato.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-verde"
              >
                @{contato.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <span className="text-xs text-white/25 tracking-widest">
            &copy; {new Date().getFullYear()} Conbrain Incorporadora
          </span>
          <div className="flex gap-6">
            <a
              href={`https://instagram.com/${contato.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-white/25 uppercase transition-colors hover:text-verde"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-white/25 uppercase transition-colors hover:text-verde"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
