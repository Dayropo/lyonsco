import type { ReactElement } from "react"
import { CompaniesHero, CompaniesGrid, CompaniesValueProp, CompaniesCTA } from "@/components/companies"

/**
 * Companies overview page
 * Showcases all manufacturing partner companies
 */
export default function CompaniesPage(): ReactElement {
  return (
    <main>
      <CompaniesHero />
      <CompaniesGrid />
      <CompaniesValueProp />
      <CompaniesCTA />
    </main>
  )
}
