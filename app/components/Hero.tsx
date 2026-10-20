import Link from "next/link";
import Counter from "./Counter";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="orb animate-drift left-[-12%] top-[-18%] size-[32rem] bg-accent/25" />
        <div
          className="orb animate-drift right-[-14%] top-[6%] size-[28rem] bg-cyan/20"
          style={{ animationDelay: "-7s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Левая колонка */}
          <div>
            <Reveal>
              <span className="chip">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(203,249,77,0.7)]" />
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.03] font-bold sm:text-6xl lg:text-[4.1rem]">
                {hero.titleTop}{" "}
                <span className="grad-text">{hero.titleAccent}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-ghost">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line-soft pt-8 sm:grid-cols-4">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-bold text-fg sm:text-[2.1rem]">
                        <Counter
                          value={stat.value}
                          decimals={stat.decimals}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </span>
                      <span className="mt-1.5 block text-xs leading-snug text-dim">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Правая колонка — дашборд */}
          <Reveal delay={200} className="relative">
            <div className="card noise relative overflow-hidden p-5 sm:p-6">
              <div className="absolute inset-x-0 -top-24 h-48 bg-accent/10 blur-3xl" aria-hidden="true" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] tracking-[0.16em] text-dim uppercase">
                    {hero.panel.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{hero.panel.period}</p>
                </div>
                <span className="chip border-accent/30 bg-accent/10 text-accent">live</span>
              </div>

              <div className="relative mt-7 flex items-end justify-between gap-4">
                <span className="grad-text font-display text-5xl font-bold sm:text-6xl">
                  {hero.panel.value}
                </span>
                <span className="max-w-[10rem] text-right text-xs leading-snug text-dim">
                  {hero.panel.caption}
                </span>
              </div>

              <div className="relative mt-7 flex h-32 items-end gap-1.5 sm:h-36">
                {hero.panel.bars.map((height, index) => (
                  <span
                    key={index}
                    className="bar flex-1 rounded-t-[4px] bg-gradient-to-t from-accent/15 via-accent/70 to-accent"
                    style={{ height: `${height}%`, animationDelay: `${120 + index * 70}ms` }}
                  />
                ))}
              </div>

              <dl className="relative mt-7 grid grid-cols-3 gap-3 border-t border-line-soft pt-5">
                {hero.panel.rows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-[0.68rem] tracking-wider text-dim uppercase">{row.label}</dt>
                    <dd className="mt-1 font-display text-lg font-semibold text-fg">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="animate-float absolute -bottom-12 -left-4 flex items-center gap-3 rounded-2xl border border-line-soft bg-surface-2/95 px-4 py-3 shadow-card backdrop-blur sm:-left-8">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <Check className="size-4" />
              </span>
              <span className="max-w-[13rem] text-xs leading-snug text-muted">{hero.badge}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
