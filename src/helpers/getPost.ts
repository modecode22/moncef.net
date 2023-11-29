import matter from "gray-matter";
import fs from 'fs';
import path from "path";

export function getPost( slug:string ) {
  const mdDirectory = path.join(process.cwd(), "public");
  const markdownFile = fs.readFileSync(
    mdDirectory + `/posts/${slug}.mdx`,
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    slug:slug,
    metadata: frontMatter,
    content: content,
  };
}

