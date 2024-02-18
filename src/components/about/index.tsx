import React from "react";
import { Meteors } from "../ui/bg-meteors";

export default function AboutContent({ theme }: { theme?: boolean }) {
  return (
    <div
      className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
        theme
          ? "bg-amber-50 text-[#333] border-4 border-gray-600"
          : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
      }`}
    >
      <p className="uppercase">About me</p>
      <h1 className={`text-xl font-normal text-justify tracking-wider my-8 `}>
        Hey there! I'm{" "}
        <span className="font-bold text-purple-400">Prajwal Joshi</span>, a
        spirited software engineering enthusiast navigating the exciting realm
        of code and creativity. Currently savoring the last sip of my academic
        journey, I'm a final-year student with a penchant for crafting seamless
        and captivating frontend experiences. <br /> <br /> Venturing into the
        world of frontend development over a year ago, I've been on a thrilling
        rollercoaster of turning ideas into interactive digital realities. My
        playground involves weaving together the perfect symphony of code and
        design, ensuring that every pixel dances in harmony. <br /> <br /> As a
        perpetual learner, I'm always on the lookout for the next big thing in
        tech. My portfolio isn't just a showcase of projects; it's a visual
        story of my journey, blending academic prowess with real-world coding
        escapades. <br /> <br /> So, buckle up and join me on this electrifying
        ride through the fascinating universe of frontend development!
      </h1>
      <Meteors number={30} />
    </div>
  );
}
