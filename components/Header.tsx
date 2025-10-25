import Link from "next/link"
import { Mail } from "lucide-react"
import type { ReactElement } from "react"
import { MobileMenu } from "@/components/MobileMenu"
import { NAVIGATION_ITEMS, SITE_NAME } from "@/lib/constants"

interface NavItem {
  readonly href: string
  readonly label: string
}

/**
 * Site-wide header with brand, navigation, and primary CTA.
 */
export function Header(): ReactElement {
  const navItems: readonly NavItem[] = NAVIGATION_ITEMS
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-sans text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            {SITE_NAME}
          </Link>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/rfq"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail size={16} />
              Get a Quote
            </Link>
          </div>
          <nav className="hidden items-center lg:flex">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="border-r last:border-r-0 px-2 text-sm font-medium text-slate-200 uppercase transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <MobileMenu navItems={navItems} />
      </div>
    </header>
  )
}
