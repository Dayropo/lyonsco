"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import {
  Cog,
  Box,
  Stamp,
  Layers,
  Settings2,
  Wrench,
  PackageCheck,
  ClipboardCheck,
  BarChart3,
} from "lucide-react"

const capabilities = [
  {
    id: "injection-molding",
    name: "Injection Molding",
    description:
      "Low to high-volume plastic part production, with tight tolerances and quality control",
    icon: Box,
  },
  {
    id: "metal-stamping",
    name: "Metal Stamping",
    description: "Precision stamping for high-strength, repeatable components",
    icon: Stamp,
  },
  {
    id: "deep-draw-stamping",
    name: "Deep Draw Stamping",
    description: "Complex formed components with superior structural integrity",
    icon: Layers,
  },
  {
    id: "screw-machining",
    name: "Screw Machining",
    description: "High-volume turned parts and Swiss-style machining for tight tolerances",
    icon: Settings2,
  },
  {
    id: "precision-machining",
    name: "Precision CNC Machining",
    description: "Accurate milling and turning for critical industrial applications",
    icon: Wrench,
  },

  {
    id: "prototype-support",
    name: "Prototype & Pre-production Support",
    description: "Rapid prototyping, short-run production, and design validation",
    icon: Box,
  },
  {
    id: "tooling-die",
    name: "Tooling & Die Development",
    description: "Custom tooling and die development for production runs",
    icon: Wrench,
  },
  {
    id: "secondary-operations",
    name: "Secondary Operations",
    description: "Deburring, plating, coating, heat treating, and finishing services",
    icon: Layers,
  },
  {
    id: "value-added-support",
    name: "Value Added Support",
    description: "Sub-assemblies, labeling, kitting, and custom packaging solutions",
    icon: PackageCheck,
  },
  {
    id: "quality-control",
    name: "Quality Control & Inspection",
    description: "FAI, in-process checks, and final inspection for complete compliance",
    icon: ClipboardCheck,
  },
  {
    id: "scalable-production",
    name: "Scalable Production",
    description: "From prototypes to full-volume manufacturing, supporting growth at every stage",
    icon: BarChart3,
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
            What We Offer
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Lyons Co delivers complete prototype-to-production manufacturing solutions across
            multiple precision processes and industries—all under one trusted partner
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-foreground text-lg font-semibold">Our Capabilities</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {capabilities.map(capability => (
              <motion.div key={capability.id} variants={itemVariants}>
                <div className="border-border bg-card group flex items-start gap-4 rounded-lg border p-6 shadow-sm transition-all">
                  <div className="bg-secondary/10 text-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    {(() => {
                      const Icon = capability.icon ?? Cog
                      return <Icon className="h-6 w-6" />
                    })()}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-card-foreground text-lg font-semibold">
                      {capability.name}
                    </h3>
                    {capability.description && (
                      <p className="text-muted-foreground mt-2 text-sm">{capability.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
