/**
 * Демо-контент лендинга.
 * Чтобы подставить реальные данные — правьте только этот файл.
 */

export const site = {
  name: "СДВИГ",
  legalName: "Агентство «СДВИГ»",
  tagline: "Маркетинговое агентство полного цикла",
  description:
    "СДВИГ — маркетинговое агентство полного цикла: стратегия, брендинг, SMM и performance-маркетинг. Запускаем проекты, которые приносят заявки и выручку.",
  phone: "+7 (495) 120-45-67",
  phoneHref: "+74951204567",
  email: "hello@sdvig.agency",
  telegram: "@sdvig_agency",
  telegramHref: "https://t.me/sdvig_agency",
  address: "Москва, ул. Бауманская, 7, стр. 1",
  hours: "Пн–Пт, 10:00–19:00",
  url: "https://sdvig.agency",
} as const;

export const nav = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
] as const;

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export type Hero = {
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: Stat[];
  panel: {
    title: string;
    period: string;
    value: string;
    caption: string;
    bars: number[];
    rows: { label: string; value: string }[];
  };
  badge: string;
};

export const hero: Hero = {
  eyebrow: "Агентство полного цикла",
  titleTop: "Сдвигаем маркетинг",
  titleAccent: "бизнеса вперёд",
  subtitle:
    "Стратегия, креатив и трафик в одной команде. Мы не делаем «красиво» — мы делаем заявки, продажи и узнаваемость, которые считаются в цифрах.",
  primaryCta: { label: "Обсудить проект", href: "#contact" },
  secondaryCta: { label: "Смотреть кейсы", href: "#cases" },
  stats: [
    { value: 7, suffix: " лет", label: "на рынке" },
    { value: 120, suffix: "+", label: "запущенных проектов" },
    { value: 4.9, suffix: "/5", decimals: 1, label: "средняя оценка" },
    { value: 37, prefix: "+", suffix: "%", label: "средний рост выручки" },
  ],
  panel: {
    title: "Рост выручки клиента",
    period: "12 месяцев",
    value: "+37%",
    caption: "рост среднего чека и повторных продаж",
    bars: [22, 38, 30, 52, 44, 66, 58, 78, 71, 92, 84, 100],
    rows: [
      { label: "Заявки", value: "+24%" },
      { label: "Средний чек", value: "+12%" },
      { label: "ROAS", value: "4.1" },
    ],
  },
  badge: "Лид-менеджмент отвечает за 15 минут",
};

export type Service = {
  index: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Стратегия и позиционирование",
    description:
      "Разбираем рынок, аудиторию и экономику до того, как сделан первый креатив. Вы получаете план, а не список пожеланий.",
    items: ["Исследование рынка", "Портрет ЦА", "Ценностное предложение", "План продвижения"],
  },
  {
    index: "02",
    title: "Брендинг и дизайн",
    description:
      "Собираем визуальный язык бренда, который работает в рекламе, на упаковке и в соцсетях — и не разваливается после редизайна.",
    items: ["Логотип и айдентика", "Дизайн-система", "Гайдлайн", "Рекламные макеты"],
  },
  {
    index: "03",
    title: "SMM и контент",
    description:
      "Ведём соцсети как канал продаж: рубрикатор, продакшн, съёмки и публикации без пауз и «мы скоро придумаем концепцию».",
    items: ["SMM-стратегия", "Контент-план", "Продакшн и съёмки", "Модерация"],
  },
  {
    index: "04",
    title: "Трафик и performance",
    description:
      "Запускаем рекламу и считаем её до рубля. Оптимизируем креатив и посадочные страницы по реальной стоимости лида.",
    items: ["Таргет и контекст", "Сквозная аналитика", "CRO-тесты", "Отчётность по KPI"],
  },
];

export type CaseStudy = {
  tag: string;
  title: string;
  client: string;
  description: string;
  metrics: { value: string; label: string }[];
  accent: "lime" | "cyan" | "mixed";
};

