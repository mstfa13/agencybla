'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const categories = ['All', 'E-commerce', 'Mobile Apps', 'Corporate', 'Automation']

const projects = [
  {
    id: 1,
    title: 'Egyptian E-commerce Platform',
    category: 'E-commerce',
    description: '300% increase in mobile conversions with Paymob integration',
    image: '/images/portfolio/ecommerce-eg.jpg',
    tags: ['Next.js', 'E-commerce', 'Paymob'],
    href: '/portfolio/egyptian-ecommerce'
  },
  {
    id: 2,
    title: 'Cairo Restaurant Chain App',
    category: 'Mobile Apps',
    description: 'iOS & Android app serving 10K+ daily orders across Cairo',
    image: '/images/portfolio/restaurant-app.jpg',
    tags: ['React Native', 'iOS', 'Android'],
    href: '/portfolio/restaurant-app'
  },
  {
    id: 3,
    title: 'Alexandria Medical Portal',
    category: 'Corporate',
    description: 'Patient portal connecting 15+ clinics with 5K+ users',
    image: '/images/portfolio/medical-portal.jpg',
    tags: ['Healthcare', 'Portal', 'Secure'],
    href: '/portfolio/medical-portal'
  },
  {
    id: 4,
    title: 'Shipping Automation System',
    category: 'Automation',
    description: '80% reduction in manual work for logistics company',
    image: '/images/portfolio/shipping-auto.jpg',
    tags: ['Automation', 'API', 'Logistics'],
    href: '/portfolio/shipping-automation'
  }
]

const FeaturedPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600">
            Real projects, real results. See how we've helped Egyptian businesses transform digitally.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">🎨</div>
                    <div className="text-sm">{project.title}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  View Case Study <FaArrowRight className="ml-2 text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-soft hover:shadow-medium"
          >
            View All Projects
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPortfolio
