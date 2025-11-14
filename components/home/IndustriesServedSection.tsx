"use client"

import type { JSX } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Car, Plane, Zap, Heart, Shield, ArrowRight } from "lucide-react"

interface Industry {
  id: string
  name: string
  description: string
  icon: JSX.Element
  slug: string
}

const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    description: "Precision components for vehicles and powertrains",
    icon: <Car className="h-8 w-8" />,
    slug: "automotive",
  },
  {
    id: "aviation",
    name: "Aviation",
    description: "High-reliability parts for aerospace applications",
    icon: <Plane className="h-8 w-8" />,
    slug: "aviation",
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Components for consumer and industrial devices",
    icon: <Zap className="h-8 w-8" />,
    slug: "electronics",
  },
  {
    id: "medical",
    name: "Medical",
    description: "Components for medical devices",
    icon: <Heart className="h-8 w-8" />,
    slug: "medical",
  },
  {
    id: "military",
    name: "Military",
    description: "Ruggedized parts for defense applications",
    icon: <Shield className="h-8 w-8" />,
    slug: "military",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

/**
 * Industries Served section showcasing key markets
 */
export function IndustriesServedSection(): JSX.Element {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Key Industries Served
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            We support precision manufacturing needs across diverse industries, from automotive to
            aerospace and medical devices.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map(industry => (
            <motion.div key={industry.id} variants={cardVariants}>
              <Link href={`/industries/${industry.slug}`} className="group block h-full">
                <div className="border-border bg-card flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                    {industry.icon}
                  </div>
                  <h3 className="text-card-foreground mt-4 text-lg font-semibold">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm">
                    {industry.description}
                  </p>
                  <div className="text-secondary group-hover:text-secondary/80 mt-4 flex items-center text-sm font-semibold transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
