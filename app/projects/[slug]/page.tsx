"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";
import Link from "next/link";
import ImageGallery from "@/components/image-gallery";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen">

      {/* Hero banner */}
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden border-b border-border/60">
        <Image
          src={project.banner || project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 mb-5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            All projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none mb-2">
            {project.title}
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">{project.description}</p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12"
        >
          {/* Main */}
          <motion.div variants={fade} className="md:col-span-2 space-y-12">

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.process ||
                  `${project.title} is a comprehensive application designed to provide users with a seamless experience. Built with a focus on performance, accessibility, and user experience.`}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Features</h2>
              <ul className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Screenshots</h2>
                <ImageGallery images={project.screenshots} alt={project.title} />
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fade} className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 space-y-6">

              {/* Tech stack */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Tags */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Category</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Links */}
              <div className="space-y-2.5">
                {project.demoUrl !== "null" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Live Demo
                  </a>
                )}
                {project.githubUrl !== "null" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-md border border-border bg-background text-foreground px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Nav to other projects */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">More Projects</p>
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-3 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                  >
                    <span className="truncate pr-2">{p.title}</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 shrink-0" />
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 px-6">
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
