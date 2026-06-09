"use client";

import { motion } from "framer-motion";
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

const featuredProjects = projects.slice(0, 5);

const experienceData = [
  {
    role: "Software Engineer",
    company: "Investiaa",
    location: "Remote",
    period: "2023 – 2024",
    description:
      "Contributed to a startup ecosystem platform connecting startups with investors and incubators. Developed frontend features with React and Next.js, and contributed to GraphQL API design and PostgreSQL integrations.",
    tags: ["React", "Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    description:
      "Building SaaS products, web applications, and client websites end-to-end. Delivered 7+ projects under the PrajwalApps brand ranging from mobile apps to full-stack platforms.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    role: "Add Role",
    company: "Add Company",
    location: "Add Location",
    period: "20XX – 20XX",
    description: "Add description here — edit this entry with your real experience.",
    tags: ["React", "JavaScript"],
  },
];

const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Node.js", "GraphQL", "React Native", "Tailwind CSS"],
  Tooling: ["PostgreSQL", "Firebase", "Git", "Vercel", "Figma"],
};

const metaItems = [
  { label: "Experience", value: "3+ Years", dot: false },
  { label: "Projects Shipped", value: "7+", dot: false },
  { label: "Status", value: "Open to work", dot: true },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(64px,12vh,140px)",
          paddingBottom: "clamp(56px,9vh,96px)",
        }}
      >
        <div className="wrap">
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Eyebrow */}
            <motion.p
              variants={fade}
              className="font-mono uppercase text-brand mb-5"
              style={{ fontSize: "12.5px", letterSpacing: ".14em" }}
            >
              Full-Stack Software Developer
            </motion.p>

            {/* H1 */}
            <motion.h1
              variants={fade}
              className="font-display font-semibold text-ink mb-6"
              style={{
                fontSize: "clamp(34px,6vw,68px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                maxWidth: "15ch",
              }}
            >
              I build web apps that load fast and{" "}
              <span className="text-brand">feel right.</span>
            </motion.h1>

            {/* Lede */}
            <motion.p
              variants={fade}
              className="text-slate mb-9"
              style={{
                maxWidth: "54ch",
                fontSize: "clamp(17px,2.2vw,20px)",
                lineHeight: 1.6,
              }}
            >
              3+ years designing and building full-stack web applications — from
              pixel-perfect interfaces to scalable backend systems. I take products
              from idea to deployment. Currently shipping under the PrajwalApps brand.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fade} className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/projects"
                className="font-mono text-[13.5px] bg-ink text-paper hover:bg-brand transition-colors duration-150 active:translate-y-px"
                style={{ padding: "13px 22px", borderRadius: "2px" }}
              >
                View Projects
              </Link>
              <Link
                href="/#contact"
                className="font-mono text-[13.5px] border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-150 active:translate-y-px"
                style={{ padding: "13px 22px", borderRadius: "2px" }}
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Meta strip */}
            <motion.div
              variants={fade}
              className="grid grid-cols-1 sm:grid-cols-3 border-t border-line"
            >
              {metaItems.map((item, i) => (
                <div
                  key={item.label}
                  className={[
                    "py-5 sm:py-0 sm:pt-7",
                    i < 2 ? "border-b border-line sm:border-b-0 sm:border-r sm:pr-6" : "",
                    i > 0 ? "sm:pl-6" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p
                    className="font-mono uppercase text-slate mb-1.5"
                    style={{ fontSize: "11px", letterSpacing: ".08em" }}
                  >
                    {item.label}
                  </p>
                  <p className="font-display text-[17px] text-ink flex items-center gap-2">
                    {item.dot && (
                      <span
                        className="inline-block shrink-0 rounded-full bg-success"
                        style={{ width: "8px", height: "8px" }}
                      />
                    )}
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ── §01 Work ──────────────────────────────────── */}
      <section
        id="work"
        className="border-t border-line"
        style={{ paddingBlock: "clamp(56px,9vh,104px)" }}
      >
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section header */}
            <motion.div
              variants={fade}
              className="flex items-baseline gap-4 mb-10"
            >
              <span className="font-mono text-brand text-[13px] shrink-0">§01</span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(22px,3vw,30px)" }}
              >
                Selected Work
              </h2>
              <span className="font-mono text-[12px] text-slate ml-auto">
                {String(featuredProjects.length).padStart(2, "0")} featured
              </span>
            </motion.div>

            {/* Project rows */}
            {featuredProjects.map((project, i) => (
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
                {/* Col 1: index */}
                <span className="hidden sm:block font-mono text-[13px] text-slate pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Col 2: content */}
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3
                      className="font-display font-semibold text-ink hover:text-brand transition-colors duration-[120ms] mb-2"
                      style={{ fontSize: "22px" }}
                    >
                      {project.title}
                    </h3>
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

                {/* Col 3: links */}
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

            {/* View all */}
            <motion.div
              variants={fade}
              className="border-t border-line pt-5 mt-1"
            >
              <Link
                href="/projects"
                className="font-mono text-[13px] text-brand hover:opacity-70 transition-opacity duration-[120ms]"
              >
                View all {projects.length} projects →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── §02 About ─────────────────────────────────── */}
      <section
        id="about"
        className="border-t border-line"
        style={{ paddingBlock: "clamp(56px,9vh,104px)" }}
      >
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section header */}
            <motion.div variants={fade} className="flex items-baseline gap-4 mb-12">
              <span className="font-mono text-brand text-[13px] shrink-0">§02</span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(22px,3vw,30px)" }}
              >
                About
              </h2>
            </motion.div>

            {/* Two-column grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr]"
              style={{ gap: "clamp(32px,6vw,80px)" }}
            >
              {/* Left: bio */}
              <motion.div variants={fade} className="space-y-5 text-[18px] text-ink" style={{ lineHeight: 1.7 }}>
                <p>
                  Hi, I&apos;m Prajwal — a frontend developer with a strong eye for
                  clean design and a growing passion for full-stack development.
                  I craft responsive, user-friendly interfaces using React,
                  Next.js, and Tailwind CSS.
                </p>
                <p>
                  I believe in writing clean, scalable code and designing intuitive
                  interfaces that feel effortless to use. Whether it&apos;s a
                  single-page app or a complete SaaS product, I keep things
                  simple, efficient, and impactful.
                </p>
                <p>
                  I&apos;m building a collection of apps under the{" "}
                  <span className="font-medium">PrajwalApps</span>{" "}
                  brand — turning ideas into polished, usable products. Previously a
                  Software Engineer at Investiaa, contributing to their startup
                  ecosystem platform with React, Next.js, and GraphQL.
                </p>
              </motion.div>

              {/* Right: skills */}
              <motion.div variants={fade} className="space-y-7">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p
                      className="font-mono uppercase text-slate mb-2.5"
                      style={{ fontSize: "11px", letterSpacing: ".08em" }}
                    >
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-ink bg-paper-2 border border-line"
                          style={{ fontSize: "13px", borderRadius: "2px", padding: "6px 11px" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── §03 Experience ────────────────────────────── */}
      <section
        id="experience"
        className="border-t border-line"
        style={{ paddingBlock: "clamp(56px,9vh,104px)" }}
      >
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section header */}
            <motion.div variants={fade} className="flex items-baseline gap-4 mb-12">
              <span className="font-mono text-brand text-[13px] shrink-0">§03</span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(22px,3vw,30px)" }}
              >
                Experience
              </h2>
              <span className="font-mono text-[12px] text-slate ml-auto">
                {String(experienceData.length).padStart(2, "0")} roles
              </span>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={fade} className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />

              <div className="space-y-10">
                {experienceData.map((exp, i) => (
                  <div key={i} className="relative sm:pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-[5px] hidden sm:block rounded-full border-2 border-ink bg-paper"
                      style={{ width: "15px", height: "15px" }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3
                          className="font-display font-semibold text-ink"
                          style={{ fontSize: "18px" }}
                        >
                          {exp.role}
                        </h3>
                        <p className="font-mono text-[13px] text-slate mt-0.5">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span
                        className="font-mono text-[12px] text-slate border border-line shrink-0 self-start"
                        style={{ padding: "4px 9px", borderRadius: "2px" }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate mb-3" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
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
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── §04 Contact ───────────────────────────────── */}
      <section
        id="contact"
        className="border-t border-line"
        style={{ paddingBlock: "clamp(56px,9vh,104px)" }}
      >
        <div className="wrap">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section header */}
            <motion.div variants={fade} className="flex items-baseline gap-4 mb-12">
              <span className="font-mono text-brand text-[13px] shrink-0">§04</span>
              <h2
                className="font-display font-semibold text-ink"
                style={{ fontSize: "clamp(22px,3vw,30px)" }}
              >
                Get in Touch
              </h2>
            </motion.div>

            {/* Big headline */}
            <motion.h3
              variants={fade}
              className="font-display font-semibold text-ink mb-7"
              style={{
                fontSize: "clamp(28px,5vw,52px)",
                maxWidth: "18ch",
                lineHeight: 1.1,
              }}
            >
              Let&apos;s work together.
            </motion.h3>

            {/* Mailto */}
            <motion.div variants={fade} className="mb-8">
              <a
                href="mailto:joshiprajwal00@gmail.com"
                className="font-display text-brand border-b-2 border-brand hover:opacity-70 transition-opacity duration-150 pb-0.5"
                style={{ fontSize: "clamp(20px,3vw,30px)" }}
              >
                joshiprajwal00@gmail.com
              </a>
            </motion.div>

            {/* Socials row */}
            <motion.div variants={fade} className="flex flex-wrap gap-6">
              {[
                { label: "GitHub", href: "https://github.com/ojaspj", external: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-joshi-3b3734156/", external: true },
                { label: "Résumé PDF", href: "/resume.pdf", external: false },
                { label: "Send Message", href: "/contact", external: false },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-[13px] text-slate hover:text-ink transition-colors duration-[120ms]"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
