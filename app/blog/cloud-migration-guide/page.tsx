import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaCheckCircle, FaCloud } from 'react-icons/fa'

export const metadata = {
  title: 'Complete Guide to Cloud Migration for Egyptian Businesses | Fikra Agency',
  description: 'Step-by-step guide to migrating your business to the cloud. AWS, Azure, and Google Cloud comparison for Egyptian companies.',
}

export default function CloudMigrationGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">Cloud Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Guide to Cloud Migration for Egyptian Businesses</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center"><FaCalendar className="mr-2 text-accent" />January 3, 2024</div>
              <div className="flex items-center"><FaClock className="mr-2 text-accent" />12 min read</div>
            </div>
          </div>
        </div>
      </section>
      <article className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Cloud migration is no longer optional for Egyptian businesses wanting to stay competitive. This comprehensive guide walks you through every step of moving your business to the cloud, from planning to execution.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Why Egyptian Businesses Need Cloud Migration</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div><div className="text-4xl font-bold text-accent mb-2">50%</div><div className="text-sm">Cost Reduction</div></div>
                <div><div className="text-4xl font-bold text-accent mb-2">99.9%</div><div className="text-sm">Uptime Guaranteed</div></div>
                <div><div className="text-4xl font-bold text-accent mb-2">3x</div><div className="text-sm">Faster Scaling</div></div>
              </div>
            </div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Top Cloud Providers for Egyptian Businesses</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">AWS (Amazon Web Services)</h3>
                  <p className="text-gray-700 mb-4">Market leader with the most comprehensive services</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Pros:</h4>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />Largest service catalog</li><li><FaCheckCircle className="inline text-accent mr-2" />Bahrain region (low latency)</li><li><FaCheckCircle className="inline text-accent mr-2" />Best for scalability</li><li><FaCheckCircle className="inline text-accent mr-2" />Strong Egyptian support</li></ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Pricing:</h4>
                      <p className="text-sm text-gray-700 mb-2">Pay-as-you-go model</p>
                      <p className="text-sm text-gray-700 mb-2">Starting from $10-50/month</p>
                      <p className="text-sm text-gray-700"><strong>Best For:</strong> Growing businesses, e-commerce, SaaS applications</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Microsoft Azure</h3>
                  <p className="text-gray-700 mb-4">Best for businesses using Microsoft products</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Pros:</h4>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />Seamless Office 365 integration</li><li><FaCheckCircle className="inline text-accent mr-2" />Strong enterprise features</li><li><FaCheckCircle className="inline text-accent mr-2" />Hybrid cloud capabilities</li><li><FaCheckCircle className="inline text-accent mr-2" />Active Directory integration</li></ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700"><strong>Best For:</strong> Enterprises using Microsoft ecosystem, Windows-based applications</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Google Cloud Platform</h3>
                  <p className="text-gray-700 mb-4">Best for data analytics and machine learning</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Pros:</h4>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />Best AI/ML tools</li><li><FaCheckCircle className="inline text-accent mr-2" />Superior data analytics</li><li><FaCheckCircle className="inline text-accent mr-2" />Competitive pricing</li><li><FaCheckCircle className="inline text-accent mr-2" />Excellent for BigQuery</li></ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700"><strong>Best For:</strong> Data-driven businesses, startups, companies using Google Workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Cloud Migration Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div><h3 className="text-xl font-bold text-primary mb-2">Assessment & Planning</h3><p className="text-sm text-gray-700">Analyze current infrastructure, identify migration candidates, set goals and timeline</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div><h3 className="text-xl font-bold text-primary mb-2">Choose Cloud Provider</h3><p className="text-sm text-gray-700">Select based on your needs: AWS for scalability, Azure for Microsoft integration, GCP for data analytics</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div><h3 className="text-xl font-bold text-primary mb-2">Pilot Migration</h3><p className="text-sm text-gray-700">Start with non-critical workloads, test thoroughly, learn from the process</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div><h3 className="text-xl font-bold text-primary mb-2">Full Migration</h3><p className="text-sm text-gray-700">Migrate remaining workloads in phases, minimize downtime with proper planning</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div><h3 className="text-xl font-bold text-primary mb-2">Optimization</h3><p className="text-sm text-gray-700">Monitor costs, optimize resources, implement best practices, train team</p></div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Cost Breakdown</h2>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">Typical Egyptian SME (50 employees):</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium">Current On-Premise Setup (Annual)</span>
                    <span className="text-red-600 font-bold">120,000 - 200,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium">Cloud Infrastructure (Annual)</span>
                    <span className="text-accent font-bold">60,000 - 100,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-bold text-lg">Annual Savings</span>
                    <span className="text-accent font-bold text-xl">60,000 - 100,000 EGP</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Common Challenges & Solutions</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">Challenge: Data Security Concerns</h4>
                  <p className="text-sm text-gray-700"><strong>Solution:</strong> Cloud providers offer bank-level security with encryption, regular audits, and compliance certifications. Often more secure than on-premise.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">Challenge: Internet Dependency</h4>
                  <p className="text-sm text-gray-700"><strong>Solution:</strong> Use hybrid cloud approach, implement offline capabilities where needed, choose nearest data center (Bahrain for Egypt).</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">Challenge: Team Training</h4>
                  <p className="text-sm text-gray-700"><strong>Solution:</strong> Invest in cloud certifications for key staff, partner with experienced cloud consultants like Fikra Agency.</p>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready for Cloud Migration?</h3>
                <p className="text-white mb-6">Fikra Agency provides end-to-end cloud migration services for Egyptian businesses. We handle planning, migration, and ongoing optimization.</p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">Get Free Cloud Assessment</Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
