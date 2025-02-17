import { useState, useEffect, useCallback } from "react";
import { projects, Project } from "../utils/projects";

const ITEMS_PER_PAGE = 6;

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [project]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (project) {
      // Prevent main content scroll
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.touchAction = "none";
      document.documentElement.style.overflow = "hidden"; // Add this line
    } else {
      // Restore original scroll behavior
      document.body.style.overflow = originalStyle;
      document.body.style.height = "auto";
      document.body.style.touchAction = "auto";
      document.documentElement.style.overflow = "auto"; // Add this line
    }

    return () => {
      // Cleanup
      document.body.style.overflow = originalStyle;
      document.body.style.height = "auto";
      document.body.style.touchAction = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [project]);

  useEffect(() => {
    const handlePopState = () => {
      if (project) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };

    if (project) {
      window.history.pushState({ modal: true }, "");
    }

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300
                    backdrop-blur-md bg-white/60 px-2 md:px-4 overflow-hidden
                    ${isVisible ? "opacity-100" : "opacity-0"}
                    touch-none`} // Add touch-none here
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 h-[90vh] md:h-[75vh] 
                      bg-white shadow-2xl rounded-t-3xl overflow-y-auto
                      transition-all duration-500 ease-out transform
                      ${isVisible ? "translate-y-0" : "translate-y-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Add close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-primary/10
                   transition-colors duration-300 z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Add modal drag indicator for mobile */}
        <div className="w-12 h-1.5 bg-primary/20 rounded-full mx-auto mt-3 mb-6" />

        {project && (
          <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-80 h-52 md:h-64 object-cover rounded-xl 
                           animate-in fade-in zoom-in-50 duration-500"
                />
              ) : (
                project.icon && (
                  <div
                    className="w-full md:w-80 h-52 md:h-64 rounded-xl 
                                bg-gradient-to-br from-primary/20 to-primary/5
                                shadow-lg shadow-primary/10
                                flex items-center justify-center 
                                animate-in fade-in zoom-in-50 duration-500"
                  >
                    <span className="text-8xl">{project.icon}</span>
                  </div>
                )
              )}
              <div className="flex-1 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-3xl font-bold text-primary">
                  {project.name}
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed text-base">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-primary/10 border border-primary/20 
                               rounded-full text-sm text-primary/90
                               animate-in fade-in-50 duration-300 hover:bg-primary/15
                               transition-colors"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div
                    className="mt-8 flex flex-wrap items-center gap-4 text-sm
                                animate-in fade-in duration-500 delay-300"
                  >
                    {project.links.url && (
                      <a
                        href={project.links.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-primary text-white rounded-full 
                                 hover:bg-primary/90 transition-colors duration-300
                                 flex items-center gap-2 font-medium"
                      >
                        Visit Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                    {project.links.otherUrls?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {link.name}
                      </a>
                    ))}
                    {project.links.videoUrl && (
                      <a
                        href={project.links.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Watch Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const displayedProjects = projects.slice(0, visibleItems);
  const hasMore = visibleItems < projects.length;

  const loadMore = useCallback(() => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, projects.length));
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col gap-12 items-center relative justify-center min-h-screen w-full pb-20 px-4"
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold pt-8">
          Projects
        </span>
        <p className="mt-4 text-center text-neutral-600 max-w-2xl text-sm md:text-base">
          Here are some of the projects I've worked on. Click on any project to
          learn more about it, including the technologies used and links to
          demos or repositories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4">
        {displayedProjects.map((project, idx) => (
          <div
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col w-full p-4 md:p-5 cursor-pointer 
                     rounded-xl border border-primary/20 hover:border-primary
                     bg-white shadow-sm hover:shadow-lg
                     hover:scale-[1.02] transition-all duration-300
                     animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex gap-3 md:gap-4 items-start mb-3 md:mb-4">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-14 w-14 md:h-16 md:w-16 object-cover rounded-lg"
                />
              ) : (
                project.icon && (
                  <div
                    className="h-14 w-14 md:h-16 md:w-16 rounded-lg bg-gradient-to-br 
                                from-primary/20 to-primary/5 flex items-center justify-center"
                  >
                    <span className="text-xl md:text-2xl">{project.icon}</span>
                  </div>
                )
              )}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-lg font-semibold text-primary/90 
                             group-hover:text-primary transition-colors"
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm line-clamp-2 mt-1 text-neutral-400 
                              transition-colors"
                >
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-auto flex-wrap">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 
                           text-primary/80 rounded-full text-xs
                           group-hover:bg-primary/15 group-hover:text-primary
                           transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-primary/60 flex items-center">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={loadMore}
          className="mt-8 px-8 py-3 bg-white border-2 border-primary 
                   text-primary rounded-full hover:bg-primary/10
                   transition-colors font-medium
                   animate-in fade-in duration-500"
        >
          Load More Projects
        </button>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          // Remove URL state when closing modal
          if (window.history.state?.modal) {
            window.history.back();
          }
        }}
      />

      <div className="bottom-0 left-0 -z-10 absolute bg-primary blur-[250px] w-[300px] h-[100px]"></div>
      <div className="bottom-0 left-0 -z-10 absolute bg-primary blur-[250px] w-[300px] h-[100px]"></div>

      <div
        className="bottom-8 bounce-animation cursor-pointer"
        onClick={() => document.getElementById("skills")?.scrollIntoView()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="#f97316"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
};
