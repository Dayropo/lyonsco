/**
 * RFQ (Request for Quote) type definitions
 */

export interface RFQFormData {
  // Contact Information
  contactInfo: ContactInformation
  // Project Details
  projectDetails: ProjectDetails
  // Technical Requirements
  technicalRequirements: TechnicalRequirements
  // Files
  files: FileUpload[]
  // Additional Information
  additionalInfo: AdditionalInfo
}

export interface ContactInformation {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position?: string
}

export interface ProjectDetails {
  projectName: string
  projectStage: ProjectStage
  industry: string
  timeline: Timeline
  volume: Volume
  budget?: BudgetRange
}

export type ProjectStage =
  | 'concept'
  | 'design'
  | 'prototype'
  | 'pilot-production'
  | 'full-production'

export interface Timeline {
  urgency: 'rush' | 'standard' | 'flexible'
  desiredDelivery?: string
  isRecurring: boolean
  recurringFrequency?: string
}

export interface Volume {
  quantity: number
  unit: 'pieces' | 'batches' | 'continuous'
  isEstimate: boolean
}

export type BudgetRange =
  | 'under-5k'
  | '5k-25k'
  | '25k-100k'
  | '100k-500k'
  | 'over-500k'
  | 'not-sure'

export interface TechnicalRequirements {
  processes: string[]
  materials: string[]
  finishes: string[]
  tolerances?: string
  certifications: string[]
  specialRequirements?: string
}

export interface FileUpload {
  id: string
  name: string
  size: number
  type: string
  url: string
  uploadedAt: string
}

export interface AdditionalInfo {
  description: string
  hasDrawings: boolean
  hasCADFiles: boolean
  needsDesignSupport: boolean
  preferredCompanies?: string[]
  additionalNotes?: string
}

export interface RFQRouting {
  recommendedCompanies: string[]
  reasoning: string
  alternativeOptions?: {
    companies: string[]
    reasoning: string
  }
}

export interface RFQSubmission extends RFQFormData {
  id: string
  submittedAt: string
  status: RFQStatus
  routing: RFQRouting
}

export type RFQStatus =
  | 'draft'
  | 'submitted'
  | 'under-review'
  | 'quoted'
  | 'accepted'
  | 'declined'
