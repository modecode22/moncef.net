import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React, { HTMLAttributes } from "react";
import Marquee from "react-fast-marquee";

export const lineVariants = cva(
  "",
  {
    variants: {
      variant: {
        normal: "",
        "top-to-bottom": "rotate-3",
        "bottom-to-top": "-rotate-3",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
);

interface LineProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lineVariants> {
        direction?: "left" | "right" | "up" | "down" | undefined;
    }
const Line = ({ variant, className,direction, ...props }:LineProps) => {
  return (
    <div {...props} className={cn("", lineVariants({ variant }), className)}>
      <Marquee
        gradient
        gradientColor="hsl(225, 0%, 3%)"
        autoFill
        direction={direction}
        className="md:mt-10 mt-28 flex  bg-dark-500 h-fit py-3  items-center  justify-between gap-3"
      >
        <span className=" h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </span>
        <span className=" h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </span>
        <span className=" h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </span>
        <span className=" h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </span>
        <span className=" h-full justify-center items-center flex ">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </span>
      </Marquee>
    </div>
  );
};

export default Line;
