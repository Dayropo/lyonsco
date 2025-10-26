"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import type { ReactElement } from "react"
import { MobileMenu } from "@/components/MobileMenu"
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  NAVIGATION_ITEMS,
  SITE_NAME,
} from "@/lib/constants"
import { Button } from "./ui/button"

interface NavItem {
  readonly href: string
  readonly label: string
}

/**
 * Site-wide header with brand, navigation, and primary CTA.
 * Background transitions from transparent to solid on scroll.
 */
export function Header(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false)
  const navItems: readonly NavItem[] = NAVIGATION_ITEMS

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 border-white/10 shadow-lg backdrop-blur-md"
          : "bg-primary/20 border-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-sans text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            {SITE_NAME}
          </Link>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="secondary">
              <Link href="/rfq">
                <Mail size={16} />
                Get a Quote
              </Link>
            </Button>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-sm text-white transition-colors"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_RAW}`}
              className="flex items-center gap-2 text-sm text-white transition-colors"
            >
              <Phone size={16} />
              {CONTACT_PHONE}
            </a>
          </div>
          <nav className="hidden items-center lg:flex">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="border-r px-2 text-sm font-medium text-slate-200 uppercase transition-colors last:border-r-0 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <MobileMenu navItems={navItems} />
      </div>
    </header>
  )
}
