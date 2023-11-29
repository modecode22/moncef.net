import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogCard from "@/components/BlogCard";
import { Article } from "@/types/global";
import { Locale } from "@/i18n.config";
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/posts/");

  const posts =  files.map((fileName) => {
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
  }) as Article[];
  const langPosts =  posts.filter(
    (post) => post.frontmatter.lang === lang
  ) as Article[];
  return (
    <>
      <main className="flex  justify-center flex-wrap py-6   gap-12 w-full  ">
        {langPosts.map((data) => {
          return <BlogCard lang={lang} key={data.slug} data={data} />;
        })}
      </main>
    </>
  );
};

export default page;
