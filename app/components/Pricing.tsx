import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check } from "./icons";
import { plans } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="Тарифы"
          title="Прозрачные пакеты без скрытых доплат"
          description="Стоимость зависит от объёма работ, а не от «уровня клиента». Любой пакет можно менять в течение месяца."
          align="center"
        />

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[1.75rem] border p-7 transition-all duration-300 ${
                  plan.featured
                    ? "border-accent/40 bg-gradient-to-b from-accent/[0.09] to-surface shadow-glow lg:-mt-4 lg:mb-4"
                    : "border-line-soft bg-surface/60 hover:border-line"
                }`}
              >
                {plan.featured && (
                  <>
                    <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[0.68rem] font-bold tracking-[0.12em] text-ink uppercase">
                      Популярный
                    </span>
                    <div
                      className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                      aria-hidden="true"
                    />
                  </>
                )}

                <h3 className="font-display text-xl font-semibold text-fg">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>

                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-fg">{plan.price}</span>
                  <span className="text-sm text-dim">{plan.period}</span>
                </div>

                <ul className="mt-7 flex-1 space-y-3 border-t border-line-soft pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-accent" : "text-dim"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={`btn mt-8 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}
                >
                  {plan.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-dim">
            Нужна нестандартная задача? Соберём смету под проект — без минимального чека и скрытых доплат.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
