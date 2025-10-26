/**
 * Application constants
 */

export const SITE_NAME = 'Lyons Co.'
// export const SITE_TAGLINE = 'Your Complete Manufacturing Partner'
// export const SITE_TAGLINE = 'Your Complete Manufacturing Partner - From Prototype to Production'
export const SITE_TAGLINE = 'Precision manufacturing, from prototype to production'
export const SITE_DESCRIPTION =
  'From Prototype to Production'

export const CONTACT_EMAIL = 'info@lyonsco.com'
export const CONTACT_PHONE = '(847) 742-7714'
export const CONTACT_PHONE_RAW = '8477427714'

export const COMPANY_ADDRESS = {
  street: '123 Manufacturing Drive',
  city: 'Chicago',
  state: 'IL',
  zip: '60601',
  country: 'USA',
}

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/lyonsco',
  twitter: 'https://twitter.com/lyonsco',
  facebook: 'https://facebook.com/lyonsco',
}

export const NAVIGATION_ITEMS = [
  {
    label: 'Capabilities',
    href: '/capabilities',
  },
  {
    label: 'Companies',
    href: '/companies',
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const PRODUCTION_STAGES = [
  {
    id: 'concept',
    name: 'Concept',
    description: 'Initial ideation and feasibility',
  },
  {
    id: 'prototype',
    name: 'Prototype',
    description: 'Functional prototypes and testing',
  },
  {
    id: 'tooling',
    name: 'Tooling',
    description: 'Production tooling development',
  },
  {
    id: 'production',
    name: 'Production',
    description: 'Full-scale manufacturing',
  },
  {
    id: 'precision',
    name: 'Precision Components',
    description: 'Ultra-precise small parts',
  },
] as const

export const VALUE_PROPOSITIONS = [
  {
    id: 'single-contact',
    title: 'Single Point of Contact',
    description:
      'No need to manage multiple vendors. We coordinate everything across our four manufacturing partners.',
    icon: 'users',
  },
  {
    id: 'faster-time',
    title: 'Faster Time-to-Market',
    description:
      'Seamless transitions between prototype and production accelerate your product launch.',
    icon: 'zap',
  },
  {
    id: 'quality',
    title: 'Consistent Quality',
    description:
      'We ensure all partners meet your requirements with unified quality standards.',
    icon: 'shield-check',
  },
  {
    id: 'cost-optimization',
    title: 'Cost Optimization',
    description:
      'We know which manufacturer is most cost-effective for your specific needs.',
    icon: 'dollar-sign',
  },
  {
    id: 'engineering-support',
    title: 'Engineering Support',
    description:
      'Combined expertise across all four companies provides comprehensive technical support.',
    icon: 'wrench',
  },
  {
    id: 'made-in-usa',
    title: 'Made in USA',
    description:
      'All manufacturing is done in the United States with full traceability and compliance.',
    icon: 'flag',
  },
] as const

export const CERTIFICATIONS = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: 'award',
  },
  {
    id: 'iso-13485',
    name: 'ISO 13485:2016',
    description: 'Medical Device Quality Management',
    icon: 'heart-pulse',
  },
  {
    id: 'itar',
    name: 'ITAR Registered',
    description: 'International Traffic in Arms Regulations',
    icon: 'shield',
  },
  {
    id: 'fda-registered',
    name: 'FDA Registered',
    description: 'FDA Registered Medical Device Manufacturer',
    icon: 'shield-check',
  },
  {
    id: 'cleanroom',
    name: 'ISO Class 7 Cleanroom',
    description: 'Controlled Environment Manufacturing',
    icon: 'wind',
  },
] as const

export const MATERIALS = [
  'Aluminum',
  'Stainless Steel',
  'Titanium',
  'Brass',
  'Steel',
  'ABS',
  'Polycarbonate',
  'Nylon',
  'Acetal',
  'TPE',
  'PP',
  'PE',
  'Engineering Resins',
  'Medical-Grade Plastics',
  'Exotic Alloys',
] as const

export const PROCESSES = [
  'CNC Machining',
  'Swiss Machining',
  'Injection Molding',
  '3D Printing',
  'EDM',
  'Multi-Axis Machining',
  'Tool Making',
  'Assembly',
  'Finishing',
] as const
