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
  readonly tags?: readonly string[]
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
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Our Partner Companies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Specialized manufacturing partners with proven expertise
          </p>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-start justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map(company => (
            <motion.div
              key={company.id}
              variants={cardVariants}
              className="flex flex-col items-center"
            >
              <Link
                href={company.href}
                className="group border-border bg-card block rounded-xl border p-8 shadow-sm transition-all hover:shadow-md"
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
                    <h3 className="text-card-foreground group-hover:text-secondary text-xl font-bold transition-colors">
                      {company.name}
                    </h3>
                  )}
                </div>
              </Link>
              {company.tags && company.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {company.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-4 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all hover:shadow-lg"
          >
            View All Companies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
