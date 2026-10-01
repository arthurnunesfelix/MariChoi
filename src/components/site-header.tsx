"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";

const links = [
  { href: "#protocolos", label: "Tratamentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#resultados", label: "Resultados" },
  { href: "#localizacao", label: "Localização" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "border-b border-espresso/10 bg-cream/85 py-3 shadow-[0_10px_40px_rgba(34,27,20,0.07)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-colors duration-500 md:px-8 ${
            open ? "text-cream" : "text-espresso"
          }`}
        >
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="flex items-baseline gap-1.5"
            aria-label="Mari Choi — início"
          >
            <span className="font-display text-2xl italic leading-none">Mari</span>
            <span className="text-lg font-bold tracking-tight">Choi</span>
            <span className="ml-0.5 hidden size-1.5 rounded-full bg-gold sm:block" />
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-wide lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-espresso/70 transition-colors duration-300 hover:text-espresso"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-[13px] font-semibold text-cream transition-all duration-300 hover:bg-gold hover:text-espresso md:inline-flex"
            >
              Agendar consulta
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className={`grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
                open
                  ? "border-cream/25 text-cream hover:bg-cream/10"
                  : "border-espresso/15 text-espresso hover:bg-espresso/5"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile immersive menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-espresso text-cream transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-30%] size-[420px] rounded-full bg-[radial-gradient(circle,rgba(193,144,79,0.25),transparent_65%)]"
        />
        <nav className="mt-28 flex flex-col px-8">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
              className={`border-b border-cream/10 py-4 font-display text-4xl transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          className={`mt-auto p-8 transition-all delay-300 duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-espresso"
          >
            <MessageCircle className="size-4.5" />
            Agendar pelo WhatsApp
          </a>
          <p className="mt-6 text-sm leading-relaxed text-cream/50">
            Av. dos Ipês, 825 — Jardim dos Ipês, São Paulo
            <br />
            Terça a sábado · 10h às 18h
          </p>
        </div>
      </div>
    </>
  );
}
