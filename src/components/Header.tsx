import Image from "next/image";
import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import logo from "../../public/logo.svg";
import {
  RiDiscussLine,
  RiHome2Line,
  RiLightbulbFlashLine,
  RiMedal2Line,
  RiMenuLine,
} from "react-icons/ri";
import LocaleSwitcher from "./LocaleSwitcher";
import CustomLink from "./Link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation, links } = await getDictionary(lang);
  const Tabs = [
    {
      id: links.home,
      label: navigation.home,
      originalLink: "/",
    },
    {
      id: links.projects,
      label: navigation.projects,
      originalLink: "/projects",
    },
    {
      id: links.blog,
      label: navigation.blog,
      originalLink: "/blog",
    },
    {
      id: links.contact,
      label: navigation.contact,
      originalLink: "/contact",
    },
  ];
  return (
    <>
      <header className="h-16 z-50  sticky top-0  px-6  sm:px-12 md:px-16 lg:px-36 bg-dark-900 border-b border-dark-700 flex justify-between items-center w-full">
        <CustomLink
          lang={lang}
          href="/"
          className="hover:bg-primary-900 rounded-full duration-75 transition-colors"
        >
          <Image
            src={logo}
            alt="Moncef Aissaoui Letter"
            width={40}
            height={40}
          />
        </CustomLink>
        <AnimatedTabs lang={lang} tabs={Tabs} />
        <h3 className="font-semibold text-lg lg:hidden w-full h-full hidden sm:flex justify-center items-center">
          Moncef Letter
        </h3>
        <section className="flex gap-3 ">
          <LocaleSwitcher lang={lang} />
          <Sheet>
            <SheetTrigger
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
                className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
                href="/"
              >
                <RiHome2Line className="w-6 h-6" />
                <span className="text-center text-xl">{navigation.home}</span>
              </CustomLink>
              <CustomLink
                lang={lang}
                className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
                href="/projects"
              >
                <RiMedal2Line className="w-6 h-6" />
                <span className="text-center text-xl">
                  {navigation.projects}
                </span>
              </CustomLink>

              <CustomLink
                lang={lang}
                className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
                href="/blog"
              >
                <RiLightbulbFlashLine className="w-6 h-6" />
                <span className="text-center text-xl">{navigation.blog}</span>
              </CustomLink>
              <CustomLink
                lang={lang}
                className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
                href="/contact"
              >
                <RiDiscussLine className="w-6 h-6" />
                <span className="text-center text-xl">
                  {navigation.contact}
                </span>
              </CustomLink>
            </SheetContent>
          </Sheet>
        </section>
      </header>
    </>
  );
};

export default Header;
