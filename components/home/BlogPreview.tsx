import Link from 'next/link'
import { FaArrowRight, FaClock } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Building an E-commerce Website in Egypt',
    excerpt: 'Everything you need to know about launching an online store in the Egyptian market, from payment gateways to shipping solutions.',
    category: 'E-commerce',
    readTime: '8 min read',
    date: 'Feb 15, 2024',
    href: '/blog/ecommerce-guide-egypt'
  },
  {
    id: 2,
    title: 'Mobile App Development Costs in Egypt: 2024 Breakdown',
    excerpt: 'Transparent pricing guide for iOS and Android app development. Learn what factors affect costs and how to budget your project.',
    category: 'Mobile Apps',
    readTime: '6 min read',
    date: 'Feb 10, 2024',
    href: '/blog/app-development-costs-egypt'
  },
  {
    id: 3,
    title: 'Why Egyptian Businesses Need Website Automation in 2024',
    excerpt: 'Discover how automation can save your business 20+ hours per week and reduce operational costs by up to 60%.',
    category: 'Automation',
    readTime: '5 min read',
    date: 'Feb 5, 2024',
    href: '/blog/business-automation-egypt'
  }
]

const BlogPreview = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Latest from Our Blog</h2>
          <p className="text-lg text-gray-600">
            Expert insights, industry trends, and practical guides to help your business grow.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="text-sm">{post.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <FaClock className="mr-1" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    Read More <FaArrowRight className="ml-1 text-xs" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-soft hover:shadow-medium"
          >
            View All Articles
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
