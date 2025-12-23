import { ContactHero, ContactInfo, ContactForm } from "@/components/contact"

/**
 * Contact page
 */
export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  )
}

export const metadata = {
  title: "Contact Us - Lyons Company Inc.",
  description:
    "Get in touch with Lyons Company Inc. for precision manufacturing solutions. Request a consultation or quote for your project.",
}
