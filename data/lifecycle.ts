import type { Process } from "@/types/industry"

export interface LifecycleStep extends Process {
  readonly bullets?: readonly string[]
}

export const LIFECYCLE_STEPS: readonly LifecycleStep[] = [
  {
    id: "discovery-engineering-review",
    name: "Discovery & Engineering Review",
    description:
      "Every project begins with a detailed technical review. Our team evaluates your prints, CAD files, materials, tolerances, and production requirements to ensure the most efficient and cost-effective manufacturing solution.",
    bullets: [
      "Design for Manufacturability (DFM)",
      "Material and process recommendations",
      "Tolerance and performance evaluation",
      "Application and lifecycle considerations",
    ],
  },
  {
    id: "prototyping-pre-production-support",
    name: "Prototyping & Pre-Production Support",
    description:
      "Lyons Co supports early-stage development with rapid prototyping and short-run production. This allows you to validate form, fit, and function before committing to full-scale production.",
    bullets: [
      "CNC-machined prototypes",
      "Low-volume molding and stamping",
      "Functional testing support",
      "Design refinements before tooling",
    ],
  },
  {
    id: "quoting-production-planning",
    name: "Quoting & Production Planning",
    description:
      "Once the design is finalized, we provide a clear, detailed quote with accurate timelines. Our team coordinates materials, tooling, and scheduling to ensure a smooth and predictable launch.",
    bullets: [
      "Tooling and setup costs",
      "Production pricing at scale",
      "Lead times and delivery schedules",
      "Quality and compliance requirements",
    ],
  },
  {
    id: "tooling-programming-setup",
    name: "Tooling, Programming & Setup",
    description:
      "Precision tooling and programming are critical to consistent results. Lyons Co designs, builds, or sources the tooling required for each manufacturing process.",
    bullets: [
      "Injection Molding: High-precision mold design and validation",
      "Stamping & Deep Draw Stamping: Progressive and deep draw dies",
      "Screw Machining: Multi-spindle and Swiss-style setups",
      "CNC Machining: Fixture design and program optimization",
    ],
  },
  {
    id: "manufacturing-production",
    name: "Manufacturing & Production",
    description:
      "With advanced equipment and skilled technicians, Lyons Co manufactures high-quality parts across multiple processes under one roof.",
    bullets: [
      "Injection molding (low to high volume)",
      "Progressive and deep draw metal stamping",
      "High-volume screw machining",
      "Precision CNC milling and turning",
      "Secondary operations as required",
    ],
  },
  {
    id: "quality-control-inspection",
    name: "Quality Control & Inspection",
    description:
      "Quality is built into every stage of production. Our structured inspection process ensures every part meets customer and industry standards.",
    bullets: [
      "In-process inspections",
      "First Article Inspection (FAI)",
      "Final dimensional verification",
      "Documentation and traceability when required",
    ],
  },
  {
    id: "finishing-assembly-packaging",
    name: "Finishing, Assembly & Packaging",
    description: "To simplify your supply chain, Lyons Co offers complete secondary services.",
    bullets: [
      "Deburring, polishing, and surface finishing",
      "Plating, coating, and heat treating",
      "Sub-assembly, kitting, and labeling",
      "Custom packaging solutions",
    ],
  },
  {
    id: "delivery-logistics-supply-chain-support",
    name: "Delivery, Logistics & Supply Chain Support",
    description:
      "We manage logistics to ensure your parts arrive on time and production-ready. Local, national, and international shipping options are supported with consistent, reliable scheduling.",
    bullets: [
      "Local, national, and international shipping options",
      "Consistent, reliable scheduling",
      "Production-ready parts",
    ],
  },
  {
    id: "ongoing-production-support-scalability",
    name: "Ongoing Production Support & Scalability",
    description:
      "Our relationship does not end at delivery. Lyons Co supports long-term production success.",
    bullets: [
      "Production scaling",
      "Repeat order management",
      "Tool maintenance and refurbishment",
      "Continuous improvement and cost reduction",
    ],
  },
]
