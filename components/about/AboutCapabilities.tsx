"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Cog, ArrowRight } from "lucide-react"

const capabilities = [
  {
    id: "injection-molding",
    name: "Plastic injection molding",
    href: "/capabilities/injection-molding",
  },
  {
    id: "precision-machining",
    name: "Precision machining and screw machining",
    href: "/capabilities/cnc-machining",
  },
  {
    id: "metal-stamping",
    name: "Metal stamping",
    href: "/capabilities/metal-stamping",
  },
  {
    id: "powdered-metal",
    name: "Powdered metal components",
    href: "/capabilities",
  },
  {
    id: "circuit-board",
    name: "Circuit board manufacturing",
    href: "/capabilities",
  },
  {
    id: "product-design",
    name: "Product design and engineering",
    href: "/capabilities",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Capabilities section for About page
 */
export function AboutCapabilities(): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What We Do
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            We support a wide range of manufacturing needs
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(capability => (
              <motion.div key={capability.id} variants={itemVariants}>
                <Link
                  href={capability.href}
                  className="border-border bg-card hover:border-secondary/50 group flex items-center gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="bg-secondary/10 text-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    <Cog className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-card-foreground text-lg font-semibold">
                      {capability.name}
                    </h3>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-secondary h-5 w-5 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
