import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'IT Strategy & Consulting Egypt | Digital Transformation Services',
  description: 'Strategic IT consulting for Egyptian businesses. Technology roadmap, digital transformation, infrastructure assessment. Starting from 10,000 EGP.',
  keywords: 'it consulting egypt, digital transformation egypt, it strategy, technology consulting, system architecture',
}

export default function ITStrategyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6">IT Strategy & Digital Transformation Consulting</h1>
            <p className="text-xl mb-8 text-white/90">
              Align technology with your business goals. We provide strategic IT guidance to maximize ROI, optimize operations, and futureproof your business.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Schedule Free Consultation <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Digital Transformation Strategy', desc: 'Roadmap for modernizing your business with digital technologies. Process analysis, technology selection, change management.', price: '15,000 EGP' },
              { title: 'Technology Stack Selection', desc: 'Choose the right technologies for your needs. Platform evaluation, cost-benefit analysis, scalability planning.', price: '10,000 EGP' },
              { title: 'IT Infrastructure Assessment', desc: 'Comprehensive audit of your current IT setup. Security analysis, performance review, improvement recommendations.', price: '12,000 EGP' },
              { title: 'System Architecture Design', desc: 'Design scalable, secure system architectures. Microservices, APIs, database design, cloud architecture.', price: '20,000 EGP' },
              { title: 'Vendor Evaluation & Management', desc: 'Help selecting and managing technology vendors. RFP preparation, contract negotiation, vendor coordination.', price: '8,000 EGP' },
              { title: 'IT Budget & Resource Planning', desc: 'Create realistic IT budgets and resource plans. Cost optimization, hiring strategies, timeline planning.', price: '10,000 EGP' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="text-orange-600 font-bold">Starting from {service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Build Your IT Strategy?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Free Consultation <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
