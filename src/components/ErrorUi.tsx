import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import React from "react";
import CustomLink from "./Link";

const ErrorUi = async ({
  message,
  lang,
  link
}: {
  message: string;
  lang: Locale;
  link:string
}) => {
  const { click_here } = await getDictionary(lang);
  return (
    <main className="min-h-screen w-full flex-col flex  items-center">
      <h1 className="text-6xl">{message}</h1>
      <CustomLink className="text-5xl mt-5 text-primary-500 hover:underline" lang={lang} href={link}>
        {click_here}
      </CustomLink>
    </main>
  );
};

export default ErrorUi;
