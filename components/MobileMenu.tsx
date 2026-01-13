"use client"
import Link from "next/link"
import { Menu, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { ReactElement } from "react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

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
  {
    title: "Deep Draw Stamping",
    href: "/capabilities/deep-draw-stamping",
  },
]

const industries: readonly IndustryItem[] = [
  {
    title: "Automotive",
    href: "/industries/automotive",
  },
  {
    title: "Aerospace",
    href: "/industries/aerospace",
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

  const close = (): void => {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open menu"
            className="focus-visible:ring-ring inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus-visible:ring-2 focus-visible:outline-none"
          >
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="from-primary to-accent w-full border-0 bg-gradient-to-br sm:max-w-md"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <motion.div
            className="flex h-full flex-col gap-6 px-6 pt-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-6">
              {navItems.map(item => {
                if (item.label === "Capabilities") {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
                        className="flex items-center gap-2 text-xl font-semibold text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 cursor-pointer transition-transform ${capabilitiesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {capabilitiesOpen && (
                        <motion.div
                          className="mt-3 ml-4 flex flex-col gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {capabilities.map(capability => (
                            <Link
                              key={capability.href}
                              href={capability.href}
                              onClick={close}
                              className="text-base text-slate-200 hover:text-white"
                            >
                              {capability.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )
                }
                if (item.label === "Industries") {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIndustriesOpen(!industriesOpen)}
                        className="flex items-center gap-2 text-xl font-semibold text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 cursor-pointer transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {industriesOpen && (
                        <motion.div
                          className="mt-3 ml-4 flex flex-col gap-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {industries.map(industry => (
                            <Link
                              key={industry.href}
                              href={industry.href}
                              onClick={close}
                              className="text-base text-slate-200 hover:text-white"
                            >
                              {industry.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={close}
                    className="text-xl font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <Link
              href="/rfq"
              onClick={close}
              className="text-primary inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              <Mail size={18} />
              Request a Quote
            </Link>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
