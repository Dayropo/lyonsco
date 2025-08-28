"use client"
import Image from "next/image"
import { Phone, Mail, ChevronRight } from "lucide-react"
import type { ReactElement } from "react"
import { motion } from "framer-motion"

/**
 * Lyons Company — Landing page
 * Hero, Capabilities, Markets, and RFQ contact.
 */
function HeroSection(): ReactElement {
  return (
    <section className="relative -mt-14 min-h-[calc(100dvh-56px)] overflow-hidden pt-14 sm:-mt-16 sm:min-h-[calc(100dvh-64px)] sm:pt-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80"
          alt="Precision electronics manufacturing environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"
          aria-hidden
        />
      </div>
      <div className="relative flex min-h-[inherit] items-center px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-sans text-4xl font-semibold tracking-[-0.01em] text-white sm:text-5xl md:text-6xl"
          >
            Precision manufacturing, from prototype to production.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-base text-white/85 sm:text-lg"
          >
            Plastic Injection Molding · Metal Stamping · Machining · Powdered Metal · Circuit Boards
            · Product Design
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:info@lyonsco.com"
              className="bg-primary text-primary-foreground focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold hover:opacity-95 focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail size={18} />
              Request a Quote
            </a>
            <a
              href="tel:18477427714"
              className="border-border hover:bg-accent/10 inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold text-white"
            >
              <Phone size={18} />
              (847) 742-7714
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({ title, desc }: { title: string; desc: string }): ReactElement {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="border-border bg-card text-card-foreground rounded-lg border p-5 transition-shadow hover:shadow-sm"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 text-sm">{desc}</p>
      <span className="text-primary mt-3 inline-flex items-center text-sm font-medium">
        Learn more
        <ChevronRight className="ml-1" size={16} aria-hidden />
      </span>
    </motion.div>
  )
}

function CapabilitiesSection(): ReactElement {
  const items = [
    {
      title: "Plastic Injection Molding",
      desc: "Tight-tolerance parts in engineering-grade resins.",
    },
    { title: "Metal Stamping", desc: "Progressive and compound tooling for small to medium runs." },
    { title: "Machining", desc: "CNC turning and milling with precise finishes and tolerances." },
    { title: "Powdered Metal", desc: "Complex geometries with cost-effective production." },
    {
      title: "Circuit Board Manufacturing",
      desc: "Reliable PCB fabrication and assembly for electronics.",
    },
    { title: "Product Design", desc: "DFM guidance, prototypes, and design iteration support." },
  ]
  return (
    <section id="capabilities" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">Capabilities</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map(i => (
            <CapabilityCard key={i.title} title={i.title} desc={i.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketsSection(): ReactElement {
  const items = ["Automotive", "Aviation", "Electronics", "Medical", "Military"]
  return (
    <section id="markets" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">Markets Served</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map(m => (
            <span
              key={m}
              className="border-border bg-secondary text-secondary-foreground rounded-full border px-4 py-2 text-sm"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection(): ReactElement {
  return (
    <section id="contact" className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-border bg-popover text-popover-foreground mx-auto max-w-4xl rounded-lg border p-6 sm:p-8"
      >
        <h2 className="text-2xl font-semibold tracking-[-0.01em]">
          Ready to discuss your project?
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Send your drawings and requirements for a fast, accurate quote. Typical response within 1
          business day.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:info@lyonsco.com"
            className="bg-primary text-primary-foreground focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold hover:opacity-95 focus-visible:ring-2 focus-visible:outline-none"
          >
            <Mail size={18} />
            info@lyonsco.com
          </a>
          <a
            href="tel:18477427714"
            className="border-border hover:bg-accent/10 inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold"
          >
            <Phone size={18} />
            (847) 742-7714
          </a>
        </div>
      </motion.div>
    </section>
  )
}

/**
 * Root page component for Lyons Company.
 * Renders the hero, capabilities, markets, and contact sections.
 */
export default function Home(): ReactElement {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <MarketsSection />
      <ContactSection />
    </main>
  )
}
