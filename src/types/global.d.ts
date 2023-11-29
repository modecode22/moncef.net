import { Locale } from "@/i18n.config";

export type Article = {
  slug: string;
  frontmatter: {
    lang: Locale;
    image: string;
    title: string;
    description: string;
    date: string;
    author: string;
    author_skill: string;
    author_image: string;
  };
};

export type Project = {
  slug: string;
  frontmatter: {
    lang: Locale;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tech: string;
    color: string;
  };
};
