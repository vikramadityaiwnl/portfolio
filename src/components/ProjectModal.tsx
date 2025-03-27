import { Project } from "../data/projects";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (project) setIsClosing(false);
  }, [project]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className={`bg-[#1A1B1E] rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto ${
          isClosing ? "modal-exit" : "modal-enter"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-16 h-16 rounded-lg"
              />
            ) : project.icon ? (
              <div className="text-4xl">{project.icon}</div>
            ) : null}
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-white cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="text-gray-300 mb-6">{project.description}</p>

        {project.story && (
          <p className="text-gray-500 mb-6 italic">{project.story}</p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#252629] rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.links && Object.keys(project.links).length > 0 && (
          <div className="flex flex-wrap gap-4">
            {project.links.url && (
              <a
                href={project.links.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007CF0] hover:text-[#00DFD8] transition-colors"
              >
                Visit →
              </a>
            )}
            {project.links.videoUrl && (
              <a
                href={project.links.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007CF0] hover:text-[#00DFD8] transition-colors"
              >
                Watch Demo →
              </a>
            )}
            {project.links.otherUrls?.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007CF0] hover:text-[#00DFD8] transition-colors"
              >
                {link.name} →
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
