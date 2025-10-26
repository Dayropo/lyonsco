"use client"

import type { JSX } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface PartnerCompany {
  readonly id: string
  readonly name: string
  readonly logo?: string
  readonly href: string
}

interface PartnerCompaniesProps {
  readonly companies: readonly PartnerCompany[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Partner Companies section showing which companies handle this capability
 */
export function PartnerCompanies({ companies }: PartnerCompaniesProps): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Partner Companies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Specialized manufacturing partners with proven expertise
          </p>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map(company => (
            <motion.div key={company.id} variants={cardVariants}>
              <Link
                href={company.href}
                className="group block rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex flex-col items-center gap-4">
                  {company.logo ? (
                    <div className="relative h-16 w-48">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  ) : (
                    <h3 className="text-xl font-bold text-card-foreground transition-colors group-hover:text-secondary">
                      {company.name}
                    </h3>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Want to learn more about our manufacturing partners?
          </p>
          <Link
            href="/companies"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            View All Companies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
