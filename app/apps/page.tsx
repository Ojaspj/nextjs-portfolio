"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProjectGrid from "@/components/project-grid"
import { projects } from "@/lib/projects"

export default function AppsPage() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              My Applications
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              A curated collection of innovative applications and projects I've developed, showcasing my expertise in
              modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <ProjectGrid projects={projects} />
      </section>
    </div>
  )
}
