import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 md:space-y-8 max-w-2xl px-4 relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent leading-tight">
          I'm Vikramaditya
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium">
          A passionate full-stack developer and tech enthusiast dedicated to
          crafting innovative solutions. Currently building exciting SaaS
          projects and exploring new technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6">
          <Button
            variant="primary"
            onClick={() => (window.location.href = "#skills")}
          >
            Skills
          </Button>
          <Button
            variant="primary"
            onClick={() => (window.location.href = "#projects")}
          >
            Projects
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};
