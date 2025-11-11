import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Us | Leading Web & Mobile Development Company Egypt',
  description: 'Learn about our mission to empower Egyptian businesses with modern web and mobile solutions. Expert team, proven results, local expertise.',
  keywords: 'about web development company egypt, it company egypt, mobile app agency egypt',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">About Our Company</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and strategists dedicated to helping Egyptian businesses thrive in the digital age.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <div className="prose max-w-none">
            <h2 className="text-center">Who We Are</h2>
            <p className="text-lg text-center text-gray-600 mb-12">
              Founded in Cairo, we specialize in building custom web and mobile solutions that drive real business results. From startups to established enterprises, we've helped dozens of Egyptian businesses transform their digital presence.
            </p>
            
            <p>
              We're not just another web agency—we're your technology partner. We take the time to understand your business, your goals, and your challenges before proposing solutions. Whether you need an e-commerce platform, mobile app, or complete digital transformation, we have the expertise to deliver.
            </p>

            <p>
              Our team combines international best practices with deep understanding of the Egyptian market. We know how to integrate local payment gateways (Paymob, Fawry), optimize for Egyptian internet speeds, and create experiences that resonate with local users.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💡', title: 'Innovation', desc: 'We stay ahead of technology trends to give our clients competitive advantages.' },
              { icon: '🤝', title: 'Partnership', desc: 'Your success is our success. We work with you, not just for you.' },
              { icon: '⚡', title: 'Excellence', desc: 'We never compromise on quality. Every project gets our best work.' },
              { icon: '📈', title: 'Results-Driven', desc: 'We measure success by your business outcomes, not just deliverables.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <FaCode className="text-4xl text-primary" />, title: 'Web Development', desc: 'Modern, fast, and scalable websites using Next.js, React, and latest technologies.' },
              { icon: <FaMobileAlt className="text-4xl text-purple-600" />, title: 'Mobile Apps', desc: 'Native iOS, Android, and cross-platform apps that users love.' },
              { icon: <FaCloud className="text-4xl text-cyan-600" />, title: 'Cloud Services', desc: 'AWS, Azure, and Google Cloud infrastructure and migration.' },
              { icon: <FaShieldAlt className="text-4xl text-red-600" />, title: 'Security', desc: 'Comprehensive security audits and protection for your digital assets.' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-primary/5">
        <div className="container-custom">
          <h2 className="text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Successful Projects' },
              { number: '40+', label: 'Happy Clients' },
              { number: '6+', label: 'Years Experience' },
              { number: '10+', label: 'Team Members' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Why Choose Us?</h2>
          <div className="space-y-4">
            {[
              'Deep understanding of the Egyptian market and local business needs',
              'Proven track record with 50+ successful projects',
              'Modern technology stack (Next.js, React, React Native, AWS)',
              'Transparent pricing with no hidden fees',
              'Comprehensive post-launch support and maintenance',
              'Local payment gateway expertise (Paymob, Fawry, Accept)',
              'Mobile-first approach (critical for Egyptian market)',
              'Fast turnaround times without compromising quality',
              'Bilingual team (Arabic & English)',
              'Results-driven approach focused on your ROI'
            ].map((point, i) => (
              <div key={i} className="flex items-start bg-white p-4 rounded-lg shadow-soft">
                <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help your business grow.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Free Consultation <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
