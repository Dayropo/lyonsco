import type { ReactElement } from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { TimelineSection } from '@/components/home/TimelineSection'
import { ValuePropsSection } from '@/components/home/ValuePropsSection'
import { CompaniesOverview } from '@/components/home/CompaniesOverview'
import { CTASection } from '@/components/home/CTASection'

/**
 * Homepage for Manufacturing Solutions Partner
 * Showcases the complete manufacturing lifecycle and four partner companies
 */
export default function Home(): ReactElement {
  return (
    <main>
      <HeroSection />
      <TimelineSection />
      <ValuePropsSection />
      <CompaniesOverview />
      <CTASection />
    </main>
  )
}
