import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCogs, 
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaPalette,
  FaVideo,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Our Services | Complete Digital Solutions for Egyptian Businesses',
  description: 'Full-service digital agency in Egypt. Web development, mobile apps, IT consulting, cloud services, cybersecurity, design & video production. Get your free quote today!',
  keywords: 'digital services egypt, web development, mobile apps, it consulting, cloud services, graphic design, video production',
}

const services = [
  {
    icon: FaLaptopCode,
    title: 'Websites & Web Applications',
    description: 'Modern, responsive websites and powerful web applications that drive conversions and business growth.',
    features: [
      'E-commerce platforms with Paymob/Fawry integration',
      'Corporate websites & landing pages',
      'Custom web applications & portals',
      'CMS solutions (WordPress, Shopify, custom)',
      'Progressive Web Apps (PWAs)',
      'Mobile-first responsive design'
    ],
    technologies: ['Next.js', 'React', 'WordPress', 'Shopify', 'Node.js'],
    pricing: 'Starting from 15,000 EGP',
    href: '/services/websites',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Apps (iOS & Android)',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive engagement.',
    features: [
      'Native iOS apps (Swift)',
      'Native Android apps (Kotlin)',
      'Cross-platform apps (Flutter, React Native)',
      'App Store & Google Play optimization',
      'Push notifications & analytics',
      'Ongoing maintenance & updates'
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    pricing: 'Starting from 40,000 EGP',
    href: '/services/mobile-apps',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaCogs,
    title: 'Automation Solutions',
    description: 'Streamline your operations, reduce manual work, and boost productivity with custom automation tools.',
    features: [
      'Business process automation',
      'API development & integration',
      'Workflow automation (Zapier, Make.com)',
      'Data processing & reporting',
      'Custom CRM/ERP systems',
      'Third-party service integration'
    ],
    technologies: ['Python', 'Node.js', 'Zapier', 'Make.com', 'APIs'],
    pricing: 'Starting from 25,000 EGP',
    href: '/services/automation',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: FaChartLine,
    title: 'IT Strategy & Consulting',
    description: 'Strategic IT guidance to align technology with your business goals and maximize ROI.',
    features: [
      'Digital transformation roadmap',
      'Technology stack selection',
      'IT infrastructure assessment',
      'System architecture design',
      'Vendor evaluation & management',
      'Budget & resource planning'
    ],
    technologies: ['Strategy', 'Analysis', 'Planning', 'Architecture'],
    pricing: 'Starting from 10,000 EGP',
    href: '/services/it-strategy',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: FaCloud,
    title: 'Cloud Services & Migration',
    description: 'Scalable cloud infrastructure, seamless migration, and ongoing cloud management for reliable operations.',
    features: [
      'Cloud migration (AWS, Azure, Google Cloud)',
      'Cloud infrastructure setup',
      'Serverless architecture',
      'Database management & backup',
      'Cost optimization',
      'Disaster recovery planning'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    pricing: 'Starting from 20,000 EGP',
    href: '/services/cloud',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity Audits',
    description: 'Protect your digital assets with comprehensive security assessments, vulnerability testing, and compliance support.',
    features: [
      'Security vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance audits (GDPR, ISO)',
      'Employee security training',
      'Incident response planning'
    ],
    technologies: ['Security Tools', 'Penetration Testing', 'Compliance'],
    pricing: 'Starting from 15,000 EGP',
    href: '/services/cybersecurity',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: FaPalette,
    title: 'Graphic Design & Branding',
    description: 'Professional visual design that makes your brand stand out and connect with your Egyptian audience.',
    features: [
      'Logo & brand identity design',
      'Social media graphics',
      'Print design (brochures, flyers)',
      'UI/UX design for apps & websites',
      'Packaging design',
      'Infographics & illustrations'
    ],
    technologies: ['Adobe CC', 'Figma', 'Sketch', 'Illustrator', 'Photoshop'],
    pricing: 'Starting from 5,000 EGP',
    href: '/services/design',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: FaVideo,
    title: 'Video Production & Editing',
    description: 'High-quality video content for marketing, training, social media, and brand storytelling.',
    features: [
      'Corporate & promotional videos',
      'Product demos & explainer videos',
      'Social media content (Reels, Shorts)',
      'Event coverage & documentation',
      'Motion graphics & animation',
      'Video ads for Facebook, YouTube, TikTok'
    ],
    technologies: ['Adobe Premiere', 'After Effects', 'Final Cut Pro', 'DaVinci'],
    pricing: 'Starting from 8,000 EGP',
    href: '/services/video',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Complete Digital Solutions for Your Business</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              From websites to mobile apps, automation to design—we provide all the digital services your Egyptian business needs to thrive in the modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
              >
                Get Free Consultation
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

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-all overflow-hidden">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <Icon className="text-4xl mb-3" />
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-white/90">{service.description}</p>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">What We Offer:</h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Pricing: </span>
                      <span className="text-lg font-bold text-primary">{service.pricing}</span>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={service.href}
                      className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                    >
                      Learn More & Get Quote
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-600">
              We're not just service providers—we're your partners in digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
              <p className="text-gray-600">
                Every project is measured by real business outcomes—traffic, conversions, revenue growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇪🇬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Egyptian Market Expertise</h3>
              <p className="text-gray-600">
                We understand local business needs, payment gateways, user behavior, and cultural context.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h3>
              <p className="text-gray-600">
                Transparent timelines, milestone tracking, and on-time delivery—every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and explore how our services can help you achieve your business goals. Get a free consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
            >
              Get Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg"
            >
              <FaArrowRight className="mr-2" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
