"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: string
  level: number
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-card border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold mb-6">{title}</h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
