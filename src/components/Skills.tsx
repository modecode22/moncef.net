import { skills } from "@/data/skills";
import { Locale } from "@/i18n.config";
import React from "react";
import Tooltip from "./ui/ToolTip";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
const Skills = async ({ lang }: { lang: Locale }) => {
  const {
    skills: { line_1, line_2 },
  } = await getDictionary(lang);
  return (
    <section
      id="skills"
      className="px-6  sm:px-12 md:px-16 lg:px-36 flex flex-col py-24  w-full justify-center  items-center"
    >
      <header className="max-w-2xl w-full">
        <h1 className="text-start text-4xl mb-3">{line_1}</h1>
        <p className="text-light-900 mb-3">
          <span className="text-primary-500">{line_2.quick_tip}</span>:{" "}
          {line_2.you_can_}{" "}
          <strong className="text-primary-500">{line_2.pc}</strong> {line_2.to_}
        </p>
      </header>
      <main className="w-full flex  justify-center flex-wrap gap-2 max-w-2xl">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="w-16 h-16 hover:bg-dark-700 flex justify-center items-center bg-dark-800 rounded"
            >
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
