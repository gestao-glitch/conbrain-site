import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Conbrain",
  description:
    "Fale com a Conbrain pelo WhatsApp, e-mail ou visite o nosso stand comercial em Porto União (SC).",
};

export default function ContatoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
