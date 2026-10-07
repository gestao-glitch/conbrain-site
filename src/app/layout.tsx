import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const jost = Lato({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const sourceSans = Lato({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conbrain.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Conbrain",
  },
  title: "Conbrain | Incorporadora e Construtora",
  description:
    "Edificamos cidades que transformam vidas. Incorporadora e construtora em Porto União, Santa Catarina.",
  keywords: [
    "incorporadora",
    "construtora",
    "Porto União",
    "Santa Catarina",
    "imóveis",
    "apartamentos",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jost.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
