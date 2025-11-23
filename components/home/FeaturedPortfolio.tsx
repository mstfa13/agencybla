'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const categories = ['All', 'Websites', 'Mobile Apps', 'E-commerce']

const projects = [
  {
    id: 1,
    title: 'TechBytes',
    category: 'Websites',
    description: 'Modern tech blog with 5,000+ monthly readers and fast loading times',
    image: '/portfolio/techbytes.jpg',
    tags: ['Next.js', 'Blog', 'SEO'],
    client: 'Ahmed Younes',
    href: '/portfolio/techbytes'
  },
  {
    id: 2,
    title: 'Ascension',
    category: 'Mobile Apps',
    description: 'Coaching app with 500+ active clients and 4.8/5 rating',
    image: '/portfolio/ascension.jpg',
    tags: ['React Native', 'Coaching', 'Firebase'],
    client: 'Coach & Dr.M3ta',
    href: '/portfolio/ascension'
  },
  {
    id: 3,
    title: 'Boxeo',
    category: 'Mobile Apps',
    description: 'Boxing training app with 1,000+ downloads and video tutorials',
    image: '/portfolio/boxeo.jpg',
    tags: ['Flutter', 'Training', 'Video'],
    client: 'Coach Omar Mohamed',
    href: '/portfolio/boxeo'
  },
  {
    id: 4,
    title: 'Airpods4U',
    category: 'E-commerce',
    description: 'Premium e-commerce with 10,000+ monthly visitors',
    image: '/portfolio/airpods4u.jpg',
    tags: ['E-commerce', 'Paymob', 'Next.js'],
    client: 'E-commerce Business',
    href: '/portfolio/airpods4u'
  },
  {
    id: 5,
    title: 'Untitled Academy',
    category: 'Websites',
    description: 'Educational platform with 500+ students and 95% completion rate',
    image: '/portfolio/untitled.jpg',
    tags: ['Education', 'Portal', 'React'],
    client: 'Untitled Academy',
    href: '/portfolio/untitled-academy'
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
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                  {project.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-sm text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.client && (
                  <p className="text-sm text-accent font-medium mb-2">
                    Client: {project.client}
                  </p>
                )}
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center text-accent font-medium">
                  <span>View Case Study</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
