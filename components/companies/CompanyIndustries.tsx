"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Car, Plane, Zap, Heart, Shield, ArrowRight } from "lucide-react"

interface CompanyIndustriesProps {
  industries: string[]
}

const industryMap: Record<string, { name: string; icon: typeof Car; slug: string }> = {
  automotive: { name: "Automotive", icon: Car, slug: "automotive" },
  "aerospace-defense": { name: "Aerospace & Defense", icon: Plane, slug: "aerospace-defense" },
  "consumer-electronics": { name: "Consumer Electronics", icon: Zap, slug: "consumer-electronics" },
  "medical-devices": { name: "Medical Devices", icon: Heart, slug: "medical-devices" },
  military: { name: "Military", icon: Shield, slug: "military" },
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
}

/**
 * Industries section for company page
 */
export function CompanyIndustries({ industries }: CompanyIndustriesProps): JSX.Element {
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
            Industries Served
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industryId) => {
            const industry = industryMap[industryId]
            if (!industry) return null
            const Icon = industry.icon
            return (
              <motion.div key={industryId} variants={cardVariants}>
                <Link href={`/industries/${industry.slug}`} className="group block h-full">
                  <div className="border-border bg-card flex h-full items-center gap-4 rounded-lg border p-4 shadow-sm transition-all hover:shadow-md">
                    <div className="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-card-foreground font-semibold">{industry.name}</h3>
                    </div>
                    <ArrowRight className="text-secondary h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
