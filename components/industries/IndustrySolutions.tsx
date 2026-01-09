"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { Solution } from "@/types"

interface IndustrySolutionsProps {
  solutions: Solution[]
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Solutions section for industry page - What we do/offer
 */
export function IndustrySolutions({ solutions }: IndustrySolutionsProps): JSX.Element {
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
            What We Offer
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Comprehensive manufacturing solutions tailored to your industry needs
          </p>
        </motion.div>

        <motion.div
          className="mt-16 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map(solution => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              className="border-border bg-card rounded-lg border p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-card-foreground text-2xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {solution.capabilities.map((capability, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary/10 text-secondary rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
