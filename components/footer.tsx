import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-mono font-bold text-lg">Rashed.Portfolio</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Full-stack developer specializing in creating exceptional digital experiences.
            </p>
          </div>

          <div>
            <div className="flex gap-4">
              <Link href="https://github.com/swerashed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/swerashed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com/swerashed" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:talk.rashed@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
