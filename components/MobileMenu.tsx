"use client";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

interface NavItem {
  readonly href: string;
  readonly label: string;
}

interface MobileMenuProps {
  readonly navItems: readonly NavItem[];
}

/**
 * Mobile-only hamburger menu with full-screen overlay.
 */
export function MobileMenu({ navItems }: MobileMenuProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const lastCloseRef = useRef<number>(0);
  const close = useCallback((): void => {
    lastCloseRef.current = Date.now();
    setTimeout(() => setOpen(false), 0);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={(e): void => {
          e.stopPropagation();
          const now = Date.now();
          if (!open && now - lastCloseRef.current < 300) return;
          setOpen((v) => !v);
        }}
        className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={(e): void => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={(e): void => {
              e.preventDefault();
              e.stopPropagation();
              close();
            }}
            className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X size={22} />
          </button>
          <motion.div
            className="relative z-10 flex flex-col items-start justify-start gap-6 px-6 pt-24"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
            onClick={(e): void => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={close} className="text-2xl font-semibold text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href="mailto:info@lyonsco.com"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-base font-semibold hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail size={18} />
              Quote
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </div>
  );
}
