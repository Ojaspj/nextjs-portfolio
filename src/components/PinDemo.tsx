"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import filmAppImg from "../../public/images/film-guide.png";
import todoAppImg from "../../public/images/todo-app.png";
import netflixCloneImg from "../../public/images/netflix-app.png";
import landingPageImg from "../../public/images/web-template.png"


export function AnimatedPinDemo({ theme }: { theme?: boolean }) {
  return (
    <div className="flex flex-wrap justify-center gap-y-12  mt-8 mb-4 w-auto h-auto">
      {projectData.map((project) => (
        <ProjectCard {...project} theme={theme} />
      ))}
    </div>
  );
}

export const ProjectCard = ({
  title,
  overview,
  link,
  theme,
  image
}: {
  title: string;
  overview: string;
  link: string;
  theme?: boolean;
  image?: any;
}) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="h-auto w-auto  flex items-center justify-center "
    >
      <PinContainer theme={theme} title={link}>
        <div className="flex basis-full flex-col  p-4 text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3
            className={`max-w-xs  font-bold tracking-wide text-base ${
              theme ? "text-[#333]" : "text-white"
            }`}
          >
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{overview}</span>
            <span className="text-slate-500 ">Click to see demo.</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 ">
            <Image src={image} alt="Project COver" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

const projectData = [
  {
    title: "Film Guide Web App",
    overview: "Search and Explore Movies and TV Shows.",
    link: "https://film-guide.vercel.app/",
    image : filmAppImg
  },
  {
    title: "Web Template using React and TailwindCSS.",
    overview: "Web Template using React and TailwindCSS.",
    link: "https://demo-landingpage-one.vercel.app/",
    image : landingPageImg
  },
  {
    title: "TODO Web App with Chakra UI",
    overview: "A simple TODO app using Chakra UI.",
    link: "https://todoapp-coral-five.vercel.app/",
    image : todoAppImg
  },
  {
    title: "Netflix Clone with movie data API",
    overview: "Netflix Clone with movie data API.",
    link: "https://netflix-nine-pied.vercel.app/",
    image : netflixCloneImg
  },
  
];
