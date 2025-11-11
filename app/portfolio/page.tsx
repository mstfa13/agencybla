import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Portfolio | Success Stories & Case Studies - Web & Mobile Projects Egypt',
  description: 'Explore our successful web development, mobile apps, IT consulting, and design projects in Egypt. Real results for Egyptian businesses.',
  keywords: 'portfolio egypt, web development projects egypt, mobile app projects, case studies egypt, success stories',
}

const categories = ['All', 'Websites & Apps', 'Mobile Apps', 'IT Consulting', 'Automation', 'Design', 'Video']

const projects = [
  {
    id: 'ecommerce-fashion',
    title: 'Fashion E-commerce Platform',
    category: 'Websites & Apps',
    image: '🛍️',
    client: 'Fashion Retail Company, Cairo',
    description: 'Complete e-commerce solution with inventory management, Paymob integration, and mobile app.',
    results: ['300% increase in online sales', '10,000+ monthly visitors', '4.8/5 customer rating'],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'React Native'],
    link: '/portfolio/ecommerce-fashion'
  },
  {
    id: 'delivery-app',
    title: 'Food Delivery Mobile App',
    category: 'Mobile Apps',
    image: '🍕',
    client: 'Restaurant Chain, Alexandria',
    description: 'iOS & Android app for food ordering with real-time tracking and multi-payment options.',
    results: ['5,000+ downloads in 3 months', '500+ daily orders', '4.6/5 app rating'],
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    link: '/portfolio/delivery-app'
  },
  {
    id: 'automation-system',
    title: 'Sales Automation System',
    category: 'Automation',
    image: '⚡',
    client: 'Tech Company, Cairo',
    description: 'Automated lead management, email campaigns, and reporting dashboard.',
    results: ['70% time saved on manual tasks', '150+ leads per week', '35% increase in conversions'],
    tech: ['Zapier', 'HubSpot API', 'Custom Dashboard'],
    link: '/portfolio/automation-system'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure Migration',
    category: 'IT Consulting',
    image: '☁️',
    client: 'Financial Services, Egypt',
    description: 'Complete migration from on-premise to AWS cloud with zero downtime.',
    results: ['50% reduction in infrastructure costs', '99.9% uptime achieved', 'Zero downtime during migration'],
    tech: ['AWS EC2', 'RDS', 'S3', 'CloudFront'],
    link: '/portfolio/cloud-migration'
  },
  {
    id: 'brand-identity',
    title: 'Complete Brand Identity',
    category: 'Design',
    image: '🎨',
    client: 'Startup, Cairo',
    description: 'Logo, brand guidelines, website design, and marketing materials.',
    results: ['Increased brand recognition by 200%', 'Consistent brand across all channels', 'Professional market presence'],
    tech: ['Adobe Illustrator', 'Figma', 'Photoshop'],
    link: '/portfolio/brand-identity'
  },
  {
    id: 'corporate-video',
    title: 'Corporate Video Campaign',
    category: 'Video',
    image: '🎬',
    client: 'Real Estate Company, Egypt',
    description: 'Series of property showcase videos and company profile video.',
    results: ['1M+ views across platforms', '200% increase in inquiries', '50+ properties sold'],
    tech: ['4K Video', 'Drone Footage', 'Motion Graphics'],
    link: '/portfolio/corporate-video'
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Appointment App',
    category: 'Mobile Apps',
    image: '🏥',
    client: 'Medical Center, Cairo',
    description: 'Patient appointment booking, medical records, and telemedicine features.',
    results: ['3,000+ registered patients', '80% reduction in phone bookings', '4.7/5 patient satisfaction'],
    tech: ['Flutter', 'Firebase', 'WebRTC'],
    link: '/portfolio/healthcare-app'
  },
  {
    id: 'booking-platform',
    title: 'Hotel Booking Platform',
    category: 'Websites & Apps',
    image: '🏨',
    client: 'Hospitality Group, Egypt',
    description: 'Multi-property booking system with channel manager integration.',
    results: ['1,000+ bookings per month', '30% direct booking increase', 'Integration with 5+ OTAs'],
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Booking.com API'],
    link: '/portfolio/booking-platform'
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
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
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

                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
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
