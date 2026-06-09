"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ImageGallery from "@/components/image-gallery";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Banner */}
      <section className="relative w-full overflow-hidden border-b border-line" style={{ height: "clamp(240px,40vh,480px)" }}>
        <Image
          src={project.banner || project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--paper) 0%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="wrap pb-8">
            <Link
              href="/projects"
              className="font-mono text-[12px] text-slate hover:text-ink transition-colors duration-[120ms] inline-flex items-center gap-1 mb-4"
            >
              ← All projects
            </Link>
            <h1
              className="font-display font-semibold text-ink mb-2"
              style={{ fontSize: "clamp(28px,5vw,48px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h1>
            <p className="text-slate" style={{ maxWidth: "54ch", fontSize: "16px" }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBlock: "clamp(48px,8vh,96px)" }}>
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 md:gap-16"
          >
            {/* Main */}
            <motion.div variants={fade} className="space-y-12">

              {/* Overview */}
              <div>
                <p
                  className="font-mono uppercase text-slate mb-4"
                  style={{ fontSize: "11px", letterSpacing: ".08em" }}
                >
                  Overview
                </p>
                <p className="text-ink" style={{ fontSize: "17px", lineHeight: 1.7 }}>
                  {project.process ||
                    `${project.title} is a comprehensive application built with a focus on performance, accessibility, and user experience.`}
                </p>
              </div>

              {/* Features */}
              <div>
                <p
                  className="font-mono uppercase text-slate mb-4"
                  style={{ fontSize: "11px", letterSpacing: ".08em" }}
                >
                  Features
                </p>
                <ul className="space-y-2.5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="shrink-0 rounded-full bg-slate/40 mt-[10px]"
                        style={{ width: "5px", height: "5px" }}
                      />
                      <span className="text-slate" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div>
                  <p
                    className="font-mono uppercase text-slate mb-4"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    Screenshots
                  </p>
                  <ImageGallery images={project.screenshots} alt={project.title} />
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={fade} className="space-y-8">

              {/* Tech stack */}
              <div
                className="border border-line bg-paper-2 p-6 space-y-6"
                style={{ borderRadius: "2px" }}
              >
                <div>
                  <p
                    className="font-mono uppercase text-slate mb-3"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-ink border border-line bg-paper"
                        style={{ fontSize: "12px", borderRadius: "2px", padding: "5px 9px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line" />

                {/* Category tags */}
                <div>
                  <p
                    className="font-mono uppercase text-slate mb-3"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    Category
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-slate border border-line"
                        style={{ fontSize: "11.5px", borderRadius: "2px", padding: "4px 9px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line" />

                {/* Links */}
                <div className="space-y-2.5">
                  {project.demoUrl && project.demoUrl !== "null" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full font-mono text-[13px] bg-ink text-paper hover:bg-brand transition-colors duration-150 active:translate-y-px"
                      style={{ padding: "11px 18px", borderRadius: "2px" }}
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "null" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full font-mono text-[13px] text-ink border border-ink hover:bg-ink hover:text-paper transition-colors duration-150 active:translate-y-px"
                      style={{ padding: "11px 18px", borderRadius: "2px" }}
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* More projects */}
              {otherProjects.length > 0 && (
                <div>
                  <p
                    className="font-mono uppercase text-slate mb-3"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    More Projects
                  </p>
                  <div className="space-y-2">
                    {otherProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="flex items-center justify-between border border-line bg-paper-2 text-slate hover:text-ink hover:border-ink transition-colors duration-[120ms] px-4 py-3"
                        style={{ borderRadius: "2px" }}
                      >
                        <span className="font-mono text-[13px] truncate pr-2">{p.title}</span>
                        <span className="font-mono text-[13px] shrink-0">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
