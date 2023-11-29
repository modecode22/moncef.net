import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Project } from "@/types/global";
import { Locale } from "@/i18n.config";
import ProjectCard from "@/components/ProjectCard";
const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/projects/");

  const posts =  files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/projects/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  }) as Project[];
  const langPosts =  posts.filter(
    (post) => post.frontmatter.lang === lang
  ) as Project[];
  return (
    <>
      <main className="flex  justify-center flex-wrap py-6   gap-12 w-full  ">
        {langPosts.map((data) => {
          return <ProjectCard lang={lang} key={data.slug} data={data} />;
        })}
      </main>
    </>
  );
};

export default page;
