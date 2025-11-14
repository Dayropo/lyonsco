"use client"

import type { JSX } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CompanyHeroProps {
  name: string
  tagline: string
  description: string
  heroImage: string
  logo: string
}

/**
 * Hero section for individual company page
 */
export function CompanyHero({ name, tagline, description, heroImage, logo }: CompanyHeroProps): JSX.Element {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt={name} fill priority sizes="100vw" className="object-cover" />
        <div className="from-primary/90 via-primary/75 to-primary/60 absolute inset-0 bg-gradient-to-r" />
      </div>
      <div className="relative z-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mb-6 inline-block overflow-hidden rounded-xl bg-white p-4 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={logo} alt={`${name} logo`} width={120} height={120} className="h-24 w-24 object-contain" />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-secondary mt-4 text-xl font-semibold sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tagline}
          </motion.p>
          <motion.p
            className="mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
