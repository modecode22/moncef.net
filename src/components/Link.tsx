import React from "react";
import Link from "next/link";
import { Locale, i18n } from "@/i18n.config";
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement> & {
    href: string;
    lang: Locale;
  };
const CustomLink = ({ href, lang, ...props }: LinkProps) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props} />;
};

export default CustomLink;
