// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
    ],
  },
};
export default withPlaiceholder(nextConfig);
