'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown, FaArrowRight } from 'react-icons/fa'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What services do you offer?',
        a: 'We offer complete web development (Next.js, React, WordPress), mobile app development (iOS, Android, cross-platform), business automation, IT consulting, cloud services, cybersecurity audits, graphic design, and video production.'
      },
      {
        q: 'Do you work with businesses outside Egypt?',
        a: 'Yes! While we\'re based in Cairo and specialize in the Egyptian market, we work with clients worldwide. We\'re experienced in international projects and different time zones.'
      },
      {
        q: 'How long have you been in business?',
        a: 'We\'ve been providing web and mobile development services in Egypt for over 6 years, completing 50+ successful projects for clients ranging from startups to established enterprises.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How much does a website cost?',
        a: 'Pricing varies based on complexity. Landing pages start from 15,000 EGP, business websites from 35,000 EGP, and e-commerce sites from 60,000 EGP. Custom web applications are quoted individually based on requirements.'
      },
      {
        q: 'How much does a mobile app cost?',
        a: 'Simple mobile apps start from 40,000 EGP, standard apps from 70,000 EGP, and complex apps from 120,000+ EGP. The final price depends on features, platforms (iOS/Android), and integrations needed.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, credit/debit cards via Egyptian payment gateways (Paymob, Fawry), and cash for local clients in Cairo. Payment is typically 30-50% upfront, with the remainder paid in milestones.'
      },
      {
        q: 'Do you offer payment plans or installments?',
        a: 'Yes, for projects over 50,000 EGP, we can arrange flexible payment plans based on project milestones. Contact us to discuss options that work for your budget.'
      }
    ]
  },
  {
    category: 'Technical Questions',
    questions: [
      {
        q: 'What technologies do you use?',
        a: 'We use modern technologies: Next.js 14, React, TypeScript, Node.js for web development; React Native and Flutter for mobile apps; AWS, Azure, and Google Cloud for cloud services. We choose the best technology stack for each project.'
      },
      {
        q: 'Can you integrate Egyptian payment gateways?',
        a: 'Absolutely! We have extensive experience integrating Paymob, Fawry, Accept, and other Egyptian payment solutions. We handle all technical aspects including test environments and production setup.'
      },
      {
        q: 'Will my website be mobile-friendly?',
        a: 'Yes, all our websites are mobile-first and fully responsive. With 60%+ of Egyptian traffic coming from mobile devices, we prioritize mobile experience in every project.'
      },
      {
        q: 'Do you provide hosting?',
        a: 'We can set up hosting for you on reliable providers like Vercel, AWS, or Egyptian hosting companies. We handle all technical setup and configuration. Alternatively, you can use your own hosting and we\'ll deploy there.'
      },
      {
        q: 'Will I own the code and design?',
        a: 'Yes, upon final payment, you own all code, designs, and files. We provide complete source code and documentation. You\'re free to host it anywhere or hire other developers to maintain it.'
      }
    ]
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        q: 'How long does it take to build a website?',
        a: 'Timeline depends on complexity: Landing pages: 2-3 weeks, Business websites: 4-6 weeks, E-commerce sites: 6-10 weeks, Custom web apps: 8-16 weeks. We provide detailed timelines during project planning.'
      },
      {
        q: 'How long does it take to build a mobile app?',
        a: 'Simple apps take 6-8 weeks, standard apps 10-14 weeks, and complex apps 16-24 weeks. Timeline includes design, development, testing, and app store submission.'
      },
      {
        q: 'What is your development process?',
        a: 'We follow a structured process: 1) Discovery & Planning (requirements, wireframes), 2) Design (UI/UX mockups, feedback), 3) Development (coding, weekly updates), 4) Testing (QA, bug fixes), 5) Launch (deployment, training), 6) Support (maintenance, updates).'
      },
      {
        q: 'How many revisions do I get?',
        a: 'We include 2-3 rounds of revisions in the design phase and 1-2 rounds for the final product. Additional revisions are charged separately to keep projects on schedule and within budget.'
      },
      {
        q: 'Can I see progress during development?',
        a: 'Yes! We provide regular updates (weekly or bi-weekly) and access to a staging environment where you can see the work in progress and provide feedback throughout development.'
      }
    ]
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        q: 'Do you provide post-launch support?',
        a: 'Yes, we include 30 days of free bug fixes after launch. We also offer monthly maintenance packages (2,000-10,000 EGP/month) covering updates, security patches, backups, and technical support.'
      },
      {
        q: 'What if something breaks after launch?',
        a: 'We provide a 30-day warranty for any bugs or issues related to our work. After that, maintenance is covered under our support packages or charged hourly for one-off fixes.'
      },
      {
        q: 'Can you update my website content?',
        a: 'Yes! We can either: 1) Build an admin panel so you can update content yourself, 2) Provide training to manage it, or 3) Update content for you as part of a maintenance package or on-demand.'
      },
      {
        q: 'Do you offer website hosting and domain management?',
        a: 'Yes, we can handle all technical aspects including domain registration, SSL certificates, hosting setup, email accounts, and ongoing management. Or you can manage these yourself—we\'re flexible.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about our web development, mobile app, and IT services in Egypt.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const index = `${catIndex}-${qIndex}`
                  const isOpen = openIndex === index
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-soft overflow-hidden">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <FaChevronDown 
                          className={`text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all ${isOpen ? 'py-4 border-t border-gray-100' : 'max-h-0'}`}
                      >
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg">
            Contact Us <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
