import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCard = ({ data }: { data: Article }) => {
  return (
    <article className="group flex   bg-dark-800 overflow-hidden max-w-5xl  w-full  bg-gradient-to-b    duration-75 transition-all  rounded">
      <main className="p-3 h-full flex flex-col justify-between">
        <Link href={`/blog/${data.slug}`}>
          <h2 className=" line-clamp-4 font-semibold text-xl sm:text-3xl hover:text-primary-500 duration-75 transition-all">
            {data.frontmatter.title}
          </h2>
        </Link>
        <section className="w-full flex justify-end"></section>
        <footer className="w-full flex flex-col  justify-between p-3 ">
          <p className="text-xs font-light text-light-900">
            Writed by{" "}
            <span className="text-primary-500 font-bold">
              {data.frontmatter.author}{" "}
            </span>
          </p>
            <span className="text-[0.6rem] text-light-900">in {data.frontmatter.date}</span>
          <section className="w-full flex ">
            <Link
              href={`/blog/${data.slug}`}
              className="group  text-xs flex w-fit items-center gap-1 text-light-800 hover:text-primary-500 text-main200 duration-100 hover:underline-offset-2 hover:text-main100  active:text-font transition-all hover:underline  "
            >
              <p className="text-xs m-0">Read more </p>
              <AiOutlineArrowRight className=" " />
            </Link>
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
            blurDataURL={data.frontmatter.image}
          />
          <div className="absolute  inset-0 w-full h-full  bg-gradient-to-r from-dark-800 via-transparent to-dark-800"></div>
        </div>
      </main>
    </article>
  );
};

export default BlogCard;
