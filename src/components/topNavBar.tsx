"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/get-help', label: 'Get Help' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/animal-law', label: 'Animal Law' },
  { href: '/how-to-help', label: 'How to Help' },
  { href: '/blog', label: 'Blog' },
];

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-teal-600 font-bold text-xl flex items-center gap-1 focus:outline-none focus:ring-0 active:outline-none">
            <Image
              src="/images/SpandanLogo.png"
              alt="Spandan Logo"
              width={35}
              height={35}
              className="object-contain"
            />
            Spandan
          </Link>
        </div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition hover:text-teal-600 ${
                  pathname === href ? 'text-teal-600 font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-4 inline-block rounded-md bg-teal-600 px-4 py-2 text-sm text-white hover:bg-teal-700 transition"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="rounded bg-gray-100 p-2 text-gray-600 hover:text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block rounded px-3 py-2 text-sm font-medium transition hover:bg-gray-100 ${
                  pathname === href ? 'text-teal-600 font-semibold' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block rounded bg-teal-600 px-3 py-2 text-sm font-medium text-white text-center hover:bg-teal-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
