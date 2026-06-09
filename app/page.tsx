"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

const techCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React", image: "/react.webp" },
      { name: "Next.js", image: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
      { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
      { name: "JavaScript", image: "/Javascript.webp" },
      { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" },
      { name: "HTML / CSS", image: "/HTML.webp" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", image: "/NodeJS.webp" },
      { name: "GraphQL", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" },
      { name: "REST APIs", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    label: "Database & Tools",
    skills: [
      { name: "PostgreSQL", image: "/PostGre.webp" },
      { name: "Firebase", image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
      { name: "Git", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "Vercel", image: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
      { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ],
  },
];

const experience = [
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
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    description:
      "Building SaaS products, web applications, and client websites end-to-end. Delivered 7+ projects under the PrajwalApps brand ranging from mobile apps to full-stack platforms.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Add Your Company",
    location: "Add Location",
    period: "2021 – 2022",
    description:
      "Built and maintained web interfaces, worked on responsive design, and gained production-level React experience.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Available badge */}
            <motion.div variants={fade} className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fade}
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-foreground leading-none"
            >
              Prajwal Joshi
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fade}
              className="text-lg md:text-xl text-muted-foreground font-medium"
            >
              Front-End Engineer &mdash; React · Next.js · TypeScript
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fade}
              className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              3+ years building high-performance web applications. I specialize in
              clean, responsive interfaces integrated with robust backend systems.
              Currently building products under the{" "}
              <span className="text-foreground font-medium">PrajwalApps</span> brand.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fade} className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2.5 transition-colors"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fade}
              className="flex items-center justify-center gap-8 pt-2 text-sm text-muted-foreground"
            >
              <span><strong className="text-foreground font-semibold">3+</strong> Years</span>
              <span className="w-px h-4 bg-border" />
              <span><strong className="text-foreground font-semibold">7+</strong> Projects</span>
              <span className="w-px h-4 bg-border" />
              <span><strong className="text-foreground font-semibold">100%</strong> Remote</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section id="about" className="border-b border-border/60">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start"
          >
            <motion.div variants={fade} className="md:col-span-3 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Building the web, one clean component at a time.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                  <span className="text-foreground font-medium">PrajwalApps</span>{" "}
                  brand — turning ideas into polished, usable products.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fade} className="md:col-span-2 grid grid-cols-2 gap-3">
              {[
                { value: "3+", label: "Years of experience" },
                { value: "7+", label: "Projects shipped" },
                { value: "10+", label: "Technologies" },
                { value: "100%", label: "Remote ready" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card p-5 text-center space-y-1.5"
                >
                  <p className="text-3xl font-bold tracking-tight">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="border-b border-border/60 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <motion.div variants={fade} className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Experience
              </p>
              <h2 className="text-3xl font-bold tracking-tight">Work History</h2>
            </motion.div>

            <motion.div variants={fade} className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-10">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-8">
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-foreground bg-background" />
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.company} &middot; {exp.location}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs text-muted-foreground border border-border rounded-full px-3 py-1 self-start">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {exp.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs font-normal">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────── */}
      <section id="stack" className="border-b border-border/60">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <motion.div variants={fade} className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Stack
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Tools I build with
              </h2>
            </motion.div>

            <motion.div variants={fade} className="space-y-7">
              {techCategories.map((cat) => (
                <div key={cat.label} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium transition-all duration-150 hover:border-foreground/25 hover:shadow-sm cursor-default select-none"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-4 w-4 object-contain shrink-0"
                        />
                        <span className="text-foreground/75 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Selected Work ────────────────────────────────── */}
      <section id="work" className="border-b border-border/60 bg-muted/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-5xl mx-auto space-y-10"
          >
            <motion.div variants={fade} className="flex items-end justify-between">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Work
                </p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Selected Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div variants={fade} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.slice(0, 3).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5 space-y-2.5">
                    <h3 className="font-semibold text-foreground leading-snug group-hover:text-foreground/70 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>

            <motion.div variants={fade} className="sm:hidden">
              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 w-full rounded-md border border-border py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section id="contact" className="border-b border-border/60">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-2xl mx-auto text-center space-y-7"
          >
            <motion.div variants={fade} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Let&apos;s work together.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Open to new opportunities, freelance projects, and interesting
                collaborations. Drop me a line and I&apos;ll get back to you promptly.
              </p>
            </motion.div>

            <motion.div variants={fade} className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:joshiprajwal00@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                joshiprajwal00@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                Send a message
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-8 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prajwal Joshi
          </p>
          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ojaspj" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="mailto:joshiprajwal00@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
