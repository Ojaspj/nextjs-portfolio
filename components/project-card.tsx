"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Project } from "@/lib/projects"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/apps/${project.slug}`} className="block h-full">
        <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl group border-muted/60">
          <div className="relative aspect-video overflow-hidden bg-muted/30">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 p-5 pt-0 border-t border-muted/40 mt-auto">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-medium">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
