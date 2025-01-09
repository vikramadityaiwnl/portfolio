import { useState, useEffect } from "react";

interface Projects {
  name: string;
  description: string;
  image?: string;
  icon?: string;
  technologies: string[];
  links?: {
    url?: string;
    videoUrl?: string;
    otherUrls?: { name: string; url: string }[];
  };
}

const projects: Projects[] = [
  {
    name: "focusforge",
    description:
      "Your ultimate Chrome extension for productivity and focus management. FocusForge combines powerful productivity tools with AI assistance to help you stay focused and efficient.",
    image:
      "https://raw.githubusercontent.com/vikramadityaiwnl/focusforge/refs/heads/master/public/images/icon128.png",
    technologies: [
      "Chrome Extension",
      "Chrome Built-In AI",
      "TypeScript",
      "NextUI",
      "TailwindCSS",
    ],
    links: {
      videoUrl: "https://www.youtube.com/watch?v=ptA3C8oWqa4",
      otherUrls: [
        { name: "Devpost", url: "https://devpost.com/software/focusforge" },
        {
          name: "GitHub",
          url: "https://github.com/vikramadityaiwnl/focusforge",
        },
      ],
    },
  },
  {
    name: "BuildMetrics",
    description:
      "A tool to help you track and manage civil engineering projects. It provides a platform for project managers to track the progress of their projects and generate reports.",
    icon: "📏",
    technologies: [
      "React",
      "Appwrite",
      "TypeScript",
      "NodeJS",
      "NextUI",
      "TailwindCSS",
    ],
    links: {},
  },
  {
    name: "Piece Together",
    description:
      "A collaborative puzzle game that brings Reddit communities together, one piece at a time! We're thrilled to have you join us.",
    image:
      "https://styles.redditmedia.com/t5_d3r7bb/styles/communityIcon_8nojxflyzl6e1.png",
    technologies: ["Reddit", "TypeScript", "Redis"],
    links: {
      url: "https://www.reddit.com/r/ThePieceTogether/",
      videoUrl: "https://www.youtube.com/watch?v=0RQtCIKQ91s",
      otherUrls: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/piece-together",
        },
        {
          name: "GitHub",
          url: "https://github.com/vikramadityaiwnl/piece-together",
        },
      ],
    },
  },
  {
    name: "GeoEstate",
    description:
      "GeoEstate revolutionizes real estate exploration by blending photorealistic 3D maps with AI-driven insights to create an interactive and immersive experience. Explore neighborhoods virtually, with features like nearby schools, parks, and properties with comprehensive and insightful neighborhood evaluations. GeoEstate's AI-powered Suitability Calculator personalizes recommendations based on your lifestyle, evaluating energy efficiency, environmental impact, and accessibility. With Immersive AI, finding your perfect home becomes an engaging and seamless journey.",
    image:
      "https://avatars.githubusercontent.com/u/188118557?s=400&u=27e7acde46a8a25883baad6c86239db8c819d2d0&v=4",
    technologies: ["Expo", "TypeScript", "Firebase", "Google Cloud"],
    links: {
      url: "https://www.geo.estate/",
      videoUrl: "https://www.youtube.com/watch?v=-iV_1kjLIg8",
      otherUrls: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/geoestate-1uqjc7",
        },
        {
          name: "GitHub",
          url: "https://github.com/GeoEstateApp",
        },
      ],
    },
  },
  {
    name: "abhyas",
    description: "Abhyas is a platform to help you learn and grow.",
    icon: "📚",
    technologies: [
      "Android Kotlin",
      "Appwrite",
      "Google AI (Gemini)",
      "NodeJS",
    ],
    links: {
      videoUrl: "https://www.youtube.com/watch?v=Kq3HWF7ny_g",
      otherUrls: [
        {
          name: "Google AI Dev",
          url: "https://ai.google.dev/competition/projects/abhyas",
        },
      ],
    },
  },
  {
    name: "Chats Got Talent",
    description:
      "A unique solution to enhance viewer-streamer interactions on Twitch. While viewers naturally seek attention in chat, this can often overwhelm streamers. Create a symbiotic relationship between streamers and their community, leading to the development of Chats Got Talent.",
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/111/316/datas/medium.png",
    technologies: ["Twitch API", "HTML / CSS", "JavaScript", "Google Cloud"],
    links: {
      videoUrl: "https://www.youtube.com/watch?v=h6LD3oh4cHA",
      otherUrls: [
        {
          name: "Devpost",
          url: "https://devpost.com/software/chats-got-talent",
        },
      ],
    },
  },
  {
    name: "busybee",
    description:
      "A learning application to study for international exams like IELTS, TOEFL, SAT, etc. or Custom courses or maybe want to crack VISA interviews. Busybee is the one-stop solution for all your needs.",
    icon: "🐝",
    technologies: ["Expo", "Appwrite", "NodeJS"],
    links: {},
  },
  {
    name: "Simple React Skeleton",
    description:
      "A simple, fast and easy react skeleton component for your projects.",
    icon: "💀",
    technologies: ["React", "TypeScript", "Storybook"],
    links: {
      url: "https://www.npmjs.com/package/simple-react-skeleton",
      otherUrls: [
        {
          name: "GitHub",
          url: "https://github.com/vikramadityaiwnl/simple-react-skeleton",
        },
      ],
    },
  },
  {
    name: "Society Automation System",
    description:
      "A comprehensive solution for automating various aspects of a community or society. This project integrates a Flutter mobile application for user interaction and an Arduino-based system for controlling and monitoring different functions within the society. The system is designed to enhance efficiency, convenience, and sustainability in community living.",
    icon: "🏢",
    technologies: ["Flutter", "Arduino", "C++"],
    links: {
      otherUrls: [
        {
          name: "GitHub",
          url: "https://github.com/vikramadityaiwnl/Society-Automation-System",
        },
      ],
    },
  },
];

