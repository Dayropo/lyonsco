"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface CompanySpecialtiesProps {
  specialties: string[]
}

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

/**
 * Specialties section for company page
 */
export function CompanySpecialties({ specialties }: CompanySpecialtiesProps): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Key Specialties
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-border bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm"
            >
              <CheckCircle className="text-secondary h-6 w-6 flex-shrink-0" />
              <span className="text-card-foreground font-medium">{specialty}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
