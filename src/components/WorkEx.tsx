"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Associate Frontend Engineer",
    description1:
      "Developed a Robust UI, using React.js and Redux-State Management for 15+ Web-Pages",
    description2:
      "Designed RESTful API in Backend Models.Increased database efficiency with MongoDB and Nodejs by 14 percent",
    description3:
      "Created Node.js routing models for MongoDB and integrated axios, Nodemailer for 7+ custom mailings",
    techstack: "React.js, Next.js Redux Express.js, Node.js",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Associate Frontend Engineer, Suvaye
        <br /> Sept 2023 - Dec 2023
      </div>
    ),
  },
  {
    title: "Software Engineer, Investiaa",
    description1:
      "ReactJS Frontend Development: Developed and maintained dynamic user interfaces using ReactJS.",

    description2:
      "Flutter Mobile Apps: Built and deployed cross-platform mobile applications with Flutter.",

    description3:
      "GraphQL Implementation: Designed and executed efficient data queries and mutations using GraphQL.",
    techstack:
      "Specialized in ReactJS for frontend development (JavaScript, HTML, CSS), Flutter for cross-platform mobile apps (Dart, Firebase), API integration (RESTful services, Axios, Postman), and GraphQL implementation (Apollo Client, Node.js).",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Software Engineer, Investiaa
        <br /> Nov 2023 - Present
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
