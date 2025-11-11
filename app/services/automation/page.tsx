import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaCogs, FaRobot, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Business Automation Solutions Egypt | Workflow & Process Automation',
  description: 'Automate your business processes and save 20+ hours per week. Custom automation solutions, API integrations, and workflow optimization. Starting from 25,000 EGP.',
  keywords: 'business automation egypt, workflow automation, process automation, api integration, zapier egypt, custom software egypt',
}

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">⚙️ Automation Solutions</span>
            </div>
            <h1 className="mb-6">Save 20+ Hours Per Week with Business Automation</h1>
            <p className="text-xl mb-8 text-white/90">
              Stop wasting time on repetitive tasks. We build custom automation solutions that streamline your operations, reduce errors, and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
              >
                Get Free Audit
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">What We Can Automate</h2>
            <p className="text-lg text-gray-600">
              From simple workflows to complex business processes—we automate it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Entry & Processing',
                description: 'Eliminate manual data entry. Auto-sync data between systems, validate inputs, generate reports automatically.',
                examples: ['Invoice processing', 'Order data sync', 'Report generation', 'Data validation']
              },
              {
                title: 'Email & Communication',
                description: 'Automate emails, notifications, and follow-ups. Never miss a lead or customer touchpoint.',
                examples: ['Welcome emails', 'Follow-up sequences', 'Order confirmations', 'Customer notifications']
              },
              {
                title: 'Sales & Marketing',
                description: 'Automate lead nurturing, social media posting, and marketing campaigns.',
                examples: ['Lead scoring', 'Social scheduling', 'Campaign automation', 'CRM updates']
              },
              {
                title: 'Operations & Logistics',
                description: 'Streamline order fulfillment, inventory management, and shipping workflows.',
                examples: ['Order processing', 'Inventory sync', 'Shipping labels', 'Supplier coordination']
              },
              {
                title: 'Customer Support',
                description: 'Automate ticket routing, FAQs, and customer onboarding processes.',
                examples: ['Ticket assignment', 'Chatbot responses', 'Onboarding workflows', 'Satisfaction surveys']
              },
              {
                title: 'Finance & Accounting',
                description: 'Automate invoicing, expense tracking, and financial reporting.',
                examples: ['Auto-invoicing', 'Expense reports', 'Payment reminders', 'Financial dashboards']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section-spacing bg-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Calculate Your ROI</h2>
              <p className="text-lg text-gray-600">
                See how much time and money you can save with automation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <FaCogs className="text-4xl text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">20-40%</div>
                  <div className="text-sm text-gray-600">Time Savings</div>
                  <p className="text-xs text-gray-500 mt-2">Typical time saved on manual tasks</p>
                </div>
                <div>
                  <FaRobot className="text-4xl text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">80-95%</div>
                  <div className="text-sm text-gray-600">Error Reduction</div>
                  <p className="text-xs text-gray-500 mt-2">Fewer mistakes with automated processes</p>
                </div>
                <div>
                  <FaChartLine className="text-4xl text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">4-8x</div>
                  <div className="text-sm text-gray-600">ROI in Year 1</div>
                  <p className="text-xs text-gray-500 mt-2">Typical return on automation investment</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-3">Example: E-commerce Order Processing</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Manual time per order:</span>
                    <span className="font-semibold">5 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Orders per month:</span>
                    <span className="font-semibold">500 orders</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span>Time saved per month:</span>
                    <span className="font-semibold text-green-600">~42 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost savings (at 100 EGP/hour):</span>
                    <span className="font-semibold text-green-600">4,200 EGP/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Automation Tools & Technologies</h2>
            <p className="text-lg text-gray-600">
              We use the best automation platforms and custom development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-semibold mb-4">No-Code Automation</h3>
              <p className="text-gray-600 text-sm mb-4">Quick setup with popular automation platforms</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Zapier</li>
                <li>• Make.com (Integromat)</li>
                <li>• n8n</li>
                <li>• Airtable Automations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-semibold mb-4">API Integrations</h3>
              <p className="text-gray-600 text-sm mb-4">Connect any systems via APIs</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• REST APIs</li>
                <li>• Webhooks</li>
                <li>• GraphQL</li>
                <li>• Database connections</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-600 text-sm mb-4">Fully custom automation solutions</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Python scripts</li>
                <li>• Node.js automation</li>
                <li>• Custom CRM/ERP</li>
                <li>• Scheduled tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Automation Pricing</h2>
            <p className="text-lg text-gray-600">
              Flexible pricing based on complexity and scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Simple Automation</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">25,000 EGP</div>
              <p className="text-gray-600 mb-6 text-sm">1-3 workflows with no-code tools</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['Zapier/Make.com setup', 'Up to 3 workflows', 'Basic integrations', 'Documentation', '2 weeks delivery'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-green-600 text-white p-6 rounded-xl shadow-medium transform md:scale-105">
              <div className="text-xs font-semibold bg-accent px-3 py-1 rounded-full inline-block mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-semibold mb-2">Standard Automation</h3>
              <div className="text-3xl font-bold mb-4">45,000 EGP</div>
              <p className="text-white/90 mb-6 text-sm">Multiple workflows + API integrations</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['5-10 workflows', 'API integrations', 'Custom logic', 'Error handling', '4 weeks delivery', '2 months support'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-accent mr-2 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Enterprise Automation</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">80,000+ EGP</div>
              <p className="text-gray-600 mb-6 text-sm">Custom CRM/ERP systems</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['Unlimited workflows', 'Custom development', 'Database design', 'Admin dashboard', '8+ weeks delivery', '6 months support'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0 text-xs" />
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
      <section className="section-spacing bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free automation audit and discover which processes can be automated to save you time and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
            >
              Get Free Audit
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="https://wa.me/201234567890"
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
