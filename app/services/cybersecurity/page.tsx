import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Cybersecurity Audits Egypt | Security Assessment & Penetration Testing',
  description: 'Protect your business with comprehensive security audits. Vulnerability assessment, penetration testing, compliance support. Starting from 15,000 EGP.',
  keywords: 'cybersecurity egypt, security audit egypt, penetration testing egypt, vulnerability assessment, security compliance',
}

export default function CybersecurityPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6">Cybersecurity Audits & Protection in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              Protect your digital assets from cyber threats. Comprehensive security assessments, vulnerability testing, and ongoing protection for Egyptian businesses.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Get Security Audit <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Vulnerability Assessment', desc: 'Comprehensive scan of your systems to identify security weaknesses. Automated and manual testing.', items: ['Network scanning', 'Web app scanning', 'Database security', 'Detailed report'] },
              { title: 'Penetration Testing', desc: 'Ethical hacking to test your defenses. Simulate real-world attacks to find exploitable vulnerabilities.', items: ['Web app pentesting', 'Network pentesting', 'Social engineering', 'Remediation guidance'] },
              { title: 'Security Policy Review', desc: 'Audit your security policies and procedures. Identify gaps and recommend improvements.', items: ['Policy assessment', 'Best practices', 'Employee training', 'Documentation'] },
              { title: 'Compliance Audits', desc: 'Ensure compliance with security standards and regulations. GDPR, ISO 27001, PCI DSS.', items: ['GDPR compliance', 'ISO 27001', 'PCI DSS', 'Industry standards'] }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <FaShieldAlt className="text-4xl text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-red-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Common Security Threats We Address</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SQL Injection', 'XSS Attacks', 'CSRF', 'Data Breaches', 'Phishing', 'Malware', 'DDoS Attacks', 'Weak Passwords'].map((threat, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-soft text-center">
                <div className="text-3xl mb-2">⚠️</div>
                <div className="font-semibold text-sm">{threat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Protect Your Business Today</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't wait for a breach. Get a comprehensive security audit and protect your business from cyber threats.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Security Audit <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
