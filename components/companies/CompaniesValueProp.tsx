"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Users, Zap, ShieldCheck, DollarSign } from "lucide-react"

const benefits = [
  {
    id: "single-contact",
    title: "Single Point of Contact",
    description: "One partner managing all your manufacturing needs across multiple specialties",
    icon: Users,
  },
  {
    id: "faster-delivery",
    title: "Faster Time-to-Market",
    description: "Seamless transitions from prototype to production accelerate your timeline",
    icon: Zap,
  },
  {
    id: "consistent-quality",
    title: "Consistent Quality",
    description: "Unified quality standards across all partner companies",
    icon: ShieldCheck,
  },
  {
    id: "cost-effective",
    title: "Cost Optimization",
    description: "Right-sized solutions matching your volume and complexity requirements",
    icon: DollarSign,
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
            Why Work With Our Network
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Leveraging the combined strengths of specialized manufacturers to serve you better
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit) => {
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
