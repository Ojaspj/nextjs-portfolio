"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      "Contributed to a startup ecosystem platform connecting startups with investors and incubators. Developed frontend features using React and Next.js, and contributed to GraphQL API design and PostgreSQL database integration.",
    tags: ["React", "Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    description:
      "Building SaaS products, web applications, and client websites end-to-end. Delivered 7+ projects under the PrajwalApps brand, ranging from mobile apps to full-stack web platforms.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Add Your Company Here",
    location: "Add Location",
    period: "2021 – 2022",
    description:
      "Built and maintained web interfaces, worked on responsive design, and gained hands-on experience with production-level React development.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 md:px-6 border-b">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6"
          >
            <motion.div variants={item} className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              Prajwal Joshi
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-xl sm:text-2xl text-muted-foreground font-medium"
            >
              Front-End Engineer &mdash; React · Next.js · TypeScript
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base text-muted-foreground leading-relaxed max-w-xl"
            >
              3+ years building high-performance web applications. I specialize
              in clean, responsive interfaces and integrating them with robust
              backend systems. Currently building products under the{" "}
              <span className="text-foreground font-medium">PrajwalApps</span>{" "}
              brand.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-3 pt-1">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-center gap-5 pt-1">
              <a
                href="https://github.com/ojaspj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:joshiprajwal00@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 px-4 md:px-6 border-b">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto"
          >
            <motion.div variants={item} className="md:col-span-3 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I&apos;m Prajwal — a frontend developer with a strong eye
                  for clean design and a growing passion for building full-stack
                  applications. I specialize in crafting responsive,
                  user-friendly interfaces using React, Next.js, and Tailwind
                  CSS.
                </p>
                <p>
                  My work focuses on creating smooth, modern experiences that
                  not only look good but also solve real problems. I believe in
                  writing clean, scalable code and designing intuitive interfaces
                  that feel effortless to use.
                </p>
                <p>
                  I&apos;m building a collection of apps under the{" "}
                  <span className="text-foreground font-medium">
                    PrajwalApps
                  </span>{" "}
                  brand — turning concepts into polished, usable products.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="md:col-span-2 grid grid-cols-2 gap-4 content-start"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "7+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
                { value: "100%", label: "Remote Ready" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border rounded-lg p-5 text-center space-y-1"
                >
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-20 md:py-28 px-4 md:px-6 border-b bg-muted/20"
      >
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12 max-w-3xl mx-auto"
          >
            <motion.div variants={item} className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Work Experience
              </h2>
              <p className="text-muted-foreground">
                My professional journey so far.
              </p>
            </motion.div>

            <motion.div variants={item} className="relative space-y-0">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-10 last:pb-0">
                  <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-foreground bg-background" />
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-base leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {exp.company} &middot; {exp.location}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap border rounded-full px-3 py-1 self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 px-4 md:px-6 border-b">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10 max-w-4xl mx-auto"
          >
            <motion.div variants={item} className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Tech Stack
              </h2>
              <p className="text-muted-foreground">
                Tools and technologies I use to build modern applications.
              </p>
            </motion.div>

            <motion.div variants={item} className="space-y-8">
              {techCategories.map((cat) => (
                <div key={cat.label} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2.5 rounded-lg border bg-background px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:border-foreground/30 hover:shadow-sm cursor-default select-none"
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-[18px] w-[18px] object-contain shrink-0"
                        />
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">
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

      {/* Featured Projects */}
      <section
        id="projects"
        className="py-20 md:py-28 px-4 md:px-6 border-b bg-muted/20"
      >
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10 max-w-5xl mx-auto"
          >
            <motion.div
              variants={item}
              className="flex items-end justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground">
                  A selection of recent work.
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:flex"
              >
                <Link href="/projects">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.slice(0, 3).map((project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="block h-full group"
                >
                  <Card className="overflow-hidden h-full border hover:border-foreground/30 transition-all duration-200 hover:-translate-y-0.5">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <h3 className="font-semibold leading-snug group-hover:text-muted-foreground transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>

            <motion.div variants={item} className="sm:hidden">
              <Button variant="outline" asChild className="w-full">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 px-4 md:px-6 border-b">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 max-w-2xl mx-auto text-center"
          >
            <motion.div variants={item} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Open to new opportunities, freelance projects, and
                collaborations. I&apos;d love to hear about what you&apos;re
                building.
              </p>
            </motion.div>
            <motion.div variants={item} className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href="mailto:joshiprajwal00@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  joshiprajwal00@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prajwal Joshi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ojaspj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:joshiprajwal00@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
