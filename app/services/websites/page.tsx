import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaRocket, FaMobile, FaShoppingCart, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Website & Web Application Development Egypt | Custom Web Solutions',
  description: 'Professional web development services in Egypt. E-commerce platforms, corporate websites, custom web apps. Mobile-first, SEO-optimized. Starting from 15,000 EGP.',
  keywords: 'web development egypt, website design egypt, e-commerce egypt, web application development, wordpress egypt, shopify egypt',
}

export default function WebsitesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">💻 Web Development</span>
            </div>
            <h1 className="mb-6">Professional Website & Web Application Development in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              We build fast, beautiful, and conversion-focused websites that help Egyptian businesses grow online. From simple landing pages to complex web applications—we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
              >
                Get Free Quote
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What We Build</h2>
            <p className="text-lg text-gray-600">
              Custom web solutions tailored to your business needs and Egyptian market requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaShoppingCart className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">E-commerce Platforms</h3>
              <p className="text-gray-600 mb-4">
                Full-featured online stores with Paymob and Fawry payment integration. Shopping cart, inventory management, order tracking, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Paymob & Fawry integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Mobile-optimized checkout
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Inventory management
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Order tracking & notifications
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaRocket className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Websites</h3>
              <p className="text-gray-600 mb-4">
                Professional business websites that establish credibility and generate leads. Fast, secure, and easy to update.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Modern responsive design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  SEO-optimized content
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Contact forms & chat
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Easy content management
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaMobile className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Landing Pages</h3>
              <p className="text-gray-600 mb-4">
                High-converting landing pages optimized for marketing campaigns, product launches, and lead generation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Conversion-focused design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  A/B testing ready
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Fast loading (&lt; 2s)
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Analytics integration
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaChartLine className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Web Applications</h3>
              <p className="text-gray-600 mb-4">
                Complex web apps for specific business needs—CRM, ERP, booking systems, dashboards, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Custom functionality
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  User authentication & roles
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Database integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  API development
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">WordPress Websites</h3>
              <p className="text-gray-600 mb-4">
                Custom WordPress sites with premium themes and plugins. Easy for you to update content yourself.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Custom theme development
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Plugin customization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  WooCommerce for e-commerce
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Training & support
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Progressive Web Apps (PWAs)</h3>
              <p className="text-gray-600 mb-4">
                App-like experiences that work on any device. Fast, reliable, and installable—no app store needed.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Offline functionality
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Push notifications
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Installable on home screen
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                  Lightning fast performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">
              A proven 4-step approach that delivers quality results on time and within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We start by understanding your business goals, target audience, and requirements. We create a detailed project plan with timelines and milestones.',
                deliverables: ['Requirements document', 'Project timeline', 'Cost estimate']
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Our designers create mobile-first wireframes and high-fidelity mockups. You review and approve the design before development begins.',
                deliverables: ['Wireframes', 'Visual designs', 'Interactive prototype']
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Our developers build your website using modern technologies. We test on all devices and browsers to ensure everything works perfectly.',
                deliverables: ['Functional website', 'Quality assurance report', 'Performance optimization']
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We deploy your website, configure analytics, and provide training. Ongoing support and maintenance available as needed.',
                deliverables: ['Live website', 'Training materials', 'Support documentation']
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{phase.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((item, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600">
              Modern, reliable technologies that deliver exceptional performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Next.js', description: 'React Framework' },
              { name: 'React', description: 'UI Library' },
              { name: 'WordPress', description: 'CMS' },
              { name: 'Shopify', description: 'E-commerce' },
              { name: 'Node.js', description: 'Backend' },
              { name: 'Tailwind CSS', description: 'Styling' },
              { name: 'TypeScript', description: 'Type Safety' },
              { name: 'MySQL', description: 'Database' },
              { name: 'MongoDB', description: 'NoSQL DB' },
              { name: 'AWS', description: 'Cloud Hosting' },
              { name: 'Vercel', description: 'Deployment' },
              { name: 'Stripe', description: 'Payments' }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-soft text-center hover:shadow-medium transition-all">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-sm mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Transparent Pricing</h2>
            <p className="text-lg text-gray-600">
              Clear, honest pricing with no hidden fees. Choose the package that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Landing Page</h3>
              <div className="text-3xl font-bold text-primary mb-4">15,000 EGP</div>
              <p className="text-gray-600 mb-6">Perfect for campaigns and lead generation</p>
              <ul className="space-y-3 mb-6">
                {['1-2 pages', 'Mobile responsive', 'Contact form', 'SEO basics', '2 weeks delivery'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-primary text-white p-6 rounded-xl shadow-medium transform md:scale-105">
              <div className="text-xs font-semibold bg-accent px-3 py-1 rounded-full inline-block mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-semibold mb-2">Business Website</h3>
              <div className="text-3xl font-bold mb-4">35,000 EGP</div>
              <p className="text-white/90 mb-6">Complete corporate website solution</p>
              <ul className="space-y-3 mb-6">
                {['5-10 pages', 'Custom design', 'CMS integration', 'Advanced SEO', '4 weeks delivery', '1 month support'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <div className="text-3xl font-bold text-primary mb-4">60,000+ EGP</div>
              <p className="text-gray-600 mb-6">Full online store with payments</p>
              <ul className="space-y-3 mb-6">
                {['Unlimited products', 'Paymob/Fawry', 'Inventory system', 'Order management', '6-8 weeks delivery', '3 months support'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's turn your vision into a beautiful, high-performing website. Get a free consultation and detailed quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
            >
              Get Free Quote
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="https://wa.me/201557525158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
