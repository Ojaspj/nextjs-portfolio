"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/projects";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { techStack } from "@/lib/tech-stack";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-24 px-4 md:px-6 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto md:mx-0 space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 leading-tight">
              Prajwal Joshi
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 leading-tight">
              Frontend & Full-Stack Developer
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Hi, I'm Prajwal — a frontend-focused developer with a strong
              interest in building full-stack SaaS applications. I craft clean,
              modern user interfaces using React, Next.js, and Tailwind CSS, and
              I enjoy bringing ideas to life by managing everything from UI to
              backend logic.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-md text-sm md:text-base"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1e-IiP4F4rA4MRKo3R5hS4XYVOcPJCk1X/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="rounded-md text-sm md:text-base"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 md:py-32 px-4 md:px-6">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              variants={item}
              className="order-2 md:order-1 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                About Me
              </h2>
              <div className="space-y-4 text-justify">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm Prajwal — a frontend developer with a strong eye for
                  clean design and a growing passion for building full-stack
                  applications. I specialize in crafting responsive,
                  user-friendly interfaces using React, Next.js, and Tailwind
                  CSS. Over time, I've also explored backend technologies and
                  now enjoy building complete SaaS tools from start to finish.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  My work focuses on creating smooth, modern experiences that
                  not only look good but also solve real problems. I believe in
                  writing clean, scalable code and designing intuitive
                  interfaces that feel effortless to use. Whether I'm developing
                  a single-page app or managing the logic behind a SaaS product,
                  I strive to keep things simple, efficient, and impactful.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Outside of coding, I enjoy exploring new tech stacks, sharing
                  projects online, and continuously improving my skill set. I'm
                  currently building a collection of apps under the PrajwalApps
                  brand, where I experiment with tools, UI patterns, and product
                  ideas — turning concepts into polished, usable products.
                </p>
              </div>
              <div className="flex gap-4 pt-2">
                <Button size="lg" className="text-sm md:text-base" asChild>
                  <Link href="/apps">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Prajwal Joshi"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 md:py-32 bg-muted/30 px-4 md:px-6">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={item} className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                My Tech Stack
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                These are the technologies I work with to build modern,
                scalable, and maintainable applications.
              </p>
            </motion.div>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={techStack} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-4 md:px-6">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Featured Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Here are some of my recent projects. Visit my apps showcase to
                see the complete collection.
              </p>
            </motion.div>
            <motion.div
              variants={item}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.slice(0, 3).map((project, index) => (
                <Link
                  key={index}
                  href={`
                    https://www.apps.joshiprajwal.com.np/${project.slug}
                    `}
                  className="block h-full"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-muted/60">
                    <div className="relative aspect-video overflow-hidden bg-muted/30">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-200 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs sm:text-xs font-medium"
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
            <motion.div variants={item} className="text-center pt-4">
              <Button size="lg" className="text-sm md:text-base" asChild>
                <Link href="https://www.apps.joshiprajwal.com.np">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30 px-4 md:px-6">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.h2
              variants={item}
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={item}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I'm currently open to new opportunities and collaborations. Feel
              free to reach out if you'd like to work together.
            </motion.p>
            <motion.div
              variants={item}
              className="flex justify-center gap-4 pt-2"
            >
              <Button size="lg" className="text-sm md:text-base" asChild>
                <a href="mailto:joshiprajwal00@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm md:text-base"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t px-4 md:px-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} Prajwal Joshi. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ojaspj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:joshiprajwal00@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
