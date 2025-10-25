'use client'

import { JSX, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { companies } from '@/data/companies'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Companies overview section showcasing the four manufacturing partners
 */
export function CompaniesOverview(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.company-card')
    if (cards.length === 0) return
    gsap.from(cards, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    })
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <section ref={sectionRef} className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Manufacturing Partners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Four specialized companies working together to deliver comprehensive manufacturing
            solutions for your unique needs.
          </p>
        </div>
        <div ref={cardsRef} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companies.map(company => (
            <Link
              key={company.id}
              href={`/companies/${company.slug}`}
              className="company-card group"
            >
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground">{company.name}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{company.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-3">
                    {company.description}
                  </p>
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Specialties
                    </p>
                    <ul className="mt-2 space-y-1">
                      {company.specialties.slice(0, 3).map((specialty, idx) => (
                        <li key={idx} className="text-sm text-card-foreground">
                          • {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/companies"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Companies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
