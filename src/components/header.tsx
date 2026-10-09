"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { contato } from "@/content";
import { MENU_EMPREENDIMENTOS } from "@/data/menu-empreendimentos";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 50,
    () => false
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const themed = isHome;
  const [menuOpen, setMenuOpen] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const scrolled = useScrolled();
  const onLight = isHome && (scrolled || menuOpen);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        themed
          ? onLight
            ? "border-b border-chumbo/10 bg-white/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
          : scrolled || menuOpen
            ? "bg-chumbo/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-6">
          <Link href="/" className="relative h-10 w-36 shrink-0">
            <Image
              src="/images/logo/conbrain-logo-white.png"
              alt="Conbrain"
              fill
              className={`object-contain object-left transition-[filter] duration-300 ${onLight ? "brightness-0" : ""}`}
              priority
            />
          </Link>
          {!themed && (
            <Link
              href="/"
              className="hidden text-xs tracking-[0.2em] text-white/50 uppercase transition-colors hover:text-verde sm:inline"
            >
              &larr; Página inicial
            </Link>
          )}
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "/sobre", label: "Sobre", dropdown: false },
            { href: "/#empreendimentos", label: "Empreendimentos", dropdown: true },
            { href: "/contato", label: "Contato", dropdown: false },
          ].map((link) => {
            const linkClass = `text-xs tracking-[0.2em] uppercase transition-colors ${themed ? (onLight ? "text-chumbo/60 hover:text-verde-dark" : "text-white/85 hover:text-verde") : "text-white/50 hover:text-verde"}`;
            if (!link.dropdown) {
              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              );
            }
            return (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 ${linkClass}`}
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="M2 3.5l3 3 3-3" />
                  </svg>
                </Link>
                <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="w-72 overflow-hidden rounded-md bg-white py-2 shadow-xl ring-1 ring-black/5">
                    {MENU_EMPREENDIMENTOS.map((emp) => (
                      <Link
                        key={emp.slug}
                        href={`/empreendimentos/${emp.slug}`}
                        className="flex items-center justify-between gap-4 px-5 py-2.5 text-sm tracking-normal text-chumbo normal-case transition-colors hover:bg-[#f2f6e8]"
                      >
                        <span className="font-bold">{emp.nome}</span>
                        <span className="text-xs tracking-wider text-chumbo/60 uppercase">
                          {emp.status}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/#empreendimentos"
                      className="mt-1 block border-t border-chumbo/10 px-5 pt-3 pb-2 text-xs font-bold tracking-wider text-verde-dark uppercase hover:text-chumbo"
                    >
                      Ver todos &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <a
            href={`https://wa.me/${contato.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-verde px-6 text-xs font-bold tracking-[0.14em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
          >
            Fale conosco
          </a>
        </div>

        <button
          className={`md:hidden ${onLight ? "text-chumbo" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          className={`border-t px-6 py-8 backdrop-blur-sm md:hidden ${
            themed
              ? "border-chumbo/10 bg-white/95"
              : "border-white/10 bg-chumbo/95"
          }`}
        >
          <div className="flex flex-col gap-6">
            {!themed && (
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-verde"
              >
                &larr; Página inicial
              </Link>
            )}
            {(() => {
              const mobileLink = `text-sm tracking-[0.2em] uppercase transition-colors ${themed ? "text-chumbo/70 hover:text-verde-dark" : "text-white/70 hover:text-verde"}`;
              return (
                <>
                  <Link
                    href="/sobre"
                    onClick={() => setMenuOpen(false)}
                    className={mobileLink}
                  >
                    Sobre
                  </Link>
                  <div className="flex flex-col gap-4">
                    <button
                      type="button"
                      onClick={() => setEmpOpen(!empOpen)}
                      aria-expanded={empOpen}
                      className={`flex items-center gap-2 self-start ${mobileLink}`}
                    >
                      Empreendimentos
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-200 ${empOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <path d="M2 3.5l3 3 3-3" />
                      </svg>
                    </button>
                    {empOpen && (
                      <div
                        className={`flex flex-col gap-3.5 border-l pl-4 ${themed ? "border-chumbo/15" : "border-white/20"}`}
                      >
                        {MENU_EMPREENDIMENTOS.map((emp) => (
                          <Link
                            key={emp.slug}
                            href={`/empreendimentos/${emp.slug}`}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center justify-between gap-3 text-sm transition-colors ${themed ? "text-chumbo hover:text-verde-dark" : "text-white hover:text-verde"}`}
                          >
                            <span className="font-bold">{emp.nome}</span>
                            <span
                              className={`text-xs tracking-wider uppercase ${themed ? "text-chumbo/60" : "text-white/60"}`}
                            >
                              {emp.status}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/#empreendimentos"
                          onClick={() => setMenuOpen(false)}
                          className="text-xs font-bold tracking-wider text-verde-dark uppercase"
                        >
                          Ver todos &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/contato"
                    onClick={() => setMenuOpen(false)}
                    className={mobileLink}
                  >
                    Contato
                  </Link>
                </>
              );
            })()}
            <a
              href={`https://wa.me/${contato.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center self-start rounded-full bg-verde px-6 text-xs font-bold tracking-[0.15em] text-chumbo uppercase"
            >
              Fale conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
