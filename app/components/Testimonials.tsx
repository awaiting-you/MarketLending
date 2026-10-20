import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Quote, Star } from "./icons";
import { reviews } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят клиенты"
          description="Коротко — о том, как изменились их показатели после того, как мы подключились."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 80} className="h-full">
              <figure
                className={`card flex h-full flex-col p-6 transition-colors duration-300 ${
                  review.accent === "lime" ? "hover:border-accent/30" : "hover:border-cyan/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Quote
                    className={`size-7 shrink-0 ${
                      review.accent === "lime" ? "text-accent/45" : "text-cyan/45"
                    }`}
                  />
                  <div className="flex gap-0.5" aria-label="Оценка 5 из 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-3.5 fill-accent text-accent"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-5 flex-1 text-[0.97rem] leading-relaxed text-muted">
                  {review.text}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line-soft pt-5">
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${
                      review.accent === "lime"
                        ? "bg-accent/15 text-accent"
                        : "bg-cyan/15 text-cyan"
                    }`}
                  >
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-fg">{review.name}</span>
                    <span className="block truncate text-xs text-dim">
                      {review.role} · {review.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
