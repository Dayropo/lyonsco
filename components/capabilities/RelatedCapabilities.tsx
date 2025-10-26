"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface RelatedCapability {
  readonly title: string
  readonly href: string
  readonly description: string
}

interface RelatedCapabilitiesProps {
  readonly capabilities: readonly RelatedCapability[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
 * Related capabilities section
 */
export function RelatedCapabilities({ capabilities }: RelatedCapabilitiesProps): JSX.Element {
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Related Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore other manufacturing services we offer
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map(capability => (
            <motion.div key={capability.href} variants={cardVariants}>
              <Link
                href={capability.href}
                className="group block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-card-foreground">{capability.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{capability.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
