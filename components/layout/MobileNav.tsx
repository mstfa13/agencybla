'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-strong overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="touch-target text-gray-700 hover:text-primary"
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <Link 
            href="/" 
            onClick={onClose}
            className="block py-3 text-gray-700 hover:text-primary font-medium border-b"
          >
            Home
          </Link>

          {/* Services Accordion */}
          <div className="border-b">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-primary font-medium"
            >
              <span>Services</span>
              {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isServicesOpen && (
              <div className="pl-4 pb-2">
                <Link 
                  href="/services/websites" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Websites & Web Apps
                </Link>
                <Link 
                  href="/services/mobile-apps" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Mobile Apps
                </Link>
                <Link 
                  href="/services/automation" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Automation Solutions
                </Link>
                <Link 
                  href="/services/it-strategy" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  IT Strategy
                </Link>
                <Link 
                  href="/services/cloud" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Cloud Services
                </Link>
                <Link 
                  href="/services/cybersecurity" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Cybersecurity
                </Link>
                <Link 
                  href="/services/design" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Graphic Design
                </Link>
                <Link 
                  href="/services/video" 
                  onClick={onClose}
                  className="block py-2 text-sm text-gray-600 hover:text-primary"
                >
                  Video Production
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/portfolio" 
            onClick={onClose}
            className="block py-3 text-gray-700 hover:text-primary font-medium border-b"
          >
            Portfolio
          </Link>

          <Link 
            href="/blog" 
            onClick={onClose}
            className="block py-3 text-gray-700 hover:text-primary font-medium border-b"
          >
            Blog
          </Link>

          <Link 
            href="/about" 
            onClick={onClose}
            className="block py-3 text-gray-700 hover:text-primary font-medium border-b"
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            onClick={onClose}
            className="block py-3 text-gray-700 hover:text-primary font-medium border-b"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            onClick={onClose}
            className="block mt-6 px-6 py-3 bg-primary text-white text-center rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Free Quote
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
