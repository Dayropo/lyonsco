"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import type { Location } from "@/types"

interface CompanyAboutProps {
  about: string
  established: number
  location: Location
}

/**
 * About section for company page
 */
export function CompanyAbout({ about, established, location }: CompanyAboutProps): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{about}</p>
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-secondary h-5 w-5" />
              <span className="text-card-foreground text-sm font-medium">
                Established {established}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-secondary h-5 w-5" />
              <span className="text-card-foreground text-sm font-medium">
                {location.city}, {location.state}, {location.country}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
