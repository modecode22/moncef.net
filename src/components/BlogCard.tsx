import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import ShareBtn from "./ShareBtn";

const BlogCard = ({ data }: { data: Article }) => {
  return (
    <article className="group flex flex-col  bg-dark-600 overflow-hidden  w-full sm:max-w-sm max-w-xs bg-gradient-to-b    duration-75 transition-all  rounded">
      <header className="p-3 h-full flex flex-col justify-between">
        <Link href={`/blog/${data.slug}`}>
          <h2 className=" line-clamp-4 font-semibold  hover:text-primary-500 duration-75 transition-all">
            {data.frontmatter.title}
          </h2>
        </Link>
        <section className="w-full flex justify-end">
          <Link
            href={`/blog/${data.slug}`}
            className="group  text-xs flex items-center gap-1 text-light-800 hover:text-primary-500 text-main200 duration-100 hover:underline-offset-2 hover:text-main100  active:text-font transition-all hover:underline  "
          >
            <p className="text-xs m-0">Read more </p>
            <AiOutlineArrowRight className=" " />
          </Link>
        </section>
      </header>
      <main className="flex flex-col  w-full">
        <div className="relative w-full  overflow-hidden h-52 sm:h-60">
          <Image
            src={data.frontmatter.image}
            fill
            alt="writer image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={data.frontmatter.image}
          />
          <div className="absolute  inset-0 w-full h-full  bg-gradient-to-t from-dark-600 via-transparent to-dark-600"></div>
        </div>

      </main>

      <footer className="w-full flex items-center justify-between p-3 ">
        <p className="text-xs font-light text-light-900">
          Writed by{" "}
          <span className="text-primary-500 font-bold">
            {data.frontmatter.author}
          </span>
        </p>

        <p className="text-xs text-light-900">
          <span className="text-[0.6rem]">{data.frontmatter.date}</span>
        </p>
      </footer>
    </article>
  );
};

export default BlogCard;
