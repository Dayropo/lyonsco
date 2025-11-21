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
  title: "Contact Us - Lyons Co.",
  description:
    "Get in touch with Lyons Co. for precision manufacturing solutions. Request a consultation or quote for your project.",
}
