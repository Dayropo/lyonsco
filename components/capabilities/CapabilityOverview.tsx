"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Zap, ShieldCheck, DollarSign, Wrench } from "lucide-react"

interface Benefit {
  readonly icon: string
  readonly title: string
  readonly description: string
}

interface CapabilityOverviewProps {
  readonly content: {
    readonly intro: string
    readonly details: string
  }
  readonly benefits: readonly Benefit[]
}

const iconMap: Record<string, any> = {
  zap: Zap,
  "shield-check": ShieldCheck,
  "dollar-sign": DollarSign,
  wrench: Wrench,
}

/**
 * Overview section with description and benefits
 */
export function CapabilityOverview({ content, benefits }: CapabilityOverviewProps): JSX.Element {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Overview
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {content.details}
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Key Benefits
            </h3>
            <div className="mt-6 space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon] || Zap
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
