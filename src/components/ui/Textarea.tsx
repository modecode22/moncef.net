import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "duration-75 rounded  w-full h-12 peer focus:shadow-inner border border-dark-500   focus:border-dark-400 bg-dark-600   p-2 focus:outline-none focus:ring-1 focus:ring-primary-900  placeholder:font-light placeholder:text-sm placeholder:text-light-950  text-light-900  ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
