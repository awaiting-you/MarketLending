import Link from "next/link";
import { site } from "@/lib/content";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#top"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — на главную`}
    >
      <span className="relative grid size-9 place-items-center overflow-hidden rounded-[0.7rem] bg-gradient-to-br from-accent-soft to-accent shadow-[0_8px_24px_-10px_rgba(203,249,77,0.85)]">
        <svg
          viewBox="0 0 24 24"
          className="size-[1.15rem] text-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 6 6 6-6 6" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            {site.name}
          </span>
          <span className="mt-0.5 text-[0.68rem] tracking-[0.14em] text-dim uppercase">
            marketing agency
          </span>
        </span>
      )}
    </Link>
  );
}

export function LogoMark() {
  return (
    <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-[0.7rem] bg-gradient-to-br from-accent-soft to-accent">
      <svg
        viewBox="0 0 24 24"
        className="size-[1.15rem] text-ink"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 6 6 6-6 6" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </span>
  );
}
