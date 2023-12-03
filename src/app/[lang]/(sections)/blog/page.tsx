import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogCard from "@/components/BlogCard";
import { Article } from "@/types/global";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    blog: { name, description },
  } = await getDictionary(lang);
  const themetadata: Metadata = {
    description: description,
    title: name,
    twitter: {
      title: name,
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
          alt: `image of ${description}`,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${description}`,
        },
      ],
      description: description,
    },
    openGraph: {
      description: description,
      title: name,
      url: `https://www.moncef.net/${lang}/blog`,
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
          alt: `image of ${name}`,
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
  const files = fs.readdirSync(mdDirectory + "/posts/" + lang);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/posts/${lang}/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  }) as Article[];
  const langPosts = posts.filter(
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
