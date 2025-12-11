/**
 * Capability-related type definitions
 */

export interface Capability {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  category: CapabilityCategory
  processes: string[]
  materials: string[]
  industries: string[]
  companies: string[]
  volumeRange: {
    min: number
    max: number
  }
  tolerances: string[]
  leadTime: string
  idealFor: string[]
  image: string
}

export type CapabilityCategory =
  | "prototyping"
  | "machining"
  | "molding"
  | "finishing"
  | "assembly"
  | "inspection"

export interface CapabilityFilter {
  stage?: ProductionStage[]
  material?: string[]
  volume?: VolumeFilter
  industry?: string[]
  process?: string[]
  company?: string[]
  search?: string
}

export type ProductionStage = "concept" | "prototype" | "low-volume" | "high-volume" | "production"

export interface VolumeFilter {
  min?: number
  max?: number
}

export interface CapabilityMatrix {
  capabilities: Capability[]
  companies: {
    id: string
    name: string
    capabilities: string[]
  }[]
}
