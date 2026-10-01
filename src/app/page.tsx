import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { FaqAccordion } from "@/components/faq-accordion";
import { RevealController } from "@/components/reveal-controller";

const wa = (message: string) =>
  `https://wa.me/5511959087586?text=${encodeURIComponent(message)}`;

const whatsappUrl = wa(
  "Olá! Vim pelo site e gostaria de agendar uma avaliação VIP.",
);

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Av.+dos+Ip%C3%AAs,+825+-+Jardim+dos+Ip%C3%AAs,+S%C3%A3o+Paulo+-+SP";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const procedures = [
  {
    index: "01",
    title: "Micropigmentação",
    description:
      "Desenho personalizado para valorizar o olhar e os lábios com suavidade, simetria e resultado natural.",
    image: "/images/micropigmentacao.jpg",
  },
  {
    index: "02",
    title: "Lash Design",
    description:
      "Realce do olhar com design personalizado, respeitando o formato natural dos seus olhos.",
    image: "/images/cilios.jpg",
  },
  {
    index: "03",
    title: "Design de Cabelo",
    description:
      "Cortes, coloração e finalizações desenhadas para o seu estilo, com acabamento impecável.",
    image: "/images/design-cabelo.jpg",
  },
  {
    index: "04",
    title: "Trançamento",
    description:
      "Tranças personalizadas com técnica delicada, conforto e durabilidade para o seu dia a dia.",
    image: "/images/trancamento.jpg",
  },
  {
    index: "05",
    title: "Nail Design",
    description:
      "Unhas em gel e nail art exclusiva, com acabamento refinado e resultado duradouro.",
    image: "/images/nail-design.jpg",
  },
  {
    index: "06",
    title: "Fisioterapia",
    description:
      "Cuidado especializado para aliviar dores, recuperar movimentos e promover bem-estar.",
    image: "/images/fisioterapia.jpg",
  },
  {
    index: "07",
    title: "Podologia",
    description:
      "Saúde e beleza dos pés com técnica, higiene rigorosa e cuidado profissional.",
    image: "/images/podologia.jpg",
  },
  {
    index: "08",
    title: "Moda Íntima",
    description:
      "Peças exclusivas que valorizam seu conforto, sua feminilidade e sua autoestima.",
    image: "/images/moda-intima.jpg",
  },
];

const stats = [
  { value: "+300", label: "Pacientes satisfeitas" },
  { value: "100%", label: "Produtos importados e Anvisa" },
  { value: "1-on-1", label: "Atendimento exclusivo" },
  { value: "Expertise", label: "Corpo médico especialista" },
];

const marqueeItems = [
  "Micropigmentação",
  "Lash Design",
  "Design de Cabelo",
  "Trançamento",
  "Nail Design",
  "Fisioterapia",
  "Podologia",
  "Moda Íntima",
];

