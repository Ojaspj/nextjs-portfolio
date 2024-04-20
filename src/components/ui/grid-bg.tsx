import React from "react";
import Content from "../Content";
import { Buttons } from "../Buttons";
import { ContactCards } from "../ContactCards";

export function MainPage() {
  return (
    <div className="h-screen w-full dark:bg-black/50 bg-black  dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black/50 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {/* <Content /> */}
      <Demo />
    </div>
  );
}

const Demo = () => {
  const [project, setProject] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  const [skills, setSkills] = React.useState(false);

  return (
    <div className=" flex w-full max-h-screen">
      {/* left conotent  */}
      <div className="w-[48%] h-screen  flex items-center justify-center text-white">
        <div className="space-y-3">
          <p className="uppercase text-md">Hello World!</p>
          <h1 className=" text-[60px] font-bold ">I am Prajwal Joshi.</h1>
          <h1 className="text-xl font-normal">
            Software Engineer | Frontend Developer
          </h1>
          <p className=" m-auto text-md font-normal">
            I design and code simple yet beautiful websites.
          </p>
        </div>
      </div>

      {/* right content  */}
      <div className="w-1/2 flex flex-col gap-6 items-center justify-center">
        <div className="flex gap-4">
          <button
            onClick={() => setProject(!project)}
            className={`

            ${project ? "bg-amber-50 text-black font-bold" : "text-white"}


             hover:scale-105 transition-all border  px-4 py-2 rounded-lg`}
          >
            Projects
          </button>
          <button className=" hover:scale-105 transition-all border text-white px-4 py-2 rounded-lg">
            About Me
          </button>
          <button className=" hover:scale-105 transition-all border text-white px-4 py-2 rounded-lg">
            Skills
          </button>
        </div>

        {!project && !about && !skills && (
          <div className="border rounded-2xl">
            <ContactCards />
          </div>
        )}

        {project && (
          <div className="w-full h-[80vh] border  rounded-lg">Project here</div>
        )}
      </div>
    </div>
  );
};
