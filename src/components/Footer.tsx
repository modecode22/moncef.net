import { Locale } from "@/i18n.config";
import Link from "next/link";
import React from "react";
import CustomLink from "./Link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { getDictionary } from "@/lib/dictionary";

const Footer = async ({ lang }: { lang: Locale }) => {
  const {
    footer: {
      copyright,
      navigation: { blog, contact, home, projects },
    },
  } = await getDictionary(lang);
  return (
    <footer  className="bg-pattern-up mt-20 relative px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
      <div className="flex flex-col items-center border-t border-dark-800 pt-6">
        <nav className="relative z-10 mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
          <CustomLink
            lang={lang}
            href="/"
            className="text-light-900 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            {home}
          </CustomLink>
          <CustomLink
            lang={lang}
            href="/projects"
            className="text-light-900 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            {projects}
          </CustomLink>
          <CustomLink
            lang={lang}
            href="/blog"
            className="text-light-900 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            {blog}
          </CustomLink>
          <CustomLink
            lang={lang}
            href="/#contact"
            className="text-light-900 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            {contact}
          </CustomLink>
        </nav>

        <div className="flex gap-4 relative z-10">
          <Link
            href="https://github.com/modecode22"
            target="_blank"
            className="text-light-400 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            <RiGithubFill />
          </Link>
          <Link
            href="https://twitter.com/moncefais"
            target="_blank"
            className="text-light-400 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            <RiTwitterXFill />
          </Link>

          <Link
            href="https://www.linkedin.com/in/moncef-aissaoui-62a486269/"
            target="_blank"
            className="text-light-400 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            <RiLinkedinFill />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100090251763624"
            target="_blank"
            className="text-light-400 transition duration-100 hover:text-primary-500 active:text-primary-600"
          >
            <RiFacebookFill />
          </Link>
        </div>
      </div>

      <div className="py-8 text-center text-sm text-dark-50">{copyright}</div>
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-t from-transparent  via-dark-900 to-dark-900"></div>
   
    </footer>
  );
};

export default Footer;
