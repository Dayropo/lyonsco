"use client"

import type { JSX } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Droplet, Zap, Wrench, Layers, CircuitBoard, Lightbulb, ArrowRight, Cog, Stamp, Beaker } from "lucide-react"

interface Capability {
  id: string
  name: string
  description: string
  slug: string
  icon: JSX.Element
}

const capabilities: Capability[] = [
  {
    id: "injection-molding",
    name: "Injection Molding",
    description:
      "High-precision injection molding for complex geometries and tight tolerances. From prototypes to high-volume production runs.",
    slug: "injection-molding",
    icon: <Droplet className="h-12 w-12" />,
  },
  {
    id: "metal-stamping",
    name: "Metal Stamping",
    description:
      "Precision metal stamping and forming for automotive, aerospace, and industrial applications with consistent quality.",
    slug: "metal-stamping",
    icon: <Stamp className="h-12 w-12" />,
  },
  {
    id: "cnc-machining",
    name: "CNC Machining",
    description:
      "CNC machining services for precision components. Multi-axis capabilities for complex part geometries and tight tolerances.",
    slug: "cnc-machining",
    icon: <Cog className="h-12 w-12" />,
  },
  {
    id: "screw-machining",
    name: "Screw Machining",
    description:
      "Precision screw machining for automotive, aerospace, and industrial applications with consistent quality.",
    slug: "screw-machining",
    icon: <Wrench className="h-12 w-12" />,
  },
  {
    id: "urethane-silicone-casting",
    name: "Urethane & Silicone Casting",
    description:
      "Precision urethane silicone casting for automotive, aerospace, and industrial applications with consistent quality.",
    slug: "urethane-silicone-casting",
    icon: <Beaker className="h-12 w-12" />,
  },
  {
    id: "stereolithography",
    name: "Stereolithography (SLA)",
    description:
      "Precision urethane silicone casting for automotive, aerospace, and industrial applications with consistent quality.",
    slug: "stereolithography",
    icon: <Layers className="h-12 w-12" />,
  }
]

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
 * Capabilities section showcasing manufacturing processes
 */
export function CapabilitiesSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/main-areas.webp"
          alt="Industrial metal texture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="bg-primary/70 absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Main Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#ECF0F1]">
              Advanced manufacturing processes across multiple disciplines
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {capabilities.map(capability => (
              <motion.div key={capability.id} variants={cardVariants}>
                <div className="group relative h-full">
                  {/* Default State - White Card */}
                  <div className="flex h-full flex-col items-center rounded-lg border border-[#E5E7E9] bg-white p-6 text-center shadow-md transition-all duration-300 hover:border-[#F1C40F] hover:shadow-xl hover:shadow-yellow-500/20">
                    <div className="text-secondary flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {capability.icon}
                    </div>
                    <h3 className="text-primary mt-4 text-sm font-semibold">{capability.name}</h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="border-accent bg-primary/95 absolute inset-0 flex flex-col items-center justify-center rounded-lg border p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-white">{capability.description}</p>
                    <a
                      href={`/capabilities/${capability.slug}`}
                      className="text-secondary hover:text-secondary/90 mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
