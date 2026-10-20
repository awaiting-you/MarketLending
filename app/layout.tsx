import type { Metadata, Viewport } from "next";
import { Manrope, Onest } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-onest",
  // Preload откладывается до гидрации и тянет лишние подмножества —
  // браузер сам подхватит нужные файлы из @font-face.
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "СДВИГ — маркетинговое агентство полного цикла",
    template: "%s — СДВИГ",
  },
  description: site.description,
  keywords: [
    "маркетинговое агентство",
    "брендинг",
    "performance-маркетинг",
    "SMM",
    "продвижение бизнеса",
    "digital-агентство",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: "СДВИГ — маркетинговое агентство полного цикла",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "СДВИГ — маркетинговое агентство полного цикла",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Бауманская, 7, стр. 1",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  sameAs: [site.telegramHref],
  areaServed: "RU",
  openingHours: "Mo-Fr 10:00-19:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      // Скрипт ниже добавляет класс .js до гидратации — подавляем расхождение.
      suppressHydrationWarning
      className={`${onest.variable} ${manrope.variable}`}
    >
      <head>
        {/* Класс .js включает анимации появления. Без JS контент виден сразу. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="bg-base text-fg antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
