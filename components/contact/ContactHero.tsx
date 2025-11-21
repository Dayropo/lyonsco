"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"

/**
 * Hero section for Contact page
 */
export function ContactHero(): JSX.Element {
  return (
    <section className="from-primary to-accent relative -mt-[68px] min-h-[50vh] overflow-hidden bg-gradient-to-br pt-[68px] sm:-mt-[100px] sm:pt-[100px]">
      <div className="relative z-10 flex min-h-[50vh] items-center px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Want to request a quote? Our team is ready to support you.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
