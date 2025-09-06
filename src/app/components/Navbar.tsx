'use client'

import * as React from "react"
import Link from "next/link"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-50">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo (desktop) */}
        <h3 className="text-lg font-semibold hidden sm:block">Labyrinth</h3>

        {/* Mobile: Hamburger + centered logo */}
        <div className="sm:hidden flex items-center justify-between w-full bg-transparent">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <h3 className="text-lg font-semibold mx-auto">Labyrinth</h3>
        </div>

        {/* Desktop navigation */}
        <div className="hidden sm:flex sm:space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {links.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link href={link.href}>{link.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-transparent text-white w-full shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium hover:text-foreground transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
