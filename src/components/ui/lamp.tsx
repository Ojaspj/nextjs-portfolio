"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/src/utils";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { BackgroundBeams } from "./bg-beams";
import { MagicButton } from "./moving-border";

export function LampDemo() {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative h-auto mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-slate-300 flex items-center justify-center "
        >
          <div className="pt-14">
            <p className="uppercase text-md relative z-10">Hello World!</p>
            <h1 className=" py-4 text-[70px] font-bold ">
              I am
              <span className=""> Prajwal Joshi.</span>
            </h1>
            <h1 className="py-1 text-xl font-normal">
              Software Engineer | Frontend Developer | React | Flutter{" "}
            </h1>
            <p className="py-4 max-w-[70%] m-auto text-md font-normal">
              I design and code simple yet beautiful websites.
            </p>
          </div>
        </motion.h1>
      </LampContainer>

      <div className=" relative z-10 flex items-center justify-center ">
        <div className=" absolute bottom-4  text-white ">
          {/* arrow down */}
          <div className="mb-6 flex flex-col items-center justify-center">
            {/* <div className=" animate-bounce flex flex-col items-center">
              <FaArrowDown size={40} />
            </div> */}

            <MagicButton className="text-[16px] font-normal">
              <h1 className=" animate-pulse">Scroll Down</h1>
            </MagicButton>
          </div>

          <div className="flex gap-4  justify-between items-center">
            <div className="w-[600px] border-b border-gray-500 " />
            {/* social links  */}
            <div className="flex gap-4">
              <a
                href={"https://www.linkedin.com/in/prajwal-joshi-3b3734156/"}
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
              <a href={"https://github.com/Ojaspj"} target="_blank">
                <FaGithub size={30} />
              </a>
              <a
                href="https://drive.google.com/file/d/1EDs7c0bvfIltq2FFK1OC6hEbNCvjLHP-/view?usp=sharing"
                target="_blank"
                className="rounded-full p-1 border border-gray-500"
              >
                <p className="font-bold text-sm">CV</p>
              </a>
            </div>
            <div className="w-[600px] border-b border-gray-500" />
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden  bg-slate-950 w-full ",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]  from-cyan-500 via-transparent to-transparent text-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/* <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div> */}
        {/* <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div> */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-slate-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-gray-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
