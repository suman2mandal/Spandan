'use client';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from 'next/image';

const navLinks = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Get Help',
    href: '/get-help',
    dropdown: [
      { name: 'Rescue', href: '/get-help/rescues' },
      { name: 'Hospital', href: '/get-help/hospital' },
      { name: 'ABC Program', href: '/get-help/abc' },
    ],
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'Animal Law',
    href: '/animal-law',
  },
  {
    name: 'How to Help',
    href: '/how-to-help',
    dropdown: [
      { name: 'Volunteer', href: '/how-to-help/volunteer' },
      { name: 'Donate', href: '/how-to-help/donate' },
      { name: 'Shop', href: '/how-to-help/shop' },
      { name: 'Campaign', href: '/how-to-help/campaigns' },
      { name: 'Foster', href: '/how-to-help/foster' },
      { name: 'Adopt', href: '/how-to-help/adopt' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
  <nav className="bg-white dark:bg-gray-900 shadow-md z-50 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/SpandanLogo.png" alt="Spandan Logo" width={32} height={32} />
          <span className="font-semibold text-lg text-primary dark:text-white">Spandan</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="cursor-pointer text-gray-800 dark:text-white hover:text-green-600 font-medium"
                >
                  {link.name}
                </Link>
                <div className="absolute left-0 top-full mt-2 w-44 bg-white dark:bg-gray-900 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-100 hover:bg-green-100 dark:hover:bg-green-800 ${
                        idx === 0 ? 'rounded-t-lg' : ''
                      } ${idx === link.dropdown.length - 1 ? 'rounded-b-lg' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-green-600 font-medium"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="/how-to-help/donate"
            className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition-all font-semibold"
          >
            ❤️ Help Now
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all font-medium"
            >
              {currentTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Sidebar Overlay & Panel */}
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          mobileMenuOpen ? 'bg-opacity-30' : 'bg-opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-2">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/images/SpandanLogo.png" alt="Spandan Logo" width={32} height={32} />
            <span className="font-semibold text-lg text-primary dark:text-white">Spandan</span>
          </Link>

          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-gray-800 dark:text-white font-medium hover:text-green-600"
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.name ? null : link.name)
                      }
                      aria-label={`Toggle ${link.name} menu`}
                      className="text-gray-600 dark:text-gray-300 px-2"
                    >
                      {openDropdown === link.name ? '▲' : '▼'}
                    </button>
                  </div>
                  {openDropdown === link.name && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-800 dark:text-white font-medium hover:text-green-600"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-red-600 font-semibold hover:text-red-700"
          >
            ❤️ Help Now
          </Link>
          {mounted && (
            <button
              onClick={() => {
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all font-medium"
            >
              {currentTheme === "dark" ? "🌞 Light" : "🌙 Dark"}
            </button>
          )}
        </div>
      </div>
    </div>
  </nav>
);
}

