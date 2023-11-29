import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import  '@/styles/globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, i18n } from '@/i18n.config'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale }

}) {
  return (
    <html dir={params.lang === 'ar'?'rtl':'ltr'} lang={params.lang}>
      <body
        className={`bg-dark-900 text-light-500 selection:bg-primary-900/50 selection:backdrop-blur-md selection:text-primary-500 ${GeistSans.className}`}
      >
        <Header lang={params.lang} />
        <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
