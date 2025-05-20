"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "UI/UX"]

export default function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
