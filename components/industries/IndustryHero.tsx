"use client"

import type { JSX } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface IndustryHeroProps {
  name: string
  description: string
  heroImage: string
}

/**
 * Hero section for industry page
 */
export function IndustryHero({ name, description, heroImage }: IndustryHeroProps): JSX.Element {
  return (
    <section className="relative -mt-[68px] min-h-[60vh] overflow-hidden pt-[68px] sm:-mt-[100px] sm:pt-[100px]">
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt={name} fill priority sizes="100vw" className="object-cover" />
        <div className="from-primary/70 via-primary/60 to-primary/50 absolute inset-0 bg-gradient-to-r" />
      </div>
      <div className="relative z-10 px-6 py-32 sm:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
