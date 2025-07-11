import type React from "react"
import type { Metadata } from "next"
import { Barlow, IBM_Plex_Mono, IBM_Plex_Sans, Lora } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-monospace",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-body",
})

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "DUX Object Model v9.5 Showcase",
  description: "A design language system for the DUX object model.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          barlow.variable,
          ibmPlexMono.variable,
          ibmPlexSans.variable,
          lora.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
