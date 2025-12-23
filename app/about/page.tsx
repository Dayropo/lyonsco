import {
  AboutHero,
  AboutStory,
  AboutCapabilities,
  AboutIndustries,
  AboutCTA,
} from "@/components/about"

/**
 * About page
 */
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutCapabilities />
      <AboutIndustries />
      <AboutCTA />
    </main>
  )
}

export const metadata = {
  title: "About Us - Lyons Company Inc.",
  description:
    "Lyons Company Inc. is a precision manufacturing partner with more than 30 years of experience supporting companies through every stage of product development.",
}
