"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { BackgroundGradient } from "./ui/border-gradient";
import { Meteors } from "./ui/bg-meteors";
import { AnimatedPinDemo } from "./PinDemo";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <p className="uppercase">About me</p>
            <h1 className="text-xl font-normal text-justify tracking-wider my-8">
              Hey there! I'm{" "}
              <span className="font-bold text-purple-400">Prajwal Joshi</span>,
              a spirited software engineering enthusiast navigating the exciting
              realm of code and creativity. Currently savoring the last sip of
              my academic journey, I'm a final-year student with a penchant for
              crafting seamless and captivating frontend experiences. <br />{" "}
              <br /> Venturing into the world of frontend development over a
              year ago, I've been on a thrilling rollercoaster of turning ideas
              into interactive digital realities. My playground involves weaving
              together the perfect symphony of code and design, ensuring that
              every pixel dances in harmony. <br /> <br /> As a perpetual
              learner, I'm always on the lookout for the next big thing in tech.
              My portfolio isn't just a showcase of projects; it's a visual
              story of my journey, blending academic prowess with real-world
              coding escapades. <br /> <br /> So, buckle up and join me on this
              electrifying ride through the fascinating universe of frontend
              development!
            </h1>
            <Meteors number={30} />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-scroll relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <p>PROJECTS</p>

            <AnimatedPinDemo />
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <p className="uppercase">Experience</p>
          </div>
        </BackgroundGradient>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <BackgroundGradient>
          <div className="w-full overflow-hidden relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <p>Contact</p>
          </div>
        </BackgroundGradient>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem]  [perspective:1000px] relative flex flex-col  mx-auto w-full ">
      <Tabs tabs={tabs} />
    </div>
  );
}
