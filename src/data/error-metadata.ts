import { Locale } from "@/i18n.config";
import { Metadata } from "next";

export const errorMetadata = (message:string, lang:Locale) :Metadata=>{
    const metadata : Metadata = {
        description: `Oops! ${message} . We apologize for the inconvenience.`,
        title: "Error",
        twitter: {
          title: "Error",
          images: [
            {
              url: "https://www.moncef.net/error-image.png",
              width: 800,
              height: 600,
              alt: "Error Image",
            },
            {
              url: "https://www.moncef.net/error-image.png",
              width: 600,
              height: 500,
              alt: "Error Image",
            },
          ],
          description: `Oops! ${message} . We apologize for the inconvenience.`,
        },
        openGraph: {
          description: `Oops! ${message} . We apologize for the inconvenience.`,
          title: "Error",
          url: "https://www.moncef.net/error",
          siteName: "moncef.net",
          images: [
            {
              url: "https://www.moncef.net/error-image.png",
              width: 800,
              height: 600,
            },
            {
              url: "https://www.moncef.net/error-image.png",
              width: 600,
              height: 500,
              alt: "Error Image",
            },
          ],
          locale: lang, // Replace with your desired locale
          type: "website",
        },
      };
    return metadata
} 