"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowRight } from "lucide-react"
import {
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  SITE_DESCRIPTION,
} from "@/lib/constants"

/**
 * Hero section for the homepage
 * Features animated headline, tagline, and CTAs with background image
 */
export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }
  return (
    <section className="relative -mt-[68px] min-h-[calc(100dvh-56px)] overflow-hidden pt-14 sm:-mt-[100px] sm:min-h-[calc(100dvh-64px)] sm:pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cnc.webp"
          alt="Precision manufacturing environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-primary/90 via-primary/75 to-primary/45 absolute inset-0 bg-gradient-to-r" />
      </div>
      <div className="relative z-10 flex min-h-[inherit] items-center px-6 py-24 sm:py-32">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            {SITE_TAGLINE}
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl md:text-2xl"
            variants={itemVariants}
          >
            {SITE_DESCRIPTION}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Link
              href="/rfq"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail size={20} />
              Get a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Explore Capabilities
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
