"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>About</p>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Projects tab</p>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Experience tab</p>
        </div>
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Contact tab</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[50rem]  [perspective:1000px] relative flex flex-col  mx-auto w-full ">
      <Tabs tabs={tabs} />
    </div>
  );
}
