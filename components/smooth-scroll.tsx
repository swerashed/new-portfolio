"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [isLenisLoaded, setIsLenisLoaded] = useState(false)
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    // Dynamically import Lenis to avoid Node.js-specific errors
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("@studio-freight/lenis")

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        })

        lenisRef.current = lenis

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
        setIsLenisLoaded(true)

        return () => {
          lenis.destroy()
        }
      } catch (error) {
        console.error("Failed to initialize smooth scrolling:", error)
      }
    }

    initLenis()
  }, [])

  useEffect(() => {
    if (!isLenisLoaded || !lenisRef.current) return

    function handleHashLinkClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement && lenisRef.current) {
        lenisRef.current.scrollTo(targetElement, {
          offset: -100,
          duration: 1.5,
        })
      }
    }

    document.addEventListener("click", handleHashLinkClick)

    return () => {
      document.removeEventListener("click", handleHashLinkClick)
    }
  }, [isLenisLoaded])

  return <>{children}</>
}
