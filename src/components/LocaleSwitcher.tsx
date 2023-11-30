"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, i18n } from "@/i18n.config";

const LocaleSwitcher = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };
  return (
    <>
      {lang === "en" ? (
        <Link
          href={redirectedPathName('ar')}
          className="border rounded-full border-dark-800   text-light-900 hover:bg-dark-800 w-9 h-9 flex justify-center items-center hover:border-dark-700 hover:text-light-50 duration-75 transition-all"
        >
          {'ar'}
        </Link>
      ) : (
        <Link
          href={redirectedPathName('en')}
          className="border rounded-full border-dark-800   text-light-900 hover:bg-dark-800 w-9 h-9 flex justify-center items-center hover:border-dark-700 hover:text-light-50 duration-75 transition-all"
        >
          {"en"}
        </Link>
      )}

    </>
  );
};

export default LocaleSwitcher;

// this for more then one two langs
{
  /* <ul className="flex gap-x-3">
{i18n.locales.map((locale) => {
  return (
    <li key={locale}>
      <Link
        href={redirectedPathName(locale)}
        className="rounded-md border bg-black px-3 py-2 text-white"
      >
        {locale}
      </Link>
    </li>
  );
})}
</ul> */
}
