"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Ruler, Box, Layers, Clock } from "lucide-react"

interface TechnicalSpec {
  readonly icon: string
  readonly label: string
  readonly value: string
  readonly description: string
}

interface TechnicalHighlightsProps {
  readonly specs: readonly TechnicalSpec[]
}

const iconMap: Record<string, any> = {
  ruler: Ruler,
  box: Box,
  layers: Layers,
  clock: Clock,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Technical specifications section
 */
export function TechnicalHighlights({ specs }: TechnicalHighlightsProps): JSX.Element {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Highlights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Key specifications and capabilities
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specs.map((spec, index) => {
            const Icon = iconMap[spec.icon] || Ruler
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-foreground">{spec.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{spec.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
