import { RFQHero, RFQForm, RFQInfo } from "@/components/rfq"

/**
 * Request for Quote page
 */
export default function RFQPage() {
  return (
    <main>
      <RFQHero />
      <RFQForm />
      <RFQInfo />
    </main>
  )
}

export const metadata = {
  title: "Request a Quote - Lyons Company Inc.",
  description:
    "Request a quote for your precision manufacturing project. Tell us about your design, materials and production goals.",
}
