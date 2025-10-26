"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Users, Zap, ShieldCheck, DollarSign, Wrench, Flag, type LucideIcon } from "lucide-react"
import { VALUE_PROPOSITIONS } from "@/lib/constants"

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  zap: Zap,
  "shield-check": ShieldCheck,
  "dollar-sign": DollarSign,
  wrench: Wrench,
  flag: Flag,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
 * Value propositions section highlighting key benefits
 */
export function ValuePropsSection(): JSX.Element {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Work With Us
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Experience the advantage of a unified manufacturing partner with specialized expertise
            across the entire product development lifecycle.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {VALUE_PROPOSITIONS.map(prop => {
            const Icon = iconMap[prop.icon]
            return (
              <motion.div key={prop.id} variants={cardVariants}>
                <div className="value-card group border-border bg-card rounded-xl border p-8 shadow-sm transition-all hover:shadow-md">
                  <div className="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-card-foreground mt-6 text-xl font-semibold">{prop.title}</h3>
                  <p className="text-muted-foreground mt-3">{prop.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
