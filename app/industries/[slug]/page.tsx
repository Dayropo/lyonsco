import { notFound } from "next/navigation"
import {
  IndustryHero,
  IndustryWhatWeOffer,
  IndustryProcess,
  IndustryApplications,
  IndustryComponents,
  IndustryCTA,
} from "@/components/industries"
import { industries } from "@/data/industries"
import { LIFECYCLE_STEPS } from "@/data/lifecycle"

const capabilities = [
  {
    id: "injection-molding",
    name: "Injection Molding",
    description:
      "Low to high-volume plastic part production, with tight tolerances and quality control",
  },
  {
    id: "metal-stamping",
    name: "Metal Stamping",
    description: "Precision stamping for high-strength, repeatable components",
  },
  {
    id: "deep-draw-stamping",
    name: "Deep Draw Stamping",
    description: "Complex formed components with superior structural integrity",
  },
  {
    id: "screw-machining",
    name: "Screw Machining",
    description: "High-volume turned parts and Swiss-style machining for tight tolerances",
  },
  {
    id: "precision-machining",
    name: "Precision CNC Machining",
    description: "Accurate milling and turning for critical industrial applications",
  },

  {
    id: "prototype-support",
    name: "Prototype & Pre-production Support",
    description: "Rapid prototyping, short-run production, and design validation",
  },
  {
    id: "tooling-die",
    name: "Tooling & Die Development",
    description: "Custom tooling and die development for production runs",
  },
  {
    id: "secondary-operations",
    name: "Secondary Operations",
    description: "Deburring, plating, coating, heat treating, and finishing services",
  },
  {
    id: "value-added-support",
    name: "Value Added Support",
    description: "Sub-assemblies, labeling, kitting, and custom packaging solutions",
  },
  {
    id: "quality-control",
    name: "Quality Control & Inspection",
    description: "FAI, in-process checks, and final inspection for complete compliance",
  },
  {
    id: "scalable-production",
    name: "Scalable Production",
    description: "From prototypes to full-volume manufacturing, supporting growth at every stage",
  },
  {
    id: "design-manufacturing",
    name: "Design for Manufacturing (DFM)",
    description:
      "We help design parts and products for easier, more efficient manufacturing—resulting in better quality at lower cost.",
  },
]

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

      <IndustryWhatWeOffer whatWeOffer={capabilities} />

      {/* <IndustryProcess processes={LIFECYCLE_STEPS} /> */}
      {industry.components && industry.components.length > 0 && (
        <IndustryComponents components={industry.components} />
      )}
      {/* {industry.applications.length > 0 && (
        <IndustryApplications applications={industry.applications} />
      )} */}
      <IndustryCTA industryName={industry.name} />
    </main>
  )
}

export function generateStaticParams() {
  return industries.map(industry => ({
    slug: industry.slug,
  }))
}
