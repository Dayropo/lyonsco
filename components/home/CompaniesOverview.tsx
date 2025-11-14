"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { companies } from "@/data/companies"

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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Manufacturing Partners
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Lyons Company represents specialized companies working together to deliver comprehensive
            manufacturing solutions for your unique needs.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map(company => (
            <motion.div key={company.id} variants={cardVariants}>
              <Link href={`/companies/${company.slug}`} className="group block h-full">
                <div className="border-border bg-card flex h-full flex-col rounded-xl border p-6 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex-1">
                    <h3 className="text-card-foreground text-2xl font-bold">{company.name}</h3>
                    <p className="text-primary mt-2 text-sm font-medium">{company.tagline}</p>
                    <p className="text-muted-foreground mt-4 line-clamp-3 text-sm">
                      {company.description}
                    </p>
                    <div className="mt-6">
                      <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        Key Specialties
                      </p>
                      <ul className="mt-2 space-y-1">
                        {company.specialties.slice(0, 3).map((specialty, idx) => (
                          <li key={idx} className="text-card-foreground text-sm">
                            • {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-secondary group-hover:text-secondary/80 mt-6 flex items-center text-sm font-semibold transition-colors">
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
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
          >
            View All Companies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
