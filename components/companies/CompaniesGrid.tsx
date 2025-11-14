"use client"

import type { JSX } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { companies } from "@/data/companies"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Grid of company cards
 */
export function CompaniesGrid(): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company) => (
            <motion.div key={company.id} variants={cardVariants}>
              <Link href={`/companies/${company.slug}`} className="group block h-full">
                <div className="border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-lg transition-all hover:shadow-2xl">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={company.heroImage}
                      alt={company.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="from-primary/80 to-primary/40 absolute inset-0 bg-gradient-to-t" />
                    <div className="absolute bottom-6 left-6">
                      <div className="mb-3 h-16 w-16 overflow-hidden rounded-lg bg-white p-2">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-secondary mb-4 text-sm font-semibold">{company.tagline}</p>
                    <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                      {company.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
                        Key Specialties
                      </p>
                      <ul className="space-y-1">
                        {company.specialties.slice(0, 3).map((specialty, idx) => (
                          <li key={idx} className="text-card-foreground text-sm">
                            • {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-secondary group-hover:text-secondary/80 flex items-center text-sm font-semibold transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
