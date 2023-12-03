import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Project } from "@/types/global";
import { Locale } from "@/i18n.config";
import ProjectCard from "@/components/ProjectCard";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
export async function generateMetadata({
  params: {  lang },
}: {
  params: {  lang: Locale };
}) {
  const {
    project: { project_name, title },
  } = await getDictionary(lang);
  const themetadata: Metadata = {
    description: title,
    title: project_name,
    twitter: {
      title: project_name,
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
          alt: `image of ${project_name}`,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${project_name}`,
        },
      ],
      description: title,
    },
    openGraph: {
      description: title,
      title: project_name,
      url: `https://www.moncef.net/${lang}/projects`,
      siteName: "moncef.net",
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${project_name}`,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
  return themetadata;
}


const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/projects/"+lang);
  const posts =  files.map((fileName) => {
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
  const langPosts =  posts.filter(
    (post) => post.frontmatter.lang === lang
  ) as Project[];
  return (
    <>
      <main className="flex  justify-center items-center flex-wrap py-6 min-h-[60vh]  gap-12 w-full  ">
        {langPosts.map((data) => {
          return <ProjectCard lang={lang} key={data.slug} data={data} />;
        })}
      </main>
    </>
  );
};

export default page;
