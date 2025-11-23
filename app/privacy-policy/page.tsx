import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fikra Agency',
  description: 'Learn how Fikra Agency collects, uses, stores, and protects your personal data. Your privacy rights and our compliance approach.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container-custom">
          <Link href="/" className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/80 max-w-3xl text-lg">Last Updated: November 23, 2025</p>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft">
            <p className="text-gray-700 text-lg mb-8">This Privacy Policy explains how Fikra Agency ("we", "our", "us") collects, uses, discloses, and protects personal information when you visit our website, engage our services, or communicate with us. We are committed to protecting your privacy and handling your data transparently and securely.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Contact Information:</strong> Name, email, phone number submitted via forms or direct communication.</li>
                <li><strong>Business Details:</strong> Company name, industry, project requirements, approximate budget.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, pages visited, time on page (via analytics tools).</li>
                <li><strong>Usage Data:</strong> How you interact with our site (e.g., clicks, scroll depth) to improve UX and performance.</li>
                <li><strong>Communication Records:</strong> Emails, chat messages, proposals, and notes for project execution.</li>
                <li><strong>Payment Information:</strong> Processed securely by third-party gateways (we never store full card numbers).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>To respond to inquiries, provide quotes, and deliver contracted services.</li>
                <li>To communicate project updates, technical support, and service improvements.</li>
                <li>To analyze website performance and optimize user experience.</li>
                <li>To personalize content relevant to your business needs.</li>
                <li>To comply with legal obligations and enforce contractual rights.</li>
                <li>To maintain security and prevent fraud or misuse.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Legal Bases for Processing (EU / International Visitors)</h2>
              <p className="text-gray-700 mb-4">If you access our site from the EU/EEA or other jurisdictions with data protection laws, we rely on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Consent:</strong> When you voluntarily submit forms or opt-in for communications.</li>
                <li><strong>Contract Performance:</strong> Processing necessary to deliver requested services.</li>
                <li><strong>Legitimate Interests:</strong> Improving services, marketing (non-intrusive), fraud prevention.</li>
                <li><strong>Legal Obligation:</strong> Retaining invoices, complying with regulatory inquiries.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">We may use cookies and similar technologies (e.g., local storage, analytics scripts) to:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Measure site performance and traffic sources.</li>
                <li>Detect issues and improve stability.</li>
                <li>Remember basic form preferences during browsing.</li>
              </ul>
              <p className="text-gray-700 mt-4">You can control cookies in your browser settings. Disabling some may affect site functionality.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Service Providers</h2>
              <p className="text-gray-700 mb-4">We may share limited data with trusted providers solely to deliver our services:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Hosting & Infrastructure:</strong> Vercel / cloud platforms for secure deployment.</li>
                <li><strong>Payment Gateways:</strong> Paymob, Fawry, or other PSPs (we do not store card details).</li>
                <li><strong>Analytics Tools:</strong> Privacy-aware analytics (e.g., plausible / custom dashboards).</li>
                <li><strong>Communication Tools:</strong> Email, scheduling, or project management platforms.</li>
              </ul>
              <p className="text-gray-700 mt-4">All providers are selected for security, reliability, and compliance. They are contractually restricted from misuse.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Data Retention</h2>
              <p className="text-gray-700">We retain personal data only as long as necessary for service delivery, legal compliance, accounting, and resolving disputes. Non-essential data may be anonymized or securely deleted after inactivity (typically 24 months).</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement reasonable technical and organizational measures:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Encrypted transport (HTTPS / TLS)</li>
                <li>Limited access controls and role-based permissions</li>
                <li>Secure deployment pipelines and monitoring</li>
                <li>Routine code reviews and vulnerability mitigation</li>
              </ul>
              <p className="text-gray-700 mt-4">While no system is perfectly secure, we strive to follow industry best practices to safeguard data.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Your Rights</h2>
              <p className="text-gray-700 mb-4">Depending on jurisdiction, you may have rights to:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Access a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion (where not legally required to retain)</li>
                <li>Object to certain processing (e.g., direct marketing)</li>
                <li>Withdraw consent for future processing</li>
              </ul>
              <p className="text-gray-700 mt-4">To exercise rights, email: <strong>privacy@fikra.agency</strong>. We will respond within 30 days.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">9. International Transfers</h2>
              <p className="text-gray-700">Data may be processed in regions where our infrastructure or providers operate. We take steps to ensure adequate protection aligned with applicable laws.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-700">Our services are not directed to children under 13. We do not knowingly collect data from minors. If you believe a child provided data, contact us for prompt removal.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700">We may update this Privacy Policy to reflect changes in law, technology, or operations. The "Last Updated" date will be revised. Material changes may be communicated via prominent notice.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">12. Contact</h2>
              <p className="text-gray-700">Questions or requests: <strong>privacy@fikra.agency</strong> or through our <Link href="/contact" className="text-accent hover:underline">contact page</Link>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Disclaimer</h2>
              <p className="text-gray-700">This Privacy Policy is provided for informational purposes and does not constitute formal legal advice. For binding compliance assessments, consult a qualified legal professional familiar with Egyptian and international data protection laws.</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
