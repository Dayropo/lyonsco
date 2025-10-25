/**
 * Industry-related type definitions
 */

export interface Industry {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  heroImage: string
  challenges: Challenge[]
  solutions: Solution[]
  capabilities: string[]
  companies: string[]
  caseStudies: string[]
  certifications: string[]
  standards: string[]
  typicalProjects: TypicalProject[]
}

export interface Challenge {
  id: string
  title: string
  description: string
}

export interface Solution {
  id: string
  title: string
  description: string
  capabilities: string[]
  companies: string[]
}

export interface TypicalProject {
  id: string
  name: string
  description: string
  stages: ProductionStage[]
  companiesInvolved: string[]
  timeline: string
  volume: string
}

export interface ProductionStage {
  name: string
  description: string
  company: string
  duration: string
}

export type IndustrySlug =
  | 'medical-devices'
  | 'aerospace-defense'
  | 'consumer-electronics'
  | 'automotive'
