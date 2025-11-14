"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, ArrowRight } from "lucide-react"
import type { ContactInfo } from "@/types"

interface CompanyCTAProps {
  companyName: string
  contactInfo: ContactInfo
}

/**
 * CTA section for individual company page
 */
export function CompanyCTA({ companyName, contactInfo }: CompanyCTAProps): JSX.Element {
  return (
    <section className="bg-primary px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work With {companyName}
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to discuss your project? Get in touch with our team today
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
            className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
          >
            <Mail size={20} />
            Request a Quote
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <Phone size={20} />
            {contactInfo.phone}
          </a>
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-300 text-sm">
            Email:{" "}
            <a href={`mailto:${contactInfo.email}`} className="text-secondary hover:underline">
              {contactInfo.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
