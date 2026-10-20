import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <span className="section-label">{eyebrow}</span>
      <h2
        className={`text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem] ${
          centered ? "max-w-3xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed text-muted ${centered ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
