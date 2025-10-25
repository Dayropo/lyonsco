"use client"

import { JSX, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Zap, ShieldCheck, DollarSign, Wrench, Flag, type LucideIcon } from "lucide-react"
import { VALUE_PROPOSITIONS } from "@/lib/constants"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  zap: Zap,
  "shield-check": ShieldCheck,
  "dollar-sign": DollarSign,
  wrench: Wrench,
  flag: Flag,
}

/**
 * Value propositions section highlighting key benefits
 */
export function ValuePropsSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".value-card")
      if (!cards || cards.length === 0) return
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sectionRef} className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Work With Us
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Experience the advantage of a unified manufacturing partner with specialized expertise
            across the entire product development lifecycle.
          </p>
        </div>
        <div ref={cardsRef} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPOSITIONS.map(prop => {
            const Icon = iconMap[prop.icon]
            return (
              <div
                key={prop.id}
                className="value-card group border-border bg-card rounded-xl border p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-card-foreground mt-6 text-xl font-semibold">{prop.title}</h3>
                <p className="text-muted-foreground mt-3">{prop.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
