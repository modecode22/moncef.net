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
import SideBar from "./SideBar";

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
      <header className="h-16 z-50  sticky top-0  px-6  sm:px-12 md:px-16 lg:px-36 bg-dark-900 border-b border-dark-800 flex justify-between  items-center w-full">
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

        <section className="flex items-center justify-center gap-3 ">
          <LocaleSwitcher lang={lang} />
          <SideBar lang={lang} navigation={navigation} />
        </section>
      </header>
    </>
  );
};

export default Header;
