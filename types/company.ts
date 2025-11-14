/**
 * Company-related type definitions
 */

export interface Company {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  about: string
  logo: string
  heroImage: string
  specialties: string[]
  capabilities: string[]
  industries: string[]
  certifications: Certification[]
  equipment: Equipment[]
  volumeRange: VolumeRange
  leadTime: LeadTime
  materials: string[]
  processes: string[]
  caseStudies: CaseStudy[]
  contactInfo: ContactInfo
  location: Location
  established: number
}

export interface Certification {
  id: string
  name: string
  description: string
  icon: string
  issuedBy: string
  validUntil?: string
}

export interface Equipment {
  id: string
  name: string
  type: string
  capabilities: string[]
  specifications: Record<string, string>
}

export interface VolumeRange {
  min: number
  max: number
  optimal: {
    min: number
    max: number
  }
  unit: string
}

export interface LeadTime {
  prototype: string
  lowVolume: string
  highVolume: string
}

export interface CaseStudy {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  images: string[]
  testimonial?: Testimonial
  companiesInvolved: string[]
}

export interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

export interface Location {
  city: string
  state: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export type CompanySlug = 'pardev' | 'pti' | 'cgr-tech' | 'minic-precision'
