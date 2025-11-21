"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

/**
 * Contact form section with CTA to RFQ
 */
export function ContactForm(): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Request a Consultation
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Tell us about your project, and our engineering team will reach out to discuss the best
            approach for your design, materials and production goals.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/rfq"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
          >
            <Mail size={20} />
            Submit a Request for Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="border-border bg-card mt-16 rounded-lg border p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-card-foreground mb-4 text-xl font-semibold">
            Prefer to reach out directly?
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You can also email us directly at{" "}
            <a
              href="mailto:info@lyonsco.com"
              className="text-secondary hover:text-secondary/80 font-medium"
            >
              info@lyonsco.com
            </a>{" "}
            or call us during business hours. We typically respond to inquiries within one business
            day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
