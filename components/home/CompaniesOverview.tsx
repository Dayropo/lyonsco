'use client'

import type { JSX } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { companies } from '@/data/companies'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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
 * Companies overview section showcasing the four manufacturing partners
 */
export function CompaniesOverview(): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Manufacturing Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Four specialized companies working together to deliver comprehensive manufacturing
            solutions for your unique needs.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {companies.map(company => (
            <motion.div key={company.id} variants={cardVariants}>
              <Link
                href={`/companies/${company.slug}`}
                className="group block h-full"
              >
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground">{company.name}</h3>
                    <p className="mt-2 text-sm font-medium text-primary">{company.tagline}</p>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                      {company.description}
                    </p>
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Specialties
                      </p>
                      <ul className="mt-2 space-y-1">
                        {company.specialties.slice(0, 3).map((specialty, idx) => (
                          <li key={idx} className="text-sm text-card-foreground">
                            • {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link
            href="/companies"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-lg transition-all hover:bg-secondary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Companies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
