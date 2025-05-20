import Image from "next/image"

interface TestimonialCardProps {
  testimonial: {
    id: string
    name: string
    role: string
    company: string
    image: string
    text: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card border rounded-lg p-8 shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-background">
            <Image
              src={testimonial.image || "/placeholder.svg?height=80&width=80"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-grow">
          <p className="text-lg mb-6 italic">"{testimonial.text}"</p>

          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
