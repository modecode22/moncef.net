"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CustomLink from "./Link";
import { Locale, i18n } from "@/i18n.config";
type AnimatedTabsProps = {
  tabs: {
    id: string;
    label: string;
    originalLink: string;
  }[];
  lang: Locale;
};

const AnimatedTabs = ({ tabs, lang }: AnimatedTabsProps) => {
  const path = usePathname();
  return (
    <nav className=" hidden lg:flex space-x-1">
      {tabs.map((tab) => (
        <CustomLink
          lang={lang}
          href={tab.originalLink}
          key={tab.id}
          className={`${
            path === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {path === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </CustomLink>
      ))}
    </nav>
  );
};
export default AnimatedTabs;
