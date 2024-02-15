import Content from "@/src/components/Content";
import Details from "@/src/components/Details";
import { TabsDemo } from "@/src/components/Test";
import {
  BackgroundBeams,
  BackgroundBeamsDemo,
} from "@/src/components/ui/bg-beams";
import { LampDemo } from "@/src/components/ui/lamp";
import { FaReact, FaPython, FaLaptopCode } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export default function Home() {
  return (
    <>
      {/* <Content /> */}
      {/* <BackgroundBeamsDemo /> */}
      <div className="h-auto w-full bg-slate-950 ">
        <LampDemo />

        <TabsDemo />

        
      </div>

      {/* <Details /> */}
    </>
  );
}
