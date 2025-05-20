"use client"

import { useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ProjectsSection from "@/components/sections/projects-section"
import SkillsSection from "@/components/sections/skills-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import BookingSection from "@/components/sections/booking-section"
import ContactSection from "@/components/sections/contact-section"
import { mockData } from "@/lib/mock-data"

export default function Home() {
  // Use client-side state instead of server data fetching
  const [data] = useState(mockData)

  return (
    <>
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <ProjectsSection projects={data.featuredProjects} />
      <SkillsSection skills={data.skills} />
      <TestimonialsSection testimonials={data.testimonials} />
      <BookingSection />
      <ContactSection contact={data.contact} />
    </>
  )
}
