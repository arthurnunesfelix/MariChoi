import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mari Choi | Estética & Dermatologia em São Paulo",
  description:
    "Protocolos exclusivos para realçar sua beleza com naturalidade. Agende sua avaliação VIP na clínica Mari Choi.",
  authors: [{ name: "Mari Choi" }],
  openGraph: {
    title: "Mari Choi | Sua melhor versão, com naturalidade",
    description:
      "Estética e dermatologia de alto padrão com atendimento individualizado em São Paulo.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 1500,
        alt: "Especialista Mari Choi em ambiente clínico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${plusJakarta.variable} ${playfair.variable} bg-[#faf6ef] text-[#2f2721] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
