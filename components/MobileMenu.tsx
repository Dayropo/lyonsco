"use client"
import Link from "next/link"
import { Menu, X, Mail, ChevronDown } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import type { ReactElement } from "react"

interface NavItem {
  readonly href: string
  readonly label: string
}

interface MobileMenuProps {
  readonly navItems: readonly NavItem[]
}

interface CapabilityItem {
  readonly title: string
  readonly href: string
}

interface IndustryItem {
  readonly title: string
  readonly href: string
}

const capabilities: readonly CapabilityItem[] = [
  {
    title: "Injection Molding",
    href: "/capabilities/injection-molding",
  },
  {
    title: "Metal Stamping",
    href: "/capabilities/metal-stamping",
  },
  {
    title: "CNC Machining",
    href: "/capabilities/cnc-machining",
  },
  {
    title: "Screw Machining",
    href: "/capabilities/screw-machining",
  },
  {
    title: "Urethane & Silicone Casting",
    href: "/capabilities/urethane-silicone-casting",
  },
  {
    title: "Stereolithography (SLA)",
    href: "/capabilities/stereolithography",
  },
]

const industries: readonly IndustryItem[] = [
  {
    title: "Automotive",
    href: "/industries/automotive",
  },
  {
    title: "Aviation",
    href: "/industries/aviation",
  },
  {
    title: "Electronics",
    href: "/industries/electronics",
  },
  {
    title: "Medical",
    href: "/industries/medical",
  },
  {
    title: "Military",
    href: "/industries/military",
  },
]

/**
 * Mobile-only hamburger menu with full-screen overlay.
 */
export function MobileMenu({ navItems }: MobileMenuProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false)
  const [capabilitiesOpen, setCapabilitiesOpen] = useState<boolean>(false)
  const [industriesOpen, setIndustriesOpen] = useState<boolean>(false)
  const lastCloseRef = useRef<number>(0)
  const close = useCallback((): void => {
    lastCloseRef.current = Date.now()
    setTimeout(() => setOpen(false), 0)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={(e): void => {
          e.stopPropagation()
          const now = Date.now()
          if (!open && now - lastCloseRef.current < 300) return
          setOpen(v => !v)
        }}
        className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus-visible:ring-2 focus-visible:outline-none"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={(e): void => {
            if (e.target === e.currentTarget) close()
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={(e): void => {
              e.preventDefault()
              e.stopPropagation()
              close()
            }}
            className="focus-visible:ring-ring absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white/90 focus-visible:ring-2 focus-visible:outline-none"
          >
            <X size={22} />
          </button>
          <motion.div
            className="relative z-10 flex flex-col items-start justify-start gap-6 px-6 pt-24"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
            onClick={(e): void => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map(item => {
                if (item.label === "Capabilities") {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
                        className="flex items-center gap-2 text-2xl font-semibold text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${capabilitiesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {capabilitiesOpen && (
                        <div className="mt-3 ml-4 flex flex-col gap-2">
                          {capabilities.map(capability => (
                            <Link
                              key={capability.href}
                              href={capability.href}
                              onClick={close}
                              className="text-lg text-slate-300 hover:text-white"
                            >
                              {capability.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                if (item.label === "Industries") {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIndustriesOpen(!industriesOpen)}
                        className="flex items-center gap-2 text-2xl font-semibold text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {industriesOpen && (
                        <div className="mt-3 ml-4 flex flex-col gap-2">
                          {industries.map(industry => (
                            <Link
                              key={industry.href}
                              href={industry.href}
                              onClick={close}
                              className="text-lg text-slate-300 hover:text-white"
                            >
                              {industry.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="text-2xl font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <a
              href="mailto:info@lyonsco.com"
              onClick={close}
              className="bg-primary text-primary-foreground focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-semibold hover:opacity-95 focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail size={18} />
              Quote
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  )
}
