import { skills } from "@/data/skills";
import { Locale } from "@/i18n.config";
import React from "react";
import Tooltip from "./ui/ToolTip";
import Image from "next/image";
const Skills = ({ lang }: { lang: Locale }) => {
  return (
    <section className="px-6  sm:px-12 md:px-16 lg:px-36 flex flex-col py-24  w-full justify-center  items-center">
      <header className="max-w-2xl w-full">
        <h1 className="text-start text-4xl mb-3">I'm Skilled in </h1>
        <p className="text-light-900 mb-3">
          <span className="text-primary-500">Quick tip</span>: You can hover
          over the skill in <strong className="text-primary-500">PC</strong> to
          read its name ;)
        </p>
      </header>
      <main className="w-full flex flex-wrap gap-2 max-w-2xl">
        {skills.map((skill) => {
          return (
            <div className="w-16 h-16 hover:bg-dark-700 flex justify-center items-center bg-dark-800 rounded">
              <Tooltip direction="bottom" name={skill.name}>
                <Image
                  src={skill.filename}
                  width={30}
                  height={30}
                  alt={`${skill.name} logo`}
                />
              </Tooltip>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Skills;
