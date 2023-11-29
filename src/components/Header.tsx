import Image from "next/image";
import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";
import { FiMenu } from "react-icons/fi";
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

const Header = async({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang)
  const Tabs = [
    {
      id: "/",
      label: navigation.home,
    },
    {
      id: "/projects",
      label: "Projects",
    },
    {
      id: "/blog",
      label: "Blog",
    },
    {
      id: "/contact",
      label: "Contact me",
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
            src="/logo.svg"
            alt="Moncef Aissaoui Letter"
            width={40}
            height={40}
          />
        </CustomLink>
        <LocaleSwitcher />
        <AnimatedTabs tabs={Tabs} />
        <h3 className="font-semibold text-lg h-full flex justify-center items-center">
          Moncef Letter
        </h3>
        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "transparent", size: "medium-square" }),
              "flex md:hidden"
            )}
          >
            <RiMenuLine className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side={"right"}
            className="flex lg:hidden flex-col p-3 gap-0 pt-16"
          >
            <CustomLink
              lang={lang}
              className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
              href="/"
            >
              <RiHome2Line className="w-6 h-6" />
              <span className="text-center text-xl">Home</span>
            </CustomLink>
            <CustomLink
              lang={lang}
              className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
              href="/projects"
            >
              <RiMedal2Line className="w-6 h-6" />
              <span className="text-center text-xl">Projects</span>
            </CustomLink>

            <CustomLink
              lang={lang}
              className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
              href="/blog"
            >
              <RiLightbulbFlashLine className="w-6 h-6" />
              <span className="text-center text-xl">Blog</span>
            </CustomLink>
            <CustomLink
              lang={lang}
              className="duration-75 h-16 border-b border-dark-700 flex text-lg  px-3 gap-3 items-center   transition-all text-light-700 hover:text-light-50"
              href="/contact"
            >
              <RiDiscussLine className="w-6 h-6" />
              <span className="text-center text-xl">Contact me</span>
            </CustomLink>
          </SheetContent>
        </Sheet>
      </header>
      <section className="w-full px-6  sm:px-12 md:px-16 lg:px-36">
        <section className="h-16 bg-dark-900 border-b border-dark-700 flex justify-between items-center w-fit "></section>
      </section>
    </>
  );
};

export default Header;
