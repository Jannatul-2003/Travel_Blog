import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mamun The Nomad - Travel Blog",
  description:
    "Join Mamun on extraordinary adventures across the seven seas. Discover hidden gems, meet incredible people, and create memories that last a lifetime.",
  keywords: "travel, blog, adventure, sailing, nomad, travel photography",
  authors: [{ name: "Mamun The Nomad" }],
  openGraph: {
    title: "Mamun The Nomad - Travel Blog",
    description: "Join Mamun on extraordinary adventures across the seven seas.",
    type: "website",
    images: ["/images/hero-sailing.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
