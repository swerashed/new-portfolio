"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Calendar, Clock, Video, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ContactSectionProps {
  contact: {
    email: string
    phone: string
    location: string
    socials: {
      github: string
      linkedin: string
      twitter: string
    }
  }
}

export default function ContactSection({ contact }: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<number | null>(19)
  const [selectedTime, setSelectedTime] = useState<string | null>("12:00")
  const sectionRef = useRef<HTMLElement>(null)
  const [currentMonth, setCurrentMonth] = useState("May")
  const [currentYear, setCurrentYear] = useState(2025)

  // Generate calendar days
  const daysInMonth = 31 // May has 31 days
  const firstDayOfMonth = 4 // May 1, 2025 is a Thursday (0-indexed, 0 = Sunday)

  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const paddedCalendarDays = Array(firstDayOfMonth).fill(null).concat(calendarDays)

  // Available time slots
  const timeSlots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ]

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

  const prevMonth = () => {
    // This would normally update the month and year
    console.log("Previous month")
  }

  const nextMonth = () => {
    // This would normally update the month and year
    console.log("Next month")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6">Let's Build Something Great Together!</h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Have a project in mind or just want to say hello? Feel free to reach out! Whether it's a new collaboration
              or a quick chat, I'm always open to connecting.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white"
              >
                <Link href={`mailto:${contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Shoot me an email
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white"
              >
                <Link href={`tel:${contact.phone}`}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Call Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Meeting info panel */}
              <div className="bg-zinc-800 p-6 border-r border-zinc-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                    DB
                  </div>
                  <div>
                    <h3 className="font-bold">Developer</h3>
                    <p className="text-sm text-gray-400">Full Stack Developer</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">30 Min Meeting</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>30m</span>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-purple-400" />
                    <span>Google Meet</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span>{contact.location}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-700">
                  <div className="text-xs text-gray-500 mb-2 font-mono">// Contact details</div>
                  <pre className="text-xs font-mono bg-zinc-900 p-3 rounded-md">
                    <code>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">contact</span> ={" "}
                      {"{"}
                      <br />
                      {"  "}email: <span className="text-yellow-300">'{contact.email}'</span>,
                      <br />
                      {"  "}phone: <span className="text-yellow-300">'{contact.phone}'</span>
                      <br />
                      {"}"};
                    </code>
                  </pre>
                </div>
              </div>

              {/* Calendar */}
              <div className="p-6 border-r border-zinc-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">
                    {currentMonth} {currentYear}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={prevMonth}
                      className="p-1 rounded-md hover:bg-zinc-800"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={nextMonth} className="p-1 rounded-md hover:bg-zinc-800" aria-label="Next month">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                    <div key={day} className="text-xs font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {paddedCalendarDays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => day && setSelectedDate(day)}
                      disabled={!day || day < 19} // Disable past days
                      className={`
                        h-10 w-10 rounded-md flex items-center justify-center text-sm
                        ${!day ? "invisible" : ""}
                        ${day && day < 19 ? "text-gray-600 cursor-not-allowed" : ""}
                        ${day === selectedDate ? "bg-purple-600 text-white" : "hover:bg-zinc-800"}
                        ${day === 19 && selectedDate !== 19 ? "border border-purple-600" : ""}
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">{selectedDate ? `Mon ${selectedDate}` : "Select a date"}</h3>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-xs bg-zinc-800 rounded-md">12h</button>
                    <button className="px-2 py-1 text-xs bg-zinc-800 rounded-md">24h</button>
                  </div>
                </div>

                <div className="space-y-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full p-3 rounded-md text-center text-sm transition-colors
                        ${
                          time === selectedTime
                            ? "bg-purple-600 text-white"
                            : "bg-zinc-800 hover:bg-zinc-700 text-gray-300"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking action */}
            <div className="p-6 border-t border-zinc-700 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">
                  {selectedDate && selectedTime
                    ? `${currentMonth} ${selectedDate}, ${currentYear} at ${selectedTime}`
                    : "Select a date and time"}
                </p>
              </div>
              <Button
                disabled={!selectedDate || !selectedTime}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
