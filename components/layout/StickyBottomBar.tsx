'use client'

import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaFileAlt } from 'react-icons/fa'

const StickyBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-strong lg:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        {/* Call Button */}
        <a
          href="tel:+201234567890"
          className="flex flex-col items-center justify-center py-2 px-3 bg-success text-white rounded-lg hover:bg-opacity-90 transition-all touch-target"
        >
          <FaPhone className="text-lg mb-1" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-3 bg-[#25D366] text-white rounded-lg hover:bg-opacity-90 transition-all touch-target"
        >
          <FaWhatsapp className="text-xl mb-1" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>

        {/* Get Quote Button */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all touch-target"
        >
          <FaFileAlt className="text-lg mb-1" />
          <span className="text-xs font-semibold">Get Quote</span>
        </Link>
      </div>
    </div>
  )
}

export default StickyBottomBar
