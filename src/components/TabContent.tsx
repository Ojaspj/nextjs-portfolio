"use client";

import { Tabs } from "./ui/tabs";
import { BackgroundGradient } from "./ui/border-gradient";
import { Meteors } from "./ui/bg-meteors";
import { AnimatedPinDemo } from "./PinDemo";

import { ContactCards } from "./ContactCards";

export function TabsDemo({ theme }: { theme?: boolean }) {
  const Wrapper = theme ? "div" : BackgroundGradient;
  const props = theme;
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <Wrapper {...(props as Boolean)}>
          <div
            className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
              theme
                ? "bg-amber-50 text-[#333] border-4 border-gray-600"
                : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
            }`}
          >
            <p className="uppercase">About me</p>
            <h1
              className={`text-xl font-normal text-justify tracking-wider my-8 `}
            >
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
        </Wrapper>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <Wrapper>
          <div
            className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
              theme
                ? "bg-amber-50 text-[#333] border-4 border-gray-600"
                : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
            }`}
          >
            <p>PROJECTS</p>

            <AnimatedPinDemo />
          </div>
        </Wrapper>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <Wrapper>
          <div
            className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
              theme
                ? "bg-amber-50 text-[#333] border-4 border-gray-600"
                : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
            }`}
          >
            <p className="uppercase">Experience</p>
          </div>
        </Wrapper>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <Wrapper>
          <div
            className={`w-full overflow-scroll scrollbar-width:none relative md:h-[43rem] rounded-2xl p-10 text-xl md:text-4xl font-bold  ${
              theme
                ? "bg-amber-50 text-[#333] border-4 border-gray-600"
                : " bg-gradient-to-br from-slate-700 to-slate-900 text-white"
            }`}
          >
            <h1 className="uppercase">Contact</h1>

            <div>
              <h1
                className={`text-xl font-normal text-justify tracking-wider my-8 `}
              >
                Thank you for visiting my portfolio! I'm passionate about
                crafting exceptional user experiences through frontend
                development. If you have any inquiries, collaboration
                opportunities, or just want to connect, feel free to reach out.
                I'm eager to hear from you and explore how we can work together
                to bring innovative ideas to life.
              </h1>
            </div>

            <ContactCards theme={theme}/>
            
           
          </div>
        </Wrapper>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem]  [perspective:1000px] relative flex flex-col  mx-auto w-full ">
      <Tabs tabs={tabs} theme={theme} />
    </div>
  );
}
