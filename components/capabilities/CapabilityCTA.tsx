"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

interface CapabilityCTAProps {
  readonly capabilityName: string
}

/**
 * Call-to-action section for capability pages
 */
export function CapabilityCTA({ capabilityName }: CapabilityCTAProps): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent px-6 py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started with {capabilityName}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Our team of manufacturing experts is ready to help bring your project to life. Get a
            quote today and discover how we can support your manufacturing needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              <Mail size={20} />
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
