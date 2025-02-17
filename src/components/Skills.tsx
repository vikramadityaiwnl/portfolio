import { skillCategories } from "../utils/skills";
import { useState } from "react";
import { Tooltip } from "./Tooltip";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div
      id="skills"
      className="flex flex-col gap-8 items-center justify-center relative min-h-screen w-full py-20 px-6"
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold">
          Skills
        </span>
        <p className="mt-6 text-center text-neutral-600 max-w-2xl text-sm md:text-base lg:text-lg">
          Here are some of the technologies and tools I work with. I'm always
          excited to learn and adapt to new technologies.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center gap-4 md:gap-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {skillCategories.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm transition-all
                        ${
                          activeCategory === idx
                            ? "bg-primary text-white shadow-lg"
                            : "bg-primary/10 hover:bg-primary/20"
                        }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="w-full px-2 md:px-0">
          {skillCategories.map((category, idx) => (
            <div
              key={category.name}
              className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 transition-all duration-300
                        ${
                          activeCategory === idx
                            ? "opacity-100"
                            : "hidden opacity-0"
                        }`}
            >
              {category.skills.map((skill) => (
                <Tooltip key={skill.name} content={skill.name}>
                  <div
                    className="flex flex-col items-center justify-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl
                             bg-gradient-to-br from-primary/5 to-transparent
                             hover:from-primary/10 
                             transition-all duration-500 group cursor-pointer"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500
                               blur-xl"
                    />
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary/70" />
                    <span className="text-xs md:text-sm lg:text-base font-medium text-neutral-600 truncate max-w-full">
                      {skill.name}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-0 right-0 -z-10 absolute bg-primary/30 blur-[200px] w-[500px] h-[200px] opacity-50"></div>
      <div className="top-0 left-0 -z-10 absolute bg-primary/20 blur-[200px] w-[500px] h-[200px] opacity-50"></div>
    </div>
  );
};
