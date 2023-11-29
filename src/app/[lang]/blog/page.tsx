import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
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
      <main className="flex  justify-center flex-wrap py-6   gap-12 w-full  ">
        {posts.map((data) => {
          return <BlogCard key={data.slug} data={data} />;
        })}
      </main>
    </>
  );
};

export default page;
