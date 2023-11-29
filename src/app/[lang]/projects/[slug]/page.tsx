import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import BlogImage from "@/components/BlogImage";
import CodeRenderer from "@/components/CodeRenderer";
import BlogProgressBar from "@/components/BlogProgressBar";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { getProject } from "@/helpers/getProject";
export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const { metadata, content } = getProject(slug);
  const themetadata: Metadata = {
    description: metadata.description,
    title: metadata.title,
    twitter: {
      title: metadata.title,
      images: [
        {
          url: `${metadata.image}`,
          width: 800,
          height: 600,
          alt: `image of ${metadata.title}`,
        },
        {
          url: `${metadata.image}`,
          width: 600,
          height: 500,
          alt: `image of ${metadata.title}`,
        },
      ],
      description: metadata.description,
    },
    openGraph: {
      description: metadata.description,
      title: metadata.title,
      url: `https://www.moncef.net/projects/${slug}`,
      siteName: "moncef.net",
      images: [
        {
          url: `${metadata.image}`,
          width: 800,
          height: 600,
        },
        {
          url: `${metadata.image}`,
          width: 600,
          height: 500,
          alt: `image of ${metadata.title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
  return themetadata;
}

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

const page = async ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) => {
  const source = getProject(slug);
  const { blog} = await getDictionary(source.metadata.lang);

  return (
    <main dir={source.metadata.lang ==='ar'? 'rtl':'ltr' } className="flex items-center justify-center w-full xs:py-10 py-6">
      <article
        className=" prose-invert  max-w-3xl  rounded prose  prose-table:text-font/90 prose-thead:text-primary-500 pros prose-blockquote:bg-dark-500 prose-blockquote:border-l-2 prose-blockquote:border-primary-500 prose-strong:text-primary-600   prose-h1:text-light-50 lg:prose-h1:text-7xl prose-p:text-lg prose-blockquote:rounded-r  prose-blockquote:p-1  prose-blockquote:pl-10    prose-headings:font-semibold prose-h1:text-5xl prose-lg prose-img:rounded lg:prose-xl  prose-h2:text-light-500 prose-h3:text-light-600 prose-h4:text-light-700
      prose-h5:text-light-50  prose-h6:text-light-50 prose-p:text-light-500 prose-a:text-primary-200  
      w-full"
      >
        <h1 className="m-0  pb-3">{source.metadata.title}</h1>
        <div className="flex justify-between flex-col md:flex-row">
          <p className="text-light-900 m-0 w-full">
          {blog.writed_by}
            <span className="text-primary-600  font-bold">
              {" "}
              {source.metadata.author}{" "}
            </span>
            {blog.in}
            <span className="text-primary-600  font-bold">
              {" "}
              {source.metadata.date}
            </span>
            .
          </p>
          <section className="w-full flex justify-end">
            {/* <ShareBtn
            url={slug}
            description={source.metadata.description}
            title={source.metadata.title}
            img={source.metadata.image}
          /> */}
          </section>
        </div>

        {source && (
          <MDXRemote
            source={source.content}
            components={{ BlogImage, CodeRenderer }}
            options={options}
          />
        )}
      </article>
      <BlogProgressBar />
    </main>
  );
};

export default page;
