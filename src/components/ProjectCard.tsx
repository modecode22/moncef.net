import { Locale } from "@/i18n.config";
import {  Project } from "@/types/global";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CustomLink from "./Link";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { RiLinksLine } from "react-icons/ri";
import { getBase64 } from "@/lib/plaiceholder";

const ProjectCard = async ({ data, lang }: { data: Project; lang: Locale }) => {
  const { project } = await getDictionary(data.frontmatter.lang);
  const myBlurDataUrl = await getBase64(data.frontmatter.image)
  return (
    <article
      dir={data.frontmatter.lang === "ar" ? "rtl" : "ltr"}
      className="group flex  flex-col h-fit bg-dark-800 overflow-hidden max-w-lg  w-full  bg-gradient-to-b    duration-75 transition-all  rounded"
    >
      <main className="flex flex-col  w-full">
        <div className="relative w-full  overflow-hidden  h-60">
          <Image
            src={data.frontmatter.image}
            fill
            alt="writer image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={myBlurDataUrl}
          />
          <div
            className={`absolute  inset-0 w-full h-full  bg-gradient-to-t from-dark-800 via-transparent to-dark-800  `}
          ></div>
          <div
            className={`absolute  inset-0 w-full h-full   `}
          ></div>
        </div>
      </main>
      <main className="p-3 h-full flex flex-col justify-between min-w-[50%]">
        <header className="flex flex-col">
          <CustomLink lang={lang} href={`/projects/${data.slug}`}>
            <h2 className=" line-clamp-4 font-semibold text-xl sm:text-3xl hover:text-primary-500 duration-75 transition-all">
              {data.frontmatter.title}
            </h2>
          </CustomLink>
          <p className="lg:text-base sm:text-sm text-xs font-light text-light-900 line-clamp-2">
            {data.frontmatter.description}{" "}
          </p>
        </header>
        <footer className="w-full flex flex-col  justify-between pt-3  ">
          <span className="text-[0.6rem] text-light-900">
            {project.started_in} <span className="text-primary-500">{data.frontmatter.date}</span>
          </span>
          <section className="w-full flex  justify-between">
            <CustomLink
              lang={lang}
              href={`/projects/${data.slug}`}
              className="group  text-xs flex w-fit items-center gap-1 text-light-800 hover:text-primary-500  duration-100 hover:underline-offset-2   a transition-all hover:underline  "
            >
              <p className="text-xs m-0">{project.read_more} </p>

              {data.frontmatter.lang === "ar" ? (
                <AiOutlineArrowLeft className="" />
              ) : (
                <AiOutlineArrowRight className="" />
              )}
            </CustomLink>
            <Link
              target="_blank"
              href={data.frontmatter.link}
              className="group  text-xs flex w-fit items-center gap-1 text-light-800 hover:text-primary-500  duration-100 hover:underline-offset-2   a transition-all hover:underline  "
            >
              <p className="text-xs m-0">{project.project_link} </p>
              <RiLinksLine />
            </Link>
          </section>
        </footer>
      </main>
    </article>
  );
};

export default ProjectCard;
