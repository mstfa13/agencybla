import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Fashion E-commerce Platform Case Study | Portfolio',
  description: 'How we built a complete e-commerce solution that increased online sales by 300% for a fashion retail company in Cairo.',
}

export default function EcommerceFashionCaseStudy() {
  return (
    <>
      <section className="bg-gray-50 py-8">
        <div className="container-custom">
          <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary-dark font-semibold">
            <FaArrowLeft className="mr-2" /> Back to Portfolio
          </Link>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <div className="text-sm text-primary font-semibold mb-4">WEBSITES & APPS</div>
          <h1 className="mb-6">Fashion E-commerce Platform</h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete e-commerce solution with inventory management, payment integration, and mobile app for a leading fashion retailer in Cairo.
          </p>

          <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center text-8xl mb-12">
            🛍️
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Client</div>
              <div className="font-semibold">Fashion Retail Company</div>
              <div className="text-sm text-gray-600">Cairo, Egypt</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Timeline</div>
              <div className="font-semibold">4 Months</div>
              <div className="text-sm text-gray-600">Design to Launch</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Services</div>
              <div className="font-semibold">Web + Mobile App</div>
              <div className="text-sm text-gray-600">Full Stack Development</div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2>The Challenge</h2>
            <p>
              Our client, a growing fashion retailer with 3 physical stores in Cairo, was losing sales to online competitors. They had an outdated website that didn't support online payments, had no mobile experience, and couldn't handle their growing inventory of 5,000+ products.
            </p>
            <p className="text-gray-600">
              <strong>Key Problems:</strong>
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>No online payment processing (losing 70% of potential online sales)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Poor mobile experience (60% of traffic was mobile)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Manual inventory management causing stock issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span>Slow website (5+ seconds load time)</span>
              </li>
            </ul>

            <h2>Our Solution</h2>
            <p>
              We built a complete e-commerce ecosystem from scratch using modern technologies that could scale with the business.
            </p>

            <h3>1. Modern E-commerce Platform</h3>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Next.js for lightning-fast performance (&lt; 2s load time)</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Product catalog with advanced filtering and search</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Real-time inventory syncing across all channels</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Wishlist, cart, and one-click checkout</li>
            </ul>

            <h3>2. Egyptian Payment Integration</h3>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Paymob integration (credit/debit cards, mobile wallets)</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Cash on delivery option</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Installment payment support</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Fawry payment points</li>
            </ul>

            <h3>3. Mobile Apps (iOS & Android)</h3>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline text-green-600 mr-2" />React Native cross-platform app</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Push notifications for offers and order updates</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />In-app purchases</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Offline browsing capability</li>
            </ul>

            <h3>4. Admin Dashboard</h3>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Inventory management system</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Order processing and fulfillment</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Sales analytics and reporting</li>
              <li><FaCheckCircle className="inline text-green-600 mr-2" />Customer management CRM</li>
            </ul>

            <h2>The Process</h2>
            <div className="space-y-4 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="font-semibold mb-2">Week 1-2: Discovery & Planning</div>
                <p className="text-gray-600 text-sm">Analyzed existing website, interviewed staff, mapped user journeys, defined features, created wireframes.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="font-semibold mb-2">Week 3-6: Design & Development</div>
                <p className="text-gray-600 text-sm">UI/UX design, brand integration, frontend development, backend API, database setup, payment integration.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="font-semibold mb-2">Week 7-10: Mobile App Development</div>
                <p className="text-gray-600 text-sm">React Native app development, API integration, push notifications setup, app store submission.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="font-semibold mb-2">Week 11-14: Testing & Launch</div>
                <p className="text-gray-600 text-sm">Quality assurance testing, user acceptance testing, data migration, staff training, soft launch, full launch.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="font-semibold mb-2">Week 15-16: Post-Launch Support</div>
                <p className="text-gray-600 text-sm">Bug fixes, performance optimization, user feedback implementation, marketing support.</p>
              </div>
            </div>

            <h2>Technologies Used</h2>
            <div className="flex flex-wrap gap-2 not-prose">
              {['Next.js 14', 'React Native', 'Node.js', 'MongoDB', 'Paymob API', 'Firebase', 'AWS S3', 'Vercel', 'Google Analytics'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">{tech}</span>
              ))}
            </div>

            <h2>The Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-700">Increase in online sales within 6 months</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-700">Monthly website visitors</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">5,000+</div>
                <div className="text-gray-700">Mobile app downloads</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.8/5</div>
                <div className="text-gray-700">Customer satisfaction rating</div>
              </div>
            </div>

            <h2>Client Testimonial</h2>
            <blockquote className="border-l-4 border-primary pl-6 italic not-prose">
              <p className="text-lg text-gray-700 mb-4">
                "Working with this team was a game-changer for our business. They didn't just build us a website—they created an entire digital ecosystem that transformed how we operate. Our online sales have tripled, and customers love the mobile app. The best investment we've made."
              </p>
              <footer className="text-gray-600">
                <strong>— Ahmed Khalil</strong>, CEO, Fashion Retail Company
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready for Similar Results?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can transform your business with a custom digital solution.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Start Your Project <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
