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

/**
 * Dynamic company page
 */
export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = companies.find(c => c.slug === slug)

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
      <CompanyAbout
        about={company.about}
        established={company.established}
        location={company.location}
      />
      <CompanySpecialties specialties={company.specialties} />
      <CompanyCertifications certifications={company.certifications} />
      <CompanyEquipment equipment={company.equipment} />
      <CompanyIndustries industries={company.industries} />
      <CompanyCTA companyName={company.name} contactInfo={company.contactInfo} />
    </main>
  )
}

export function generateStaticParams() {
  return companies.map(company => ({
    slug: company.slug,
  }))
}
