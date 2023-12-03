import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    contact: { description, name },
  } = await getDictionary(lang);
  const themetadata: Metadata = {
    description: name,
    title: description,
    twitter: {
      title: description,
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
          alt: `image of ${name}`,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${name}`,
        },
      ],
      description: name,
    },
    openGraph: {
      description: name,
      title: description,
      url: `https://www.moncef.net/${lang}/contact`,
      siteName: "moncef.net",
      images: [
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 800,
          height: 600,
        },
        {
          url: `https://www.moncef.net/moncef-letter.png`,
          width: 600,
          height: 500,
          alt: `image of ${name}`,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
  return themetadata;
}

const page = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    contact: { email_title, phone_title, title },
  } = await getDictionary(lang);
  return (
    <section
      id="contact"
      className="px-6 pt-20 sm:px-12 min-h-[60vh] md:px-16 lg:px-36 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>

      <p className="text-light-900 mb-2 text-center">
        {email_title}{" "}
        <Link
          href="mailto:aissaouimoncefdev@gmail.com"
          className="text-primary-500 "
        >
          aissaouimoncefdev@gmail.com
        </Link>
      </p>

      <p className="text-light-900 mb-2 text-center">
        {phone_title}{" "}
        <Link dir="ltr" href="tel:+213782903876" className="text-primary-500">
          +213 782 90 3876
        </Link>
      </p>
    </section>
  );
};

export default page;
