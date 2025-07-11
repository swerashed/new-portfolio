"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code, ChevronRight, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/", command: "cd ~" },
  { name: "About", path: "/#about", command: "cat about.md" },
  { name: "Experience", path: "/#experience", command: "cat experience.json" },
  { name: "Projects", path: "/#projects", command: "ls projects/" },
  { name: "Skills", path: "/#skills", command: "exec skills.js" },
  { name: "Testimonials", path: "/#testimonials", command: "view testimonials.json" },
  { name: "Book a Call", path: "/#booking", command: "npm run schedule" },
  { name: "Contact", path: "/#contact", command: "mailto:contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  
    // Cleanup on unmount (optional but good practice)
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-purple-500" />
          <span className="font-mono font-bold text-lg">Rashed.Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={cn(
                  "px-3 py-1.5 rounded-md transition-colors font-mono text-sm relative overflow-hidden",
                  pathname === item.path
                    ? "bg-purple-500/20 text-purple-400"
                    : "text-gray-400 hover:text-white hover:bg-zinc-800",
                )}
              >
                {/* Command prefix */}
                <span className="text-purple-500 mr-1.5">$</span>
                {/* Menu item name */}
                {item.name}

                {/* Hover tooltip with command */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute left-0 -bottom-8 font-mono text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded whitespace-nowrap z-10"
                    >
                      {item.command}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active indicator */}
                {pathname === item.path && <div className="absolute left-0 top-0 h-full w-1 bg-purple-500"></div>}

                {/* Bottom border animation on hover */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left transition-transform duration-300",
                    pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                ></span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 xl:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            data-lenis-prevent
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 bg-zinc-900 border-t border-zinc-800 z-40 xl:hidden overflow-hidden"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 bg-zinc-800 p-2 rounded-t-md border border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-2 text-xs font-mono text-gray-400">navigation.sh</div>
              </div>

              {/* Terminal content */}
              <div className="bg-zinc-900 border border-t-0 border-zinc-700 rounded-b-md p-4 font-mono">
                <div className="mb-4 text-gray-500 text-sm">// Select a destination</div>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={cn(
                        "flex items-center text-base transition-colors p-2 rounded-md",
                        pathname === item.path ? "bg-purple-500/20 text-purple-400" : "text-gray-300 hover:bg-zinc-800",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Terminal className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-purple-500 mr-2">$</span>
                      <span>{item.name}</span>
                      <ChevronRight className="h-4 w-4 ml-auto text-gray-500" />
                    </Link>
                  ))}
                </nav>

                {/* Simulated cursor */}
                <div className="flex items-center mt-6 text-gray-300">
                  <span className="text-purple-500 mr-2">$</span>
                  <span className="mr-1">_</span>
                  <span className="w-2 h-5 bg-purple-500 animate-blink"></span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
