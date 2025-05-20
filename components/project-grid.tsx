"use client"

import { useState } from "react"
import ProjectCard from "@/components/project-card"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  caseStudyUrl: string
  liveUrl: string
  category?: string
}

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
