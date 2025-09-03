import Link from "next/link";
import { Mail } from "lucide-react";
import type { ReactElement } from "react";
import { MobileMenu } from "@/components/MobileMenu";

interface NavItem {
  readonly href: string;
  readonly label: string;
}

/**
 * Site-wide header with brand, navigation, and primary CTA.
 */
export function Header(): ReactElement {
  const navItems: readonly NavItem[] = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#markets", label: "Markets" },
    { href: "#contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-sans text-lg sm:text-2xl font-semibold tracking-[-0.01em] text-white">
            Lyons Company
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a
            href="mailto:info@lyonsco.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 font-semibold hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail size={16} />
            Quote
          </a>
        </div>
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}
