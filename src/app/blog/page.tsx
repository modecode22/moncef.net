import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogCard from "@/components/blog/BlogCard";
import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation";
const page = async () => {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/posts/");

  const posts = (await files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/posts/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  })) as Article[];

  return (
    <>
      <header className="xs:pt-10 pt-6 flex flex-col justify-center items-center">
        <span className="  h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={600} height={170} />
        </span>
        <h1 className="flex items-center text-7.5xl text-light-50 ">Blog</h1>
      </header>
      <main className="flex pt-10 justify-center flex-wrap py-6   gap-12 w-full  ">
        {posts.map((data) => {
          return <BlogCard key={data.slug} data={data} />;
        })}
      </main>
      <HeroAnimation />
    </>
  );
};

export default page;
