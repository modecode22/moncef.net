import React from "react";
import CustomLink from "./Link";
import { Locale } from "@/i18n.config";
import Button from "./ui/Button";

const Hero = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <main className="flex rounded overflow-hidden flex-col  relative items-center  md:pt-20  min-h-[80vh] w-full   gap-5">
        <section className=" z-10 relative border rounded-full px-2 border-dark-800 w-fit flex items-center gap-2">
          <div className="w-2 h-2  rounded-full bg-primary-500">
            <div className="w-2 h-2 animate-ping rounded-full bg-primary-500"></div>
          </div>
          <p>
            Explore my recent blog posts{" "}
            <CustomLink
              className="text-primary-500 hover:underline hover:text-primary-400 duration-75 transition-all"
              href="/blog"
              lang={lang}
            >
              here
            </CustomLink>
          </p>
        </section>
        <h1 className="z-10 relative text-5xl md:whitespace-nowrap  sm:text-6xl lg:text-7xl text-center font-bold">
          Full-Stack Developer <strong className="text-primary-500">,</strong>
        </h1>
        <h1 className="z-10 relative text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          Startup Enthusiast <strong className="text-primary-500">,</strong>
        </h1>
        <h1 className="z-10 relative text-4xl sm:text-5xl lg:text-6xl text-center font-bold">
          Reader
        </h1>
        <p className="z-10 relative max-w-xl md:text-base text-sm text-light-800 text-center">
          Welcome! I'm Moncef Aissaoui, a full-stack developer from Algeria. I
          love building new things and facing new challenges every day. My
          passions include building startups, reading, and blogging. Join me on
          my journey towards achieving my goals as I share insights on this
          website.
        </p>
        <section className="flex gap-4 z-10 relative">
          <Button variant={"primary-solid"}>What I built ?</Button>
          <Button variant={"dark-ghost"}>what's my Skills ?</Button>
        </section>
      </main>

      <div className="absolute overflow-hidden inset-0 -z-10 bg-cover  h-[95vh] w-full bg-back-pattern">
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-r from-dark-900  via-transparent to-dark-900"></div>
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-t from-dark-900  via-transparent to-dark-900"></div>
      </div>
    </>
  );
};

export default Hero;