export const cases: CaseStudy[] = [
  {
    tag: "Брендинг + SMM",
    title: "Кофейня «Бордо»",
    client: "HoReCa, 7 кофеен",
    description:
      "Пересобрали визуальный язык сети и запустили рубрикатор в соцсетях. Вместо «постим кофе» — история про город и людей, которые за ним возвращаются.",
    metrics: [
      { value: "+180%", label: "заявок на франшизу" },
      { value: "+64%", label: "узнаваемость бренда" },
    ],
    accent: "lime",
  },
  {
    tag: "Performance",
    title: "ТехноЛид",
    client: "B2B, промышленное оборудование",
    description:
      "Пересобрали структуру рекламного кабинета и связали её с CRM. Долгий цикл сделки перестал съедать бюджет.",
    metrics: [
      { value: "×3.2", label: "ROAS за 4 месяца" },
      { value: "−41%", label: "стоимость лида" },
    ],
    accent: "cyan",
  },
  {
    tag: "Айдентика + контент",
    title: "Лаборатория Кожи",
    client: "E-commerce, косметика",
    description:
      "Новая айдентика, гайдлайн и регулярный контент в соцсетях. Клиент перестал конкурировать ценой и поднял средний чек.",
    metrics: [
      { value: "+27%", label: "средний чек" },
      { value: "+12 400", label: "подписчиков за 6 мес." },
    ],
    accent: "mixed",
  },
  {
    tag: "Стратегия + трафик",
    title: "Северный Дом",
    client: "Застройщик, регионы",
    description:
      "Выстроили воронку от рекламы до договора: отдельные креативы под каждый этап, скоринг лидов и прозрачная отчётность для совета директоров.",
    metrics: [
      { value: "12 → 54", label: "заявки в месяц" },
      { value: "−58%", label: "стоимость договора" },
    ],
    accent: "lime",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Старт",
    price: "90 000 ₽",
    period: "в месяц",
    description: "Для малого бизнеса, который запускает маркетинг с нуля.",
    features: [
      "Стратегия и позиционирование",
      "SMM: 16 публикаций в месяц",
      "Дизайн 12 шаблонов",
      "Базовая аналитика",
      "1 канал продвижения",
      "Отчёт раз в месяц",
    ],
    cta: "Обсудить запуск",
  },
  {
    name: "Рост",
    price: "180 000 ₽",
    period: "в месяц",
    description: "Рабочий пакет для компании, которой нужен стабильный поток заявок.",
    features: [
      "Всё из тарифа «Старт»",
      "Performance: таргет и контекст",
      "Контент-продакшн и съёмки",
      "CRO-тесты посадочных страниц",
      "Сквозная аналитика и дашборд",
      "2 канала продвижения",
    ],
    featured: true,
    cta: "Получить медиаплан",
  },
  {
    name: "Максимум",
    price: "350 000 ₽",
    period: "в месяц",
    description: "Полный цикл под ключ: стратегия, креатив, трафик и развитие бренда.",
    features: [
      "Всё из тарифа «Рост»",
      "Брендинг и дизайн-система",
      "Видеопродакшн",
      "Разработка и поддержка сайта",
      "Персональный стратег",
      "4 канала продвижения",
    ],
    cta: "Собрать смету",
  },
];

export type Review = {
  text: string;
  name: string;
  role: string;
  company: string;
  accent: "lime" | "cyan";
};

export const reviews: Review[] = [
  {
    text:
      "До «СДВИГ» мы пытались продвигаться сами полгода и считали это маркетингом. Команда за месяц разобрала, где мы теряем деньги, и дала план, который реально выполняется. Заявки выросли почти вдвое.",
    name: "Мария Ковалёва",
    role: "CMO",
    company: "Кофейня «Бордо»",
    accent: "lime",
  },
  {
    text:
      "Отдельное спасибо за аналитику: видно в цифрах, куда уходит каждый рубль бюджета. Через четыре месяца вышел на ROAS 3.2 — до этого столько не давал ни один подрядчик.",
    name: "Илья Соколов",
    role: "Основатель",
    company: "ТехноЛид",
    accent: "cyan",
  },
  {
    text:
      "Новая айдентика и контент изменили восприятие бренда: нас перестали сравнивать по цене. Средний чек вырос, а контент-план наконец перестал быть проблемой.",
    name: "Алина Ветрова",
    role: "CEO",
    company: "Лаборатория Кожи",
    accent: "lime",
  },
  {
    text:
      "Работаем как одна команда: стратег, дизайнер и аналитик на связи, а не «отдел маркетинга присылает отчёт раз в квартал». Воронка прозрачна от рекламы до договора.",
    name: "Дмитрий Раков",
    role: "Директор по маркетингу",
    company: "Северный Дом",
    accent: "cyan",
  },
];

export const serviceOptions = [
  "Стратегия и позиционирование",
  "Брендинг и дизайн",
  "SMM и контент",
  "Трафик и performance",
  "Комплексно / пока не решил",
];

export const budgetOptions = [
  "до 100 000 ₽",
  "100 000 – 250 000 ₽",
  "250 000 – 500 000 ₽",
  "от 500 000 ₽",
  "пока не определил",
];
