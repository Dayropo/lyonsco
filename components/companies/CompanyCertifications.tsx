"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Award, HeartPulse, Shield, ShieldCheck, Wind } from "lucide-react"
import type { Certification } from "@/types"

interface CompanyCertificationsProps {
  certifications: Certification[]
}

const iconMap: Record<string, typeof Award> = {
  award: Award,
  "heart-pulse": HeartPulse,
  shield: Shield,
  "shield-check": ShieldCheck,
  wind: Wind,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Certifications section for company page
 */
export function CompanyCertifications({ certifications }: CompanyCertificationsProps): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Certifications & Compliance
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award
            return (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                className="border-border bg-card rounded-lg border p-6 shadow-sm"
              >
                <div className="bg-secondary/10 text-secondary inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-card-foreground mt-4 text-lg font-semibold">{cert.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{cert.description}</p>
                <p className="text-muted-foreground mt-3 text-xs">Issued by: {cert.issuedBy}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
