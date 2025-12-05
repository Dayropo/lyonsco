"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Cog, Droplet, Stamp, Layers3 } from "lucide-react"
import type { IndustryComponentGroup } from "@/types/industry"

interface IndustryComponentsProps {
  components: readonly IndustryComponentGroup[]
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
 * Components section for industry page
 */
export function IndustryComponents({ components }: IndustryComponentsProps): JSX.Element {
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
            Components We Produce
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {components.map(group => (
              <motion.div
                key={group.id}
                variants={cardVariants}
                className="border-border bg-card rounded-lg border p-6 shadow-sm"
              >
                <div className="bg-secondary/10 text-secondary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                  {group.icon === "cog" && <Cog className="h-6 w-6" />}
                  {group.icon === "droplet" && <Droplet className="h-6 w-6" />}
                  {group.icon === "stamp" && <Stamp className="h-6 w-6" />}
                  {!["cog", "droplet", "stamp"].includes(group.icon) && (
                    <Layers3 className="h-6 w-6" />
                  )}
                </div>
                <h3 className="text-card-foreground mb-3 text-lg font-semibold">{group.name}</h3>
                <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {group.components.map(component => (
                    <li key={component}>{component}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
