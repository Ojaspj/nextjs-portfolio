import React from "react";
import Content from "../Content";

export function MainPage() {
  return (
    <div className="h-[50rem] w-full dark:bg-amber-50 bg-white  dark:bg-grid-small-black/[0.4] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-amber-50 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Content />
    </div>
  );
}
