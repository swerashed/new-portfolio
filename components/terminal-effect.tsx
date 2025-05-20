"use client"

import { useState, useEffect } from "react"

interface TerminalEffectProps {
  text: string
  typingSpeed?: number
}

export default function TerminalEffect({ text, typingSpeed = 50 }: TerminalEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, typingSpeed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className="inline-flex">
      {displayText}
      <span className="w-2 h-5 bg-primary ml-1" style={{ opacity: cursorVisible ? 1 : 0 }}></span>
    </span>
  )
}
