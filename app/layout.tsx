import type { Metadata } from "next"
import "./globals.css"
import { plexSans, jetBrainsMono } from "@/styles/font"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Lyons Company",
  description: "Precision manufacturing support for prototyping and production.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${jetBrainsMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
