/**
 * Company data for the four manufacturing partners
 */

import type { Company } from '@/types'

export const companies: Company[] = [
  {
    id: 'pardev',
    slug: 'pardev',
    name: 'Pardev',
    tagline: 'Early-Stage Prototyping & Concept Models',
    description:
      'Pardev specializes in rapid prototyping and concept development, helping you bring ideas to life quickly. From initial concept models to functional prototypes, we provide the foundation for successful product development.',
    logo: '/logos/pardev.svg',
    heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=80',
    specialties: [
      'Rapid Prototyping',
      '3D Printing (FDM, SLA, SLS)',
      'CNC Machining for Prototypes',
      'Concept Model Development',
      'Design for Manufacturing (DFM) Consultation',
      'Iterative Design Support',
    ],
    capabilities: [
      'additive-manufacturing',
      'cnc-prototyping',
      'design-consultation',
      'material-testing',
    ],
    industries: ['medical-devices', 'consumer-electronics', 'automotive', 'aerospace-defense'],
    certifications: [
      {
        id: 'iso-9001',
        name: 'ISO 9001:2015',
        description: 'Quality Management System',
        icon: 'award',
        issuedBy: 'ISO',
      },
    ],
    equipment: [
      {
        id: 'fdm-printers',
        name: 'FDM 3D Printers',
        type: 'Additive Manufacturing',
        capabilities: ['Rapid prototyping', 'Functional testing', 'Design validation'],
        specifications: {
          'Build Volume': '300 x 300 x 400mm',
          'Layer Resolution': '50-400 microns',
          Materials: 'ABS, PLA, PETG, Nylon, TPU',
        },
      },
      {
        id: 'sla-printers',
        name: 'SLA 3D Printers',
        type: 'Additive Manufacturing',
        capabilities: ['High-detail prototypes', 'Master patterns', 'Concept models'],
        specifications: {
          'Build Volume': '145 x 145 x 175mm',
          'Layer Resolution': '25-100 microns',
          Materials: 'Standard, Tough, Flexible, Castable Resins',
        },
      },
      {
        id: 'cnc-mills',
        name: 'CNC Milling Centers',
        type: 'Subtractive Manufacturing',
        capabilities: ['Precision prototypes', 'Functional parts', 'Tooling'],
        specifications: {
          'Work Envelope': '500 x 400 x 300mm',
          Tolerance: '±0.005"',
          Materials: 'Aluminum, Steel, Plastics, Composites',
        },
      },
    ],
    volumeRange: {
      min: 1,
      max: 100,
      optimal: {
        min: 1,
        max: 25,
      },
      unit: 'pieces',
    },
    leadTime: {
      prototype: '3-5 days',
      lowVolume: '1-2 weeks',
      highVolume: 'N/A - Refer to PTI',
    },
    materials: [
      'Engineering Plastics',
      'Aluminum',
      'Steel',
      'Composites',
      '3D Printing Resins',
      'Nylon',
    ],
    processes: ['3D Printing', 'CNC Machining', 'Finishing', 'Assembly'],
    caseStudies: [],
    contactInfo: {
      email: 'info@pardev.com',
      phone: '(847) 742-7714',
      address: '123 Innovation Drive, Chicago, IL 60601',
    },
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
    },
    established: 1995,
  },
  {
    id: 'pti',
    slug: 'pti',
    name: 'PTI',
    tagline: 'Mid-to-High Volume Plastic Injection Molding',
    description:
      'PTI delivers precision plastic injection molding for mid-to-high volume production runs. With state-of-the-art equipment and decades of experience, we transform your designs into high-quality plastic components.',
    logo: '/logos/pti.svg',
    heroImage: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=2400&q=80',
    specialties: [
      'Plastic Injection Molding',
      'Tool Design & Manufacturing',
      'Insert Molding',
      'Overmolding',
      'Multi-Shot Molding',
      'Assembly & Packaging',
    ],
    capabilities: [
      'injection-molding',
      'tool-design',
      'insert-molding',
      'overmolding',
      'assembly',
    ],
    industries: ['medical-devices', 'consumer-electronics', 'automotive', 'aerospace-defense'],
    certifications: [
      {
        id: 'iso-9001',
        name: 'ISO 9001:2015',
        description: 'Quality Management System',
        icon: 'award',
        issuedBy: 'ISO',
      },
      {
        id: 'iso-13485',
        name: 'ISO 13485:2016',
        description: 'Medical Device Quality Management',
        icon: 'heart-pulse',
        issuedBy: 'ISO',
      },
    ],
    equipment: [
      {
        id: 'injection-molding-machines',
        name: 'Injection Molding Machines',
        type: 'Plastic Molding',
        capabilities: ['High-volume production', 'Tight tolerances', 'Complex geometries'],
        specifications: {
          'Tonnage Range': '50-500 tons',
          'Shot Size': '1-32 oz',
          'Cycle Time': '10-60 seconds',
        },
      },
    ],
    volumeRange: {
      min: 1000,
      max: 10000000,
      optimal: {
        min: 10000,
        max: 1000000,
      },
      unit: 'pieces',
    },
    leadTime: {
      prototype: 'N/A - Refer to Pardev',
      lowVolume: '4-6 weeks (including tooling)',
      highVolume: '6-8 weeks (including tooling)',
    },
    materials: [
      'ABS',
      'Polycarbonate',
      'Nylon',
      'Acetal',
      'TPE',
      'PP',
      'PE',
      'Engineering Resins',
    ],
    processes: ['Injection Molding', 'Tool Making', 'Finishing', 'Assembly', 'Quality Control'],
    caseStudies: [],
    contactInfo: {
      email: 'info@pti-mfg.com',
      phone: '(847) 742-7714',
      address: '456 Manufacturing Way, Elk Grove Village, IL 60007',
    },
    location: {
      city: 'Elk Grove Village',
      state: 'IL',
      country: 'USA',
    },
    established: 1988,
  },
  {
    id: 'cgr-tech',
    slug: 'cgr-tech',
    name: 'CGR Tech',
    tagline: 'Precision Metal Components & Medical Device Parts',
    description:
      'CGR Tech specializes in precision metal machining and medical device manufacturing. Our cleanroom facilities and rigorous quality standards ensure the highest level of precision and compliance for critical applications.',
    logo: '/logos/cgr-tech.svg',
    heroImage: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=2400&q=80',
    specialties: [
      'Precision CNC Machining',
      'Medical Device Manufacturing',
      'Cleanroom Production',
      'Multi-Axis Machining',
      'EDM (Electrical Discharge Machining)',
      'Surface Finishing',
    ],
    capabilities: [
      'cnc-machining',
      'multi-axis-machining',
      'edm',
      'cleanroom-manufacturing',
      'surface-finishing',
    ],
    industries: ['medical-devices', 'aerospace-defense', 'automotive'],
    certifications: [
      {
        id: 'iso-9001',
        name: 'ISO 9001:2015',
        description: 'Quality Management System',
        icon: 'award',
        issuedBy: 'ISO',
      },
      {
        id: 'iso-13485',
        name: 'ISO 13485:2016',
        description: 'Medical Device Quality Management',
        icon: 'heart-pulse',
        issuedBy: 'ISO',
      },
      {
        id: 'fda-registered',
        name: 'FDA Registered',
        description: 'FDA Registered Medical Device Manufacturer',
        icon: 'shield-check',
        issuedBy: 'FDA',
      },
      {
        id: 'cleanroom',
        name: 'ISO Class 7 Cleanroom',
        description: 'Controlled Environment Manufacturing',
        icon: 'wind',
        issuedBy: 'ISO',
      },
    ],
    equipment: [
      {
        id: 'cnc-machining-centers',
        name: '5-Axis CNC Machining Centers',
        type: 'CNC Machining',
        capabilities: ['Complex geometries', 'Tight tolerances', 'High precision'],
        specifications: {
          'Work Envelope': '600 x 500 x 400mm',
          Tolerance: '±0.0005"',
          Materials: 'Aluminum, Stainless Steel, Titanium, Brass, Plastics',
        },
      },
      {
        id: 'edm-machines',
        name: 'Wire & Sinker EDM',
        type: 'EDM',
        capabilities: ['Micro-machining', 'Hard materials', 'Complex shapes'],
        specifications: {
          Tolerance: '±0.0001"',
          'Wire Diameter': '0.004" - 0.012"',
        },
      },
    ],
    volumeRange: {
      min: 100,
      max: 100000,
      optimal: {
        min: 500,
        max: 50000,
      },
      unit: 'pieces',
    },
    leadTime: {
      prototype: '1-2 weeks',
      lowVolume: '2-4 weeks',
      highVolume: '4-8 weeks',
    },
    materials: [
      'Stainless Steel',
      'Titanium',
      'Aluminum',
      'Brass',
      'Medical-Grade Plastics',
      'Exotic Alloys',
    ],
    processes: [
      'CNC Machining',
      'EDM',
      'Grinding',
      'Polishing',
      'Passivation',
      'Anodizing',
      'Quality Inspection',
    ],
    caseStudies: [],
    contactInfo: {
      email: 'info@cgrtech.com',
      phone: '(847) 742-7714',
      address: '789 Precision Lane, Schaumburg, IL 60173',
    },
    location: {
      city: 'Schaumburg',
      state: 'IL',
      country: 'USA',
    },
    established: 2001,
  },
  {
    id: 'minic-precision',
    slug: 'minic-precision',
    name: 'Minic Precision',
    tagline: 'Ultra-Precise Swiss Machining for Small Parts',
    description:
      'Minic Precision offers ultra-precise Swiss-style machining for small, complex components. Our advanced Swiss turning capabilities deliver exceptional accuracy and surface finish for the most demanding applications.',
    logo: '/logos/minic-precision.svg',
    heroImage: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=2400&q=80',
    specialties: [
      'Swiss-Style Turning',
      'Micro-Machining',
      'High-Volume Small Parts',
      'Secondary Operations',
      'Thread Rolling',
      'Precision Grinding',
    ],
    capabilities: ['swiss-machining', 'micro-machining', 'thread-rolling', 'precision-grinding'],
    industries: ['medical-devices', 'aerospace-defense', 'consumer-electronics', 'automotive'],
    certifications: [
      {
        id: 'iso-9001',
        name: 'ISO 9001:2015',
        description: 'Quality Management System',
        icon: 'award',
        issuedBy: 'ISO',
      },
      {
        id: 'itar',
        name: 'ITAR Registered',
        description: 'International Traffic in Arms Regulations',
        icon: 'shield',
        issuedBy: 'US Department of State',
      },
    ],
    equipment: [
      {
        id: 'swiss-lathes',
        name: 'Swiss-Type CNC Lathes',
        type: 'Swiss Machining',
        capabilities: ['Small diameter parts', 'Complex features', 'High precision'],
        specifications: {
          'Max Diameter': '32mm',
          'Max Length': '300mm',
          Tolerance: '±0.0002"',
          'Surface Finish': 'Ra 8 micro-inches',
        },
      },
    ],
    volumeRange: {
      min: 500,
      max: 5000000,
      optimal: {
        min: 5000,
        max: 500000,
      },
      unit: 'pieces',
    },
    leadTime: {
      prototype: '1-2 weeks',
      lowVolume: '2-3 weeks',
      highVolume: '3-6 weeks',
    },
    materials: [
      'Stainless Steel',
      'Aluminum',
      'Brass',
      'Titanium',
      'Plastics',
      'Exotic Alloys',
    ],
    processes: [
      'Swiss Turning',
      'Milling',
      'Drilling',
      'Threading',
      'Grinding',
      'Deburring',
      'Inspection',
    ],
    caseStudies: [],
    contactInfo: {
      email: 'info@minicprecision.com',
      phone: '(847) 742-7714',
      address: '321 Swiss Way, Arlington Heights, IL 60004',
    },
    location: {
      city: 'Arlington Heights',
      state: 'IL',
      country: 'USA',
    },
    established: 1992,
  },
]

export const getCompanyBySlug = (slug: string): Company | undefined => {
  return companies.find(company => company.slug === slug)
}

export const getCompaniesByCapability = (capabilityId: string): Company[] => {
  return companies.filter(company => company.capabilities.includes(capabilityId))
}

export const getCompaniesByIndustry = (industrySlug: string): Company[] => {
  return companies.filter(company => company.industries.includes(industrySlug))
}
