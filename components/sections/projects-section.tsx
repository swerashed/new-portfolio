"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Filter, Search, X } from "lucide-react"
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

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [showFilters, setShowFilters] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category || "Other")))]

  // Filter projects based on category and search query
  useEffect(() => {
    let result = projects

    // Apply category filter
    if (activeFilter !== "All") {
      result = result.filter((project) => project.category === activeFilter)
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query)),
      )
    }

    setFilteredProjects(result)
  }, [activeFilter, searchQuery, projects])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg mb-6">
            <Code className="text-white h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Project filters and search */}
        <div
          className={`max-w-5xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg">
            {/* Terminal header */}
            <div className="bg-zinc-800 p-3 flex items-center gap-2 border-b border-zinc-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-gray-400">projects.js</div>

              {/* Mobile filter toggle */}
              <button
                className="ml-auto md:hidden p-2 rounded-md hover:bg-zinc-700 text-gray-400 hover:text-white"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
              </button>
            </div>

            <div className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search input */}
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Category filters - desktop */}
                <div className="hidden md:flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        activeFilter === category
                          ? "bg-purple-600 text-white"
                          : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filters - mobile */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden mt-4 overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveFilter(category)}
                          className={`px-3 py-1 text-xs rounded-md transition-colors ${
                            activeFilter === category
                              ? "bg-purple-600 text-white"
                              : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Results count */}
              <div className="mt-4 text-xs text-gray-500 font-mono">
                // Found {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                {activeFilter !== "All" && ` in ${activeFilter}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
                <div className="text-gray-400 mb-4 font-mono">// No projects found</div>
                <p className="text-lg text-gray-300 mb-4">No projects match your current filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveFilter("All")
                    setSearchQuery("")
                  }}
                  className="bg-zinc-700 hover:bg-zinc-600 border-zinc-600"
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </motion.div>

        {/* View all projects button */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button asChild size="lg" variant="outline" className="group bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
