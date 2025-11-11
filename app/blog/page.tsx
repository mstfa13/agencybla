import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Blog | Web Development, Mobile Apps & IT Tips Egypt',
  description: 'Expert articles on web development, mobile apps, IT consulting, and digital transformation in Egypt. Practical tips and industry insights.',
  keywords: 'web development blog egypt, mobile app development tips, it consulting egypt, tech blog egypt',
}

const blogPosts = [
  {
    id: 'web-development-company-egypt',
    title: 'How to Choose the Best Web Development Company in Egypt 2024',
    excerpt: 'Comprehensive guide to selecting the right web development partner for your Egyptian business. Key factors, red flags, and questions to ask.',
    category: 'Web Development',
    author: 'Mohamed Ali',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: '💻',
    featured: true
  },
  {
    id: 'mobile-app-costs-egypt',
    title: 'Mobile App Development Costs in Egypt: Complete Breakdown 2024',
    excerpt: 'Detailed pricing guide for iOS and Android app development in Egypt. Understand what affects costs and how to budget for your mobile app project.',
    category: 'Mobile Apps',
    author: 'Sara Ahmed',
    date: 'Jan 12, 2024',
    readTime: '10 min read',
    image: '📱'
  },
  {
    id: 'business-automation-benefits',
    title: '10 Business Processes You Should Automate in Egypt',
    excerpt: 'Discover which business processes are worth automating and how automation can save time and reduce costs for Egyptian businesses.',
    category: 'Automation',
    author: 'Ahmed Hassan',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
    image: '⚡'
  },
  {
    id: 'nextjs-vs-wordpress',
    title: 'Next.js vs WordPress: Which is Better for Your Business Website?',
    excerpt: 'Compare Next.js and WordPress for business websites. Performance, flexibility, costs, and when to choose each platform.',
    category: 'Web Development',
    author: 'Mohamed Ali',
    date: 'Jan 8, 2024',
    readTime: '9 min read',
    image: '⚖️'
  },
  {
    id: 'payment-gateways-egypt',
    title: 'Best Payment Gateways for Egyptian E-commerce Websites',
    excerpt: 'Comprehensive comparison of Paymob, Fawry, Accept, and other payment solutions for Egyptian online businesses.',
    category: 'E-commerce',
    author: 'Sara Ahmed',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    image: '💳'
  },
  {
    id: 'cloud-migration-guide',
    title: 'Complete Guide to Cloud Migration for Egyptian Businesses',
    excerpt: 'Step-by-step guide to migrating your business to the cloud. AWS, Azure, and Google Cloud comparison for Egyptian companies.',
    category: 'Cloud Services',
    author: 'Ahmed Hassan',
    date: 'Jan 3, 2024',
    readTime: '12 min read',
    image: '☁️'
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="mb-4">Blog & Resources</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights on web development, mobile apps, and IT solutions for Egyptian businesses.
            </p>
          </div>

          {featuredPost && (
            <Link href={`/blog/${featuredPost.id}`} className="group block bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-9xl">
                  {featuredPost.image}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="text-sm text-primary font-semibold mb-3">FEATURED POST</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                      <FaUser className="mr-2" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-2" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read Article <FaArrowRight className="ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                      <FaUser className="mr-1" /> {post.author}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" /> {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More <FaArrowRight className="ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get expert guidance and a free consultation for your next digital project.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
            Get Free Consultation <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
