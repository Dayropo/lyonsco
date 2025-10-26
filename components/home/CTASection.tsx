'use client'

import type { JSX } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_RAW } from '@/lib/constants'

/**
 * Call-to-action section for RFQ and contact
 */
export function CTASection(): JSX.Element {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="rounded-2xl border border-border bg-gradient-to-br from-primary to-accent p-8 shadow-xl sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Get a quote from our team of manufacturing experts. We typically respond within 1
              business day with recommendations tailored to your specific needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/rfq"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Mail size={20} />
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={`tel:${CONTACT_PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone size={20} />
                {CONTACT_PHONE}
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              Or email us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold underline hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
