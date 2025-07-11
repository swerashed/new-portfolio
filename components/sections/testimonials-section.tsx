"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  text: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const [funMessage, setFunMessage] = useState<string | null>(null)
  const [showFunMessage, setShowFunMessage] = useState(false)

  // Fun responses for keyboard navigation
  const funResponses = [
    "You think you're controlling this, huh?",
    "Wow, you actually read the UI text! You're in the top 1% of users!",
    "Keyboard shortcuts? You must be a power user! 💪",
    "You really thought that would work?",
    "Hack the mainframe! Just kidding, you're just viewing testimonials.",
    "You're not in control. I am.",
    "Achievement unlocked: Keyboard Navigator 🏆",
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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

  const testimonial = testimonials[activeIndex]
  // ... inside your component

  // Simulate typing effect for testimonial text
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 30; // ms per character

  useEffect(() => {
    // 1. When the effect runs (because activeIndex changed), start typing.
    setIsTyping(true);
    
    // Get the full text for the current testimonial.
    const textToType = testimonials[activeIndex].text;

    const intervalId = setInterval(() => {
      // 2. Use the functional update form of setState. This is key.
      // It always gives you the very latest state.
      setDisplayedText((currentDisplayedText) => {
        // 3. If the displayed text is already the full length, stop.
        if (currentDisplayedText.length === textToType.length) {
          clearInterval(intervalId);
          setIsTyping(false);
          return currentDisplayedText; // Return the full text
        }
        
        // 4. Otherwise, calculate the next character based on the current length.
        return textToType.substring(0, currentDisplayedText.length + 1);
      });
    }, typingSpeed);

    // 5. The cleanup function. This runs when activeIndex changes,
    // stopping the old interval before a new one starts.
    return () => {
      clearInterval(intervalId);
      // Also, immediately clear the text for a clean transition.
      setDisplayedText(""); 
    };

  }, [activeIndex, testimonials]); // Depend only on what triggers a new testimonial
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") {
        nextTestimonial()
        const randomResponse = funResponses[Math.floor(Math.random() * funResponses.length)]
        setFunMessage(randomResponse)
        setShowFunMessage(true)
        setTimeout(() => setShowFunMessage(false), 3000)
      } else if (e.key === "p") {
        prevTestimonial()
        const randomResponse = funResponses[Math.floor(Math.random() * funResponses.length)]
        setFunMessage(randomResponse)
        setShowFunMessage(true)
        setTimeout(() => setShowFunMessage(false), 3000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg mb-6">
            <MessageSquare className="text-white h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-300">What clients and collaborators have to say about working with me.</p>
        </div>

        <div
          className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Terminal-style testimonial display */}
          <div
            ref={testimonialRef}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Terminal header */}
            <div className="bg-zinc-800 p-3 flex items-center gap-2 border-b border-zinc-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs font-mono text-gray-400">
                testimonials.js — {activeIndex + 1} of {testimonials.length}
              </div>

              {/* Navigation buttons */}
              <div className="ml-auto flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-1 rounded-md hover:bg-zinc-700 text-gray-400 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-1 rounded-md hover:bg-zinc-700 text-gray-400 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Terminal content */}
            <div className="p-8 relative">
              {/* Code line numbers */}
              <div className="absolute left-8 top-8 bottom-8 flex flex-col text-gray-600 font-mono text-sm select-none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-6">
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="ml-8 pl-4 border-l border-zinc-800">
                {/* Comment section */}
                <div className="font-mono text-gray-500 mb-4">
                  // Author testimonial from {testimonial.name}, {testimonial.role} at {testimonial.company}
                </div>

                {/* Testimonial as code */}
                <div className="font-mono mb-6">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">testimonial</span> ={" "}
                  {"{"}
                  <div className="ml-4">
                    <span className="text-green-400">author</span>:{" "}
                    <span className="text-yellow-300">'{testimonial.name}'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">comment</span>: <span className="text-yellow-300">`</span>
                    <div className="ml-4 text-gray-300 relative">
                      {displayedText}
                      {isTyping && <span className="inline-block w-2 h-4 bg-purple-500 ml-1 animate-blink"></span>}
                    </div>
                    <span className="text-yellow-300">`</span>,
                  </div>

                  {"}"};
                </div>

                {/* Client info as code */}
                <div className="font-mono mt-8">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">author</span> = {"{"}
                  <div className="ml-4 flex items-center gap-4 my-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div>
                        <span className="text-green-400">name</span>:{" "}
                        <span className="text-yellow-300">'{testimonial.name}'</span>,
                      </div>
                      <div>
                        <span className="text-green-400">role</span>:{" "}
                        <span className="text-yellow-300">'{testimonial.role}'</span>,
                      </div>
                      <div>
                        <span className="text-green-400">company</span>:{" "}
                        <span className="text-yellow-300">'{testimonial.company}'</span>
                      </div>
                    </div>
                  </div>
                  {"}"};
                </div>
              </div>
            </div>

            {/* Terminal footer with navigation */}
            <div className="bg-zinc-800 p-4 border-t border-zinc-700 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Terminal className="h-4 w-4" />
                <span className="font-mono">Press 'n' for next, 'p' for previous</span>
              </div>
            </div>
          </div>

          {/* Fun message that appears when pressing n or p */}
          <AnimatePresence>
            {showFunMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6 bg-purple-600/20 border border-purple-500/30 rounded-lg p-4 text-center"
              >
                <p className="text-purple-300 font-mono">{funMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
