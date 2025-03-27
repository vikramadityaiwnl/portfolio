import { useState } from "react";
import { Project, projects } from "../data/projects";
import { ProjectModal } from "../components/ProjectModal";
import { Button } from "../components/Button";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent leading-tight">
          Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each project represents
          a unique challenge and opportunity to learn something new. Click on
          any project to learn more about it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#1A1B1E] rounded-lg p-6 transition-all duration-300 border border-gray-800 cursor-pointer hover:border-[#00DFD8] hover:shadow-[0_0_15px_rgba(0,223,216,0.3)]"
              onClick={() => setSelectedProject(project)}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-16 h-16 mb-4 rounded-lg"
                />
              ) : project.icon ? (
                <div className="text-4xl mb-4 w-16 h-16 flex items-center justify-center border border-gray-700 rounded-lg">
                  {project.icon}
                </div>
              ) : null}
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#252629] rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-[#252629] rounded-full text-sm text-gray-300">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            asLink="https://github.com/vikramadityaiwnl?tab=repositories"
          >
            View More Projects
          </Button>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
