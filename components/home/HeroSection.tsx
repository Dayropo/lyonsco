"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Mail, Phone, ArrowRight } from "lucide-react"
import {
  SITE_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_RAW,
  SITE_DESCRIPTION,
} from "@/lib/constants"

/**
 * Hero section for the homepage
 * Features animated headline, tagline, and CTAs with background image
 */
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      })
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ctaRef.current?.children ?? [],
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4",
        )
    }, heroRef)
    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={heroRef}
      className="relative -mt-14 min-h-[calc(100dvh-56px)] overflow-hidden pt-14 sm:-mt-16 sm:min-h-[calc(100dvh-64px)] sm:pt-16"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=2400&q=80"
          alt="Precision manufacturing environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" />
      </div>
      <div className="relative z-10 flex min-h-[inherit] items-center px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h1
            ref={headlineRef}
            className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {SITE_TAGLINE}
          </h1>
          <p
            ref={taglineRef}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 sm:text-xl md:text-2xl"
          >
            {/* {SITE_DESCRIPTION} */}
            Access four specialized precision manufacturing companies through one sales team.
            Seamless solutions from prototyping to high-volume production.
          </p>
          <div ref={ctaRef} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/rfq"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail size={20} />
              Get a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              Explore Capabilities
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-sm text-slate-300 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_RAW}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone size={16} />
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
