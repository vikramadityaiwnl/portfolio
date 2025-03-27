import { ReactNode } from "react";
import { StarField } from "./StarField";

export const Space = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-bg min-h-screen w-full fixed top-0 left-0">
      <StarField />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
