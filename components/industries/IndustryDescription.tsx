"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import type { Challenge } from "@/types"

interface IndustryDescriptionProps {
  description: string
  challenges: Challenge[]
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
 * Description and challenges section for industry page
 */
export function IndustryDescription({
  description,
  challenges,
}: IndustryDescriptionProps): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Industry Challenges
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {challenges.map(challenge => (
            <motion.div
              key={challenge.id}
              variants={cardVariants}
              className="border-border bg-card rounded-lg border p-6 shadow-sm"
            >
              <div className="bg-secondary/10 text-secondary inline-flex h-12 w-12 items-center justify-center rounded-lg">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="text-card-foreground mt-4 text-lg font-semibold">{challenge.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{challenge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
