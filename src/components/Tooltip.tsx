import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <div className="group relative">
      {children}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 
                    rounded text-xs text-white opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none whitespace-nowrap"
      >
        {content}
      </div>
    </div>
  );
};
