"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Clock, CheckCircle, Mail } from "lucide-react"

const infoItems = [
  {
    id: "response-time",
    icon: Clock,
    title: "Quick Response",
    description: "We typically respond to quote requests within one business day",
  },
  {
    id: "detailed-quote",
    icon: CheckCircle,
    title: "Detailed Quote",
    description:
      "Receive a comprehensive quote including pricing, timeline, and technical recommendations",
  },
  {
    id: "consultation",
    icon: Mail,
    title: "Free Consultation",
    description:
      "Our engineering team is available to discuss your project and answer any questions",
  },
]

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
 * RFQ information section
 */
export function RFQInfo(): JSX.Element {
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
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            After you submit your request, here&apos;s what you can expect
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-8 sm:grid-cols-3">
            {infoItems.map(item => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="border-border bg-card rounded-lg border p-6 text-center shadow-sm"
                >
                  <div className="bg-secondary/10 text-secondary mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-card-foreground mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
