"use client";
import React, { useRef, useState } from "react";
import { Highlight, PrismTheme } from "prism-react-renderer";
import { RiCheckLine, RiFileCopyLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const MyTheme: PrismTheme = {
  plain: {
    color: "#f8fafc",
    backgroundColor: "hsl(180, 11%, 2%)",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#f8fafc", // Change to a suitable color
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#B5CEA8", // Change to a suitable color
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#9CDCFE", // Change to a suitable color
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#D7BA7D", // Change to a suitable color
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#cbd5e1", // Change to a suitable color
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#D4D4D4", // Change to a suitable color
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#808080", // Change to a suitable color
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#0ea5e9", // Change to a suitable color
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#7dd3fc", // Change to a suitable color
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#7dd3fc", // Change to a suitable color
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#D16969", // Change to a suitable color
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#D16969", // Change to a suitable color
      },
    },
    {
      types: ["function"],
      style: {
        color: "#6A9955", // Change to a suitable color
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9", // Change to a suitable color
      },
    },
    {
      types: ["char"],
      style: {
        color: "#569CD6", // Change to a suitable color
      },
    },
  ],
};

const CodeRenderer = ({
  codeBlock,
  language,
}: {
  codeBlock: string;
  language: string;
}) => {
  const code = useRef(codeBlock);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.current);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <section dir="ltr" className=" relative">
        <div
          onClick={handleCopy}
          className="bg-dark-900 flex justify-center items-center rounded h-7 w-7 text-dark-50 hover:text-light-900 cursor-pointer active:text-light-500  top-2 right-2 absolute"
        >
          {copied ? <RiCheckLine /> : <RiFileCopyLine />}
      </div>
      <Highlight  theme={MyTheme} code={codeBlock} language={language}>
        {({ className,style, tokens, getLineProps, getTokenProps }) => (
        // {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn("w-full mt-0 ")} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span  key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </section>
  );
};

export default CodeRenderer;
