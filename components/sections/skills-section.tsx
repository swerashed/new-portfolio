"use client"

import { useEffect, useRef, useState } from "react"
import { Terminal, Code, Server, Wrench, Braces, Database, Layers } from "lucide-react"
import { motion } from "framer-motion"
import type { JSX } from "react/jsx-runtime"

interface Skill {
  name: string
  icon: string
  experience: string
  usage: string
  role: string
}

interface SkillsData {
  frontend: Skill[]
  backend: Skill[]
  tools: Skill[]
}

interface SkillsSectionProps {
  skills: SkillsData
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [typedText, setTypedText] = useState<Record<string, string>>({})
  const typingIntervals = useRef<Record<string, NodeJS.Timeout>>({})
  const sectionRef = useRef<HTMLElement>(null)
  // const allSkills = [...skills.backend, ...skills.frontend, ...skills.tools]

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

  const getSkillIcon = (name: string) => {
    const iconMap: Record<string, JSX.Element> = {
      React: <Braces className="h-5 w-5" />,
      "Next.js": <Layers className="h-5 w-5" />,
      "Node.js": <Server className="h-5 w-5" />,
      MongoDB: <Database className="h-5 w-5" />,
      TypeScript: <Code className="h-5 w-5" />,
      Git: <Wrench className="h-5 w-5" />,
    }

    return iconMap[name] || <Code className="h-5 w-5" />
  }

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Braces className="h-5 w-5" /> },
    { id: "backend", label: "Backend", icon: <Server className="h-5 w-5" /> },
    { id: "tools", label: "Tools", icon: <Wrench className="h-5 w-5" /> },
  ]

  const activeSkills = skills[activeCategory as keyof SkillsData]

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

  const startTyping = (skillName: string) => {
    if (typingIntervals.current[skillName]) {
      clearInterval(typingIntervals.current[skillName])
    }

    const skill = activeSkills.find(s => s.name === skillName)
    const fullText = `// ${skillName}: ${skill?.role}`
    let currentText = ""
    let charIndex = 0

    typingIntervals.current[skillName] = setInterval(() => {
      if (charIndex < fullText.length) {
        currentText += fullText.charAt(charIndex)
        setTypedText(prev => ({
          ...prev,
          [skillName]: currentText
        }))
        charIndex++
      } else {
        clearInterval(typingIntervals.current[skillName])
      }
    }, 30)
  }

  const clearTyping = (skillName: string) => {
    if (typingIntervals.current[skillName]) {
      clearInterval(typingIntervals.current[skillName])
      setTypedText(prev => ({
        ...prev,
        [skillName]: ""
      }))
    }
  }

  const renderSkillCard = (skill: Skill) => (
    <motion.div
      key={skill.name}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(139, 92, 246, 0.3)",
        borderColor: "#8b5cf6",
      }}
      className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group relative"
      onMouseEnter={() => {
        setHoveredSkill(skill.name)
        startTyping(skill.name)
      }}
      onMouseLeave={() => {
        setHoveredSkill(null)
        clearTyping(skill.name)
      }}
    >
      {/* Terminal header */}
      <div className="bg-zinc-800 p-2 flex items-center gap-2 border-b border-zinc-700">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-2 text-xs font-mono text-gray-400 truncate">{skill.name.toLowerCase()}.js</div>
      </div>

      {/* Card content */}
      <div className="p-5">
        {/* Typing effect display */}
        <div className="font-mono text-xs text-gray-400 h-6 overflow-visible mb-5">
          {typedText[skill.name] || `// ${skill.name} details`}
          {hoveredSkill === skill.name && (
            <span className="ml-1 inline-block w-2 h-4 bg-purple-500 animate-pulse"></span>
          )}
        </div>

        <div className="font-mono text-sm mb-4">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">{skill.name.replace(/\./g, "").toLowerCase()}</span>{" "}
            <span className="text-white">= {`{`}</span>
          </div>
          <div className="ml-4">
            <span className="text-green-400">experience</span>:{" "}
            <span className="text-yellow-300">'{skill.experience}'</span>,
          </div>
          <div className="ml-4">
            <span className="text-green-400">usage</span>:{" "}
            <span className="text-yellow-300">'{skill.usage}'</span>,
          </div>
  
          <div>
            <span className="text-white">{`}`}</span>;
          </div>
        </div>

        {/* Skill icon */}
        <div className="flex justify-center mt-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            {getSkillIcon(skill.name)}
          </div>
        </div>
      </div>

      {/* Blinking cursor */}
      <div className="absolute bottom-3 right-3 w-2 h-4 bg-purple-500 opacity-0 group-hover:opacity-100 animate-cursor"></div>

      {/* Code overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  )

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg mb-6">
            <Terminal className="text-white h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300">
            My technical toolkit is like a well-stocked kitchen — from React and Next.js to Node.js and beyond, I've got the right tools to cook up modern web apps that are fast, sleek, and occasionally delicious.
          </p>
        </div>

        <div
          className={`max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Interactive code editor */}
          <div className="bg-zinc-900 rounded-t-xl overflow-hidden border border-zinc-700 shadow-2xl mb-8">
            <div className="bg-zinc-800 p-3 flex flex-col md:flex-row md:items-center gap-2 border-b border-zinc-700">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="md:hidden text-xs font-mono text-gray-400">developer-skills.js</div>
              </div>
              <div className="hidden md:flex md:ml-4 text-xs font-mono text-gray-400">developer-skills.js</div>
              <div className="ml-auto flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 text-xs rounded-md flex items-center gap-1 transition-colors ${activeCategory === category.id
                        ? "bg-purple-600 text-white"
                        : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                      }`}
                  >
                    {category.icon}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="flex">
                <div className="text-gray-500 mr-4 select-none">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="flex-1">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> ={" "}
                    {"{"}{" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-300">'Full Stack Engineer'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">expertise</span>: <span className="text-purple-400">{"{"}</span>
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">{activeCategory}</span>: <span className="text-purple-400">[</span>
                  </div>
                  <motion.div
                    className="ml-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory}
                  >
                    {activeSkills.map((skill, index) => (
                      <motion.div key={skill.name} variants={itemVariants} className="mb-1">
                        <span className="text-yellow-300">'{skill.name}'</span>
                        {index < activeSkills.length - 1 ? "," : ""}
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="ml-8">
                    <span className="text-purple-400">]</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-purple-400">{"}"}</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">yearsOfExperience</span>:{" "}
                    <span className="text-orange-400">1+</span>,
                  </div>
                  {/* <div className="ml-4">
                    <span className="text-green-400">completedProject</span>:{" "}
                    <span className="text-orange-400">30+</span>,
                  </div> */}
                  <div className="ml-4">
                    <span className="text-green-400">availableForHire</span>:{" "}
                    <span className="text-blue-400">true</span>
                  </div>
                  <div>
                    <span className="text-purple-400">{"}"}</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          {/* <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            key={activeCategory}
          >
            {activeSkills.map((skill) => renderSkillCard(skill))}
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}