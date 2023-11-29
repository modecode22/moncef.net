import React from "react";
import Link, { Url } from "next/link";
import { Locale, i18n } from "@/i18n.config";
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Url;
  lang: Locale;
};
const CustomLink = React.forwardRef<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  LinkProps
>(({ href, lang, ...props }: LinkProps) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
});

export default CustomLink;
