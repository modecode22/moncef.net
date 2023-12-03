import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    landing: { name, description },
  } = await getDictionary(lang);
  const themetadata: Metadata = {
    title: {
      template: "%s | Moncef Letter",
      default: "Moncef Letter",
    },
    description: "Generated by create Moncef Aissaoui",
    twitter: {
      title: name,
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
          alt: `image of ${description}`,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${description}`,
        },
      ],
      description: description,
    },
    openGraph: {
      description: description,
      title: name,
      url: `https://www.moncef.net/${lang}`,
      siteName: "moncef.net",
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${name}`,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
  return themetadata;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      className="scroll-smooth"
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
    >
      <body
        className={`bg-dark-900 text-light-500 selection:bg-primary-900/50 selection:backdrop-blur-md selection:text-primary-500 ${
          lang === "ar" ? tajawal.className : GeistSans.className
        }`}
      >
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
