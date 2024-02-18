"use client";

import { Tabs } from "./ui/tabs";
import { BackgroundGradient } from "./ui/border-gradient";
import { Meteors } from "./ui/bg-meteors";
import { AnimatedPinDemo } from "./PinDemo";

import { ContactCards } from "./ContactCards";
import ProjectContent from "./project";
import ContactContent from "./contact";
import AboutContent from "./about";

export function TabsDemo({ theme }: { theme?: boolean }) {
  const Wrapper = theme ? "div" : BackgroundGradient;
  const props = theme;
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <Wrapper {...(props as Boolean)}>
         <AboutContent theme={theme}/>
        </Wrapper>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <Wrapper>
          <ProjectContent theme={theme} />
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
         <ContactContent theme={theme} />
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
