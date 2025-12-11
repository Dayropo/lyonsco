"use client"

import type { JSX } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, User } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_ADDRESS, CONTACT_NAME } from "@/lib/constants"

const contactItems = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: CONTACT_PHONE,
    contact: CONTACT_NAME,
    href: `tel:${CONTACT_PHONE}`,
  },
  {
    id: "address",
    icon: MapPin,
    label: "Location",
    //value: `${COMPANY_ADDRESS.street}, ${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.state} ${COMPANY_ADDRESS.zip}`,
    value: `${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.state}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(`${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.state}`)}`,
  },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

/**
 * Contact information section
 */
export function ContactInfo(): JSX.Element {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Information
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Reach out to us through any of these channels
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-3">
            {contactItems.map(item => {
              const Icon = item.icon
              const content = (
                <>
                  <div className="bg-secondary/10 text-secondary mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-card-foreground mb-2 text-lg font-semibold">{item.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                  {item.contact && (
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {item.contact}
                    </p>
                  )}
                </>
              )

              return (
                <motion.div key={item.id} variants={itemVariants}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="border-border bg-card hover:border-secondary/50 flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="border-border bg-card flex h-full flex-col rounded-lg border p-6 shadow-sm">
                      {content}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
