import React from "react";
import CustomLink from "./Link";
import { Locale } from "@/i18n.config";
import Button, { buttonVariants } from "./ui/Button";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = async ({ lang }: { lang: Locale }) => {
  const {
    hero: { cta, line_1, line_2, line_3, line_4, line_5 },
  } = await getDictionary(lang);
  return (
    <>
      <main className="flex px-6 pt-10 sm:px-12 md:px-16 lg:px-36 rounded overflow-hidden flex-col  relative items-center  md:pt-20  min-h-screen w-full   gap-5">
        <section className=" z-10 relative border rounded-full px-2 border-dark-800 w-fit flex items-center gap-2">
          <div className="w-2 h-2  rounded-full bg-primary-500">
            <div className="w-2 h-2 animate-ping rounded-full bg-primary-500"></div>
          </div>
          <p>
            {line_1.explore}{" "}
            <CustomLink
              className="text-primary-500 hover:underline hover:text-primary-400 duration-75 transition-all"
              href="/blog"
              lang={lang}
            >
              {line_1.here}
            </CustomLink>
          </p>
        </section>
        <h1 className="z-10 relative text-5xl md:whitespace-nowrap  sm:text-6xl lg:text-7xl text-center font-bold">
          {line_2}
        </h1>
        <h1 className="z-10 relative text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          {line_3}
        </h1>
        <h1 className="z-10 relative text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          {line_4}
        </h1>
        <p className="z-10 relative max-w-xl md:text-base text-sm text-light-800 text-center">
          {line_5}
        </p>
        <section className="flex gap-4 z-10 relative">
          <CustomLink
            lang={lang}
            href={"/projects"}
            className={cn(buttonVariants({ variant: "primary-solid" }))}
          >
            {cta.what_i_built}
          </CustomLink>
          <Link
            href={"#skills"}
            className={cn(buttonVariants({ variant: "dark-ghost" }))}
          >
            {cta.whats_my_skills}
          </Link>
        </section>
      </main>

      <div className="absolute overflow-hidden inset-0 -z-10 bg-cover  h-screen w-full bg-pattern-right">
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-r from-dark-900  via-transparent to-dark-900"></div>
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-t from-dark-900  via-transparent to-dark-900"></div>
      </div>
    </>
  );
};

export default Hero;
