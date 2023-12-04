import { getBase64 } from "@/lib/plaiceholder";
import Image from "next/image";
import React from "react";

const BlogImage = async ({ src, alt }: { src: string; alt: string }) => {
  const myBlurDataUrl = await getBase64(src);
  return (
    <>
      <Image
        src={src}
        alt={alt}
        style={{ width: "100%" }}
        placeholder="blur"
        blurDataURL={myBlurDataUrl}
        width={800}
        height={500}
      />
    </>
  );
};

export default BlogImage;
