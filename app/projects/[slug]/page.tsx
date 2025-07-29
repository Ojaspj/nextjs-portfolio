"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import ImageGallery from "@/components/image-gallery"

export default function ProjectPage() {
  const { slug } = useParams()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero section with banner image */}
      <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image src={project.banner || project.image} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 py-8">
          <Link href="/apps">
            <Button variant="outline" size="sm" className="mb-4 group backdrop-blur-sm bg-background/30">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to applications
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-3 gap-8">
          <motion.div variants={item} className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.process ||
                  `${project.title} is a comprehensive application designed to provide users with a seamless experience. 
                The application was built with a focus on performance, accessibility, and user experience.`}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="grid gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.screenshots && project.screenshots.length > 0 && (
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
                <ImageGallery images={project.screenshots} alt={project.title} />
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={item} className="space-y-8">
            <div className="bg-muted/20 rounded-lg p-6 border border-muted/40">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="pt-2">
                  {project.demoUrl && (
                    <Button className="w-full mb-3" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
