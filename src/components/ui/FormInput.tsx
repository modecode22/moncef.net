"use client";
import { cn } from "@/lib/utils";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, label, ...props }, ref) => {
    return (
      <section className={cn(className, "relative group flex flex-col ")}>
        {label && (
          <label
            htmlFor={label}
            className="px-2 text-light-500  pb-1 select-none"
          >
            {label}
          </label>
        )}

        <input
          id={label}
          className={cn(
            "duration-75 rounded  w-full h-12 peer focus:shadow-inner border border-dark-500   focus:border-dark-400 bg-dark-600   p-2 focus:outline-none focus:ring-1 focus:ring-primary-900  placeholder:font-light placeholder:text-sm placeholder:text-light-950  text-light-900 ",
            className,
            error &&
              "border-error-600 focus:border-error-500 focus:ring-error-600"
          )}
          ref={ref}
          {...props}
        />
        {error ? (
          <span className="px-2 text-error-600 text-xs font-normal">
            {error as string}
          </span>
        ) : null}
      </section>
    );
  }
);
FormInput.displayName = "FormInput";

export { FormInput };
