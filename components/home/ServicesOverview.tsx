'use client'

import { useState, useRef, useEffect } from 'react'
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
  FaArrowRight
} from 'react-icons/fa'

const services = [
  {
    icon: FaLaptopCode,
    title: 'Website Development Egypt',
    description: 'Turn visitors into customers with a fast, professional website that works on every device.',
    href: '/services/websites',
    features: ['Get online in 4 weeks', 'Mobile-optimized', 'E-commerce ready'],
    stats: '30+ websites built',
    popular: true
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Reach customers on their phones with an app that keeps them coming back.',
    href: '/services/mobile-apps',
    features: ['iOS & Android', 'Push notifications', 'Offline support'],
    stats: '15+ apps launched',
    popular: false
  },
  {
    icon: FaCogs,
    title: 'Business Automation',
    description: 'Save 10+ hours per week by automating repetitive tasks and workflows.',
    href: '/services/automation',
    features: ['Cut manual work', 'Reduce errors', 'Scale faster'],
    stats: '20+ businesses automated',
    popular: true
  },
  {
    icon: FaChartLine,
    title: 'IT Strategy & Consulting',
    description: 'Make smart tech decisions with expert guidance tailored to Egyptian businesses.',
    href: '/services/it-strategy',
    features: ['Growth roadmap', 'Cost optimization', 'Tech audits'],
    stats: '50+ consultations',
    popular: false
  },
  {
    icon: FaCloud,
    title: 'Cloud Migration Egypt',
    description: 'Move to the cloud safely and cut IT costs by up to 40%.',
    href: '/services/cloud',
    features: ['AWS & Azure experts', 'Zero downtime', 'Ongoing support'],
    stats: '10+ migrations',
    popular: false
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity Services',
    description: 'Protect your business from cyber threats and data breaches.',
    href: '/services/cybersecurity',
    features: ['Security audit', 'Threat monitoring', 'Compliance help'],
    stats: '25+ businesses secured',
    popular: false
  },
  {
    icon: FaPalette,
    title: 'Graphic Design & Branding',
    description: 'Stand out from competitors with professional branding that attracts customers.',
    href: '/services/design',
    features: ['Logo & brand identity', 'Social media graphics', 'Marketing materials'],
    stats: '40+ brands designed',
    popular: false
  },
  {
    icon: FaVideo,
    title: 'Video Production Cairo',
    description: 'Explain your product in 60 seconds with engaging video content.',
    href: '/services/video',
    features: ['Promotional videos', 'Explainer videos', 'Social media content'],
    stats: '20+ videos produced',
    popular: false
  }
]

const ServicesOverview = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener('resize', checkScrollButtons)
    return () => window.removeEventListener('resize', checkScrollButtons)
  }, [])

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        {/* Section Header - Customer Problem-Focused */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Everything You Need to Grow Your Business Online</h2>
          <p className="text-lg text-gray-600">
            From getting your first customers online to scaling to thousands — we handle the tech so you can focus on what you do best.
          </p>
        </div>

        {/* Services Grid - Mobile Swipeable */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="flex-shrink-0 w-[280px] lg:w-auto snap-start bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all group relative"
                >
                  {/* Popular Badge - Social Proof */}
                  {service.popular && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-gold text-primary text-xs font-bold rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="text-2xl text-primary group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Trust Signal - Project Count */}
                  <p className="text-xs text-accent font-semibold mb-2">{service.stats}</p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Stronger CTA - Action-Oriented */}
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Get Free Quote <FaArrowRight className="ml-2 text-xs" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="lg:hidden text-center mt-6 text-sm text-gray-500">
            Swipe to see more services →
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-soft hover:shadow-medium"
          >
            View All Services
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
