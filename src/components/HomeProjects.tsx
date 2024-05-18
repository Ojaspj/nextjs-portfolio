"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "Taskify",
    link: "",
    thumbnail: "/courses/Taskify.JPG",
  },
  {
    title: "Marked",
    link: "",
    thumbnail: "/courses/marked.JPG",
  },
  {
    title: "NetflixGPT",
    link: "",
    thumbnail: "/courses/Netflix.JPG",
  },

  {
    title: "Music-Edtech",
    link: "",
    thumbnail: "/courses/Music-tech.JPG",
  },
  {
    title: "HARTdraws",
    link: "",
    thumbnail: "/courses/Hartdraws.JPG",
  },
  {
    title: "Foodify",
    link: "",
    thumbnail: "/courses/Foodify.JPG",
  },

  {
    title: "Spotline",
    link: "",
    thumbnail: "/courses/Spotline.JPG",
  },
  {
    title: "Youtube Clone",
    link: "",
    thumbnail: "/courses/Youtube.JPG",
  },
 

  {
    title: "Youtube Clone1",
    link: "",
    thumbnail: "/courses/Youtube.JPG",
  },
];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
