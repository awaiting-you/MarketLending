import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Check, Palette, Rocket, Share, Target } from "./icons";
import { services } from "@/lib/content";

const icons = [Target, Palette, Share, Rocket];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Услуги"
          title="Четыре направления, которые работают вместе"
          description="Можно взять одно направление или собрать полный цикл. Вместе результат выше: стратегия даёт креативу смысл, а креатив — трафику."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={service.index} delay={index * 90} className="h-full">
                <article className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-line-soft bg-white/[0.03] text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-sm font-semibold text-dim">{service.index}</span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold leading-snug text-fg">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <Check className="size-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
