"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Wrench, Cog, Factory, Zap } from "lucide-react"
import { PRODUCTION_STAGES } from "@/lib/constants"

interface TimelineStage {
  id: string
  name: string
  description: string
  icon: JSX.Element
  company: string
}

const stages: TimelineStage[] = [
  {
    id: "concept",
    name: "Concept",
    description:
      "Initial ideation and feasibility studies to ensure manufacturability and cost-effectiveness",
    icon: <Lightbulb className="h-8 w-8" />,
    company: "Pardev",
  },
  {
    id: "prototype",
    name: "Prototype",
    description:
      "Functional prototypes and design validation using production-intent materials and processes",
    icon: <Wrench className="h-8 w-8" />,
    company: "Pardev",
  },
  {
    id: "tooling",
    name: "Tooling",
    description:
      "Precision production tooling and process development for repeatable, high-quality parts",
    icon: <Cog className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "production",
    name: "Production",
    description: "Full-scale manufacturing supported by robust quality control and traceability",
    icon: <Factory className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "precision",
    name: "Precision Components",
    description: "Ultra-precise parts for demanding applications",
    icon: <Zap className="h-8 w-8" />,
    company: "Minic Precision",
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
 * Timeline section showing the product development lifecycle
 * Animated with Framer Motion
 */
export function TimelineSection(): JSX.Element {
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
            Complete Product Lifecycle
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            From initial concept to production, we guide your project through every stage with
            seamless transitions between our specialized manufacturing partners.
          </p>
        </motion.div>
        <motion.h3
          className="text-foreground mt-16 text-center text-2xl font-semibold sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Process
        </motion.h3>
        <motion.div
          className="relative mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
            {stages.map((stage, index) => (
              <motion.div key={stage.id} className="timeline-item relative" variants={itemVariants}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-secondary text-secondary-foreground relative z-10 flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
                    {stage.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-foreground text-lg font-semibold">{stage.name}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{stage.description}</p>
                    {/* <p className="text-secondary mt-3 text-xs font-medium">{stage.company}</p> */}
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="bg-border mx-auto mt-4 h-8 w-0.5 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
