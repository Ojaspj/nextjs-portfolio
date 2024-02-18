import React from "react";
import { AnimatedPinDemo } from "../PinDemo";

export default function ProjectContent({ theme }: { theme?: Boolean }) {
  return (
    <div
      className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
        theme
          ? "bg-amber-50 text-[#333] border-4 border-gray-600"
          : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
      }`}
    >
      <p>PROJECTS</p>

      <AnimatedPinDemo theme={theme as any} />
    </div>
  );
}
