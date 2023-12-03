import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, i18n } from "@/i18n.config";
import { Tajawal } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Moncef Letter",
    default: "Moncef Letter",
  },
  description: "Generated by create Moncef Aissaoui",
};
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
    <html className="scroll-smooth" dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      <body
        className={`bg-dark-900 text-light-500 selection:bg-primary-900/50 selection:backdrop-blur-md selection:text-primary-500 ${
          lang === "ar" ? tajawal.className : GeistSans.className
        }`}
      >
        <Header lang={lang} />
        {/* <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36"> */}
          {children}
        {/* </main> */}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
