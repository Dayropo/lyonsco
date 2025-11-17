import { notFound } from "next/navigation"
import {
  CapabilityHero,
  CapabilityOverview,
  PartnerCompanies,
  TechnicalHighlights,
  RelatedCapabilities,
  CapabilityCTA,
} from "@/components/capabilities"
import { capabilities } from "@/data/capabilities"

/**
 * Dynamic capability page
 */
export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const capability = capabilities[slug]

  if (!capability) {
    notFound()
  }

  return (
    <main>
      <CapabilityHero
        title={capability.title}
        description={capability.description}
        image={capability.heroImage}
      />
      <CapabilityOverview content={capability.overview} benefits={capability.benefits} />
      <PartnerCompanies companies={capability.partnerCompanies} />
      <TechnicalHighlights specs={capability.technicalSpecs} />
      <RelatedCapabilities capabilities={capability.relatedCapabilities} />
      <CapabilityCTA capabilityName={capability.title} />
    </main>
  )
}

export function generateStaticParams() {
  return [
    { slug: "injection-molding" },
    { slug: "metal-stamping" },
    { slug: "cnc-machining" },
    { slug: "screw-machining" },
    { slug: "urethane-silicone-casting" },
    { slug: "stereolithography" },
    // { slug: "prototype-machining" },
  ]
}
