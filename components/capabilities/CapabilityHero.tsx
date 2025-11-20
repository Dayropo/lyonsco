"use client"

import type { JSX } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

interface CapabilityHeroProps {
  readonly title: string
  readonly description: string
  readonly image: string
}

/**
 * Hero section for capability pages
 */
export function CapabilityHero({ title, description, image }: CapabilityHeroProps): JSX.Element {
  return (
    <section className="relative -mt-[68px] min-h-[60vh] overflow-hidden pt-[68px] sm:-mt-[100px] sm:pt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="from-primary/90 via-primary/75 to-primary/45 absolute inset-0 bg-gradient-to-r" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[60vh] items-center px-6 py-24">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">{description}</p>
          <div className="mt-10">
            <Link
              href="/rfq"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              <Mail size={20} />
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
