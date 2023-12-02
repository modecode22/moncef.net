"use client";
import React, { useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import {
  RiDiscussLine,
  RiHome2Line,
  RiLightbulbFlashLine,
  RiMedal2Line,
  RiMenuLine,
} from "react-icons/ri";
import CustomLink from "./Link";
import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";

const SideBar = ({
  lang,
  navigation,
}: {
  lang: Locale;
  navigation: {
    home: string;
    projects: string;
    blog: string;
    contact: string;
  };
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Sheet>
      <SheetTrigger
        ref={ref}
        className={cn(
          buttonVariants({
            variant: "transparent",
            size: "medium-square",
          }),
          "flex lg:hidden"
        )}
      >
        <RiMenuLine className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent
        side={lang === "en" ? "right" : "left"}
        className="flex lg:hidden flex-col p-3 gap-0 pt-16"
      >
        <CustomLink
          lang={lang}
          className="duration-75 h-16 border-b border-dark-800 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
          href="/"
          onClickCapture={() => {
            ref.current?.click();
          }}
        >
          <RiHome2Line className="w-6 h-6" />
          <span className="text-center text-xl">{navigation.home}</span>
        </CustomLink>
        <CustomLink
          lang={lang}
          onClickCapture={() => {
            ref.current?.click();
          }}
          className="duration-75 h-16 border-b border-dark-800 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
          href="/projects"
        >
          <RiMedal2Line className="w-6 h-6" />
          <span className="text-center text-xl">{navigation.projects}</span>
        </CustomLink>

        <CustomLink
          lang={lang}
          className="duration-75 h-16 border-b border-dark-800 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
          href="/blog"
          onClickCapture={() => {
            ref.current?.click();
          }}
        >
          <RiLightbulbFlashLine className="w-6 h-6" />
          <span className="text-center text-xl">{navigation.blog}</span>
        </CustomLink>
        <CustomLink
          lang={lang}
          className="duration-75 h-16 border-b border-dark-800 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
          href="/contact"
          onClickCapture={() => {
            ref.current?.click();
          }}
        >
          <RiDiscussLine className="w-6 h-6" />
          <span className="text-center text-xl">{navigation.contact}</span>
        </CustomLink>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
