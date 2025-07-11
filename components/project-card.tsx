"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Code, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    techStack: string[]
    caseStudyUrl: string
    liveUrl: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group h-full bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Terminal header */}
      <div className="bg-zinc-800 p-2 flex items-center gap-2 border-b border-zinc-700">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-2 text-xs font-mono text-gray-400 truncate">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.js
        </div>
      </div>

      {/* Project image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          width={600}
          height={400}
          className="object-fill h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="text-xs font-mono bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <Code className="h-5 w-5 text-purple-400 mt-1" />
        </div>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>

        {/* Code snippet */}
        <div className="bg-zinc-900 rounded-md p-3 mb-6 font-mono text-xs overflow-hidden">
          <div className="text-gray-500">// Project stack</div>
          <div>
            <span className="text-purple-400">const</span> <span className="text-blue-400">stack</span> = [
            <span className="text-yellow-300">
              {project.techStack.map((tech, i) => `'${tech}'${i < project.techStack.length - 1 ? ", " : ""}`)}
            </span>
            ];
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="sm" variant="default" className="gap-1 bg-purple-600 hover:bg-purple-700">
            <Link target="_blank" href={project.caseStudyUrl} className="text-white">
              <Github className="h-4 w-4 mr-1" />
              View Case Study
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="gap-1 bg-zinc-700 hover:bg-zinc-600 border-zinc-600">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
