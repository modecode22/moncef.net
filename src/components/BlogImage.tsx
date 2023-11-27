"use client"
import Image from 'next/image';
import React from 'react'

const BlogImage = ({src , alt}:{src:string, alt:string}) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        style={{width: '100%', height: '500px'}}
        placeholder="blur"
        blurDataURL={src}
        width={800}
        height={500}
      />
    </>
  );
}

export default BlogImage