import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Terms of Service | Fikra Agency',
  description: 'Review the terms and conditions governing use of Fikra Agency services, website access, and client relationships.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/80 max-w-3xl text-lg">Last Updated: November 23, 2025</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft">
            <p className="text-gray-700 text-lg mb-8">These Terms of Service ("Terms") govern your access to and use of the Fikra Agency website and our services. By engaging with us or using any part of our site you agree to these Terms. If you do not agree, please discontinue use immediately.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Services Overview</h2>
              <p className="text-gray-700">We provide web development, mobile application development, automation solutions, IT strategy consulting, cloud services, cybersecurity, design, and related digital services. Specific deliverables, timelines, and pricing are defined in project proposals or service agreements.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Provide accurate information, requirements, and timely feedback.</li>
                <li>Ensure you hold rights to all content (logos, trademarks, data) supplied to us.</li>
                <li>Respond to approval requests within agreed timeframes to avoid delays.</li>
                <li>Maintain secure access to any shared credentials or systems.</li>
                <li>Comply with all applicable laws regarding content and data usage.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Project & Delivery</h2>
              <p className="text-gray-700 mb-4">Project schedules are estimates and depend on client responsiveness. Scope changes (additional features, revisions beyond agreed rounds) may require timeline adjustments and supplemental fees. Delays caused by missing client input may extend delivery without penalty.</p>
              <p className="text-gray-700">Upon final delivery and payment, you receive rights to use agreed deliverables. We may retain limited archival copies for record and portfolio display unless expressly prohibited.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">Unless otherwise stated in a written agreement:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Client-provided materials remain client property.</li>
                <li>Custom code, designs, and assets developed for a project transfer to the client upon full payment.</li>
                <li>We retain internal rights to reusable components, libraries, knowledge, and methodologies.</li>
                <li>We may showcase non-confidential work results for portfolio / marketing purposes.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Payments & Fees</h2>
              <p className="text-gray-700 mb-4">Payment terms are defined in proposals (e.g., deposits, milestone payments, or full upfront for smaller projects). Accepted methods may include bank transfer, local gateways (Paymob, Fawry), or other approved channels.</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Deposits are generally non-refundable once work begins.</li>
                <li>Late payments may pause progress until settled.</li>
                <li>Third-party costs (hosting, licenses, plugins, APIs) are billed separately unless specified as included.</li>
                <li>Maintenance or support beyond warranty period requires separate agreement.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Confidentiality</h2>
              <p className="text-gray-700">We treat client-provided sensitive business information as confidential and will not disclose it except: (a) when required by law, (b) with client permission, or (c) to trusted subcontractors bound by confidentiality for fulfilling the project.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Warranties & Support</h2>
              <p className="text-gray-700 mb-4">We warrant delivered solutions against critical defects (security vulnerabilities, blocking bugs) for a limited period (typically 30 days) after launch, assuming no unauthorized modifications.</p>
              <p className="text-gray-700">Support, updates, feature additions, or optimization outside warranty terms require a maintenance or retainer agreement.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">To the maximum extent permitted by law, Fikra Agency is not liable for indirect, incidental, consequential, or special damages (lost profits, lost data, business interruption) arising from service use. Total liability shall not exceed the amount paid by the client for the specific project giving rise to the claim.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">You agree not to use delivered solutions or our communication channels to engage in illegal activity, distribute malicious software, infringe intellectual property rights, or violate privacy laws.</p>
              <p className="text-gray-700">We reserve the right to suspend cooperation if misuse, fraud, or harmful activity is detected.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Third-Party Services & Dependencies</h2>
              <p className="text-gray-700">Integrations (payment gateways, hosting, APIs) are subject to their respective terms. We are not responsible for outages, price changes, or policy shifts of third-party providers, but will assist in mitigation where feasible.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Termination</h2>
              <p className="text-gray-700">Either party may terminate a project agreement for material breach if not cured within a reasonable notice period (typically 10 business days). Fees for completed work up to termination remain payable.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law</h2>
              <p className="text-gray-700">These Terms are governed by the laws of the Arab Republic of Egypt. Disputes shall be subject to the jurisdiction of competent Egyptian courts unless mutually agreed alternative dispute resolution is pursued.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700">We may update these Terms to reflect operational or legal changes. The "Last Updated" date will be revised. Continued use after changes constitutes acceptance.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">14. Contact</h2>
              <p className="text-gray-700">For questions, clarifications, or formal notices: <strong>legal@fikra.agency</strong> or via our <Link href="/contact" className="text-accent hover:underline">contact page</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">15. Disclaimer</h2>
              <p className="text-gray-700">This Terms of Service document is provided for general guidance only and does not constitute formal legal advice. For legally binding contractual language or compliance-specific concerns, consult a qualified attorney.</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
