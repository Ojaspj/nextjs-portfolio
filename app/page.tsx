import Content from "@/src/components/Content";
import Details from "@/src/components/Details";
import { TabsDemo } from "@/src/components/Test";
import {
  BackgroundBeams,
  BackgroundBeamsDemo,
} from "@/src/components/ui/bg-beams";
import { LampDemo } from "@/src/components/ui/lamp";
import { Tabs } from "@/src/components/ui/tabs";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* <Content /> */}
      <LampDemo />
      {/* <BackgroundBeamsDemo /> */}
      <div className="h-auto w-full bg-slate-950">
        <TabsDemo />
      </div>

      {/* <Details /> */}
    </>
  );
}
