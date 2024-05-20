"use client";
import { FaFacebook } from "react-icons/fa";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

function page() {
  return (
    <>
      <HoverEffect items={contact} />
      <BackgroundBeams />
    </>
  );
}

export default page;

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

    link: "https://meta.com",
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
