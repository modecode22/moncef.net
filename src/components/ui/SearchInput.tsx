import { cn } from "@/lib/utils";
import React,  { type MouseEventHandler } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onSearch?: MouseEventHandler<HTMLSpanElement>;
};

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onSearch,...props }, ref) => {
    return (
      <section className={cn(className, "relative group ")}>
        <input
          className={cn(
            "duration-100 rounded-xl  w-full h-10 peer focus:shadow-inner dark:border dark:border-dark-500 bg-white border-light-400  dark:focus:border-dark-400 focus:border-light-300 dark:bg-dark-600   p-2 focus:outline-none focus:ring-1 dark:focus:ring-dark-400 focus:ring-light-400 placeholder:font-light placeholder:text-sm dark:placeholder:text-dark-300 placeholder:text-light-900 text-light-950 ",
            className
          )}
          ref={ref}
          {...props}
        />
        <span onClick={onSearch} className="absolute left-2 top-1/2 bg-light-100 hover:bg-light-50 active:bg-light-100 rounded-lg dark:bg-dark-900 dark:hover:bg-dark-800 dark:active:bg-dark-900 -translate-y-1/2 p-2 cursor-pointer select-none">
          <PiMagnifyingGlassBold className="" />
        </span>
      </section>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
