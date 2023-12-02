import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import React from "react";

const Contact = async ({ lang }: { lang: Locale }) => {
  const {
    contact: { email_title, phone_title, title },
  } = await getDictionary(lang);
  return (
    <section
      id="contact"
      className="px-6 pt-20 sm:px-12 md:px-16 lg:px-36 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>

      <p className="text-light-900 mb-2 text-center">
        {email_title}{" "}
        <Link
          href="mailto:aissaouimoncefdev@gmail.com"
          className="text-primary-500"
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

export default Contact;
