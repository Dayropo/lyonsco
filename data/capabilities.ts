/**
 * Capabilities data across all manufacturing partners
 */

import type { Capability } from '@/types'

export const capabilities: Capability[] = [
  {
    id: 'additive-manufacturing',
    name: 'Additive Manufacturing (3D Printing)',
    slug: 'additive-manufacturing',
    description:
      'Rapid prototyping and low-volume production using FDM, SLA, and SLS technologies.',
    icon: 'box',
    category: 'prototyping',
    processes: ['FDM', 'SLA', 'SLS', 'Multi Jet Fusion'],
    materials: ['PLA', 'ABS', 'Nylon', 'Resin', 'TPU', 'PETG'],
    industries: ['medical-devices', 'consumer-electronics', 'automotive', 'aerospace-defense'],
    companies: ['pardev'],
    volumeRange: {
      min: 1,
      max: 100,
    },
    tolerances: ['±0.005" - ±0.020"'],
    leadTime: '3-5 days',
    idealFor: [
      'Concept validation',
      'Functional prototypes',
      'Design iteration',
      'Low-volume production',
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cnc-prototyping',
    name: 'CNC Prototyping',
    slug: 'cnc-prototyping',
    description:
      'Precision CNC machining for functional prototypes and low-volume production.',
    icon: 'cog',
    category: 'prototyping',
    processes: ['CNC Milling', 'CNC Turning', 'Multi-Axis Machining'],
    materials: ['Aluminum', 'Steel', 'Stainless Steel', 'Brass', 'Plastics'],
    industries: ['medical-devices', 'consumer-electronics', 'automotive', 'aerospace-defense'],
    companies: ['pardev'],
    volumeRange: {
      min: 1,
      max: 100,
    },
    tolerances: ['±0.001" - ±0.005"'],
    leadTime: '5-10 days',
    idealFor: [
      'Functional testing',
      'Production-like prototypes',
      'Material validation',
      'Pre-production runs',
    ],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'injection-molding',
    name: 'Plastic Injection Molding',
    slug: 'injection-molding',
    description:
      'High-volume plastic injection molding for production parts with excellent repeatability.',
    icon: 'layers',
    category: 'molding',
    processes: ['Injection Molding', 'Insert Molding', 'Overmolding', 'Multi-Shot Molding'],
    materials: ['ABS', 'PC', 'Nylon', 'PP', 'PE', 'TPE', 'Acetal', 'Engineering Resins'],
    industries: ['medical-devices', 'consumer-electronics', 'automotive'],
    companies: ['pti'],
    volumeRange: {
      min: 1000,
      max: 10000000,
    },
    tolerances: ['±0.002" - ±0.010"'],
    leadTime: '4-8 weeks (including tooling)',
    idealFor: [
      'High-volume production',
      'Complex geometries',
      'Multi-material parts',
      'Cost-effective manufacturing',
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cnc-machining',
    name: 'Precision CNC Machining',
    slug: 'cnc-machining',
    description:
      'High-precision CNC machining for metal and plastic components with tight tolerances.',
    icon: 'settings',
    category: 'machining',
    processes: ['3-Axis Milling', '5-Axis Milling', 'CNC Turning', 'Multi-Axis Machining'],
    materials: ['Aluminum', 'Stainless Steel', 'Titanium', 'Brass', 'Plastics', 'Exotic Alloys'],
    industries: ['medical-devices', 'aerospace-defense', 'automotive'],
    companies: ['cgr-tech'],
    volumeRange: {
      min: 100,
      max: 100000,
    },
    tolerances: ['±0.0005" - ±0.002"'],
    leadTime: '2-6 weeks',
    idealFor: [
      'Precision components',
      'Medical devices',
      'Aerospace parts',
      'Complex geometries',
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'swiss-machining',
    name: 'Swiss-Style Machining',
    slug: 'swiss-machining',
    description:
      'Ultra-precise Swiss turning for small, complex parts with exceptional surface finish.',
    icon: 'circle-dot',
    category: 'machining',
    processes: ['Swiss Turning', 'Live Tooling', 'Thread Rolling', 'Secondary Operations'],
    materials: ['Stainless Steel', 'Aluminum', 'Brass', 'Titanium', 'Plastics'],
    industries: ['medical-devices', 'aerospace-defense', 'consumer-electronics', 'automotive'],
    companies: ['minic-precision'],
    volumeRange: {
      min: 500,
      max: 5000000,
    },
    tolerances: ['±0.0002" - ±0.001"'],
    leadTime: '2-4 weeks',
    idealFor: [
      'Small diameter parts',
      'High-volume production',
      'Tight tolerances',
      'Complex features',
    ],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multi-axis-machining',
    name: 'Multi-Axis Machining',
    slug: 'multi-axis-machining',
    description:
      '5-axis CNC machining for complex geometries and difficult-to-machine materials.',
    icon: 'rotate-3d',
    category: 'machining',
    processes: ['5-Axis Milling', 'Simultaneous 5-Axis', 'Complex Contouring'],
    materials: ['Titanium', 'Inconel', 'Stainless Steel', 'Aluminum', 'Exotic Alloys'],
    industries: ['aerospace-defense', 'medical-devices', 'automotive'],
    companies: ['cgr-tech'],
    volumeRange: {
      min: 10,
      max: 10000,
    },
    tolerances: ['±0.0005" - ±0.002"'],
    leadTime: '3-8 weeks',
    idealFor: [
      'Complex geometries',
      'Aerospace components',
      'Medical implants',
      'Difficult materials',
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'edm',
    name: 'EDM (Electrical Discharge Machining)',
    slug: 'edm',
    description:
      'Wire and sinker EDM for micro-machining and hard materials with extreme precision.',
    icon: 'zap',
    category: 'machining',
    processes: ['Wire EDM', 'Sinker EDM', 'Micro-EDM'],
    materials: ['Hardened Steel', 'Carbide', 'Titanium', 'Exotic Alloys'],
    industries: ['medical-devices', 'aerospace-defense'],
    companies: ['cgr-tech'],
    volumeRange: {
      min: 1,
      max: 1000,
    },
    tolerances: ['±0.0001" - ±0.0005"'],
    leadTime: '2-6 weeks',
    idealFor: [
      'Micro-machining',
      'Hard materials',
      'Complex shapes',
      'Tool and die making',
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cleanroom-manufacturing',
    name: 'Cleanroom Manufacturing',
    slug: 'cleanroom-manufacturing',
    description:
      'ISO Class 7 cleanroom manufacturing for medical devices and contamination-sensitive products.',
    icon: 'wind',
    category: 'assembly',
    processes: ['Cleanroom Machining', 'Cleanroom Assembly', 'Contamination Control'],
    materials: ['Medical-Grade Plastics', 'Stainless Steel', 'Titanium'],
    industries: ['medical-devices'],
    companies: ['cgr-tech'],
    volumeRange: {
      min: 100,
      max: 100000,
    },
    tolerances: ['±0.0005" - ±0.002"'],
    leadTime: '3-8 weeks',
    idealFor: [
      'Medical devices',
      'Implantable components',
      'Sterile products',
      'FDA compliance',
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e1c5e2e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tool-design',
    name: 'Tool Design & Manufacturing',
    slug: 'tool-design',
    description:
      'Custom injection mold tooling design and manufacturing for optimal part quality.',
    icon: 'wrench',
    category: 'molding',
    processes: ['Mold Design', 'Mold Making', 'Tool Maintenance', 'Tool Modification'],
    materials: ['Tool Steel', 'Aluminum', 'Beryllium Copper'],
    industries: ['consumer-electronics', 'automotive', 'medical-devices'],
    companies: ['pti'],
    volumeRange: {
      min: 1000,
      max: 10000000,
    },
    tolerances: ['±0.0005" - ±0.002"'],
    leadTime: '6-12 weeks',
    idealFor: [
      'Production tooling',
      'Complex molds',
      'Multi-cavity tools',
      'Long-term production',
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'surface-finishing',
    name: 'Surface Finishing',
    slug: 'surface-finishing',
    description:
      'Comprehensive surface finishing services including polishing, anodizing, and passivation.',
    icon: 'sparkles',
    category: 'finishing',
    processes: ['Polishing', 'Anodizing', 'Passivation', 'Bead Blasting', 'Powder Coating'],
    materials: ['Aluminum', 'Stainless Steel', 'Titanium', 'Brass'],
    industries: ['medical-devices', 'aerospace-defense', 'consumer-electronics'],
    companies: ['cgr-tech'],
    volumeRange: {
      min: 10,
      max: 100000,
    },
    tolerances: ['N/A'],
    leadTime: '1-3 weeks',
    idealFor: [
      'Cosmetic finish',
      'Corrosion resistance',
      'Medical compliance',
      'Aesthetic requirements',
    ],
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'assembly',
    name: 'Assembly & Packaging',
    slug: 'assembly',
    description:
      'Complete assembly services from sub-assembly to final packaging and kitting.',
    icon: 'package',
    category: 'assembly',
    processes: ['Manual Assembly', 'Automated Assembly', 'Testing', 'Packaging', 'Kitting'],
    materials: ['All Materials'],
    industries: ['medical-devices', 'consumer-electronics', 'automotive'],
    companies: ['pti', 'cgr-tech'],
    volumeRange: {
      min: 100,
      max: 1000000,
    },
    tolerances: ['N/A'],
    leadTime: '2-6 weeks',
    idealFor: [
      'Complete solutions',
      'Turnkey manufacturing',
      'Reduced vendor management',
      'Quality control',
    ],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80',
  },
]

export const getCapabilityById = (id: string): Capability | undefined => {
  return capabilities.find(cap => cap.id === id)
}

export const getCapabilitiesByCompany = (companyId: string): Capability[] => {
  return capabilities.filter(cap => cap.companies.includes(companyId))
}

export const getCapabilitiesByIndustry = (industrySlug: string): Capability[] => {
  return capabilities.filter(cap => cap.industries.includes(industrySlug))
}

export const getCapabilitiesByCategory = (category: string): Capability[] => {
  return capabilities.filter(cap => cap.category === category)
}
