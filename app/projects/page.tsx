"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  return (
    <>
      {/* Page header */}
      <section
        className="border-b border-line"
        style={{ paddingTop: "clamp(56px,10vh,112px)", paddingBottom: "clamp(40px,6vh,72px)" }}
      >
        <div className="wrap">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fade}
              className="font-mono uppercase text-brand mb-4"
              style={{ fontSize: "12.5px", letterSpacing: ".14em" }}
            >
              Work
            </motion.p>
            <motion.h1
              variants={fade}
              className="font-display font-semibold text-ink mb-4"
              style={{ fontSize: "clamp(34px,6vw,56px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
            >
              Projects
            </motion.h1>
            <motion.p
              variants={fade}
              className="text-slate mb-8"
              style={{ maxWidth: "52ch", fontSize: "clamp(16px,2vw,18px)" }}
            >
              A collection of things I&apos;ve built — from SaaS tools and mobile apps to
              full-stack platforms.
            </motion.p>

            {/* Tag filters */}
            <motion.div variants={fade} className="flex flex-wrap gap-2">
              <button
                onClick={() => setActive(null)}
                className="font-mono text-[11.5px] border transition-colors duration-[120ms]"
                style={{
                  borderRadius: "2px",
                  padding: "5px 11px",
                  borderColor: active === null ? "var(--brand)" : "var(--line)",
                  color: active === null ? "var(--brand)" : "var(--slate)",
                  backgroundColor: "transparent",
                }}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActive(active === tag ? null : tag)}
                  className="font-mono text-[11.5px] border transition-colors duration-[120ms]"
                  style={{
                    borderRadius: "2px",
                    padding: "5px 11px",
                    borderColor: active === tag ? "var(--brand)" : "var(--line)",
                    color: active === tag ? "var(--brand)" : "var(--slate)",
                    backgroundColor: "transparent",
                  }}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project rows */}
      <section style={{ paddingBlock: "clamp(40px,7vh,80px)" }}>
        <div className="wrap">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={fade}
                className={[
                  "grid grid-cols-1 sm:grid-cols-[64px_1fr_auto] gap-x-7 gap-y-2 py-[30px] hover:bg-paper-2 transition-colors duration-[120ms] rounded-sm",
                  i > 0 ? "border-t border-line" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Index */}
                <span className="hidden sm:block font-mono text-[13px] text-slate pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h2
                      className="font-display font-semibold text-ink hover:text-brand transition-colors duration-[120ms] mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      {project.title}
                    </h2>
                  </Link>
                  <p
                    className="text-slate mb-3"
                    style={{ maxWidth: "60ch", fontSize: "15px", lineHeight: 1.6 }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
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

                {/* Links */}
                <div className="flex sm:flex-col flex-row flex-wrap gap-3 sm:gap-2 sm:items-end sm:pt-0.5 pt-2">
                  {project.demoUrl && project.demoUrl !== "null" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-brand underline decoration-brand hover:opacity-60 transition-opacity duration-[120ms] whitespace-nowrap"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "null" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-slate hover:opacity-60 transition-opacity duration-[120ms] whitespace-nowrap"
                    >
                      Code
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-mono text-[13px] text-slate hover:opacity-60 transition-opacity duration-[120ms] whitespace-nowrap"
                  >
                    Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
