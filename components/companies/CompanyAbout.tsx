"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import type { CompanyAboutSection, Location } from "@/types"

interface CompanyAboutProps {
  about: string
  established: number
  location: Location
  aboutSections?: CompanyAboutSection[]
}

/**
 * About section for company page
 */
export function CompanyAbout({
  about,
  established,
  location,
  aboutSections,
}: CompanyAboutProps): JSX.Element {
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
                {`${location.city ? `${location.city}, ` : ""} ${location.state ? `${location.state}, ` : ""} ${location.country}`}
              </span>
            </div>
          </div>
          {aboutSections && aboutSections.length > 0 && (
            <div className="mt-10 space-y-10">
              {aboutSections.map(section => (
                <div key={section.id}>
                  <h3 className="text-card-foreground text-xl font-semibold">{section.title}</h3>
                  <div className="text-muted-foreground mt-3 space-y-3 text-lg leading-relaxed">
                    {section.paragraphs.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bulletGroups && section.bulletGroups.length > 0 && (
                    <div className="mt-4 space-y-4">
                      {section.bulletGroups.map(group => (
                        <div key={group.id}>
                          {group.title && (
                            <p className="text-card-foreground mb-2 text-lg">{group.title}</p>
                          )}
                          <ul className="text-muted-foreground list-disc space-y-1 pl-5 text-lg leading-relaxed">
                            {group.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
