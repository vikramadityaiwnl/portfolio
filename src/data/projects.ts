export interface Project {
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
  story?: string;
}

export const projects: Project[] = [
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
    story:
      "Born from the need to combat digital distractions, FocusForge emerged during a hackathon where we aimed to revolutionize how people interact with their browsers.",
  },
  {
    name: "busybee",
    description:
      "A learning application to study for international exams like IELTS, TOEFL, SAT, etc. or Custom courses or maybe want to crack VISA interviews. Busybee is the one-stop solution for all your needs.",
    icon: "🐝",
    technologies: ["Expo", "Firebase", "React Native", "TypeScript"],
    links: {
      url: "https://busybeeapp.koaladev.com.au/",
    },
    story:
      "Inspired by international students struggling with exam preparation, Busybee was created to provide a comprehensive learning solution that adapts to individual needs.",
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
];
