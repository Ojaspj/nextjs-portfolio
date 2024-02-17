"use client";
import Content from "@/src/components/Content";
import Details from "@/src/components/Details";
import { TabsDemo } from "@/src/components/Test";
import {
  BackgroundBeams,
  BackgroundBeamsDemo,
} from "@/src/components/ui/bg-beams";
import { LampDemo } from "@/src/components/ui/lamp";
import { useState } from "react";
import { FaReact, FaPython, FaLaptopCode } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";

export default function Home() {
  const [light, setLight] = useState(false);
  return (
    <div className="w-full h-auto relative">
      <div
        onClick={() => setLight(!light)}
        className={`  ${
          light ? " border-slate-950 text-slate-950" : "bg-slate-950 text-white"
        } z-50 w-12 h-12   border  right-4 top-8 animate-bounce rounded-full fixed flex items-center justify-center cursor-pointer`}
      >
        {light ? <CiLight size={24} /> : <CiDark size={24} />}
      </div>

      {/* light mode  */}
      {light && (
        <>
          <Content />
          <TabsDemo />
        </>
      )}

      {/* dark mode  */}
      {!light && (
        <div className="h-auto w-full bg-slate-950 ">
          <LampDemo />
          <TabsDemo />
        </div>
      )}

      {/* <Details /> */}
    </div>
  );
}
