"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"

/**
 * Story section for About page
 */
export function AboutStory(): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Story
          </h2>
          <div className="text-muted-foreground mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              Lyons Co. is a precision manufacturing partner with more than 30 years of experience
              supporting companies through every stage of product development. From early prototypes
              to full-scale production, we help bring ideas to life with accuracy, speed and
              dependable engineering expertise.
            </p>
            <p>
              Our team works closely with clients across multiple industries, delivering components
              that meet tight tolerances, rigorous standards and demanding environments. With
              specialized capabilities and trusted manufacturing partners, we provide flexible,
              efficient solutions tailored to each project.
            </p>
            <p>
              For every market, our focus is the same: reliable craftsmanship, consistent quality
              and a commitment to delivering parts that perform.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
