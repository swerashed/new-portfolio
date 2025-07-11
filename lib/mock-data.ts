export const mockData = {
  hero: {
    title: "Full-Stack Engineer",
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
  experiences: [
    {
      id: "exp-1",
      company: "Notionhive Bangladesh Ltd.",
      position: "Junior Web Developer",
      location: "Dhaka, Bangladesh",
      startDate: "June 2024",
      endDate: "Present",
      description: [
        "Developed responsive, high-performance UIs using React.js and Next.js.",
        "Built secure RESTful APIs with Node.js and Express for internal tools.",
        "Conducted code reviews and mentored interns for consistent code quality.",
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      website: "https://notionhive.com",
      achievements: [
        "Consistently recognized for performance and collaboration, with 8+ “Employee of the Month” nominations and 1 award",
      ],
    },
    {
      id: "exp-2",
      company: "Notionhive Technology",
      position: "Trainee Web Developer",
      location: "Remote",
      startDate: "April 2024",
      endDate: "June 2024",
      description: [
        "Collaborated with a globally distributed team, including Canadian developers, to build and launch a high-performance product.",
        "Integrated frontend components with headless CMS platforms like Contentful.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Contentful", "JavaScript", "Git"],
      website: "https://notionhive.com",
      // achievements: [],
    },
    {
      id: "exp-3",
      company: "Upwork",
      position: "Full Stack Developer (Next/Node) — Part-Time",
      location: "Remote",
      startDate: "Jan 2024",
      endDate: "Present",
      description: [
        "Delivered 10+ full-stack web apps using Next.js, Express, and PostgreSQL.",
        "Handled direct client communication to reduce project friction and speed up delivery.",
      ],
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      website: "https://www.upwork.com/freelancers/~017f5569dfe528eb4f?mp_source=share",
      achievements: [
        "Completed 90% of projects ahead of deadlines; earned consistent 5-star client ratings.",
      ],
    },
  ],  
  featuredProjects: [
    {
      id: "project-1",
      title: "Eventlyze — Event Management Platform",
      description:
        "A modern event management platform where users can create, join, and invite others to events. Supports both free and paid events with integrated Stripe payments for seamless access control.",
      image: "/eventlyze.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
      caseStudyUrl: "https://www.notion.so/swerashed/Eventlyze-22ddcf97562480ea97d4c4349d58b1ec?source=copy_link",
      liveUrl: "https://eventlyze.vercel.app",
    },    
    {
      id: "project-2",
      title: "DashQR — Dynamic QR Code Platform",
      description:
        "A dynamic QR code generation platform that tracks scan analytics including total scans, device type, geolocation, and time of access. Built for real-time performance insights and campaign tracking.",
      image: "/DashQR.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
      caseStudyUrl: "https://www.notion.so/swerashed/Dash-QR-22ddcf97562480b492dafeb70186c378?source=copy_link",
      liveUrl: "https://dash-qr.vercel.app/",
    },    
    {
      id: "project-3",
      title: "🚀 Something Exciting is Coming",
      description:
        "A bold new project is on the way — blending technology, creativity, and user experience like never before. We're building something innovative that will push boundaries and solve real-world problems. Stay tuned — launch is just around the corner!",
      image: "/coming-soon.jpg",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
      caseStudyUrl: "",
      liveUrl: "",
    }
    
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
        name: "JavaScript (ES6+)",
        icon: "javascript",
        experience: "2+ years",
        usage: "Used in all frontend and backend projects",
        role: "Core language for full-stack development"
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
      },
      {
        name: "Prisma",
        icon: "prisma",
        experience: "6+ months",
        usage: "Used in multiple full-stack apps",
        role: "ORM for database management with TypeScript support"
      },
      {
        name: "Headless WordPress",
        icon: "wordpress",
        experience: "6 months",
        usage: "Used to pull content via REST API",
        role: "CMS backend for blog-style apps"
      },
      {
        name: "SCSS",
        icon: "scss",
        experience: "1 year",
        usage: "Used in styled UI projects",
        role: "CSS preprocessor for organized styling"
      },
      {
        name: "Linux",
        icon: "linux",
        experience: "1+ year",
        usage: "Used in local/server environments",
        role: "OS for dev and deployment operations"
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
        name: "Redux",
        icon: "redux",
        experience: "1 year",
        usage: "Used in stateful apps",
        role: "State management for complex components"
      },
      {
        name: "Zustand",
        icon: "zustand",
        experience: "6 months",
        usage: "Used in modern frontend projects",
        role: "Lightweight state management alternative"
      },
      {
        name: "Jira",
        icon: "jira",
        experience: "6+ months",
        usage: "Used for task tracking and sprint planning",
        role: "Project management and issue tracking"
      },
      {
        name: "ClickUp",
        icon: "clickup",
        experience: "6+ months",
        usage: "Used for task and document organization",
        role: "All-in-one productivity tool"
      },
      {
        name: "PWA",
        icon: "pwa",
        experience: "6 months",
        usage: "Used in mobile-ready web apps",
        role: "Progressive enhancement for offline access"
      }
    ],
    softSkills: [
      {
        name: "Communication",
        icon: "communication",
        usage: "Ensured smooth team and client interactions"
      },
      {
        name: "Team Collaboration",
        icon: "team",
        usage: "Worked closely with developers and designers"
      },
      {
        name: "Problem-solving",
        icon: "problem",
        usage: "Resolved bugs and optimized workflows efficiently"
      }
    ]
  },  
  testimonials: [
    
    {
      id: "testimonial-3",
      name: "Sharif Rakib",
      role: "Project Manager, Technology",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQGg1lv16EbYqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1616654446591?e=1757548800&v=beta&t=8jBuhdmdSgt7F_rXKG_bla8o9ULLKUtHhGHGRnX1hyg",
      text: "Rashed consistently exceeds expectations with his confidence, clarity, and technical precision. His ownership, reliability, and infectious positive energy make him a standout team member.",
    },
    {
      id: "testimonial-6",
      name: "Rahatil Ashikin",
      role: "Project Manager",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFsJje40xxjeg/profile-displayphoto-crop_800_800/B56ZfJJBAWHoAI-/0/1751426276443?e=1757548800&v=beta&t=hyGTvhKHDxMgodwNyYzvvrgl-wNlEhtflNxg5QTWqiE",
      text: "Rashed adapted quickly and delivered high-quality code from day one. His attention to detail, communication, and work ethic stood out — a true professional with a bright future.",
    },
    {
      id: "testimonial-2",
      name: "Mohammad Kais Rayhan",
      role: "Product Designer",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHXOa1hZi2LUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693207430402?e=1757548800&v=beta&t=npNRZ9BwNI6Bi1bkwtOE1gCMNb37Nvd5LMrLpvNAYrk",
      text: "Rashed brings creativity, dedication, and strong execution to every project. His ability to solve complex challenges and consistently deliver high-quality work makes him a valuable asset to any team.",
    },
   
    {
      id: "testimonial-1",
      name: "Abdul Muhaimin Toha",
      role: "Junior Software Engineer",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQETPFWXd0brcg/profile-displayphoto-scale_200_200/B4DZfvs.rCGgAY-/0/1752073236207?e=1757548800&v=beta&t=vIOyC_uzGNApqWFlHEUVmeWT-0DhaAGqzoza9Q8AFow",
      text: "Rashed is a highly skilled and dedicated professional. His creativity, precision, and strong work ethic consistently lead to successful outcomes. A reliable team player with a solution-oriented mindset — truly exceptional to work with.",
    },
    {
      id: "testimonial-4",
      name: "Md. Rakibul Hasan",
      role: "Developer & Data Analyst",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/D5603AQF4EO5BBRnERQ/profile-displayphoto-scale_200_200/B56ZfLm9fAGQAY-/0/1751467679627?e=1757548800&v=beta&t=eZcKo3jgiP1XaTXAQyjCjgqp9Mn4-FuWvjfSzKzjB0k",
      text: "Rashed’s frontend expertise, clear communication, and eye for detail made collaboration smooth and efficient. He’s a strong team player who helps ship high-quality, user-focused applications.",
    },
    {
      id: "testimonial-5",
      name: "Tahsin Ahmed Tushar",
      role: "Software Engineer",
      company: "Notionhive",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHE6NNfLQJZ0A/profile-displayphoto-shrink_200_200/B56ZYrBqpgH0Ac-/0/1744478580671?e=1757548800&v=beta&t=tLBn7l1bAFP7VsAIbHYAYWlSoPuWD4k1WRSBOc2jVAo",
      text: "Rashed is enthusiastic, responsible, and always eager to learn. It was a joy to collaborate with him — he brings great energy and excellence to his work.",
    },
 
  ],  
  contact: {
    email: "talk.rashed@gmail.com",
    phone: "+8801738313337",
    location: "Dhaka, Bangladesh",
    socials: {
      github: "https://github.com/swerashed",
      linkedin: "https://linkedin.com/in/swerashed",
      twitter: "https://twitter.com/swerashed",
    },
  },
}
