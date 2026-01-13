/**
 * Industry-related type definitions
 */

export interface Industry {
  id: string
  slug: string
  name: string
  description: string
  heroImage: string
  whatWeOffer: WhatWeOffer[]
  processes: Process[]
  applications: Application[]
  components?: IndustryComponentGroup[]
}

export interface WhatWeOffer {
  id: string
  name: string
  description: string
}

export interface Application {
  id: string
  name?: string
  description: string
}

export interface IndustryComponentGroup {
  id: string
  name: string
  icon: string
  components: string[]
}

export interface Process {
  id: string
  name: string
  description: string
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
  stages: ProjectStage[]
  companiesInvolved: string[]
  timeline: string
  volume: string
}

export interface ProjectStage {
  name: string
  description: string
  company: string
  duration: string
}

export type IndustrySlug = "automotive" | "aerospace" | "electronics" | "medical" | "military"
