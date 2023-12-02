import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { Locale } from "@/i18n.config";

export function getProject(slug: string, lang: Locale) {
  try {
    const mdDirectory = path.join(process.cwd(), "public");
    const filePath = path.join(mdDirectory, "projects", lang, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return null;
    }

    const markdownFile = fs.readFileSync(filePath, "utf-8");
    const { data: frontMatter, content } = matter(markdownFile);

    return {
      slug: slug,
      metadata: frontMatter,
      content: content,
    };
  } catch (error: any) {
    console.error(`Error in getProject for slug '${slug}' and lang '${lang}': ${error.message}`);
    return null; // or throw error; depending on how you want to handle other errors
  }
}