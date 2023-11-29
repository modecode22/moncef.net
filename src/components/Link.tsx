import React from "react";
import Link, { Url } from "next/link";
import { Locale, i18n } from "@/i18n.config";
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>& {
  href: Url;
  lang: Locale;
};
const CustomLink = React.forwardRef<
React.RefAttributes<HTMLAnchorElement>,
LinkProps
>(({ href, lang, ...props }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link  href={path} {...props} />;
});

export default CustomLink;
