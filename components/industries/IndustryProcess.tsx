"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import type { Process } from "@/types/industry"

interface IndustryProcessProps {
  processes: readonly Process[]
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Process section for industry page
 */
export function IndustryProcess({ processes }: IndustryProcessProps): JSX.Element {
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
            Our Process
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processes.map((process, index) => (
              <motion.div key={process.id} variants={itemVariants}>
                <div className="group relative h-full">
                  <div className="border-border bg-card group-hover:border-secondary flex h-full flex-col rounded-lg border p-6 text-left shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <div className="bg-secondary/10 text-secondary mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-card-foreground mb-3 text-lg font-semibold">
                      {process.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {"bullets" in process &&
                    Array.isArray(process.bullets) &&
                    process.bullets.length > 0 && (
                      <div className="bg-primary/95 border-accent text-primary-foreground absolute inset-0 hidden flex-col justify-center rounded-lg border p-6 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                        <h3 className="mb-3 text-lg font-semibold">{process.name}</h3>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[#ECF0F1]">
                          {process.bullets.map(bullet => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
