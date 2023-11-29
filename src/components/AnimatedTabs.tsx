"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
type AnimatedTabsProps = {
  tabs: {
    id: string;
    label: string;
  }[];
};

const AnimatedTabs = ({tabs}:AnimatedTabsProps) => {
const path = usePathname()
  return (
    <nav className=" hidden md:flex space-x-1">
      {tabs.map((tab) => (
        <Link 
        href={tab.id}
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
        </Link>
      ))}
    </nav>
  );
};
export default AnimatedTabs;
