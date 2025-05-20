"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const mouse = { x: 0, y: 0 }
    const lastMouse = { x: 0, y: 0 }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      life: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.life = 20
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life--
      }

      draw(ctx: CanvasRenderingContext2D, theme: string | undefined) {
        const color = theme === "dark" ? "rgba(255, 255, 255," : "rgba(0, 0, 0,"
        ctx.fillStyle = `${color} ${this.life / 20})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Mouse move event
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // Add particles when mouse moves
      const distance = Math.hypot(mouse.x - lastMouse.x, mouse.y - lastMouse.y)

      if (distance > 10) {
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle(mouse.x, mouse.y))
        }

        lastMouse.x = mouse.x
        lastMouse.y = mouse.y
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx, theme)

        // Remove dead particles
        if (particles[i].life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ opacity: 0.6 }} />
}
