import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaPalette } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Graphic Design Services Egypt | Branding & Visual Design',
  description: 'Professional graphic design and branding services in Egypt. Logos, social media graphics, UI/UX design, print materials. Starting from 5,000 EGP.',
  keywords: 'graphic design egypt, logo design egypt, branding egypt, ui ux design egypt, social media design',
}

export default function DesignPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-pink-600 to-pink-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6">Graphic Design & Branding in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              Stand out with professional visual design that connects with your Egyptian audience. From logos to complete brand identities—we bring your vision to life.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Get Free Design Consultation <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Design Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Logo & Brand Identity', desc: 'Unique logos and complete brand identity systems.', items: ['Logo design', 'Color palette', 'Typography', 'Brand guidelines'], price: '5,000 EGP' },
              { title: 'Social Media Graphics', desc: 'Eye-catching designs for all social platforms.', items: ['Post templates', 'Story designs', 'Cover images', 'Ad creatives'], price: '3,000 EGP' },
              { title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces for apps and websites.', items: ['Wireframes', 'High-fidelity mockups', 'Interactive prototypes', 'Design systems'], price: '12,000 EGP' },
              { title: 'Print Design', desc: 'Professional print materials for your business.', items: ['Business cards', 'Brochures', 'Flyers', 'Posters'], price: '2,000 EGP' },
              { title: 'Packaging Design', desc: 'Product packaging that sells.', items: ['Box design', 'Label design', '3D mockups', 'Print-ready files'], price: '8,000 EGP' },
              { title: 'Infographics', desc: 'Visual storytelling for complex information.', items: ['Data visualization', 'Process diagrams', 'Comparison charts', 'Timeline graphics'], price: '4,000 EGP' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <FaPalette className="text-4xl text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-pink-600 mr-2 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-pink-600 font-bold">From {service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Design Process</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { step: '1', title: 'Brief & Research', desc: 'We understand your brand, audience, and goals.' },
              { step: '2', title: 'Concept Development', desc: 'Initial design concepts based on research and strategy.' },
              { step: '3', title: 'Feedback & Revisions', desc: 'You review and provide feedback. We refine the designs.' },
              { step: '4', title: 'Final Delivery', desc: 'All files delivered in required formats with usage guidelines.' }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft flex items-center gap-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-pink-600">{phase.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-pink-600 to-pink-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Create Stunning Designs?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's bring your brand to life with professional graphic design. Get a free consultation and quote.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Free Consultation <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
