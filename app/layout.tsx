import type React from "react"
import ClientLayout from "./ClientLayout"
import MouseTrail from "@/components/mouse-trail"

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
