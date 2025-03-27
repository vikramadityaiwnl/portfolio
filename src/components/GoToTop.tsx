import { IconRocket } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-transparent p-3 rounded-full border border-gray-800 hover:border-[#00DFD8] hover:shadow-[0_0_15px_rgba(0,223,216,0.3)] duration-300 cursor-pointer ${
        isAnimating ? "rocket-click" : ""
      }`}
      aria-label="Go to top"
    >
      <IconRocket size={32} className="text-white transform -rotate-45" />
    </button>
  );
};
