"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

/**
 * CTA section for About page
 */
export function AboutCTA(): JSX.Element {
  return (
    <section className="from-primary to-accent relative overflow-hidden bg-linear-to-br px-6 py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you&apos;re developing a new component or scaling up production, we&apos;re here
          to help
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/rfq"
            className="text-primary inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            <Mail size={20} />
            Request a Quote
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
