"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-chumbo/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="relative h-10 w-36">
          <Image
            src="/images/logo/conbrain-logo-white.png"
            alt="Conbrain"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { href: "/sobre", label: "Sobre" },
            { href: "/empreendimentos", label: "Empreendimentos" },
            { href: "/contato", label: "Contato" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] text-white/50 uppercase transition-colors hover:text-verde"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5542998756915"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-verde px-5 py-2 text-[10px] font-medium tracking-[0.15em] text-chumbo uppercase transition-colors hover:bg-verde-dark"
          >
            Fale conosco
          </a>
        </div>

        <button
          className="text-white md:hidden"
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
        <div className="border-t border-white/10 bg-chumbo/95 px-6 py-8 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-6">
            {[
              { href: "/sobre", label: "Sobre" },
              { href: "/empreendimentos", label: "Empreendimentos" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-verde"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5542998756915"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block self-start rounded-sm bg-verde px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-chumbo uppercase"
            >
              Fale conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
