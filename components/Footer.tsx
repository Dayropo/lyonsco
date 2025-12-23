"use client"

import type { JSX } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from "lucide-react"
import {
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  COMPANY_ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/constants"

interface FooterLink {
  readonly label: string
  readonly href: string
}

/**
 * Site-wide footer with navigation, contact info, and social links
 * Color scheme: Charcoal background, light gray text, electric blue accents
 */
export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  const companyLinks: readonly FooterLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const solutionsLinks: readonly FooterLink[] = [
    { label: "Injection Molding", href: "/capabilities/injection-molding" },
    { label: "Metal Stamping", href: "/capabilities/metal-stamping" },
    { label: "CNC Machining", href: "/capabilities/cnc-machining" },
    { label: "Screw Machining", href: "/capabilities/screw-machining" },
    { label: "Urethane/Silicone Casting", href: "/capabilities/urethane-silicone-casting" },
    { label: "Stereolithography", href: "/capabilities/stereolithography" },
  ]

  return (
    <footer className="bg-primary text-[#ECF0F1]">
      {/* Main Footer Content */}
      <div className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          {/* 4-Column Layout */}
          <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Company/Brand */}
            <div>
              <h3 className="text-xl font-bold text-white">{SITE_NAME}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#ECF0F1]">
                Your trusted partner for manufacturing solutions from prototype to production.
              </p>
              {/* Social Media Icons */}
              <div className="mt-6 flex gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary inline-flex h-7 w-7 items-center justify-center text-[#95A5A6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary inline-flex h-7 w-7 items-center justify-center text-[#95A5A6] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com/lyonsco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary inline-flex h-7 w-7 items-center justify-center text-[#95A5A6] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Column 2: Company Links */}
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">Company</h4>
              <ul className="mt-6 space-y-3">
                {companyLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-secondary text-sm text-[#ECF0F1] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Solutions */}
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                What We Offer
              </h4>
              <ul className="mt-6 space-y-3">
                {solutionsLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-secondary text-sm text-[#ECF0F1] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                Get In Touch
              </h4>
              <div className="mt-6 space-y-4">
                {/* Address */}
                {/* <div className="flex gap-3">
                  <MapPin className="text-secondary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#ECF0F1]">
                      {COMPANY_ADDRESS.street}
                      <br />
                      {COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.state} {COMPANY_ADDRESS.zip}
                    </p>
                  </div>
                </div> */}

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                  <a
                    href={`tel:${CONTACT_PHONE_RAW}`}
                    className="hover:text-secondary text-sm text-[#ECF0F1] transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="text-secondary mt-0.5 h-5 w-5 shrink-0" />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-secondary text-sm text-[#ECF0F1] transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                {/* CTA Button */}
                <Link
                  href="/rfq"
                  className="bg-secondary hover:bg-secondary/90 mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-primary/40 h-px" />
        </div>
      </div>

      {/* Bottom Bar - Copyright Section */}
      <div className="border-t border-[#3E5468] bg-[#1A252F] px-6 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#95A5A6]">
              &copy; {currentYear} {SITE_NAME} All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-secondary text-sm text-[#95A5A6] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-secondary text-sm text-[#95A5A6] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-secondary text-sm text-[#95A5A6] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
