import { skillCategories } from "../data/skills";

export const Skills = () => {
  return (
    <div id="skills" className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent leading-tight">
          Skills & Technologies
        </h2>
        <p className="text-base md:text-xl text-gray-400 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          I love exploring new technologies and have experience with various
          tools and frameworks. Here's my tech stack and areas of expertise that
          I've developed over the years.
        </p>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#1A1B1E]/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:border-[#007CF0] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-[#252629] group-hover:bg-[#007CF0]/10 transition-colors">
                      <skill.icon className="w-6 h-6 text-[#00DFD8]" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
