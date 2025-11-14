"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import type { Equipment } from "@/types"

interface CompanyEquipmentProps {
  equipment: Equipment[]
}

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
 * Equipment section for company page
 */
export function CompanyEquipment({ equipment }: CompanyEquipmentProps): JSX.Element {
  return (
    <section className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Equipment & Capabilities
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {equipment.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="border-border bg-card rounded-lg border p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-card-foreground text-xl font-semibold">{item.name}</h3>
                  <p className="text-secondary mt-1 text-sm font-medium">{item.type}</p>
                  <div className="mt-4">
                    <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wider">
                      Capabilities
                    </p>
                    <ul className="space-y-1">
                      {item.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-card-foreground text-sm">
                          • {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-border rounded-lg border bg-slate-50 p-4 md:w-64">
                  <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
                    Specifications
                  </p>
                  <dl className="space-y-2">
                    {Object.entries(item.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <dt className="text-muted-foreground text-xs">{key}</dt>
                        <dd className="text-card-foreground text-sm font-medium">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
