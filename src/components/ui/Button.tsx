import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { PiSpinner } from "react-icons/pi";

//  change the themes of the bottons
export const buttonVariants = cva(
  "group flex justify-center items-center  gap-2  h-fit  duration-75  transition-all duration-75  select-none  rounded",
  {
    variants: {
      variant: {
        // Primary
        "primary-solid":
          "bg-primary-500 hover:bg-primary-600 active:text-light-50 shadow-sm      ",
        "primary-outline":
          " border border-primary-500 hover:bg-primary-950       text-primary-500 active:text-primary-600",
        "primary-ghost":
          "text-primary-500  hover:bg-primary-950/50",
        // Transparent
        "transparent": "hover:text-light-500 text-light-800",

        // Light
        "light-solid":
          "bg-light-500 hover:bg-light-600 active:text-dark-50 shadow-sm text-dark-500 ",
        "light-outline":
          "border border-light-500 hover:bg-dark-50       text-light-500 active:text-light-600",
        "light-ghost": "text-light-500  hover:bg-dark-50/50",

        // Dark
        "dark-solid":
          "bg-dark-500 hover:bg-dark-600 active:text-light-50 shadow-sm    ",
        "dark-outline":
          "border border-dark-500 hover:bg-dark-950       text-light-950 active:text-dark-50",
        "dark-ghost":
          "text-light-950  hover:bg-dark-950/50",

        // Error
        "error-solid":
          "bg-error-500 hover:bg-error-600 active:text-light-50 shadow-sm     ",
        "error-outline":
          "border border-error-500 hover:bg-error-950       text-error-500 active:text-error-600",
        "error-ghost": "text-error-500  hover:bg-error-950/50",

        // Alert
        "alert-solid":
          "bg-alert-500 hover:bg-alert-600 active:text-light-50 shadow-sm     ",
        "alert-outline":
          "border border-alert-500 hover:bg-alert-950       text-alert-500 active:text-alert-600",
        "alert-ghost": "text-alert-500  hover:bg-alert-950/50",

        // Success
        "success-solid":
          "bg-success-500 hover:bg-success-600 active:text-light-50 shadow-sm     ",
        "success-outline":
          "border border-success-500 hover:bg-success-950       text-success-500 active:text-success-600",
        "success-ghost":
          "text-success-500  hover:bg-success-950/50",

        // Info
        "info-solid":
          "bg-info-500 hover:bg-info-600 active:text-light-50 shadow-sm    ",
        "info-outline":
          "border border-info-500 hover:bg-info-950       text-info-500 active:text-info-600",
        "info-ghost": "text-info-500  hover:bg-info-950/50",

        // Happy
        "happy-solid":
          "bg-happy-500 hover:bg-happy-600 active:text-light-50 shadow-sm     ",
        "happy-outline":
          "border border-happy-500 hover:bg-happy-950       text-happy-500 active:text-happy-600",
        "happy-ghost": "text-happy-500  hover:bg-happy-950/50",
      },

      size: {
        "tiny-default": "h-6 px-1 gap-1 caption-strong min-w-[64px] ",
        "tiny-square": "h-6 w-6  p-0",
        "small-default": "h-8 px-2 gap-1 caption-strong min-w-[70px]",
        "small-square": "h-8 w-8  p-0",
        "medium-default": "h-10 px-2 gap-2 callout min-w-[84px]",
        "medium-square": "h-10 w-10  p-0",
        "large-default": "h-11 px-3 gap-2 callout min-w-[84px]",
        "large-square": "h-11 w-11 p-0",
      },
      font: {
        default: "font-normal",
        bold: "font-semibold",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "medium-default",
      font: "default",
    },
  }
);


export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={` ${cn('',buttonVariants({ variant, size }), className)}`}
      disabled={isLoading}
      {...props}
    >
      {children}
      {isLoading ? <PiSpinner className=" w-4 h-4 animate-spin " /> : null}
    </button>
  );
};

export default Button;
