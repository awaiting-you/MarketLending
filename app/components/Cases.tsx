import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./icons";
import { cases } from "@/lib/content";

const accentStyles = {
  lime: {
    glow: "bg-accent/18",
    text: "text-accent",
    bar: "from-accent/20 to-accent",
    ring: "group-hover:border-accent/30",
  },
  cyan: {
    glow: "bg-cyan/18",
    text: "text-cyan",
    bar: "from-cyan/20 to-cyan",
    ring: "group-hover:border-cyan/30",
  },
  mixed: {
    glow: "bg-gradient-to-br from-accent/20 to-cyan/20",
    text: "text-accent",
    bar: "from-accent/20 via-accent/60 to-cyan",
    ring: "group-hover:border-accent/30",
  },
} as const;

export default function Cases() {
  return (
    <section id="cases" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Кейсы"
          title="Работа, которую видно в цифрах"
          description="Каждый проект — это не отчёт про охваты, а конкретная цифра, которую изменили. Ниже — четыре случая из портфолио."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {cases.map((item, index) => {
            const accent = accentStyles[item.accent];

            return (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article
                  className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${accent.ring}`}
                >
                  {/* Визуальная часть */}
                  <div className="relative h-44 overflow-hidden border-b border-line-soft">
                    <div
                      className={`absolute -top-16 left-1/2 size-56 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${accent.glow}`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:34px_34px]"
                      aria-hidden="true"
                    />
                    <span className="absolute top-4 left-5 font-display text-[4.5rem] leading-none font-bold text-white/6 select-none">
                      0{index + 1}
                    </span>

                    <div className="absolute inset-x-5 bottom-5 flex items-end gap-2">
                      {[38, 56, 44, 72, 88, 100].map((height, barIndex) => (
                        <span
                          key={barIndex}
                          className={`bar flex-1 rounded-t-[3px] bg-gradient-to-t ${accent.bar}`}
                          style={{ height: `${height * 0.62}px`, animationDelay: `${barIndex * 90}ms` }}
                        />
                      ))}
                    </div>

                    <span className="absolute top-4 right-5 chip bg-base/60 text-muted backdrop-blur">
                      {item.tag}
                    </span>
                  </div>

                  {/* Текст */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
                      <span className="text-xs text-dim">{item.client}</span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line-soft pt-5">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className={`font-display text-2xl font-bold ${accent.text}`}>{metric.value}</p>
                          <p className="mt-1 text-xs leading-snug text-dim">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${accent.text}`}
                    >
                      Хочу так же
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
