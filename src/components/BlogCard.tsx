import { Locale } from "@/i18n.config";
import { Article } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import CustomLink from "./Link";
import { getDictionary } from "@/lib/dictionary";
import { getBase64 } from "@/lib/plaiceholder";

const BlogCard = async ({ data, lang }: { data: Article; lang: Locale }) => {
  const { blog } = await getDictionary(data.frontmatter.lang);
  const myBlurDataUrl = await getBase64(data.frontmatter.image);

  return (
    <article
      dir={data.frontmatter.lang === "ar" ? "rtl" : "ltr"}
      className="group flex   bg-dark-800 overflow-hidden max-w-5xl  w-full  bg-gradient-to-b   h-full  duration-75 transition-all  rounded"
    >
      <main className="p-3  flex flex-col  justify-between min-w-[50%]">
       <header>
        <CustomLink lang={lang} href={`/blog/${data.slug}`}>
          <h2 className=" line-clamp-4 font-semibold text-xl sm:text-3xl hover:text-primary-500 duration-75 transition-all">
            {data.frontmatter.title}
          </h2>
        </CustomLink>
        <p className="mt-1 text-light-800 text-sm line-clamp-2">{data.frontmatter.description}</p>

       </header>
        <footer className="w-full flex flex-col  justify-between p-3 ">
          <p className="text-xs font-light text-light-900">
            {blog.writed_by}{" "}
            <span className="text-primary-500 font-bold">
              {data.frontmatter.author}{" "}
            </span>
          </p>
          <span className="text-[0.6rem] text-light-900">
            {blog.in} {data.frontmatter.date}
          </span>
          <section className="w-full flex ">
            <CustomLink
              lang={lang}
              href={`/blog/${data.slug}`}
              className="group  text-xs flex w-fit items-center gap-1 text-light-800 hover:text-primary-500 text-main200 duration-100 hover:underline-offset-2 hover:text-main100  active:text-font transition-all hover:underline  "
            >
              <p className="text-xs m-0">{blog.read_more} </p>

              {data.frontmatter.lang === "ar" ? (
                <AiOutlineArrowLeft className="" />
              ) : (
                <AiOutlineArrowRight className="" />
              )}
            </CustomLink>
          </section>
        </footer>
      </main>

      <main className="flex flex-col  w-full">
        <div className="relative w-full  overflow-hidden h-full sm:h-60">
          <Image
            src={data.frontmatter.image}
            fill
            alt="writer image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={myBlurDataUrl}
          />
          <div className="absolute  inset-0 w-full h-full  bg-gradient-to-r from-dark-800 via-transparent to-dark-800"></div>
        </div>
      </main>
    </article>
  );
};

export default BlogCard;
