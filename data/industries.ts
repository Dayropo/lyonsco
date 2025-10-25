/**
 * Industry data and solutions
 */

import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    id: 'medical-devices',
    slug: 'medical-devices',
    name: 'Medical Devices',
    description:
      'Precision manufacturing for medical devices requires the highest standards of quality, compliance, and traceability. Our combined capabilities cover the entire product lifecycle from prototype to production.',
    icon: 'heart-pulse',
    heroImage: 'https://images.unsplash.com/photo-1581093458791-9d42e1c5e2e4?auto=format&fit=crop&w=2400&q=80',
    challenges: [
      {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        description:
          'Meeting FDA, ISO 13485, and other regulatory requirements throughout the manufacturing process.',
      },
      {
        id: 'biocompatibility',
        title: 'Biocompatibility',
        description:
          'Ensuring materials and processes meet biocompatibility standards for patient safety.',
      },
      {
        id: 'traceability',
        title: 'Traceability',
        description:
          'Maintaining complete traceability from raw materials through final inspection.',
      },
      {
        id: 'sterilization',
        title: 'Sterilization Compatibility',
        description:
          'Designing and manufacturing parts that can withstand various sterilization methods.',
      },
    ],
    solutions: [
      {
        id: 'cleanroom-manufacturing',
        title: 'Cleanroom Manufacturing',
        description:
          'ISO Class 7 cleanroom facilities for contamination-free production of critical components.',
        capabilities: ['cleanroom-manufacturing', 'cnc-machining', 'assembly'],
        companies: ['cgr-tech'],
      },
      {
        id: 'medical-prototyping',
        title: 'Rapid Medical Prototyping',
        description:
          'Fast iteration on medical device designs with biocompatible materials and processes.',
        capabilities: ['additive-manufacturing', 'cnc-prototyping'],
        companies: ['pardev'],
      },
      {
        id: 'high-volume-medical',
        title: 'High-Volume Medical Components',
        description:
          'Scalable production of medical-grade plastic and metal components with full traceability.',
        capabilities: ['injection-molding', 'swiss-machining'],
        companies: ['pti', 'minic-precision'],
      },
    ],
    capabilities: [
      'cleanroom-manufacturing',
      'cnc-machining',
      'swiss-machining',
      'injection-molding',
      'additive-manufacturing',
    ],
    companies: ['pardev', 'pti', 'cgr-tech', 'minic-precision'],
    caseStudies: [],
    certifications: ['iso-13485', 'fda-registered', 'cleanroom'],
    standards: ['ISO 13485', 'FDA 21 CFR Part 820', 'ISO 10993', 'ISO 14971'],
    typicalProjects: [
      {
        id: 'surgical-instrument',
        name: 'Surgical Instrument Development',
        description:
          'Complete development of a new surgical instrument from concept through FDA clearance.',
        stages: [
          {
            name: 'Concept & Prototyping',
            description: 'Initial design validation and functional prototypes',
            company: 'pardev',
            duration: '4-6 weeks',
          },
          {
            name: 'Design Refinement',
            description: 'Precision machining of refined prototypes for testing',
            company: 'cgr-tech',
            duration: '3-4 weeks',
          },
          {
            name: 'Pilot Production',
            description: 'Small-batch production for clinical trials',
            company: 'cgr-tech',
            duration: '6-8 weeks',
          },
          {
            name: 'Full Production',
            description: 'Scaled manufacturing with full traceability',
            company: 'cgr-tech',
            duration: 'Ongoing',
          },
        ],
        companiesInvolved: ['pardev', 'cgr-tech'],
        timeline: '4-6 months',
        volume: '500-5,000 units/year',
      },
    ],
  },
  {
    id: 'aerospace-defense',
    slug: 'aerospace-defense',
    name: 'Aerospace & Defense',
    description:
      'Mission-critical components for aerospace and defense applications demand exceptional precision, material traceability, and compliance with stringent industry standards.',
    icon: 'plane',
    heroImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=2400&q=80',
    challenges: [
      {
        id: 'itar-compliance',
        title: 'ITAR Compliance',
        description:
          'Maintaining compliance with International Traffic in Arms Regulations for defense-related manufacturing.',
      },
      {
        id: 'material-certification',
        title: 'Material Certification',
        description:
          'Ensuring materials meet aerospace specifications with full certification and traceability.',
      },
      {
        id: 'tight-tolerances',
        title: 'Extreme Tolerances',
        description:
          'Achieving and maintaining tolerances as tight as ±0.0001" for critical components.',
      },
      {
        id: 'exotic-materials',
        title: 'Exotic Materials',
        description:
          'Working with titanium, Inconel, and other high-performance alloys.',
      },
    ],
    solutions: [
      {
        id: 'precision-machining',
        title: 'Precision Aerospace Machining',
        description:
          '5-axis CNC machining and EDM for complex aerospace components with extreme tolerances.',
        capabilities: ['cnc-machining', 'multi-axis-machining', 'edm'],
        companies: ['cgr-tech'],
      },
      {
        id: 'small-parts-aerospace',
        title: 'Small Precision Parts',
        description:
          'Swiss machining for high-volume production of small, precise aerospace components.',
        capabilities: ['swiss-machining', 'precision-grinding'],
        companies: ['minic-precision'],
      },
      {
        id: 'aerospace-prototyping',
        title: 'Aerospace Prototyping',
        description:
          'Rapid prototyping and testing of aerospace components with certified materials.',
        capabilities: ['cnc-prototyping', 'additive-manufacturing'],
        companies: ['pardev'],
      },
    ],
    capabilities: [
      'cnc-machining',
      'multi-axis-machining',
      'swiss-machining',
      'edm',
      'precision-grinding',
    ],
    companies: ['pardev', 'cgr-tech', 'minic-precision'],
    caseStudies: [],
    certifications: ['itar', 'iso-9001', 'as9100'],
    standards: ['AS9100', 'ITAR', 'NADCAP', 'MIL-STD'],
    typicalProjects: [
      {
        id: 'actuator-component',
        name: 'Aircraft Actuator Component',
        description:
          'Development and production of precision actuator components for commercial aircraft.',
        stages: [
          {
            name: 'Prototype Development',
            description: 'Initial prototypes with certified materials',
            company: 'pardev',
            duration: '2-3 weeks',
          },
          {
            name: 'Precision Machining',
            description: 'Final machining to aerospace tolerances',
            company: 'cgr-tech',
            duration: '4-6 weeks',
          },
          {
            name: 'Production',
            description: 'Ongoing production with full material traceability',
            company: 'cgr-tech',
            duration: 'Ongoing',
          },
        ],
        companiesInvolved: ['pardev', 'cgr-tech'],
        timeline: '3-4 months',
        volume: '1,000-10,000 units/year',
      },
    ],
  },
  {
    id: 'consumer-electronics',
    slug: 'consumer-electronics',
    name: 'Consumer Electronics',
    description:
      'Fast-paced consumer electronics manufacturing requires rapid prototyping, scalable production, and the ability to meet tight time-to-market demands.',
    icon: 'smartphone',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=80',
    challenges: [
      {
        id: 'time-to-market',
        title: 'Time to Market',
        description:
          'Meeting aggressive launch schedules while maintaining quality standards.',
      },
      {
        id: 'design-changes',
        title: 'Design Iterations',
        description:
          'Accommodating frequent design changes during development and early production.',
      },
      {
        id: 'cost-optimization',
        title: 'Cost Optimization',
        description:
          'Balancing quality requirements with competitive pricing for consumer markets.',
      },
      {
        id: 'volume-scalability',
        title: 'Volume Scalability',
        description:
          'Scaling from prototype to high-volume production quickly and efficiently.',
      },
    ],
    solutions: [
      {
        id: 'rapid-prototyping-electronics',
        title: 'Rapid Electronics Prototyping',
        description:
          'Fast-turnaround prototyping with 3D printing and CNC machining for quick design validation.',
        capabilities: ['additive-manufacturing', 'cnc-prototyping'],
        companies: ['pardev'],
      },
      {
        id: 'plastic-enclosures',
        title: 'Plastic Enclosures & Housings',
        description:
          'High-volume injection molding of consumer electronics enclosures with excellent surface finish.',
        capabilities: ['injection-molding', 'tool-design', 'overmolding'],
        companies: ['pti'],
      },
      {
        id: 'small-components',
        title: 'Small Precision Components',
        description:
          'High-volume production of small metal and plastic components for electronics assembly.',
        capabilities: ['swiss-machining', 'micro-machining'],
        companies: ['minic-precision'],
      },
    ],
    capabilities: [
      'additive-manufacturing',
      'injection-molding',
      'swiss-machining',
      'cnc-machining',
      'assembly',
    ],
    companies: ['pardev', 'pti', 'minic-precision'],
    caseStudies: [],
    certifications: ['iso-9001'],
    standards: ['ISO 9001', 'RoHS', 'REACH'],
    typicalProjects: [
      {
        id: 'wearable-device',
        name: 'Wearable Device Development',
        description:
          'Complete manufacturing solution for a new wearable fitness device.',
        stages: [
          {
            name: 'Concept Prototyping',
            description: '3D printed prototypes for form and fit validation',
            company: 'pardev',
            duration: '1-2 weeks',
          },
          {
            name: 'Functional Prototypes',
            description: 'CNC machined prototypes with production-like materials',
            company: 'pardev',
            duration: '2-3 weeks',
          },
          {
            name: 'Tooling & Pilot',
            description: 'Injection mold tooling and pilot production run',
            company: 'pti',
            duration: '6-8 weeks',
          },
          {
            name: 'Full Production',
            description: 'High-volume production of plastic housings',
            company: 'pti',
            duration: 'Ongoing',
          },
          {
            name: 'Metal Components',
            description: 'Swiss machined metal fasteners and connectors',
            company: 'minic-precision',
            duration: 'Ongoing',
          },
        ],
        companiesInvolved: ['pardev', 'pti', 'minic-precision'],
        timeline: '3-5 months',
        volume: '50,000-500,000 units/year',
      },
    ],
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive',
    description:
      'Automotive manufacturing demands high-volume production capabilities, rigorous quality standards, and the ability to meet automotive industry certifications.',
    icon: 'car',
    heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=80',
    challenges: [
      {
        id: 'ppap-requirements',
        title: 'PPAP Requirements',
        description:
          'Meeting Production Part Approval Process requirements for automotive suppliers.',
      },
      {
        id: 'high-volume-quality',
        title: 'High-Volume Quality',
        description:
          'Maintaining consistent quality across millions of parts with zero-defect expectations.',
      },
      {
        id: 'cost-pressure',
        title: 'Cost Pressure',
        description:
          'Meeting aggressive cost targets while maintaining quality and delivery performance.',
      },
      {
        id: 'supply-chain',
        title: 'Supply Chain Integration',
        description:
          'Integrating with complex automotive supply chains and JIT delivery requirements.',
      },
    ],
    solutions: [
      {
        id: 'automotive-prototyping',
        title: 'Automotive Prototyping',
        description:
          'Rapid prototyping of automotive components for design validation and testing.',
        capabilities: ['cnc-prototyping', 'additive-manufacturing'],
        companies: ['pardev'],
      },
      {
        id: 'automotive-molding',
        title: 'Automotive Injection Molding',
        description:
          'High-volume injection molding of interior and under-hood automotive components.',
        capabilities: ['injection-molding', 'tool-design', 'insert-molding'],
        companies: ['pti'],
      },
      {
        id: 'automotive-precision',
        title: 'Precision Automotive Parts',
        description:
          'Swiss machining and CNC machining of precision automotive components.',
        capabilities: ['swiss-machining', 'cnc-machining'],
        companies: ['cgr-tech', 'minic-precision'],
      },
    ],
    capabilities: [
      'injection-molding',
      'cnc-machining',
      'swiss-machining',
      'additive-manufacturing',
      'assembly',
    ],
    companies: ['pardev', 'pti', 'cgr-tech', 'minic-precision'],
    caseStudies: [],
    certifications: ['iso-9001', 'iatf-16949'],
    standards: ['IATF 16949', 'ISO 9001', 'PPAP', 'APQP'],
    typicalProjects: [
      {
        id: 'sensor-housing',
        name: 'Automotive Sensor Housing',
        description:
          'Development and production of plastic housings for automotive sensors.',
        stages: [
          {
            name: 'Prototype Development',
            description: 'Initial prototypes for design validation',
            company: 'pardev',
            duration: '2-3 weeks',
          },
          {
            name: 'Tooling Development',
            description: 'Injection mold tooling with PPAP documentation',
            company: 'pti',
            duration: '8-10 weeks',
          },
          {
            name: 'Production Launch',
            description: 'High-volume production with SPC monitoring',
            company: 'pti',
            duration: 'Ongoing',
          },
        ],
        companiesInvolved: ['pardev', 'pti'],
        timeline: '4-5 months',
        volume: '100,000-1,000,000 units/year',
      },
    ],
  },
]

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug)
}

export const getIndustriesByCompany = (companyId: string): Industry[] => {
  return industries.filter(industry => industry.companies.includes(companyId))
}
