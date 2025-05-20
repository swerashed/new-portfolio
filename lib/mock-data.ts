export const mockData = {
  hero: {
    title: "Full-Stack Developer",
    subtitle: "Building modern web experiences",
    description: "Let's build fast, beautiful web apps. In just over a year, I’ve shipped 30+ projects — either I’m efficient or just really love shipping code (probably both).",
  },
  about: {
    image: "/placeholder.svg?height=600&width=600",
    bio: "I'm a passionate full-stack developer with 1+ year of hands-on experience building modern web applications. I've successfully delivered 30+ projects using technologies like React, Next.js, and Node.js. I focus on writing clean, maintainable code and crafting fast, user-friendly interfaces with a strong attention to performance and user experience.",
    values: [
      {
        title: "Clean Code",
        description: "I write maintainable, well-documented code that follows best practices and industry standards.",
      },
      {
        title: "User-Focused",
        description: "Every line of code I write is aimed at creating exceptional user experiences.",
      },
      {
        title: "Continuous Learning",
        description: "I'm constantly exploring new technologies and techniques to improve my craft.",
      },
    ],
  },
  featuredProjects: [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      caseStudyUrl: "/projects/e-commerce",
      liveUrl: "https://example.com/e-commerce",
    },
    {
      id: "project-2",
      title: "SaaS Dashboard",
      description: "An analytics dashboard for SaaS businesses with real-time data visualization and reporting.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["React", "Node.js", "D3.js", "MongoDB"],
      caseStudyUrl: "/projects/saas-dashboard",
      liveUrl: "https://example.com/dashboard",
    },
    {
      id: "project-3",
      title: "Social Media App",
      description: "A social media application with real-time messaging, post creation, and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["React Native", "Firebase", "Redux", "Express"],
      caseStudyUrl: "/projects/social-media",
      liveUrl: "https://example.com/social",
    },
  ],
  allProjects: [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      caseStudyUrl: "/projects/e-commerce",
      liveUrl: "https://example.com/e-commerce",
      category: "Full Stack",
    },
    {
      id: "project-2",
      title: "SaaS Dashboard",
      description: "An analytics dashboard for SaaS businesses with real-time data visualization and reporting.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["React", "Node.js", "D3.js", "MongoDB"],
      caseStudyUrl: "/projects/saas-dashboard",
      liveUrl: "https://example.com/dashboard",
      category: "Frontend",
    },
    {
      id: "project-3",
      title: "Social Media App",
      description: "A social media application with real-time messaging, post creation, and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["React Native", "Firebase", "Redux", "Express"],
      caseStudyUrl: "/projects/social-media",
      liveUrl: "https://example.com/social",
      category: "Mobile",
    },
    {
      id: "project-4",
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations and responsive design.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      caseStudyUrl: "/projects/portfolio",
      liveUrl: "https://example.com/portfolio",
      category: "Frontend",
    },
    {
      id: "project-5",
      title: "Task Management API",
      description: "A RESTful API for task management with authentication and authorization.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      caseStudyUrl: "/projects/task-api",
      liveUrl: "https://example.com/task-api",
      category: "Backend",
    },
    {
      id: "project-6",
      title: "Real Estate Platform",
      description: "A platform for real estate listings with search, filtering, and user accounts.",
      image: "/placeholder.svg?height=400&width=600",
      techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      caseStudyUrl: "/projects/real-estate",
      liveUrl: "https://example.com/real-estate",
      category: "Full Stack",
    },
  ],
  skills: {
    frontend: [
      {
        name: "React",
        icon: "react",
        experience: "1+ year",
        usage: "Used in 12+ projects",
        role: "Primary library for building UIs"
      },
      {
        name: "Next.js",
        icon: "next",
        experience: "1+ year",
        usage: "Used in full-stack projects and SSR apps",
        role: "Framework for routing, SSR, and API routes"
      },
      {
        name: "TypeScript",
        icon: "typescript",
        experience: "1 year",
        usage: "Used across frontend and backend projects",
        role: "For type safety and scalable code"
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        experience: "1+ year",
        usage: "Used in most frontend UIs",
        role: "Utility-first CSS for fast, responsive design"
      },
      {
        name: "GSAP",
        icon: "gsap",
        experience: "6+ months",
        usage: "Used in animations and interactive UI components",
        role: "Animation library for rich user experiences"
      }
    ],
    backend: [
      {
        name: "Node.js",
        icon: "node",
        experience: "1+ year",
        usage: "Used in 10+ backend services",
        role: "Runtime for building APIs and server logic"
      },
      {
        name: "Express",
        icon: "express",
        experience: "1 year",
        usage: "Used in most REST APIs",
        role: "Minimalist backend framework"
      },
      {
        name: "MongoDB",
        icon: "mongodb",
        experience: "1 year",
        usage: "Used in several full-stack apps",
        role: "NoSQL database for flexible data models"
      },
      {
        name: "PostgreSQL",
        icon: "postgresql",
        experience: "6+ months",
        usage: "Used in structured-data apps",
        role: "Relational database for complex queries"
      },
      {
        name: "GraphQL",
        icon: "graphql",
        experience: "6 months",
        usage: "Used in APIs with flexible querying",
        role: "Query language for efficient client-server communication"
      }
    ],
    tools: [
      {
        name: "Git",
        icon: "git",
        experience: "1+ year",
        usage: "Used in all projects",
        role: "Version control and collaboration"
      },
      {
        name: "Docker",
        icon: "docker",
        experience: "6+ months",
        usage: "Used for containerized dev environments",
        role: "Simplifying deployment and environment setup"
      },
      {
        name: "AWS",
        icon: "aws",
        experience: "6 months",
        usage: "Used for deploying full-stack apps",
        role: "Cloud hosting and storage services"
      },
      {
        name: "Figma",
        icon: "figma",
        experience: "1 year",
        usage: "Used for UI design and prototyping",
        role: "Collaborative design and handoff"
      },
      {
        name: "Jest",
        icon: "jest",
        experience: "6 months",
        usage: "Used in unit and integration testing",
        role: "JavaScript testing framework"
      }
    ]
  },
  
  testimonials: [
    {
      id: "testimonial-1",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      text: "Working with this developer has completely transformed how we approach our digital products. The platform is intuitive, and we've connected with amazing clients through the solutions they've built for us.",
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCo",
      text: "Their technical expertise and problem-solving skills are outstanding. They quickly understood our requirements and delivered a solution that perfectly matched our vision while adding valuable insights we hadn't considered.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "testimonial-3",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      image: "/placeholder.svg?height=80&width=80",
      text: "The website they built for us has significantly improved our conversion rates by over 200%. Their focus on performance and user experience really paid off, and we continue to receive compliments on our platform.",
    },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socials: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  },
}
