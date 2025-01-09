interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript / TypeScript", icon: "📘" },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "HTML / CSS", icon: "🎯" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "Appwrite", icon: "🚀" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Android (Java)", icon: "🤖" },
      { name: "Expo", icon: "⭐" },
      { name: "Flutter", icon: "🦚" },
      { name: "Android (Kotlin)", icon: "🤖" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git / GitHub", icon: "🔄" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Linux", icon: "🐧" },
      { name: "Figma", icon: "🎨" },
      { name: "Discord", icon: "🎮" },
    ],
  },
];

export const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col gap-10 items-center justify-center relative min-h-screen w-full pb-20 px-4"
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold pt-8">
          Skills
        </span>
        <p className="mt-4 text-center text-neutral-600 max-w-2xl text-sm md:text-base">
          Here are some of the technologies and tools I work with. I'm always
          excited to learn and adapt to new technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-5xl">
        {skillCategories.map((category, idx) => (
          <div
            key={category.name}
            className="flex flex-col p-4 md:p-6 rounded-lg border border-primary/20 
                     hover:border-primary/40 transition-all duration-300
                     animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 p-2 rounded-md 
                           bg-gradient-to-br from-primary/10 to-primary/5
                           hover:from-primary/15 hover:to-primary/10 
                           transition-all duration-300"
                >
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  <span className="text-xs md:text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-0 right-0 -z-10 absolute bg-primary blur-[250px] w-[300px] h-[100px]"></div>
      <div className="bottom-0 right-0 -z-10 absolute bg-primary blur-[250px] w-[300px] h-[100px]"></div>
    </div>
  );
};
