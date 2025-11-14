import type { JSX } from "react"
import { notFound } from "next/navigation"
import {
  CompanyHero,
  CompanyAbout,
  CompanySpecialties,
  CompanyCertifications,
  CompanyEquipment,
  CompanyIndustries,
  CompanyCTA,
} from "@/components/companies"
import { companies } from "@/data/companies"

interface CompanyPageProps {
  params: {
    slug: string
  }
}

/**
 * Dynamic company page
 */
export default function CompanyPage({ params }: CompanyPageProps): JSX.Element {
  const { slug } = params
  const company = companies.find((c) => c.slug === slug)

  if (!company) {
    notFound()
  }

  return (
    <main>
      <CompanyHero
        name={company.name}
        tagline={company.tagline}
        description={company.description}
        heroImage={company.heroImage}
        logo={company.logo}
      />
      <CompanyAbout about={company.about} established={company.established} location={company.location} />
      <CompanySpecialties specialties={company.specialties} />
      <CompanyCertifications certifications={company.certifications} />
      <CompanyEquipment equipment={company.equipment} />
      <CompanyIndustries industries={company.industries} />
      <CompanyCTA companyName={company.name} contactInfo={company.contactInfo} />
    </main>
  )
}

export function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }))
}
