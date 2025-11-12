import Link from 'next/link'
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">💡</span>
              </div>
              <span className="font-bold text-lg text-white">
                Fikra<span className="text-accent"> Agency</span>
              </span>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              Bright ideas, bold solutions. We illuminate your path to digital success with innovative web and mobile solutions crafted for Egyptian businesses.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sm" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/websites" className="hover:text-accent transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-accent transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="hover:text-accent transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="hover:text-accent transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-accent transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-accent flex-shrink-0" />
                <a href="tel:+201234567890" className="hover:text-accent-light transition-colors">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <a href="mailto:info@fikra.agency" className="hover:text-accent-light transition-colors">
                  info@fikra.agency
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left text-gray-400">
              © {currentYear} Fikra Agency. All rights reserved. 💡
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
