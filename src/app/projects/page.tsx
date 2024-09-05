"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectsData from "@/data/projectsPageData.json";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Boxes } from "@/components/ui/background-boxes";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <Boxes />
      <div className="flex flex-wrap justify-center">
        {projectsData?.projects.map((project) => (
          <CardContainer className="inter-var m-4" key={project.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>

              {project?.tags.map((tag) => (
                <div className="inline-block h-auto my-2">
                  <div className="inline-block bg-gradient-to-r ml-2 from-blue-500 to-purple-500 text-white h-auto p-2 rounded-full text-sm ">
                    {tag}
                  </div>
                </div>
              ))}

            

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <Link href={project.github}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white flex"
                  >
                    <FaGithub className="mr-2" size={20} />
                    Github Repo →
                  </CardItem>
                </Link>
                <Link href={project.livelink}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold flex"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Link
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
