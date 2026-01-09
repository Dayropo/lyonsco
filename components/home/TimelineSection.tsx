"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import {
  Lightbulb,
  Wrench,
  Cog,
  Factory,
  Zap,
  FileText,
  SearchCheck,
  Puzzle,
  Truck,
  LifeBuoy,
} from "lucide-react"
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
    id: "design-review",
    name: "Design Review",
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
    id: "quote",
    name: "Quote",
    description:
      "Precision production tooling and process development for repeatable, high-quality parts",
    icon: <FileText className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "tooling",
    name: "Tooling",
    description: "Full-scale manufacturing supported by robust quality control and traceability",
    icon: <Cog className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "production",
    name: "Production",
    description: "Ultra-precise parts for demanding applications",
    icon: <Factory className="h-8 w-8" />,
    company: "Minic Precision",
  },
  {
    id: "inspection",
    name: "Inspection",
    description:
      "Quality control and inspection to ensure compliance with specifications and standards",
    icon: <SearchCheck className="h-8 w-8" />,
    company: "Minic Precision",
  },
  {
    id: "assembly",
    name: "Assembly",
    description:
      "Quality control and inspection to ensure compliance with specifications and standards",
    icon: <Puzzle className="h-8 w-8" />,
    company: "Minic Precision",
  },
  {
    id: "delivery",
    name: "Delivery",
    description:
      "Quality control and inspection to ensure compliance with specifications and standards",
    icon: <Truck className="h-8 w-8" />,
    company: "Minic Precision",
  },
  {
    id: "ongoing-support",
    name: "Ongoing Support",
    description:
      "Quality control and inspection to ensure compliance with specifications and standards",
    icon: <LifeBuoy className="h-8 w-8" />,
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
    <section id="timeline" className="bg-muted scroll-mt-[102px] px-6 py-20 sm:py-28">
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
          Our Processes
        </motion.h3>
        <motion.div
          className="relative mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="bg-border/60 pointer-events-none absolute inset-x-4 top-9 hidden h-px md:block" />
            <div className="flex flex-wrap justify-center gap-6">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className="bg-background/80 relative flex w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333333%-16px)] lg:w-[calc(25%-18px)] flex-col rounded-xl border p-6 text-left shadow-sm"
                  variants={itemVariants}
                >
                  <div className="mt-4 flex items-start gap-3">
                    <div className="text-primary mt-1 hidden md:block">{stage.icon}</div>
                    <div>
                      <h3 className="text-foreground text-base leading-snug font-semibold">
                        {stage.name}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
