import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vikramadityaiwnl",
    icon: IconBrandGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vikramaditya-dhumal-322a60358/",
    icon: IconBrandLinkedin,
  },
  {
    name: "Email",
    url: "mailto:dhumalvikramaditya287@gmail.com",
    icon: IconMail,
  },
];

export const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent leading-tight">
          Let's Connect
        </h2>
        <p className="text-base md:text-xl text-gray-400 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          Feel free to reach out to me on any of these platforms. I'm always
          open to discussing new projects, creative ideas, or opportunities to
          be part of your visions.
        </p>
        <div className="flex justify-center gap-4 md:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 bg-[#1A1B1E]/50 rounded-xl border border-gray-800 hover:border-[#007CF0] transition-all duration-300"
            >
              <link.icon className="w-6 h-6 md:w-8 md:h-8 text-[#00DFD8] stroke-[1.5]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
