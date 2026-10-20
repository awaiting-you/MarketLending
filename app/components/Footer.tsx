import Link from "next/link";
import { LogoMark } from "./Logo";
import { Clock, Mail, Phone, Pin, Telegram } from "./icons";
import { nav, site } from "@/lib/content";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line-soft bg-surface/40">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-fg">{site.name}</span>
                <span className="mt-0.5 text-[0.68rem] tracking-[0.14em] text-dim uppercase">
                  marketing agency
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className="text-sm font-semibold text-fg">Разделы</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contact" className="text-sm text-muted transition-colors hover:text-accent">
                  Обсудить проект
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-fg">Контакты</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-fg"
                >
                  <Phone className="size-4 shrink-0 text-accent" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-fg"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.telegramHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2.5 transition-colors hover:text-fg"
                >
                  <Telegram className="size-4 shrink-0 text-accent" />
                  {site.telegram}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Pin className="mt-0.5 size-4 shrink-0 text-accent" />
                {site.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-accent" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-soft pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Демо-лендинг: все данные вымышлены.
          </p>
          <p>Сделано в Next.js · Без трекеров и cookie</p>
        </div>
      </div>
    </footer>
  );
}
