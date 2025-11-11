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
    title: 'Websites & Web Apps',
    description: 'Custom websites and web applications built with modern technologies. Fast, responsive, and optimized for conversions.',
    href: '/services/websites',
    features: ['E-commerce', 'Corporate Sites', 'Web Portals']
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Apps',
    description: 'Native iOS and Android apps that deliver exceptional user experiences and drive customer engagement.',
    href: '/services/mobile-apps',
    features: ['iOS & Android', 'Cross-platform', 'App Maintenance']
  },
  {
    icon: FaCogs,
    title: 'Automation Solutions',
    description: 'Streamline your operations with custom automation tools that save time and reduce human error.',
    href: '/services/automation',
    features: ['Workflow Automation', 'API Integration', 'Process Optimization']
  },
  {
    icon: FaChartLine,
    title: 'IT Strategy',
    description: 'Strategic IT consulting to align technology with your business goals and maximize ROI.',
    href: '/services/it-strategy',
    features: ['Digital Transformation', 'Tech Roadmap', 'System Audit']
  },
  {
    icon: FaCloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services for secure, reliable operations.',
    href: '/services/cloud',
    features: ['AWS & Azure', 'Cloud Migration', 'Infrastructure']
  },
  {
    icon: FaShieldAlt,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and compliance support.',
    href: '/services/cybersecurity',
    features: ['Security Audit', 'Threat Protection', 'Compliance']
  },
  {
    icon: FaPalette,
    title: 'Graphic Design',
    description: 'Professional branding and visual design that makes your business stand out in the market.',
    href: '/services/design',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials']
  },
  {
    icon: FaVideo,
    title: 'Video Production',
    description: 'High-quality video content for marketing, training, and brand storytelling.',
    href: '/services/video',
    features: ['Promotional Videos', 'Explainers', 'Social Media']
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Full-service digital solutions tailored to your business needs. From initial concept to ongoing support, we're with you every step of the way.
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
                  className="flex-shrink-0 w-[280px] lg:w-auto snap-start bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="text-2xl text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
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
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More <FaArrowRight className="ml-2 text-xs" />
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
