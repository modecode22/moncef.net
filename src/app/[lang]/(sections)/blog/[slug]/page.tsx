import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import { getPost } from "@/helpers/getPost";
import BlogImage from "@/components/BlogImage";
import CodeRenderer from "@/components/CodeRenderer";
import BlogProgressBar from "@/components/BlogProgressBar";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ErrorUi from "@/components/ErrorUi";
import { errorMetadata } from "@/data/error-metadata";
export async function generateMetadata({
  params: { slug, lang },
}: {
  params: { slug: string; lang: Locale };
}) {
  const source = getPost(slug,lang);
  if (!source) {
    const metadata = errorMetadata('There is no blog here', lang)
    return metadata
  }
  const themetadata: Metadata = {
    description: source.metadata.description,
    title: source.metadata.title,
    twitter: {
      title: source.metadata.title,
      images: [
        {
          url: `${source.metadata.image}`,
          width: 800,
          height: 600,
          alt: `image of ${source.metadata.title}`,
        },
        {
          url: `${source.metadata.image}`,
          width: 600,
          height: 500,
          alt: `image of ${source.metadata.title}`,
        },
      ],
      description: source.metadata.description,
    },
    openGraph: {
      description: source.metadata.description,
      title: source.metadata.title,
      url: `https://www.moncef.net/${lang}/blog/${slug}`,
      siteName: "moncef.net",
      images: [
        {
          url: `${source.metadata.image}`,
          width: 800,
          height: 600,
        },
        {
          url: `${source.metadata.image}`,
          width: 600,
          height: 500,
          alt: `image of ${source.metadata.title}`,
        },
      ],
      locale: lang,
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
  const source = getPost(slug,lang);
  if (!source){
    const { blog:{this_blog_not_found}} = await getDictionary(lang);
    return <ErrorUi link={'/blog'} lang={lang} message={this_blog_not_found.message}  />
  }
  const { blog} = await getDictionary(source.metadata.lang);

  return (
    <main dir={source.metadata.lang ==='ar'? 'rtl':'ltr' } className="flex items-center justify-center  min-h-[60vh] w-full xs:py-10 py-6">
      <article
             className=" prose-invert  max-w-3xl   prose-ul:list-image-star  rounded prose  prose-table:text-font/90 prose-thead:text-primary-500 pros prose-blockquote:bg-dark-500 prose-blockquote:border-l-2 prose-blockquote:border-primary-500 prose-strong:text-primary-50   prose-h1:text-light-50 lg:prose-h1:text-7xl prose-p:text-lg prose-blockquote:rounded-r  prose-blockquote:p-1  prose-blockquote:pl-10    prose-headings:font-semibold prose-h1:text-5xl prose-lg prose-img:rounded lg:prose-xl  prose-h2:text-light-500 prose-h3:text-light-600 prose-h4:text-light-700
             prose-h5:text-light-50  prose-h6:text-light-50 prose-p:text-light-500 prose-a:text-primary-200  
             w-full prose-hr:border-dark-800"
      >
        <h1 className="m-0 mb-3">{source.metadata.title}</h1>
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
