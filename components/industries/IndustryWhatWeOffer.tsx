"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { WhatWeOffer } from "@/types/industry"

interface IndustryWhatWeOfferProps {
  whatWeOffer: WhatWeOffer[]
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
 * What We Offer section for industry page
 */
export function IndustryWhatWeOffer({ whatWeOffer }: IndustryWhatWeOfferProps): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What We Offer
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {whatWeOffer.map(capability => (
            <motion.div
              key={capability.id}
              variants={cardVariants}
              className="border-border bg-card rounded-lg border p-6 shadow-sm"
            >
              <div className="bg-secondary/10 text-secondary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-card-foreground mb-3 text-xl font-semibold">{capability.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
