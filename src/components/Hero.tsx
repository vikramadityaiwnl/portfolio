export const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col h-screen w-full justify-center items-center px-4"
    >
      <div className="top-0 left-0 -z-10 absolute bg-primary blur-[200px] w-[300px] h-[100px]"></div>
      <div className="top-0 left-0 -z-10 absolute bg-primary blur-[200px] w-[300px] h-[100px]"></div>

      <div className="flex gap-4 justify-center items-center flex-col text-center">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Hey! I'm <span className="text-primary font-bold">Vikramaditya</span>
        </span>
        <span className="text-lg md:text-xl lg:text-2xl max-w-2xl">
          A tech enthusiast and a full-stack developer who wants to learn new
          things.
        </span>
      </div>

      <div
        className="absolute bottom-8 bounce-animation cursor-pointer"
        onClick={() => document.getElementById("projects")?.scrollIntoView()}
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

      <div className="bottom-0 right-0 -z-10 absolute bg-primary blur-[200px] w-[300px] h-[100px]"></div>
      <div className="bottom-0 right-0 -z-10 absolute bg-primary blur-[200px] w-[300px] h-[100px]"></div>
    </div>
  );
};
