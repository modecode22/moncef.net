import fs from "fs";
import matter from "gray-matter";
import path from "path";
const URL = "https://moncef.net";

export default async function sitemap() {
  const mdDirectory = path.join(process.cwd(), "public");
  const ar_blogFiles = fs.readdirSync(mdDirectory + "/posts/ar/");
  const blogFiles = fs.readdirSync(mdDirectory + "/posts/en/");
  const projectsFiles = fs.readdirSync(mdDirectory + "/projects/en/");
  const ar_projectsFiles = fs.readdirSync(mdDirectory + "/projects/ar/");
  const ar_posts = ar_blogFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/posts/ar/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/ar/blog/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });
  const posts = blogFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/posts/en/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/blog/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });
  const ar_projects = ar_projectsFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/projects/ar/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/ar/projects/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });
  const projects = projectsFiles.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(
      mdDirectory + `/projects/en/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      url: `${URL}/projects/${slug}`,
      lastModified: new Date(frontmatter.date).toISOString(),
    };
  });

  const ar_routes = ["", "/blog", "/contact", "/projects"].map((route) => ({
    url: `${URL}/ar${route}`,
    lastModified: new Date().toISOString(),
  }));
  const routes = ["", "/blog", "/contact", "/projects"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    ...posts,
    ...projects,
    ...ar_routes,
    ...ar_projects,
    ...ar_posts,
  ];
}
