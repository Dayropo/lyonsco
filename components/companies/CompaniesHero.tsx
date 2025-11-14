"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"

/**
 * Hero section for companies overview page
 */
export function CompaniesHero(): JSX.Element {
  return (
    <section className="bg-primary relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[url('/images/cnc.webp')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Manufacturing Partners
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lyons Company represents specialized manufacturing partners working together to deliver
          comprehensive solutions from prototype to production.
        </motion.p>
      </div>
    </section>
  )
}
