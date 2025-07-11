"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

interface Experience {
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    description: string[]
    technologies: string[]
    website?: string
    achievements?: string[]
}

interface ExperienceSectionProps {
    experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

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

    const toggleExperience = (id: string) => {
        setExpandedExperience(expandedExperience === id ? null : id)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    return (
        <section id="experience" ref={sectionRef} className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div
                    className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg mb-6">
                        <Briefcase className="text-white h-8 w-8" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                        Work Experience
                    </h2>
                    <p className="text-lg text-gray-300">
                        My professional journey building innovative solutions and leading development teams.
                    </p>
                </div>

                <div
                    className={`max-w-6xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {/* Terminal-style experience display */}
                    <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                        {/* Terminal header */}
                        <div className="bg-zinc-800 p-3 flex items-center gap-2 border-b border-zinc-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 text-xs font-mono text-gray-400">work-experience.js</div>

                            {/* Tab navigation */}
                            <div className="ml-auto flex gap-1">
                                {experiences.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-2 py-1 text-xs rounded-md transition-colors ${activeTab === index ? "bg-purple-600 text-white" : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Terminal content */}
                        <div className="p-8">
                            <motion.div
                                key={activeTab}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-6"
                            >
                                {experiences.map((experience, index) => (
                                    <motion.div
                                        key={experience.id}
                                        variants={itemVariants}
                                        className={`${index === activeTab ? "block" : "hidden"}`}
                                    >
                                        {/* Code line numbers */}
                                        <div className="flex">
                                            <div className="text-gray-600 font-mono text-sm select-none mr-4 flex flex-col">
                                                {Array.from({ length: 15 }).map((_, i) => (
                                                    <div key={i} className="h-6">
                                                        {i + 1}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex-1 font-mono text-sm">
                                                {/* Comment header */}
                                                <div className="text-gray-500 mb-4">// Work experience at {experience.company}</div>

                                                {/* Experience object */}
                                                <div className="mb-6">
                                                    <span className="text-purple-400">const</span>{" "}
                                                    <span className="text-blue-400">experience</span> = {"{"}
                                                    <div className="ml-4 space-y-1">
                                                        <div>
                                                            <span className="text-green-400">company</span>:{" "}
                                                            <span className="text-yellow-300">'{experience.company}'</span>,
                                                        </div>
                                                        <div>
                                                            <span className="text-green-400">position</span>:{" "}
                                                            <span className="text-yellow-300">'{experience.position}'</span>,
                                                        </div>
                                                        <div>
                                                            <span className="text-green-400">location</span>:{" "}
                                                            <span className="text-yellow-300">'{experience.location}'</span>,
                                                        </div>
                                                        <div>
                                                            <span className="text-green-400">duration</span>:{" "}
                                                            <span className="text-yellow-300">
                                                                '{experience.startDate} - {experience.endDate}'
                                                            </span>
                                                            ,
                                                        </div>
                                                        <div>
                                                            <span className="text-green-400">technologies</span>: [
                                                            <div className="ml-4">
                                                                {experience.technologies.map((tech, i) => (
                                                                    <span key={i} className="text-yellow-300">
                                                                        '{tech}'{i < experience.technologies.length - 1 ? "," : ""}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                            ],
                                                        </div>
                                                    </div>
                                                    {"}"};
                                                </div>

                                                {/* Responsibilities */}
                                                <div className="mb-6">
                                                    <span className="text-purple-400">const</span>{" "}
                                                    <span className="text-blue-400">responsibilities</span> = [
                                                    <div className="ml-4 space-y-1">
                                                        {experience.description.map((desc, i) => (
                                                            <div key={i} className="text-gray-300">
                                                                <span className="text-yellow-300">'{desc}'</span>
                                                                {i < experience.description.length - 1 ? "," : ""}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    ];
                                                </div>

                                                {/* Achievements if available */}
                                                {experience.achievements && (
                                                    <div>
                                                        <span className="text-purple-400">const</span>{" "}
                                                        <span className="text-blue-400">achievements</span> = [
                                                        <div className="ml-4 space-y-1">
                                                       
                                                            {Array.isArray(experience?.achievements) &&
                                                                experience.achievements.map((achievement, i) => (
                                                                    <div key={i} className="text-gray-300">
                                                                        <span className="text-yellow-300">'{achievement}'</span>
                                                                         {/* @ts-ignore */}
                                                                        {i < experience.achievements.length - 1 ? "," : ""}
                                                                    </div>
                                                                ))}

                                                        </div>
                                                        ];
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Company info card */}
                                        <div className="mt-8 bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
                                                    <p className="text-purple-400 font-medium mb-2">{experience.company}</p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            {experience.startDate} - {experience.endDate}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            {experience.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                {experience.website && (
                                                    <a
                                                        href={experience.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Visit Company
                                                    </a>
                                                )}
                                            </div>

                                            {/* Tech stack */}
                                            <div className="mt-4">
                                                <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies Used:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md font-mono"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Terminal footer */}
                        <div className="bg-zinc-800 p-4 border-t border-zinc-700 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-mono">
                                    Experience {activeTab + 1} of {experiences.length}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                                    disabled={activeTab === 0}
                                    className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs rounded-md transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setActiveTab(Math.min(experiences.length - 1, activeTab + 1))}
                                    disabled={activeTab === experiences.length - 1}
                                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs rounded-md transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
