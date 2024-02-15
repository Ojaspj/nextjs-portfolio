"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import projectImg from "../../public/project.png";

export function AnimatedPinDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-y-12  mt-8 mb-4 w-auto h-auto">
      {/* <div
        onClick={() => window.open("https://joshiprajwal.com.np")}
        className="h-[40rem] w-full flex items-center justify-center "
      >
        <PinContainer title="/joshiprajwal.com.np">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Web Template using React and TailwindCSS.
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">Click to see demo.</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div> */}
      {projectData.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
}

export const ProjectCard = ({
  title,
  overview,
  link,
}: {
  title: string;
  overview: string;
  link: string;
}) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="h-auto w-auto  flex items-center justify-center "
    >
      <PinContainer title="/joshiprajwal.com.np">
        <div className="flex basis-full flex-col  p-4  text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs  font-bold tracking-wide  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{overview}</span>
            <span className="text-slate-500 ">Click to see demo.</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 ">
            <Image src={projectImg} alt="Project COver" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

const projectData = [
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
  {
    title: "React and TailwindCSS",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://joshiprajwal.com.np",
  },
];
