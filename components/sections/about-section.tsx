"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code, GitBranch, Terminal } from "lucide-react"

interface AboutSectionProps {
  data: {
    image: string
    bio: string
    values: Array<{
      title: string
      description: string
    }>
  }
}

export default function AboutSection({ data }: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className={`w-full md:w-2/5 relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait"
                width={600}
                height={600}
                className="object-cover"
              />

              {/* Code overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="code-block w-full">
                    <pre className="text-xs md:text-sm">
                      <code>
                        <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> ={" "}
                        {"{"}
                        <br />
                        {"  "}passion: <span className="text-yellow-400">'building amazing web experiences'</span>,
                        <br />
                        {"  "}skills: [<span className="text-yellow-400">'frontend'</span>,{" "}
                        <span className="text-yellow-400">'backend'</span>,{" "}
                        <span className="text-yellow-400">'design'</span>],
                        <br />
                        {"  "}available: <span className="text-purple-400">true</span>
                        <br />
                        {"}"};
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-3/5 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-primary h-6 w-6" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{data.bio}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{data.values[0].title}</h3>
                    <p className="text-muted-foreground">{data.values[0].description}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <GitBranch className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{data.values[1].title}</h3>
                    <p className="text-muted-foreground">{data.values[1].description}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{data.values[2].title}</h3>
                    <p className="text-muted-foreground">{data.values[2].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
