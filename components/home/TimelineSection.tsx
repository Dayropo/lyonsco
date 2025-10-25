"use client"

import { JSX, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lightbulb, Wrench, Cog, Factory, Zap } from "lucide-react"
import { PRODUCTION_STAGES } from "@/lib/constants"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineStage {
  id: string
  name: string
  description: string
  icon: JSX.Element
  company: string
}

const stages: TimelineStage[] = [
  {
    id: "concept",
    name: "Concept",
    description: "Initial ideation and feasibility studies",
    icon: <Lightbulb className="h-8 w-8" />,
    company: "Pardev",
  },
  {
    id: "prototype",
    name: "Prototype",
    description: "Functional prototypes and design validation",
    icon: <Wrench className="h-8 w-8" />,
    company: "Pardev",
  },
  {
    id: "tooling",
    name: "Tooling",
    description: "Production tooling and process development",
    icon: <Cog className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "production",
    name: "Production",
    description: "Full-scale manufacturing and quality control",
    icon: <Factory className="h-8 w-8" />,
    company: "PTI / CGR Tech",
  },
  {
    id: "precision",
    name: "Precision Components",
    description: "Ultra-precise small parts and Swiss machining",
    icon: <Zap className="h-8 w-8" />,
    company: "Minic Precision",
  },
]

/**
 * Timeline section showing the product development lifecycle
 * Animated with GSAP ScrollTrigger
 */
export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll(".timeline-item")
      if (!items || items.length === 0) return
      gsap.from(items, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      })
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sectionRef} className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Complete Product Lifecycle
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            From initial concept to high-volume production, we guide your project through every
            stage with seamless transitions between our specialized manufacturing partners.
          </p>
        </div>
        <div ref={timelineRef} className="relative mt-16">
          {/* <div
            ref={lineRef}
            className="absolute left-0 right-0 top-1/2 hidden h-1 -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-primary md:block"
            style={{ transformOrigin: 'left' }}
          /> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
            {stages.map((stage, index) => (
              <div key={stage.id} className="timeline-item relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary text-primary-foreground relative z-10 flex h-20 w-20 items-center justify-center rounded-full shadow-lg">
                    {stage.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-foreground text-lg font-semibold">{stage.name}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{stage.description}</p>
                    <p className="text-primary mt-3 text-xs font-medium">{stage.company}</p>
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="bg-border mx-auto mt-4 h-8 w-0.5 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
