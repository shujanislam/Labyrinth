'use client'

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-muted-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Research
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-ml" className="hover:text-foreground">
                  AI & ML
                </Link>
              </li>
              <li>
                <Link href="/embedded" className="hover:text-foreground">
                  Embedded Systems
                </Link>
              </li>
              <li>
                <Link href="/web-tech" className="hover:text-foreground">
                  Web Technologies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mission" className="hover:text-foreground">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-foreground">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-foreground">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com" target="_blank" className="hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank" className="hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Labyrinth. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
