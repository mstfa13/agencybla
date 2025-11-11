'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import MobileNav from './MobileNav'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900">
                Digital<span className="text-primary">Solutions</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary font-medium">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium">
                  <span>Services</span>
                  <FaChevronDown className="text-xs" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/services/websites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Websites & Web Apps
                    </Link>
                    <Link href="/services/mobile-apps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Mobile Apps
                    </Link>
                    <Link href="/services/automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Automation Solutions
                    </Link>
                    <Link href="/services/it-strategy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      IT Strategy
                    </Link>
                    <Link href="/services/cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Cloud Services
                    </Link>
                    <Link href="/services/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Cybersecurity
                    </Link>
                    <Link href="/services/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Graphic Design
                    </Link>
                    <Link href="/services/video" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Video Production
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/portfolio" className="text-gray-700 hover:text-primary font-medium">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">
                Contact
              </Link>
            </nav>

            {/* CTA Button (Desktop) */}
            <Link 
              href="/contact" 
              className="hidden lg:block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden touch-target text-gray-700 hover:text-primary"
              aria-label="Open menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Header
