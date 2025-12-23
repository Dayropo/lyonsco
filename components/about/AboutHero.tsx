"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"

/**
 * Hero section for About page
 */
export function AboutHero(): JSX.Element {
  return (
    <section className="from-primary to-accent relative -mt-[68px] min-h-[60vh] overflow-hidden bg-gradient-to-br pt-[68px] sm:-mt-[100px] sm:pt-[100px]">
      <div className="relative z-10 flex min-h-[60vh] items-center px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Lyons Company Inc.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Precision manufacturing partner with more than 30 years of experience
          </motion.p>
        </div>
      </div>
    </section>
  )
}
