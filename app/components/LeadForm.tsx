"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { Check, Clock, Mail, Phone, Telegram } from "./icons";
import { budgetOptions, serviceOptions, site } from "@/lib/content";

type FieldName = "name" | "contact" | "consent";
type Errors = Partial<Record<FieldName, string>>;

type Values = {
  name: string;
  contact: string;
  service: string;
  budget: string;
  comment: string;
  consent: boolean;
};

/** Лёгкая маска для телефона: +7 (999) 123-45-67. */
function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (!digits) return "";

  let d = digits;
  if (d.startsWith("8")) d = `7${d.slice(1)}`;
  if (!d.startsWith("7")) d = `7${d.slice(0, 10)}`;
  d = d.slice(0, 11);

  const p = d.slice(1);
  let out = "+7";
  if (p.length) out += ` (${p.slice(0, 3)}`;
  if (p.length > 3) out += `) ${p.slice(3, 6)}`;
  if (p.length > 6) out += `-${p.slice(6, 8)}`;
  if (p.length > 8) out += `-${p.slice(8, 10)}`;
  return out;
}

export default function LeadForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    contact: "",
    service: serviceOptions[0],
    budget: budgetOptions[1],
    comment: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function handleContactChange(value: string) {
    const isTelegram = value.trimStart().startsWith("@");
    update("contact", isTelegram ? value : formatPhone(value));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Как к вам обращаться?";
    if (values.contact.trim().length < 5) next.contact = "Укажите телефон или Telegram";
    if (!values.consent) next.consent = "Нужно согласие на обработку данных";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Бэкенда нет: заявка логируется в консоль и показывается подтверждение.
    console.info("[СДВИГ] Заявка (демо-режим, без бэкенда):", values);
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb left-[-10%] bottom-[-30%] size-[30rem] bg-accent/18" />
        <div className="orb right-[-8%] top-[-10%] size-[24rem] bg-cyan/15" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Левая колонка */}
          <div>
            <Reveal>
              <span className="section-label">Контакты</span>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-5 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-[2.75rem]">
                Расскажите о задаче — <span className="grad-text">ответим за 15 минут</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Опишите проект в двух предложениях: что делаете, какая цель и что не получается.
                Этого достаточно, чтобы мы подготовили первые мысли до созвона.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <ul className="mt-10 space-y-4">
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="group flex items-center gap-4 text-muted transition-colors hover:text-fg"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-line-soft bg-white/[0.03] text-accent">
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-fg">{site.phone}</span>
                      <span className="block text-xs text-dim">Звонки и WhatsApp</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-4 text-muted transition-colors hover:text-fg"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-line-soft bg-white/[0.03] text-accent">
                      <Mail className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-fg">{site.email}</span>
                      <span className="block text-xs text-dim">Пришлём кейсы и смету</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.telegramHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 text-muted transition-colors hover:text-fg"
                  >
                    <span className="grid size-11 place-items-center rounded-xl border border-line-soft bg-white/[0.03] text-accent">
                      <Telegram className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-fg">{site.telegram}</span>
                      <span className="block text-xs text-dim">Telegram для быстрых вопросов</span>
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-10 flex items-center gap-2.5 text-sm text-dim">
                <Clock className="size-4 text-accent" />
                {site.hours} · {site.address}
              </p>
            </Reveal>
          </div>

          {/* Форма */}
          <Reveal delay={120}>
            <div className="card noise relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 -top-24 h-48 bg-accent/10 blur-3xl" aria-hidden="true" />

              {sent ? (
                <div className="relative flex flex-col items-center gap-5 py-12 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-8" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-fg">Заявка принята</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted">
                    Спасибо, {values.name.trim() || "мы получили ваш запрос"}! Это демо-версия лендинга, поэтому заявка
                    никуда не ушла — но на её месте уже работает проверка формы.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setValues({
                        name: "",
                        contact: "",
                        service: serviceOptions[0],
                        budget: budgetOptions[1],
                        comment: "",
                        consent: false,
                      });
                    }}
                    className="btn btn-ghost mt-2"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="relative">
                  <h3 className="font-display text-xl font-semibold text-fg">Обсудить проект</h3>
                  <p className="mt-2 text-sm text-muted">
                    Заполните форму — это займёт меньше минуты.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label htmlFor="name" className="mb-2 block text-sm text-muted">
                        Имя
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Как к вам обращаться"
                        value={values.name}
                        onChange={(event) => update("name", event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="field"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-[#f2635f]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="contact" className="mb-2 block text-sm text-muted">
                        Телефон или Telegram
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={values.contact}
                        onChange={(event) => handleContactChange(event.target.value)}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={errors.contact ? "contact-error" : undefined}
                        className="field"
                      />
                      {errors.contact && (
                        <p id="contact-error" className="mt-1.5 text-xs text-[#f2635f]">
                          {errors.contact}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="service" className="mb-2 block text-sm text-muted">
                        Что нужно
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={(event) => update("service", event.target.value)}
                        className="field"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="budget" className="mb-2 block text-sm text-muted">
                        Бюджет в месяц
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={values.budget}
                        onChange={(event) => update("budget", event.target.value)}
                        className="field"
                      >
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="comment" className="mb-2 block text-sm text-muted">
                        Комментарий
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        placeholder="Коротко о задаче: ниша, текущая ситуация, цель"
                        value={values.comment}
                        onChange={(event) => update("comment", event.target.value)}
                        className="field resize-none"
                      />
                    </div>
                  </div>

                  <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-dim">
                    <input
                      type="checkbox"
                      checked={values.consent}
                      onChange={(event) => update("consent", event.target.checked)}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? "consent-error" : undefined}
                      className="mt-0.5 size-4 shrink-0 accent-[#cbf94d]"
                    />
                    <span>
                      Согласен на обработку персональных данных и получение ответа по указанным
                      контактам.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" className="mt-1.5 text-xs text-[#f2635f]">
                      {errors.consent}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary mt-6 w-full">
                    Отправить заявку
                  </button>

                  <p className="mt-3 text-center text-xs text-dim">
                    Это демо-форма: данные проверяются в браузере и никуда не отправляются.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
