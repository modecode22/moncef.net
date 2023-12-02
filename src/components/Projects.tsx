import { Locale } from "@/i18n.config";
import { Project } from "@/types/global";
import matter from "gray-matter";
import path from "path";
import React from "react";
import fs from "fs";
import ProjectCard from "./ProjectCard";
import { getDictionary } from "@/lib/dictionary";

const Projects = async ({ lang }: { lang: Locale }) => {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/projects/" + lang);
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/projects/${lang}/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  }) as Project[];
  const langPosts = posts.filter(
    (post) => post.frontmatter.lang === lang
  ) as Project[];
  const {
    project: { title },
  } = await getDictionary(lang);
  return (
    <section className="w-full min-h-screen relative  flex justify-center items-center">
      <main className="px-6 pt-20 sm:px-12 md:px-16 lg:px-36 ">
        <h1 className="w-full text-center text-4xl ">{title}</h1>
        <main className="flex pt-10 justify-center flex-wrap py-6   gap-12 w-full  ">
          {langPosts.map((data) => {
            return <ProjectCard lang={lang} key={data.slug} data={data} />;
          })}
        </main>
      </main>
      <div className="absolute overflow-hidden inset-0 -z-10 bg-cover  h-screen w-full bg-pattern-left">
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-r from-dark-900  via-transparent to-dark-900"></div>
        <div className="absolute  inset-0 w-full h-full  bg-gradient-to-t from-dark-900  via-transparent to-dark-900"></div>
      </div>
    </section>
  );
};

export default Projects;
