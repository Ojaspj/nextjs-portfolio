"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Prajwal Joshi
        </h1>
        <div className="mt-2 w-screen h-40 relative -z-10">
          {/* Gradients */}

          <div className="mt-6 -ml-8 z-10">
            <p className="mt-4 px-12 md:px-0 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Software Engineer | Frontend Developer with a passion for building
              beautiful and functional user interfaces.
            </p>
            <div className="mt-4">
              <Link href="https://drive.google.com/file/d/1QKBtX9r2_f1srqXiy8CfRvtowRS8G5bQ/view?usp=sharing">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Chekout Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
