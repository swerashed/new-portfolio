// export async function getData() {
//   // In a real application, this would fetch data from an API or database
//   // For this example, we'll return mock data

//   return {
//     hero: {
//       title: "Full-Stack Developer",
//       subtitle: "Building modern web experiences",
//       description: "I create fast, responsive, and visually stunning web applications with cutting-edge technologies.",
//     },
//     about: {
//       image: "/placeholder.svg?height=600&width=600",
//       bio: "I'm a passionate full-stack developer with over 5 years of experience building modern web applications. I specialize in React, Next.js, Node.js, and modern frontend technologies. My approach combines clean code, performance optimization, and thoughtful user experience design.",
//       values: [
//         {
//           title: "Clean Code",
//           description: "I write maintainable, well-documented code that follows best practices and industry standards.",
//         },
//         {
//           title: "User-Focused",
//           description: "Every line of code I write is aimed at creating exceptional user experiences.",
//         },
//         {
//           title: "Continuous Learning",
//           description: "I'm constantly exploring new technologies and techniques to improve my craft.",
//         },
//       ],
//     },
//     featuredProjects: [
//       {
//         id: "project-1",
//         title: "E-Commerce Platform",
//         description:
//           "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
//         caseStudyUrl: "/projects/e-commerce",
//         liveUrl: "https://example.com/e-commerce",
//       },
//       {
//         id: "project-2",
//         title: "SaaS Dashboard",
//         description: "An analytics dashboard for SaaS businesses with real-time data visualization and reporting.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["React", "Node.js", "D3.js", "MongoDB"],
//         caseStudyUrl: "/projects/saas-dashboard",
//         liveUrl: "https://example.com/dashboard",
//       },
//       {
//         id: "project-3",
//         title: "Social Media App",
//         description: "A social media application with real-time messaging, post creation, and user authentication.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["React Native", "Firebase", "Redux", "Express"],
//         caseStudyUrl: "/projects/social-media",
//         liveUrl: "https://example.com/social",
//       },
//     ],
//     allProjects: [
//       {
//         id: "project-1",
//         title: "E-Commerce Platform",
//         description:
//           "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
//         caseStudyUrl: "/projects/e-commerce",
//         liveUrl: "https://example.com/e-commerce",
//         category: "Full Stack",
//       },
//       {
//         id: "project-2",
//         title: "SaaS Dashboard",
//         description: "An analytics dashboard for SaaS businesses with real-time data visualization and reporting.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["React", "Node.js", "D3.js", "MongoDB"],
//         caseStudyUrl: "/projects/saas-dashboard",
//         liveUrl: "https://example.com/dashboard",
//         category: "Frontend",
//       },
//       {
//         id: "project-3",
//         title: "Social Media App",
//         description: "A social media application with real-time messaging, post creation, and user authentication.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["React Native", "Firebase", "Redux", "Express"],
//         caseStudyUrl: "/projects/social-media",
//         liveUrl: "https://example.com/social",
//         category: "Mobile",
//       },
//       {
//         id: "project-4",
//         title: "Portfolio Website",
//         description: "A modern portfolio website with smooth animations and responsive design.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
//         caseStudyUrl: "/projects/portfolio",
//         liveUrl: "https://example.com/portfolio",
//         category: "Frontend",
//       },
//       {
//         id: "project-5",
//         title: "Task Management API",
//         description: "A RESTful API for task management with authentication and authorization.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["Node.js", "Express", "MongoDB", "JWT"],
//         caseStudyUrl: "/projects/task-api",
//         liveUrl: "https://example.com/task-api",
//         category: "Backend",
//       },
//       {
//         id: "project-6",
//         title: "Real Estate Platform",
//         description: "A platform for real estate listings with search, filtering, and user accounts.",
//         image: "/placeholder.svg?height=400&width=600",
//         techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
//         caseStudyUrl: "/projects/real-estate",
//         liveUrl: "https://example.com/real-estate",
//         category: "Full Stack",
//       },
//     ],
//     skills: {
//       frontend: [
//         { name: "React", icon: "react", level: 95 },
//         { name: "Next.js", icon: "next", level: 90 },
//         { name: "TypeScript", icon: "typescript", level: 85 },
//         { name: "Tailwind CSS", icon: "tailwind", level: 90 },
//         { name: "GSAP", icon: "gsap", level: 80 },
//       ],
//       backend: [
//         { name: "Node.js", icon: "node", level: 85 },
//         { name: "Express", icon: "express", level: 80 },
//         { name: "MongoDB", icon: "mongodb", level: 75 },
//         { name: "PostgreSQL", icon: "postgresql", level: 70 },
//         { name: "GraphQL", icon: "graphql", level: 65 },
//       ],
//       tools: [
//         { name: "Git", icon: "git", level: 90 },
//         { name: "Docker", icon: "docker", level: 75 },
//         { name: "AWS", icon: "aws", level: 70 },
//         { name: "Figma", icon: "figma", level: 80 },
//         { name: "Jest", icon: "jest", level: 75 },
//       ],
//     },
//     testimonials: [
//       {
//         id: "testimonial-1",
//         name: "Sarah Johnson",
//         role: "CEO",
//         company: "TechStart Inc.",
//         image: "/placeholder.svg?height=80&width=80",
//         text: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and attention to detail.",
//       },
//       {
//         id: "testimonial-2",
//         name: "Michael Chen",
//         role: "Product Manager",
//         company: "InnovateCo",
//         image: "/placeholder.svg?height=80&width=80",
//         text: "Their technical expertise and problem-solving skills are outstanding. They quickly understood our requirements and delivered a solution that perfectly matched our vision.",
//       },
//       {
//         id: "testimonial-3",
//         name: "Emily Rodriguez",
//         role: "Marketing Director",
//         company: "GrowthLabs",
//         image: "/placeholder.svg?height=80&width=80",
//         text: "The website they built for us has significantly improved our conversion rates. Their focus on performance and user experience really paid off.",
//       },
//     ],
//     contact: {
//       email: "hello@example.com",
//       phone: "+1 (555) 123-4567",
//       location: "San Francisco, CA",
//       socials: {
//         github: "https://github.com/username",
//         linkedin: "https://linkedin.com/in/username",
//         twitter: "https://twitter.com/username",
//       },
//     },
//   }
// }
