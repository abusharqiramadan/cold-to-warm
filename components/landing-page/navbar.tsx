"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { CalendarDays, Compass, Globe2, Mail, Rocket } from "lucide-react"

// Keeping NAV_LINKS for reference, but the simplified nav only uses a subset
const NAV_LINKS = [
  { label: "Home", href: "#hero", icon: Globe2 },
  { label: "Why Preference Based Matchmaking?", href: "#how-it-works", icon: Compass },
  { label: "Pricing", href: "#pricing", icon: CalendarDays },
  { label: "Contact", href: "#consultation", icon: Mail },
] as const satisfies ReadonlyArray<{
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}>

// Simplified links for the new navbar structure
const SIMPLIFIED_LINKS = [
  { label: "Why Preference Based Matchmaking?", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
] as const

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)
  
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    options?: { closeMenu?: boolean }
  ) => {
    event.preventDefault()

    if (options?.closeMenu) {
      closeMenu()
    }

    const targetId = href.replace("#", "")

    if (pathname === "/") {
      // Check if the element exists before trying to scroll
      const targetSection = document.getElementById(targetId)
      targetSection?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate to the homepage and then scroll
      router.push(`/#${targetId}`)
    }
  }
  
  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Note: The Cold→Warm logo uses a div with onClick, not an <a> tag here. 
    // The event parameter is not actually used in the current brand implementation.
    // If you want to use the event for prevention, you should change the div to a Link/a.
    // I'll keep the current structure but wrap the logic.
    const tempEvent = event as unknown as React.MouseEvent<HTMLAnchorElement>;
    handleNavClick(tempEvent, "#hero", { closeMenu: true })
  }

  return (
    // This is the simplified, fixed navigation bar.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-b border-yellow-500/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand/Logo - Using the original div structure */}
        <div
          className="cursor-pointer text-2xl font-bold"
          onClick={(event) => {
            // Replicating handleBrandClick logic for the div
            event.preventDefault(); // Added preventDefault in case the cursor is a button or other interactive element
            const tempEvent = event as unknown as React.MouseEvent<HTMLAnchorElement>;
            handleNavClick(tempEvent, "#hero", { closeMenu: true })
          }}
        >
          <span className="text-yellow-400">Cold</span>
          <span className="text-white">→</span>
          <span className="text-yellow-400">Warm</span>
        </div>

        {/* Desktop Navigation Links (Simplified) */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          {SIMPLIFIED_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-yellow-400 transition"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button - Keeping the logic from the second nav for mobile functionality */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-yellow-100 text-yellow-500 transition-transform duration-300 hover:border-yellow-200 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200 md:hidden bg-white/10"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>
      </div>

      {/* Mobile Menu Content (Simplified) */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-yellow-500/30 bg-black/95 shadow-sm shadow-yellow-900 transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col gap-3 px-6 pb-4 pt-4 text-sm font-medium text-gray-300">
          {SIMPLIFIED_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-yellow-900/50 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
                onClick={(event) => handleNavClick(event, item.href, { closeMenu: true })}
              >
                <span className="flex items-center gap-2">
                  {item.label}
                </span>
                <span className="text-xs text-yellow-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <Link
            href="/apply" // Added an action button for mobile
            onClick={(event) => handleNavClick(event, "#consultation", { closeMenu: true })}
            className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-200 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-200"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

// Keeping the HamburgerIcon component
type HamburgerIconProps = {
  isOpen: boolean
}

function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  return (
    <span className="relative flex h-5 w-6 items-center justify-center">
      <span
        className={`absolute h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
          }`}
      />
      <span
        className={`absolute h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
          }`}
      />
      <span
        className={`absolute h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
          }`}
      />
    </span>
  )
}