interface ProjectModalProps {
  project: Projects | null;
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

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300
                 backdrop-blur-sm bg-black/40 px-4
                 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 h-[80vh] md:h-[60vh] 
                   bg-gradient-to-br from-black/95 to-black/80 backdrop-blur-xl
                   rounded-t-2xl overflow-y-auto border-t border-primary/20
                   transition-all duration-300 ease-out transform
                   ${isVisible ? "translate-y-0" : "translate-y-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {project && (
          <div className="max-w-3xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:w-72 h-48 object-cover rounded-lg 
                           animate-in fade-in zoom-in-50 duration-500"
                />
              ) : (
                project.icon && (
                  <div
                    className="w-full md:w-72 h-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5
                              flex items-center justify-center animate-in fade-in zoom-in-50 duration-500"
                  >
                    <span className="text-7xl">{project.icon}</span>
                  </div>
                )
              )}
              <div className="flex-1 animate-in fade-in slide-in-from-right duration-500">
                <h2 className="text-2xl font-bold text-primary">
                  {project.name}
                </h2>
                <p className="mt-4 text-gray-300 animate-in fade-in duration-500 delay-150">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-white
                               animate-in fade-in-50 duration-300"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.links && (
                  <div
                    className="mt-6 flex flex-wrap items-center gap-4 text-sm
                                animate-in fade-in duration-500 delay-300"
                  >
                    {project.links.url && (
                      <a
                        href={project.links.url}
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
                        View Project
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
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  return (
    <div
      id="projects"
      className="flex flex-col gap-10 items-center relative justify-center min-h-screen w-full pb-20 px-4"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="flex gap-4 w-full max-w-md mx-auto p-4 cursor-pointer rounded-lg 
                     border border-primary/20 hover:border-primary/40 
                     hover:scale-[1.02] transition-all duration-300"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-lg flex-shrink-0"
              />
            ) : (
              project.icon && (
                <div
                  className="h-20 w-20 md:h-24 md:w-24 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5
                              flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-3xl md:text-4xl">{project.icon}</span>
                </div>
              )
            )}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-base md:text-lg font-semibold text-primary/90">
                {project.name}
              </span>
              <p className="text-xs md:text-sm line-clamp-3 mt-1">
                {project.description}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 border border-primary/20 text-primary/80 
                             rounded-full text-xs text-center flex-shrink-0
                             flex justify-center items-center line-clamp-1"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="text-xs text-primary/60 flex items-center">
                    +{project.technologies.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
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
