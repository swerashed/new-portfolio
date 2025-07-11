// app/layout.tsx or wherever your root layout is

import type { Metadata } from "next"
import type React from "react"
import ClientLayout from "./ClientLayout"
import MouseTrail from "@/components/mouse-trail"

// ✅ Add metadata export
export const metadata: Metadata = {
  title: "Rashed | Full Stack Developer",
  description: "Portfolio of Rashed, a passionate Full Stack Web Developer skilled in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Rashed", "React", "Next.js", "Node.js", "Portfolio", "Frontend", "Backend"],
  authors: [{ name: "Rashed", url: "https://rashed-portfolio.vercel.app" }],
  creator: "Rashed",
  themeColor: "#0f172a", // Tailwind's zinc-900

  openGraph: {
    title: "Rashed | Full Stack Developer",
    description: "Explore the work and skills of Rashed — building performant, modern web applications.",
    url: "https://rashed-portfolio.vercel.app",
    siteName: "Rashed's Portfolio",
    images: [
      {
        url: "/og-image.png", // recommended to put a real og image
        width: 1200,
        height: 630,
        alt: "Rashed's Portfolio Preview",
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://rashed-portfolio.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClientLayout>
      <MouseTrail />
      {children}
    </ClientLayout>
  )
}
