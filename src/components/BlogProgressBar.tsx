"use client";
import { motion, useScroll } from "framer-motion";

const BlogProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="origin-[0%]  fixed inset-0 h-1  bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default BlogProgressBar;
