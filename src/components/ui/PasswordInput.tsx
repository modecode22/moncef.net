"use client"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { PiEyeBold, PiEyeSlashBold } from "react-icons/pi";




type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  name:string
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ error,  className ,name, ...props }, ref) => {
      const [show, setShow] = useState(false)
    return (
      <section className="relative group ">
        <div className="relative">
          <input
            className={cn(
              "duration-75 rounded  w-full h-12 peer focus:shadow-inner border border-dark-500   focus:border-dark-400 bg-dark-600   p-2 focus:outline-none focus:ring-1 focus:ring-primary-900  placeholder:font-light placeholder:text-sm placeholder:text-light-950  text-light-900 peer relative",
              className,
              error &&
                "border-error-600 focus:border-error-500 focus:ring-error-600"
            )}
            id={name}
            name={name}
            type={show ? "text" : "password"}
            ref={ref}
            {...props}
          />
          <label
            htmlFor={name}
            onClick={() => {
              setShow(!show);
            }}
            className="absolute  right-2 top-1/2 -translate-y-1/2"
          >
            {show ? (
              <PiEyeBold className="w-5 h-5  text-dark-50 duration-75 transition-colors " />
            ) : (
              <PiEyeSlashBold className="w-5 h-5  text-dark-200 duration-75 transition-colors" />
            )}
          </label>
        </div>
        {error ? (
          <span className="px-2 text-error-600 text-xs font-normal">
            {error as string}
          </span>
        ) : null}
      </section>
    );
  }
)
PasswordInput.displayName = "Input"

export { PasswordInput }
