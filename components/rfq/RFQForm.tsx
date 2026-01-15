"use client"

import type { JSX } from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * RFQ form section
 */
export function RFQForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    projectType: "",
    quantity: "",
    timeline: "",
    description: "",
    files: null as FileList | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }))
  }

  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Project Information
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Please provide as much detail as possible to help us understand your requirements
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-card-foreground mb-6 text-xl font-semibold">
                Contact Information
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-card-foreground mb-6 text-xl font-semibold">Project Details</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="industry"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  >
                    <option value="">Select an industry</option>
                    <option value="automotive">Automotive</option>
                    <option value="aerospace">Aerospace</option>
                    <option value="electronics">Electronics</option>
                    <option value="medical">Medical</option>
                    <option value="defense">Defense</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="projectType"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="prototype">Prototype</option>
                    <option value="low-volume">Low-Volume Production</option>
                    <option value="high-volume">High-Volume Production</option>
                    <option value="design-engineering">Design & Engineering</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g., 1,000 units"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="text-card-foreground mb-2 block text-sm font-medium"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                  >
                    <option value="">Select a timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="standard">Standard (3-6 weeks)</option>
                    <option value="flexible">Flexible (6+ weeks)</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="description"
                  className="text-card-foreground mb-2 block text-sm font-medium"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={6}
                  placeholder="Please describe your project requirements, including materials, tolerances, finishes, and any other relevant details..."
                  value={formData.description}
                  onChange={handleChange}
                  className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="text-card-foreground mb-4 text-xl font-semibold">Attachments</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Upload CAD files, drawings, or any other relevant documents (optional)
              </p>
              <input
                type="file"
                id="files"
                name="files"
                multiple
                onChange={handleFileChange}
                className="border-border focus:border-secondary focus:ring-secondary w-full rounded-lg border bg-white px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold shadow-lg transition-all hover:shadow-xl"
              >
                <Send size={20} />
                Submit Request for Quote
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
