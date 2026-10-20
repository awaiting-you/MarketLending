# СДВИГ — лендинг маркетингового агентства

Одностраничный лендинг демо-агентства: тёмная тема, неоновый акцент, анимации появления
при скролле, счётчики, форма заявки без бэкенда.

**Все тексты, цифры, кейсы и тарифы вымышлены** — это демонстрационный макет.

> Репозиторий: [`awaiting-you/MarketLending`](https://github.com/awaiting-you/MarketLending) ·
> Живая версия: <https://marketlending.vercel.app> · портфолио-описание: [`PORTFOLIO.md`](PORTFOLIO.md)

## Стек

| Слой        | Решение                                              |
| ----------- | ---------------------------------------------------- |
| Фреймворк   | Next.js 16 (App Router, Turbopack)                   |
| UI          | React 19 + Tailwind CSS v4 (CSS-first `@theme`)      |
| Шрифты      | Onest (заголовки) + Manrope (текст), `next/font/google` |
| Иконки      | инлайновые SVG, без иконочных библиотек              |
| Анимации    | CSS + `IntersectionObserver`, без GSAP/Framer         |
| Бэкенд     | отсутствует (форма работает на клиенте)              |

## Команды

> В PowerShell `npm.ps1` блокируется политикой выполнения, поэтому используйте `npm.cmd`.

```bash
npm.cmd run dev     # dev-сервер на http://localhost:3000
npm.cmd run build   # прод-сборка
npm.cmd run start   # запуск прод-сборки
npm.cmd run lint    # ESLint (в Next 16 команда next lint удалена)
```

## Структура

```
app/
  layout.tsx            шрифты, metadata, JSON-LD, скрипт класса .js
  page.tsx              сборка секций
  globals.css           дизайн-токены (@theme) и компонентные классы
  icon.svg              фавиконка
  opengraph-image.tsx   OG-картинка 1200×630 (генерируется на сборке)
  robots.ts, sitemap.ts
  components/
    Header.tsx          sticky-шапка + мобильное меню (client)
    Hero.tsx            оффер, CTA, счётчики, дашборд
    Services.tsx        4 направления
    Cases.tsx           4 кейса с метриками
    Pricing.tsx         3 тарифа
    Testimonials.tsx    4 отзыва
    LeadForm.tsx        форма заявки: валидация, маска телефона (client)
    Footer.tsx          контакты и навигация
    Reveal.tsx          появление блока при скролле (client)
    Counter.tsx         анимация чисел (client)
    SectionHeading.tsx  единый заголовок секции
    Logo.tsx, icons.tsx
lib/
  content.ts            ВЕСЬ демо-контент в одном файле
```

## Как поменять контент

Весь текст лежит в `lib/content.ts` — правьте только его, компоненты трогать не нужно:

- `site` — название, контакты, адрес, домен (`site.url` попадает в `metadataBase`, sitemap и robots)
- `nav` — пункты меню
- `hero` — оффер, подзаголовок, цифры, панель-дашборд
- `services`, `cases`, `plans`, `reviews` — секции
- `serviceOptions`, `budgetOptions` — выпадающие списки формы

### Цвета и типографика

Токены объявлены в `app/globals.css` в блоке `@theme`:

```css
--color-base: #08090d;        /* фон */
--color-surface / -2 / -3;    /* карточки */
--color-line / -line-soft;    /* границы */
--color-fg / -muted / -dim;   /* текст */
--color-accent: #cbf94d;      /* неоновый лайм */
--color-cyan: #3ddcff;        /* второй акцент */
```

Шрифты подключены в `app/layout.tsx` и прокидываются в Tailwind через
`@theme inline { --font-display: var(--font-onest); --font-sans: var(--font-manrope); }`.

## Форма заявки

Бэкенда нет намеренно: `LeadForm.tsx` валидирует поля в браузере, маскирует телефон
(`+7 (___) ___-__-__`), пишет payload в `console.info` и показывает экран подтверждения.

Чтобы подключить приём заявок, замените тело `handleSubmit` в `app/components/LeadForm.tsx`
на отправку (Server Action, `fetch` на свой endpoint, Formspree, Telegram-бот и т.п.) —
валидацию и маску можно оставить как есть.

## Анимации и доступность

- Появление секций — `Reveal.tsx` через `IntersectionObserver`. Класс `.js` ставится
  инлайн-скриптом в `<head>`: без JavaScript контент виден сразу, а не остаётся скрытым.
- `prefers-reduced-motion: reduce` отключает все анимации и счётчики.
- Счётчики используют `useSyncExternalStore`, чтобы читать настройку reduced-motion
  без `setState` внутри `useEffect`.
- Семантика: `section` / `h1-h3`, `aria-invalid` и `aria-describedby` у полей,
  `aria-expanded` / `aria-controls` у мобильного меню, видимый фокус.

## SEO

`metadata` с OG-тегами, `JSON-LD` (ProfessionalService), `sitemap.xml`, `robots.txt`,
`icon.svg` и генерируемая OG-картинка. Перед публикацией замените `site.url` в
`lib/content.ts` на реальный домен.

## Скриншоты

Готовые снимки для портфолио лежат в `screenshots/` (снимались с продакшен-сборки,
Chrome/Edge headless, retina 2x):

| Файл                       | Что на кадре                        | Размер      |
| -------------------------- | ----------------------------------- | ----------- |
| `01-hero-desktop.png`      | первый экран, оффер + дашборд       | 2880×1800   |
| `02-services-desktop.png`  | направления                         | 2880×1800   |
| `03-cases-desktop.png`     | кейсы с метриками                   | 2880×1800   |
| `04-pricing-desktop.png`   | тарифы                              | 2880×1800   |
| `05-reviews-desktop.png`   | отзывы                              | 2880×1800   |
| `06-form-desktop.png`      | форма заявки                        | 2880×1800   |
| `07-full-desktop.png`      | вся страница целиком                | 2880×13438  |
| `08-hero-mobile.png`       | первый экран, 390 px                | 780×1688    |
| `09-cases-mobile.png`      | кейсы, 390 px                       | 780×1688    |
| `10-form-mobile.png`       | форма, 390 px                       | 780×1688    |
| `11-full-mobile.png`       | вся страница, 390 px                | 390×12309   |
| `12-og-cover.png`          | OG-обложка 1200×630 (из `opengraph-image.tsx`) | 1200×630 |

Переснять: поднять прод-сборку (`npm.cmd run build && npm.cmd run start`) и прогнать
headless-браузер по странице, прокручивая её целиком, чтобы отработали
`IntersectionObserver`-появления секций.

## Обложка

Квадратная обложка 600×600 (для Behance, Telegram, превью) лежит в `cover/`:

- `cover-600.png` — 600×600, 114 КБ
- `cover-600@2x.png` — 1200×1200 (retina), 264 КБ
- `cover.html` — самодостаточный шаблон: шрифты Onest и Manrope (с кириллицей)
  вшиты в CSS как base64, поэтому файл открывается в любом браузере без сборки и без интернета.

Цвета, радиусы и сетка взяты из тех же токенов, что и на сайте (`app/globals.css`).
Чтобы перерисовать обложку: отредактируйте `cover.html` и запустите
`node cover/render-cover.mjs` (нужны `npm i -D puppeteer-core` и установленный
Edge/Chrome — путь к браузеру указан в начале скрипта).

## Деплой

Статическая страница собирается в `.next` и подходит для Vercel, любого Node-хостинга
(`npm run start`) или статического экспорта. Трекеры и cookie не используются.
