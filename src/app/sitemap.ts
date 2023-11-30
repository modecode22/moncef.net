import fs from "fs";
import matter from "gray-matter";
import path from "path";
const URL = "https://moncef.net";

export default async function sitemap() {
  const mdDirectory = path.join(process.cwd(), "public");
  const blogFiles =  fs.readdirSync(mdDirectory + "/posts/");
  const projectsFiles =  fs.readdirSync(mdDirectory + "/projects/");
  const posts =  blogFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/posts/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/blog/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });
  const projects =  projectsFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/projects/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/projects/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });

  const routes = ["", "/blog", "/contact", "/projects"].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts,...projects];
}
