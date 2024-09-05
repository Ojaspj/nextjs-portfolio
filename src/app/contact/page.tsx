"use client";
import { FaFacebook } from "react-icons/fa";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <>
    <Navbar />
      <HoverEffect items={contact} />
      <BackgroundBeams />
    </>
  );
}


const contact = [
  {
    title: "Facebook",
    description: "mr_prajwaljoshi",
    link: "https://facebook.com",
  },
  {
    title: "LinkedIn",
    description: "prajwal-joshi",

    link: "https://www.linkedin.com/in/prajwal-joshi-3b3734156",
  },
  {
    title: "Instagram",
    description: "mr.prajwaljoshi",

    link: "https://instagram.com/mr.prajwaljoshi",
  },
  {
    title: "X",
    description: "mr_prajwaljoshi",

    link: "https://twitter.com/mr_prajwaljoshi",
  },
  {
    title: "Mail",
    description: "joshiprajwal00@gmail.com",

    link: "https://amazon.com",
  },
  {
    title: "Github",
    description: "Ojaspj",

    link: "https://github.com/Ojaspj",
  },
];
