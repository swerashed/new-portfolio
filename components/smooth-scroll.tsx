"use client"

// import { useEffect, useRef } from "react"
import type React from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // const lenisRef = useRef<any>(null)
  // const animationFrameRef = useRef<number>()

  // useEffect(() => {
  //   let isMounted = true

  //   const initLenis = async () => {
  //     try {
  //       const { default: Lenis } = await import("@studio-freight/lenis")
  //       if (!isMounted) return

  //       const lenis = new Lenis()
  //       lenisRef.current = lenis

  //       const raf = (time: number) => {
  //         lenis.raf(time)
  //         animationFrameRef.current = requestAnimationFrame(raf)
  //       }

  //       animationFrameRef.current = requestAnimationFrame(raf)

  //       const handleHashLinkClick = (e: MouseEvent) => {
  //         const target = e.target as HTMLElement
  //         const anchor = target.closest("a")
  //         if (!anchor) return

  //         const href = anchor.getAttribute("href")
  //         if (!href || !href.startsWith("#")) return

  //         const targetId = href.substring(1)
  //         const targetElement = document.getElementById(targetId)
  //         if (!targetElement) return

  //         e.preventDefault()

  //         lenis.scrollTo(targetElement, {
  //           offset: -100,
  //           duration: 1.5,
  //         })
  //       }

  //       document.addEventListener("click", handleHashLinkClick)

  //       // Cleanup
  //       return () => {
  //         cancelAnimationFrame(animationFrameRef.current!)
  //         document.removeEventListener("click", handleHashLinkClick)
  //         lenis.destroy()
  //       }
  //     } catch (error) {
  //       console.error("Failed to initialize Lenis:", error)
  //     }
  //   }

  //   initLenis()

  //   return () => {
  //     isMounted = false
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current)
  //     }
  //     if (lenisRef.current) {
  //       lenisRef.current.destroy()
  //     }
  //   }
  // }, [])

  return <>{children}</>
}
