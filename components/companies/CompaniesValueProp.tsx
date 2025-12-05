"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { ArrowRightCircle, Boxes, Cog, Layers3, Repeat2, Truck } from "lucide-react"

const benefits = [
  {
    id: "engineering-driven-manufacturing",
    title: "Engineering-Driven Manufacturing",
    description:
      "Projects led by engineering insight to align design intent with manufacturing reality.",
    icon: Cog,
  },
  {
    id: "prototype-to-production",
    title: "Prototype-to-Production Support",
    description:
      "Support from early prototypes through full-scale production with a single partner.",
    icon: ArrowRightCircle,
  },
  {
    id: "tight-tolerances",
    title: "Tight Tolerances & Repeatability",
    description: "Consistent, repeatable quality for parts that demand precision.",
    icon: Repeat2,
  },
  {
    id: "multi-process-production",
    title: "Multi-Process Production",
    description: "Injection molding, machining, stamping, and more coordinated under one supplier.",
    icon: Layers3,
  },
  {
    id: "supply-chain-simplification",
    title: "Supply-Chain Simplification",
    description: "Fewer vendors to manage and clearer accountability across processes.",
    icon: Boxes,
  },
  {
    id: "on-time-delivery",
    title: "Consistent On-Time Delivery",
    description: "Reliable scheduling and logistics to keep your production on track.",
    icon: Truck,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Value proposition section for companies page
 */
export function CompaniesValueProp(): JSX.Element {
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
            Why Manufacturers Choose Lyons Co.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Leveraging the combined strengths of specialized manufacturers to serve you better
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map(benefit => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                className="border-border bg-card rounded-lg border p-6 text-center shadow-sm"
              >
                <div className="bg-secondary/10 text-secondary mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-card-foreground mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{benefit.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
