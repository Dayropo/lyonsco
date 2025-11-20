import { notFound } from "next/navigation"
import {
  IndustryHero,
  IndustryWhatWeOffer,
  IndustryProcess,
  IndustryApplications,
  IndustryCTA,
} from "@/components/industries"
import { industries } from "@/data/industries"

/**
 * Dynamic industry page
 */
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industries.find(i => i.slug === slug)

  if (!industry) {
    notFound()
  }

  return (
    <main>
      <IndustryHero
        name={industry.name}
        description={industry.description}
        heroImage={industry.heroImage}
      />
      {industry.whatWeOffer.length > 0 && (
        <IndustryWhatWeOffer whatWeOffer={industry.whatWeOffer} />
      )}
      {industry.processes.length > 0 && <IndustryProcess processes={industry.processes} />}
      {industry.applications.length > 0 && (
        <IndustryApplications applications={industry.applications} />
      )}
      <IndustryCTA industryName={industry.name} />
    </main>
  )
}

export function generateStaticParams() {
  return industries.map(industry => ({
    slug: industry.slug,
  }))
}
