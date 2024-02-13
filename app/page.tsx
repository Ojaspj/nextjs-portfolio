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
      <LampDemo />
      {/* <BackgroundBeamsDemo /> */}
      <div className="h-auto w-full bg-slate-950 relative">
        <div className=" absolute top-60 left-32">
          <FaReact className="text-slate-700" size={100} />
        </div>

        <div className=" absolute top-96 left-32">
          <FaLaptopCode className="text-slate-700 " size={100} />
        </div>

        <div className=" absolute left-32 bottom-40 ">
          <SiFlutter className="text-slate-700 " size={100} />
        </div>

        <TabsDemo />
      </div>

      {/* <Details /> */}
    </>
  );
}
