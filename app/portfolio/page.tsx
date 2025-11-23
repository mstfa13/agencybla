import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Portfolio | Success Stories & Case Studies - Web & Mobile Projects Egypt',
  description: 'Explore our successful web development, mobile apps, IT consulting, and design projects in Egypt. Real results for Egyptian businesses.',
  keywords: 'portfolio egypt, web development projects egypt, mobile app projects, case studies egypt, success stories',
}

const categories = ['All', 'Websites & Apps', 'Mobile Apps', 'IT Consulting', 'Automation', 'Design', 'Video']

const projects = [
  {
    id: 'techbytes',
    title: 'TechBytes',
    category: 'Websites & Apps',
    image: '/portfolio/techbytes.jpg',
    client: 'Ahmed Younes',
    description: 'Modern tech blog and content platform with custom CMS, SEO optimization, and responsive design.',
    results: ['5,000+ monthly readers', 'Fast loading times', 'Mobile-optimized reading experience'],
    tech: ['Next.js', 'Tailwind CSS', 'MDX', 'Vercel'],
    link: '/portfolio/techbytes'
  },
  {
    id: 'ascension',
    title: 'Ascension',
    category: 'Mobile Apps',
    image: '/portfolio/ascension.jpg',
    client: 'Coach & Dr.M3ta',
    description: 'Comprehensive coaching app with progress tracking, personalized plans, and client communication features.',
    results: ['500+ active clients', '4.8/5 app rating', 'Improved client engagement by 200%'],
    tech: ['React Native', 'Firebase', 'Push Notifications'],
    link: '/portfolio/ascension'
  },
  {
    id: 'boxeo',
    title: 'Boxeo',
    category: 'Mobile Apps',
    image: '/portfolio/boxeo.jpg',
    client: 'Coach Omar Mohamed',
    description: 'Boxing training app with workout routines, video tutorials, and performance analytics.',
    results: ['1,000+ downloads', 'Featured workouts', '4.7/5 user rating'],
    tech: ['Flutter', 'Video Streaming', 'Analytics Dashboard'],
    link: '/portfolio/boxeo'
  },
  {
    id: 'airpods4u',
    title: 'Airpods4U',
    category: 'Websites & Apps',
    image: '/portfolio/airpods4u.jpg',
    client: 'E-commerce Business',
    description: 'Premium e-commerce platform for audio products with Paymob integration and inventory management.',
    results: ['10,000+ monthly visitors', '300+ orders/month', 'Seamless payment experience'],
    tech: ['Next.js', 'Paymob', 'MongoDB', 'Stripe'],
    link: '/portfolio/airpods4u'
  },
  {
    id: 'untitled-academy',
    title: 'Untitled',
    category: 'Websites & Apps',
    image: '/portfolio/untitled.jpg',
    client: 'Untitled Academy',
    description: 'Modern educational platform with course management, student portal, and online learning features.',
    results: ['500+ enrolled students', 'Interactive learning experience', '95% completion rate'],
    tech: ['Next.js', 'React', 'Video Platform', 'Student Dashboard'],
    link: '/portfolio/untitled-academy'
  },
  {
    id: 'automation-system',
    title: 'Sales Automation System',
    category: 'Automation',
    image: '/portfolio/automation.jpg',
    client: 'Tech Company, Cairo',
    description: 'Automated lead management, email campaigns, and reporting dashboard.',
    results: ['70% time saved on manual tasks', '150+ leads per week', '35% increase in conversions'],
    tech: ['Zapier', 'HubSpot API', 'Custom Dashboard'],
    link: '/portfolio/automation-system'
  }
]

export default function PortfolioPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">Our Portfolio & Success Stories</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped Egyptian businesses grow with custom web solutions, mobile apps, and IT services.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                href={project.link}
                className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="flex-1">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                    View Case Study <FaArrowRight className="ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join dozens of successful Egyptian businesses who trust us with their digital needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Start Your Project <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
