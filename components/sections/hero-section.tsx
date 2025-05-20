"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  data: {
    title: string
    subtitle: string
    description: string
  }
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Define a fixed subtitle to avoid any undefined issues
  const subtitle = "Building modern web experiences"

  // Simple typing effect
  useEffect(() => {
    setIsLoaded(true)
    setTypedText("") // Reset typed text on component mount

    let charIndex = 0
    const typingInterval = setInterval(() => {
      if (charIndex < subtitle.length) {
        setTypedText(subtitle.substring(0, charIndex + 1))
        charIndex += 1
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix-like background */}
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {data.title}
          </h1>

          <p
            className={`text-xl md:text-2xl font-mono text-primary mb-6 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {typedText}
            <span className={`inline-block w-2 h-5 bg-primary ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
          </p>

          <p
            className={`text-lg text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {data.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button asChild size="lg" className="group">
              <Link href="/#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>

          <div
            className={`mt-16 terminal-window max-w-lg mx-auto transition-all duration-700 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <div className="ml-2 text-xs font-mono">terminal</div>
            </div>
            <div className="terminal-content">
              <p className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                <span className="text-foreground font-medium">Welcome to my portfolio</span>
              </p>
              <p className="mt-2">
                $ <span className="text-green-500 dark:text-green-400">exploring skills...</span>
              </p>
              <p className="mt-1">
                $ <span className="text-blue-500 dark:text-blue-400">loading projects...</span>
              </p>
              <p className="mt-1">
                $ <span className="text-purple-500 dark:text-purple-400">ready</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-700 delay-1200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-sm font-mono mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
