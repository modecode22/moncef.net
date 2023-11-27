import fs from "fs";
import matter from "gray-matter";
import path from "path";
const URL = "https://moncef.net";

export default async function sitemap() {
  const mdDirectory = path.join(process.cwd(), "public");
  const files = fs.readdirSync(mdDirectory + "/posts/");
  const posts = await files.map((fileName) => {
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

  const routes = ["", "/blog", "about-us", "services", "portfolio"].map(
    (route) => ({
      url: `${URL}${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}
