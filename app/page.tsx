import type { ReactElement } from "react"
import {
  HeroSection,
  TimelineSection,
  ValuePropsSection,
  CompaniesOverview,
  CTASection,
  IndustriesServedSection,
  CapabilitiesSection,
} from "@/components/home"

/**
 * Homepage for Manufacturing Solutions Partner
 * Showcases the complete manufacturing lifecycle and four partner companies
 */
export default function Home(): ReactElement {
  return (
    <main>
      <HeroSection />
      <TimelineSection />
      <IndustriesServedSection />
      <CapabilitiesSection />
      {/* <ValuePropsSection /> */}
      <CompaniesOverview />
      <CTASection />
    </main>
  )
}