const faqs = [
  {
    question: "Os tratamentos doem?",
    answer:
      "Nosso foco é o seu conforto absoluto. Utilizamos técnicas delicadas e produtos de alta qualidade para minimizar qualquer desconforto durante os procedimentos.",
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer:
      "A duração varia conforme o protocolo e o seu perfil. Na avaliação, alinhamos expectativas reais e desenhamos o plano de manutenção ideal para você.",
  },
  {
    question: "Como saber o valor do meu tratamento?",
    answer:
      "Cada plano é individualizado. O investimento é apresentado após a avaliação profissional, com total transparência sobre etapas, sessões e benefícios.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "É um atendimento 1-on-1 com escuta cuidadosa, análise técnica e uma proposta personalizada — sempre respeitando a sua beleza natural.",
  },
];

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${
        light ? "text-champ" : "text-gold"
      }`}
    >
      <span className="h-px w-10 bg-current opacity-70" />
      {children}
    </p>
  );
}

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-10">
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.22em] text-espresso/60"
        >
          {item}
          <span className="size-1.5 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />
      <RevealController />
      <div className="noise" aria-hidden />

      <main>
        {/* ================= HERO ================= */}
        <section id="inicio" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-[-12%] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(193,144,79,0.16),transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-30%] left-[-15%] size-[480px] rounded-full bg-[radial-gradient(circle,rgba(236,213,166,0.35),transparent_65%)]"
          />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div data-reveal>
                <Eyebrow>Especialista em micropigmentação &amp; design de cílios</Eyebrow>
              </div>
              <h1
                data-reveal
                style={delay(90)}
                className="mt-7 font-display text-[clamp(2.9rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.01em] text-espresso"
              >
                A sua melhor versão revelada com{" "}
                <em className="italic text-gold">sofisticação</em> e naturalidade.
              </h1>
              <p
                data-reveal
                style={delay(170)}
                className="mt-7 max-w-lg text-lg leading-relaxed text-mocha"
              >
                Protocolos exclusivos e tecnologia de ponta para realçar sua beleza
                única — sem exageros, com assinatura de especialista.
              </p>

              <div data-reveal style={delay(250)} className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-4 text-sm font-semibold text-cream shadow-[0_18px_40px_rgba(34,27,20,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-espresso"
                >
                  Quero minha avaliação VIP
                  <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#protocolos"
                  className="inline-flex items-center gap-2.5 rounded-full border border-espresso/20 px-7 py-4 text-sm font-semibold text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
                >
                  Conhecer protocolos
                </a>
              </div>

              <div data-reveal style={delay(330)} className="mt-11 flex items-center gap-4">
                <div className="flex -space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="h-8 w-px bg-espresso/15" />
                <p className="text-sm leading-snug text-mocha">
                  <strong className="font-semibold text-espresso">5/5 no Google</strong>
                  <br />
                  Mais de 300 pacientes atendidas
                </p>
              </div>
            </div>

            {/* Hero composition */}
            <div data-reveal="right" className="relative mx-auto w-full max-w-[460px]">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-b-[2.6rem] rounded-t-[16rem] border border-gold/40"
              />
              <div className="relative overflow-hidden rounded-b-[2.4rem] rounded-t-[15rem] shadow-[0_44px_90px_rgba(34,27,20,0.25)]">
                <img
                  src="/images/hero.jpg"
                  alt="Especialista Mari Choi em ambiente clínico"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent"
                />
              </div>

              {/* Rotating badge */}
              <div className="absolute -left-8 top-8 grid size-28 place-items-center md:-left-14 md:size-36">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full animate-rotate-slow"
                  aria-hidden
                >
                  <defs>
                    <path
                      id="badge-circle"
                      d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="fill-espresso text-[8px] font-bold uppercase tracking-[0.2em]">
                    <textPath href="#badge-circle">
                      Avaliação VIP · Mari Choi · São Paulo ·
                    </textPath>
                  </text>
                </svg>
                <span className="grid size-12 place-items-center rounded-full bg-gold text-espresso shadow-[0_12px_30px_rgba(193,144,79,0.45)] md:size-14">
                  <Sparkles className="size-5" />
                </span>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 -left-4 flex animate-float items-center gap-3.5 rounded-2xl border border-espresso/5 bg-linen/95 p-4 pr-6 shadow-[0_24px_55px_rgba(34,27,20,0.18)] backdrop-blur md:-left-16">
                <span className="grid size-11 place-items-center rounded-full bg-espresso text-champ">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-espresso">Resposta em minutos</p>
                  <p className="text-xs text-mocha">Agende direto pelo WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <section aria-hidden className="overflow-hidden border-y border-espresso/10 bg-linen py-5">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section id="diferenciais" className="relative overflow-hidden bg-espresso py-20 text-cream md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(193,144,79,0.22),transparent_65%)]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
            <div data-reveal className="mb-14 flex flex-col items-center gap-4 text-center md:mb-20">
              <Eyebrow light>Números que inspiram confiança</Eyebrow>
              <span className="size-1.5 rotate-45 bg-gold" />
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal
                  style={delay(i * 100)}
                  className="border-t border-cream/15 pt-7"
                >
                  <p className="bg-gradient-to-br from-champ to-gold bg-clip-text font-display text-5xl leading-none text-transparent md:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-4 max-w-[180px] text-sm leading-relaxed text-cream/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROTOCOLS ================= */}
        <section id="protocolos" className="relative overflow-hidden py-20 md:py-28">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[20vw] italic leading-none text-espresso/[0.035]"
          >
            Beleza
          </span>

          <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
              <div data-reveal>
                <Eyebrow>Cuidado sob medida</Eyebrow>
                <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.06] text-espresso">
                  Protocolos <em className="italic text-gold">exclusivos</em>
                </h2>
              </div>
              <p data-reveal style={delay(120)} className="max-w-sm leading-relaxed text-mocha">
                Cada detalhe do seu tratamento nasce de uma escuta cuidadosa e de
                escolhas precisas — nunca de fórmulas prontas.
              </p>
            </div>

            <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 xl:grid-cols-4 [&>article:nth-child(even)]:xl:translate-y-14">
              {procedures.map((procedure, i) => (
                <article
                  key={procedure.index}
                  data-reveal
                  style={delay((i % 4) * 100)}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-[1.6rem]">
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-3.5 py-1.5 font-display text-xs italic tracking-wide text-espresso backdrop-blur">
                      {procedure.index}
                    </span>
                  </div>
                  <div className="px-1 pt-6">
                    <h3 className="font-display text-[1.55rem] leading-tight text-espresso">
                      {procedure.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mocha">
                      {procedure.description}
                    </p>
                    <a
                      href={wa(`Olá! Vim pelo site e gostaria de agendar ${procedure.title}.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-espresso"
                    >
                      <span className="nav-link">Agendar procedimento</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RESULTS ================= */}
        <section id="resultados" className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div data-reveal>
                <Eyebrow>Histórias reais</Eyebrow>
                <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.06] text-espresso">
                  Resultados que você <em className="italic text-gold">sente</em>
                </h2>
              </div>
              <p data-reveal style={delay(120)} className="max-w-sm leading-relaxed text-mocha">
                Beleza natural é quando o espelho devolve confiança — e não uma
                versão que você não reconhece.
              </p>
            </div>

            <div
              data-reveal="zoom"
              className="relative overflow-hidden rounded-[2.2rem] shadow-[0_44px_90px_rgba(34,27,20,0.22)]"
            >
              <img
                src="/images/resultados.jpg"
                alt="Mulheres com pele natural e radiante"
                loading="lazy"
                className="h-[440px] w-full object-cover md:h-[580px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent"
              />
              <figure className="absolute bottom-6 left-6 right-6 max-w-lg rounded-[1.6rem] border border-cream/20 bg-linen/90 p-7 shadow-2xl backdrop-blur-xl md:bottom-10 md:left-10 md:right-auto md:p-9">
                <Sparkles className="size-6 text-gold" />
                <blockquote className="mt-4 font-display text-xl italic leading-snug text-espresso md:text-2xl">
                  “Beleza natural é quando o espelho devolve confiança.”
                </blockquote>
                <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
                  Filosofia Mari Choi
                </figcaption>
              </figure>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["Escuta ativa", "Protocolos sob medida", "Acompanhamento próximo"].map(
                (item, i) => (
                  <div
                    key={item}
                    data-reveal
                    style={delay(i * 90)}
                    className="flex items-center gap-3.5 rounded-2xl border border-espresso/10 bg-linen px-5 py-4"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-espresso text-champ">
                      <Check className="size-4" />
                    </span>
                    <p className="text-sm font-semibold text-espresso">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ================= LOCATION ================= */}
        <section id="localizacao" className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
            <div
              data-reveal="left"
              className="flex flex-col justify-center rounded-[2.2rem] border border-espresso/10 bg-linen p-8 md:p-12"
            >
              <Eyebrow>Experiência Mari Choi</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.2rem)] leading-[1.08] text-espresso">
                Um espaço pensado para o seu{" "}
                <em className="italic text-gold">bem-estar</em>
              </h2>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-espresso">
                      Av. dos Ipês, 825 — Jardim dos Ipês
                    </p>
                    <p className="mt-0.5 text-sm text-mocha">São Paulo — SP</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-espresso">Terça a sábado</p>
                    <p className="mt-0.5 text-sm text-mocha">
                      10h às 18h · Atendimento com hora marcada
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-gold hover:text-espresso"
                >
                  Como chegar
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={wa("Olá! Fiquei com dúvida sobre como chegar na clínica.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 transition-colors hover:text-espresso"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div data-reveal="right" className="group relative">
              <div className="h-full overflow-hidden rounded-[2.2rem] shadow-[0_36px_80px_rgba(34,27,20,0.2)]">
                <img
                  src="/images/clinica.jpg"
                  alt="Espaço da clínica Mari Choi"
                  loading="lazy"
                  className="h-full min-h-[420px] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <p className="absolute inset-x-5 bottom-5 rounded-2xl border border-cream/20 bg-espresso/70 px-6 py-4 text-center font-display text-sm italic text-cream backdrop-blur-md md:inset-x-8 md:bottom-8">
                Privacidade, conforto e excelência em cada detalhe.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="duvidas" className="py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.2rem)] leading-[1.08] text-espresso">
                Antes de cuidar, nós <em className="italic text-gold">escutamos</em>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-mocha">
                Transparência em cada etapa. Se restar qualquer dúvida, nossa equipe
                responde pessoalmente pelo WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-espresso/10 bg-linen px-6 py-4 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_18px_40px_rgba(34,27,20,0.1)]"
              >
                <span className="grid size-10 place-items-center rounded-full bg-espresso text-champ">
                  <MessageCircle className="size-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-espresso">Prefere conversar?</span>
                  <span className="block text-xs text-mocha">Chame agora no WhatsApp</span>
                </span>
              </a>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="px-5 pb-24 md:px-8 md:pb-32">
          <div
            data-reveal="zoom"
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-espresso px-6 py-20 text-center text-cream md:py-28"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -top-32 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(193,144,79,0.3),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-24 size-[460px] rounded-full bg-[radial-gradient(circle,rgba(236,213,166,0.18),transparent_65%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/[0.07]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/[0.07]"
            />

            <div className="relative">
              <p className="mx-auto flex w-fit items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-champ">
                <span className="h-px w-10 bg-current opacity-70" />
                Seu momento começa agora
                <span className="h-px w-10 bg-current opacity-70" />
              </p>
              <h2 className="mx-auto mt-7 max-w-2xl font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.06]">
                Descubra o <em className="italic text-champ">protocolo ideal</em>{" "}
                para você.
              </h2>
              <p className="mx-auto mt-6 max-w-md leading-relaxed text-cream/65">
                Uma avaliação VIP, individual e sem pressa — o primeiro passo para a
                sua melhor versão.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-champ to-gold px-9 py-4.5 text-sm font-bold text-espresso shadow-[0_20px_50px_rgba(193,144,79,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(193,144,79,0.55)]"
              >
                Agendar avaliação VIP
                <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden bg-espresso text-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-16 md:px-8 md:pt-20">
          <div className="grid gap-12 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <a href="#inicio" className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl italic leading-none text-cream">Mari</span>
                <span className="text-xl font-bold tracking-tight text-cream">Choi</span>
                <span className="ml-0.5 size-1.5 rounded-full bg-gold" />
              </a>
              <p className="mt-5 max-w-sm leading-relaxed text-cream/60">
                Estética e dermatologia com ciência, cuidado e respeito à sua beleza
                natural.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-champ">
                Navegação
              </p>
              <nav className="mt-5 flex flex-col gap-3 text-sm text-cream/65">
                <a className="w-fit transition-colors hover:text-cream" href="#protocolos">Tratamentos</a>
                <a className="w-fit transition-colors hover:text-cream" href="#diferenciais">Diferenciais</a>
                <a className="w-fit transition-colors hover:text-cream" href="#resultados">Resultados</a>
                <a className="w-fit transition-colors hover:text-cream" href="#localizacao">Localização</a>
              </nav>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-champ">
                Visite-nos
              </p>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-cream/65">
                <p>
                  Av. dos Ipês, 825 · Jardim dos Ipês
                  <br />
                  São Paulo · SP
                </p>
                <p>Terça a sábado · 10h às 18h</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-champ transition-colors hover:text-gold"
                >
                  <MessageCircle className="size-4" />
                  (11) 95908-7586
                </a>
              </div>
            </div>
          </div>

          <p className="border-t border-cream/10 py-6 text-xs leading-relaxed text-cream/40">
            Resultados variam de pessoa para pessoa. Todo procedimento requer avaliação
            profissional individualizada.
          </p>
          <div className="flex flex-col items-start justify-between gap-2 border-t border-cream/10 py-6 text-xs text-cream/40 md:flex-row md:items-center">
            <p>© 2026 Mari Choi. Todos os direitos reservados.</p>
            <p>Estética &amp; Dermatologia · São Paulo</p>
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[14.5vw] italic leading-[0.8] text-cream/[0.05]"
        >
          Mari Choi
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="pulse-ring fixed bottom-6 right-6 z-[80] inline-flex items-center gap-2.5 rounded-full bg-espresso px-5 py-3.5 text-sm font-semibold text-cream shadow-[0_18px_44px_rgba(34,27,20,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-espresso"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
      </a>
    </>
  );
}
