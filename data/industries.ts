/**
 * Industry data and solutions
 */

import type { Industry } from "@/types"

export const industries: Industry[] = [
  {
    id: "automotive",
    slug: "automotive",
    name: "Automotive",
    description:
      "We produce high-precision plastic components for automotive manufacturers using advanced injection molding technology. Our process delivers consistent accuracy, durability and efficiency across small and large production runs.",
    // heroImage:
    //   "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=80",
    heroImage: "/images/industries/automotive.jpg",
    whatWeOffer: [
      {
        id: "automotive-custom-design",
        name: "Custom Part Design",
        description: "Functional, production-ready component designs.",
      },
      {
        id: "automotive-prototyping",
        name: "Prototyping",
        description: "Fast, cost-effective samples for early validation.",
      },
      {
        id: "automotive-multi-component",
        name: "Multi-Component & Overmolding",
        description: "Combine materials or colours to create stronger, more versatile parts.",
      },
      {
        id: "automotive-high-volume",
        name: "High-Volume Production",
        description: "Reliable, repeatable manufacturing with tight tolerances.",
      },
    ],
    processes: [
      {
        id: "automotive-consultation",
        name: "Consultation & Design",
        description: "Finalize part geometry and material choices.",
      },
      {
        id: "automotive-tooling",
        name: "Tooling",
        description: "Build precision molds for accurate, repeatable output.",
      },
      {
        id: "automotive-material",
        name: "Material Selection",
        description: "Automotive-grade plastics that meet industry requirements.",
      },
      {
        id: "automotive-molding",
        name: "Molding",
        description: "Advanced equipment ensures stable, high-quality production.",
      },
      {
        id: "automotive-finishing",
        name: "Finishing",
        description: "Trimming, assembly and surface treatments.",
      },
      {
        id: "automotive-quality",
        name: "Quality Checks",
        description: "Full inspections to meet ISO 9001 and IATF 16949 standards.",
      },
      {
        id: "automotive-delivery",
        name: "Delivery",
        description: "Secure, on-time logistics.",
      },
    ],
    applications: [
      {
        id: "automotive-interior",
        name: "Interior panels and consoles",
        description: "Interior panels and consoles",
      },
      {
        id: "automotive-exterior",
        name: "Exterior trims, grilles and bumpers",
        description: "Exterior trims, grilles and bumpers",
      },
      {
        id: "automotive-underhood",
        name: "Under-the-hood housings and brackets",
        description: "Under-the-hood housings and brackets",
      },
      {
        id: "automotive-electrical",
        name: "Electrical connectors and sensor casings",
        description: "Electrical connectors and sensor casings",
      },
    ],
  },
  {
    id: "aviation",
    slug: "aviation",
    name: "Aviation",
    description:
      "Injection molding has become a key manufacturing method in aviation, offering a reliable way to create lightweight, complex and durable components in high volumes. Modern high-performance plastics and composites make it possible to replace heavier metal parts while still meeting strict safety, heat-resistance and performance standards.",
    // heroImage:
    //   "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2400&q=80",
    heroImage: "/images/industries/aviation.jpg",
    whatWeOffer: [],
    processes: [],
    applications: [
      {
        id: "aviation-interior",
        name: "Interior Components",
        description:
          "Lightweight parts for overhead panels, armrests, seat elements, cockpit knobs and instrument surrounds. Designed for precision, durability and flame resistance.",
      },
      {
        id: "aviation-brackets",
        name: "Brackets and Mounts",
        description:
          "Strong, low-weight supports for electrical, hydraulic and mechanical systems. Built to handle vibration, stress and high temperatures.",
      },
      {
        id: "aviation-cable",
        name: "Cable Clamps and Fasteners",
        description:
          "Accurate, robust clips, connectors and clamps used for routing wires and tubes. Helps reduce overall aircraft weight while maintaining reliability.",
      },
      {
        id: "aviation-electronic",
        name: "Electronic Housings",
        description:
          "Protective casings for sensors, control units and navigation electronics. Engineered for insulation, environmental protection and electromagnetic resistance.",
      },
      {
        id: "aviation-composite",
        name: "Composite Structural Pieces",
        description:
          "Lightweight reinforcements such as ribs, spars and panel components that support better fuel economy and overall aircraft efficiency.",
      },
      {
        id: "aviation-ducts",
        name: "Ducts and Vents",
        description:
          "Intricate air-management parts for HVAC systems, ensuring proper airflow and cabin temperature control.",
      },
      {
        id: "aviation-grommets",
        name: "Grommets and Seals",
        description:
          "Specialized components designed to block dust, moisture and air leaks. Some versions absorb vibration and support long-term system stability.",
      },
      {
        id: "aviation-switches",
        name: "Switches and Buttons",
        description:
          "Durable controls for cockpit and cabin panels with precise tactile performance.",
      },
      {
        id: "aviation-lighting",
        name: "Lighting Components",
        description:
          "Housings for interior lights, navigation lights and landing lights, made from materials that withstand heat and environmental exposure.",
      },
      {
        id: "aviation-bumpers",
        name: "Bumpers and Pads",
        description:
          "Protective elements for cargo areas and compartments, helping reduce noise and prevent damage.",
      },
      {
        id: "aviation-insulation",
        name: "Insulation Panels",
        description:
          "Lightweight thermal and acoustic panels made from advanced fire-resistant polymers.",
      },
      {
        id: "aviation-fuel",
        name: "Fuel System Components",
        description:
          "Seals, caps and fittings designed to resist fuel exposure and maintain secure pressure levels.",
      },
      {
        id: "aviation-landing",
        name: "Landing Gear Covers",
        description:
          "Streamlined, impact-resistant covers that reduce drag and shield landing gear assemblies.",
      },
    ],
  },
  {
    id: "electronics",
    slug: "electronics",
    name: "Electronics",
    description:
      "We provide precision-engineered plastic components for the electronics sector, combining high-quality manufacturing with sharp visual finish. Our expertise supports everything from consumer devices to rugged electronic assemblies that demand accuracy, durability and clean aesthetics.",
    // heroImage:
    //   "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80",
    heroImage: "/images/industries/electronics.jpg",
    whatWeOffer: [
      {
        id: "electronics-custom",
        name: "Custom Injection Molding",
        description:
          "Tailored solutions for complex electronic housings, buttons, enclosures and internal components.",
      },
      {
        id: "electronics-prototyping",
        name: "Prototyping & Design Support",
        description:
          "Fast prototypes and design guidance to refine part geometry, improve functionality and streamline production.",
      },
      {
        id: "electronics-sustainable",
        name: "Sustainable Manufacturing",
        description:
          "Environmentally conscious materials and processes that reduce waste while maintaining performance.",
      },
      {
        id: "electronics-technology",
        name: "Advanced Manufacturing Technology",
        description:
          "State-of-the-art equipment ensures tight tolerances, stable production and consistent quality for high-volume or specialty projects.",
      },
      {
        id: "electronics-quality",
        name: "Quality & Compliance",
        description:
          "Strict inspection standards and full industry compliance to guarantee reliability and long-term durability.",
      },
      {
        id: "electronics-collaborative",
        name: "Collaborative Development",
        description:
          "We work closely with clients to create components that meet exact technical and aesthetic requirements, from concept to final assembly.",
      },
    ],
    processes: [],
    applications: [],
  },
  {
    id: "medical",
    slug: "medical",
    name: "Medical",
    description:
      "We support the medical sector with precise, reliable and efficient plastic injection molding built for demanding clinical applications. With decades of experience, we produce components that meet strict regulatory, performance and safety requirements while enabling flexible, innovative part design.",
    // heroImage:
    //   "https://images.unsplash.com/photo-1581093458791-9d42e1c5e2e4?auto=format&fit=crop&w=2400&q=80",
    heroImage: "/images/industries/medical.jpg",
    whatWeOffer: [
      {
        id: "medical-full-service",
        name: "Full-Service Manufacturing",
        description:
          "From prototypes to large-scale production runs, we handle projects ranging from low volumes to 100,000 units or more each year.",
      },
      {
        id: "medical-cleanroom",
        name: "Cleanroom Molding",
        description:
          "ISO 14644 Class 8 cleanroom capabilities for components that require controlled, contamination-free production.",
      },
      {
        id: "medical-prototyping",
        name: "Prototyping",
        description:
          "Production-quality prototypes that help refine part geometry and accelerate development.",
      },
      {
        id: "medical-insert",
        name: "Insert & Overmolding",
        description:
          "Design flexibility for complex, multi-material components that streamline assembly and improve performance.",
      },
      {
        id: "medical-finishing",
        name: "Finishing Services",
        description:
          "Pad printing, laser marking, packaging and other post-processing options to deliver ready-to-use medical parts.",
      },
      {
        id: "medical-high-temp",
        name: "High-Temperature Molding",
        description:
          "Materials and processes suited for devices that demand superior strength, heat resistance or sterilization compatibility.",
      },
    ],
    processes: [],
    applications: [
      {
        id: "medical-endoscopy",
        description: "Endoscopy and laparoscopy",
      },
      {
        id: "medical-cardiovascular",
        description: "Cardiovascular and drug-delivery components",
      },
      {
        id: "medical-neurological",
        description: "Neurological and robotic surgery systems",
      },
      {
        id: "medical-monitoring",
        description: "Patient monitoring and care devices",
      },
      {
        id: "medical-orthopedic",
        description: "Orthopedic tools and housings",
      },
      {
        id: "medical-laboratory",
        description: "Laboratory, organ and cell-growth equipment",
      },
    ],
  },
  {
    id: "military",
    slug: "military",
    name: "Military",
    description:
      "We produce lightweight, durable and highly engineered plastic components tailored to the strict demands of military and aerospace programs. Our team handles complex, low- to high-volume injection molding with the precision and reliability that mission-critical environments require.",
    // heroImage:
    //   "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2400&q=80",
    heroImage: "/images/industries/military.jpg",
    whatWeOffer: [
      {
        id: "military-custom",
        name: "Custom Design & Engineering",
        description:
          "We build parts to your exact specifications, from concept to finished product, with fast turnaround and full technical support.",
      },
      {
        id: "military-materials",
        name: "Advanced Materials",
        description:
          "High-performance plastics such as PEEK, Ultem and glass-filled nylons deliver exceptional strength-to-weight ratios, ideal for improving mobility, fuel efficiency and overall system performance.",
      },
      {
        id: "military-precision",
        name: "Precision & Repeatability",
        description:
          "Our molding process ensures tight tolerances and consistent results—vital for components used in defense, aviation and tactical systems.",
      },
      {
        id: "military-complex",
        name: "Complex Geometries",
        description:
          "Injection molding enables intricate shapes and the consolidation of multiple elements into a single part, reducing weight, weak points and assembly time.",
      },
    ],
    processes: [],
    applications: [
      {
        id: "military-aerospace",
        description: "Aerospace and aircraft components",
      },
      {
        id: "military-electronics",
        description: "Military electronics housings",
      },
      {
        id: "military-structural",
        description: "Structural, load-bearing and support elements",
      },
      {
        id: "military-protective",
        description: "Lightweight protective parts and covers",
      },
      {
        id: "military-connectors",
        description: "High-strength connectors, brackets and mounts",
      },
    ],
  },
]

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug)
}
