"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto space-y-6"
          >
            <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Work
            </motion.p>
            <motion.h1 variants={fade} className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              Projects
            </motion.h1>
            <motion.p variants={fade} className="text-base text-muted-foreground max-w-xl leading-relaxed">
              A collection of things I&apos;ve built — from SaaS tools and mobile apps to full-stack platforms.
            </motion.p>

            {/* Tag filters */}
            <motion.div variants={fade} className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setActive(null)}
                className={`rounded-full border px-3.5 py-1 text-xs font-medium transition-colors ${
                  active === null
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActive(active === tag ? null : tag)}
                  className={`rounded-full border px-3.5 py-1 text-xs font-medium transition-colors ${
                    active === tag
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <div className="container mx-auto px-6 py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <motion.div key={project.slug} variants={fade}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-foreground/20 hover:shadow-md transition-all duration-200"
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
                    <h2 className="font-semibold text-foreground leading-snug group-hover:text-foreground/70 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs font-normal">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 px-6 mt-8">
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
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.linkedin.com/in/prajwal-joshi-3b3734156/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="mailto:joshiprajwal00@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
