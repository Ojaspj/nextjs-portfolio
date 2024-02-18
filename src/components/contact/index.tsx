import React from "react";
import { ContactCards } from "../ContactCards";

export default function ContactContent({ theme }: { theme?: boolean }) {
  return (
    <div
      className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
        theme
          ? "bg-amber-50 text-[#333] border-4 border-gray-600"
          : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
      }`}
    >
      <h1 className="uppercase">Contact Me</h1>

      <div>
        <h1 className={`text-xl font-normal text-justify tracking-wider my-8 `}>
          Thank you for visiting my portfolio! I'm passionate about crafting
          exceptional user experiences through frontend development. If you have
          any inquiries, collaboration opportunities, or just want to connect,
          feel free to reach out. I'm eager to hear from you and explore how we
          can work together to bring innovative ideas to life.
        </h1>
      </div>

      <ContactCards theme={theme} />
    </div>
  );
}
