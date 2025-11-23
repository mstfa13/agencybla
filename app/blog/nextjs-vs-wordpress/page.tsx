import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export const metadata = {
  title: 'Next.js vs WordPress: Which is Better for Your Business Website? | Fikra Agency',
  description: 'Compare Next.js and WordPress for business websites. Performance, flexibility, costs, and when to choose each platform.',
}

export default function NextJsVsWordPress() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <Link 
            href="/blog"
            className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
              Web Development
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Next.js vs WordPress: Which is Better for Your Business Website?
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-accent" />
                January 8, 2024
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-accent" />
                9 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Choosing the right platform for your business website is crucial for success. WordPress has dominated 
                the market for years, but Next.js is rapidly gaining popularity among Egyptian businesses seeking 
                better performance and flexibility. This comprehensive comparison helps you decide which platform is 
                right for your business.
              </p>
            </div>

            {/* Quick Comparison */}
            <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Quick Comparison</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="text-4xl mb-4 text-center">⚡</div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">Next.js</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Lightning-fast performance</div>
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Modern architecture</div>
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Built for developers</div>
                    <div className="flex items-center"><FaTimesCircle className="text-red-600 mr-2" />Higher initial cost</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <div className="text-4xl mb-4 text-center">🔧</div>
                  <h3 className="text-xl font-bold text-primary mb-3 text-center">WordPress</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Easy to use</div>
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Huge plugin ecosystem</div>
                    <div className="flex items-center"><FaCheckCircle className="text-accent mr-2" />Lower initial cost</div>
                    <div className="flex items-center"><FaTimesCircle className="text-red-600 mr-2" />Slower performance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Performance: Next.js Dominates</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Performance is where Next.js truly shines. In Egypt, where many users browse on slower 3G/4G connections, 
                  every second counts. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load.
                </p>

                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Load Time Comparison:</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Next.js Website</span>
                        <span className="text-accent font-bold">0.5 - 1.5 seconds</span>
                      </div>
                      <div className="bg-accent h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">WordPress (Optimized)</span>
                        <span className="text-primary font-bold">2 - 4 seconds</span>
                      </div>
                      <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">WordPress (Unoptimized)</span>
                        <span className="text-red-600 font-bold">5 - 10+ seconds</span>
                      </div>
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <h4 className="font-bold text-primary mb-2">Why Next.js is Faster:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Static Site Generation:</strong> Pages pre-built at build time</li>
                    <li>• <strong>Automatic Code Splitting:</strong> Only load necessary JavaScript</li>
                    <li>• <strong>Image Optimization:</strong> Automatic image compression and lazy loading</li>
                    <li>• <strong>No Database Queries:</strong> Eliminates server response time for static content</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SEO Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">SEO: Both Can Win (But Next.js Has the Edge)</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Google's Core Web Vitals favor fast-loading websites, giving Next.js a significant SEO advantage. 
                  However, WordPress with proper optimization can still rank well.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">Next.js SEO Advantages</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Perfect Core Web Vitals scores (90-100)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Server-side rendering for instant content visibility</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Automatic sitemap generation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Clean, semantic HTML structure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Mobile-first by default</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">WordPress SEO Advantages</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Yoast/Rank Math plugins for easy optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Built-in blogging capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>User-friendly meta editing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Core Web Vitals scores often 40-70</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Requires optimization plugins</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Cost Analysis: Initial vs Long-Term</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  WordPress appears cheaper upfront, but long-term costs can add up significantly with plugins, 
                  hosting, and maintenance.
                </p>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">5-Year Cost Comparison (Corporate Website):</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-primary mb-4">Next.js</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Initial Development</span>
                          <span className="text-accent font-bold">60,000 - 100,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Hosting (5 years @ 500 EGP/month)</span>
                          <span className="text-accent font-bold">30,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Maintenance (5 years @ 2,000 EGP/month)</span>
                          <span className="text-accent font-bold">120,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pt-3">
                          <span className="font-bold">Total 5-Year Cost</span>
                          <span className="text-accent font-bold text-xl">210,000 - 250,000 EGP</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-primary mb-4">WordPress</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Initial Development</span>
                          <span className="text-primary font-bold">35,000 - 60,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Hosting (5 years @ 800 EGP/month)</span>
                          <span className="text-primary font-bold">48,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Premium Plugins (5 years @ 500 EGP/month)</span>
                          <span className="text-primary font-bold">30,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Maintenance (5 years @ 3,000 EGP/month)</span>
                          <span className="text-primary font-bold">180,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                          <span className="text-sm">Security & Performance Issues</span>
                          <span className="text-primary font-bold">20,000 EGP</span>
                        </div>
                        <div className="flex justify-between items-center pt-3">
                          <span className="font-bold">Total 5-Year Cost</span>
                          <span className="text-primary font-bold text-xl">313,000 - 338,000 EGP</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-accent/10 rounded-lg">
                    <p className="text-sm font-bold text-primary">
                      💡 Next.js saves 100,000+ EGP over 5 years while delivering superior performance!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Maintenance & Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Maintenance & Security</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">Next.js: Low Maintenance</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• No database to manage or backup</li>
                      <li>• No plugins to update constantly</li>
                      <li>• Fewer security vulnerabilities</li>
                      <li>• Updates are opt-in, not forced</li>
                      <li>• Static files = less to break</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded">
                      <p className="text-xs font-bold">Average maintenance: 2-4 hours/month</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-primary mb-4">WordPress: High Maintenance</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Weekly plugin updates required</li>
                      <li>• Regular database optimization</li>
                      <li>• Frequent security patches</li>
                      <li>• Plugin conflicts to resolve</li>
                      <li>• Regular backups essential</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded">
                      <p className="text-xs font-bold">Average maintenance: 6-12 hours/month</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-red-700 mb-2">WordPress Security Concerns:</h4>
                  <p className="text-sm text-red-600 mb-3">
                    WordPress powers 43% of the web, making it a major target for hackers. Over 90% of hacked websites 
                    in 2023 were WordPress sites due to outdated plugins and themes.
                  </p>
                  <p className="text-sm text-red-600">
                    Next.js sites have minimal attack surface as they're mostly static files with no admin panel exposed.
                  </p>
                </div>
              </div>
            </section>

            {/* When to Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">When to Choose Each Platform</h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-accent rounded-xl p-6">
                    <h3 className="text-xl font-bold text-accent mb-4">Choose Next.js If:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>Performance is critical for your business</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>You want superior SEO rankings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>You need a scalable, future-proof solution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>Security is a top priority</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>You want lower long-term costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 text-lg">✓</span>
                        <span>You have a development partner (like Fikra)</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-accent/10 rounded">
                      <p className="text-xs font-bold text-primary">
                        Best for: E-commerce, corporate sites, SaaS, high-traffic websites
                      </p>
                    </div>
                  </div>

                  <div className="border-2 border-primary rounded-xl p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Choose WordPress If:</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>You need to manage content yourself daily</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>You have a very limited initial budget</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>You need specific WordPress plugins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>You publish blog content multiple times daily</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>Performance isn't critical</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2 text-lg">✓</span>
                        <span>You can handle regular maintenance</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 bg-primary/10 rounded">
                      <p className="text-xs font-bold text-primary">
                        Best for: Blogs, news sites, simple business sites, hobbyist projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">The Verdict: Next.js for Serious Businesses</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  While WordPress served businesses well for many years, Next.js represents the future of web development. 
                  For Egyptian businesses serious about digital success, Next.js offers:
                </p>

                <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-accent mb-2">3-5x</div>
                      <div className="text-sm">Faster Load Times</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-accent mb-2">100K+</div>
                      <div className="text-sm">Saved Over 5 Years</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-accent mb-2">90%</div>
                      <div className="text-sm">Less Security Risk</div>
                    </div>
                  </div>
                </div>

                <p>
                  At Fikra Agency, we specialize in building high-performance Next.js websites for Egyptian businesses. 
                  We handle the technical complexity, giving you a website that's fast, secure, and built to scale.
                </p>

                <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Next.js?</h3>
                  <p className="text-white mb-6">
                    Get a free consultation and see how Next.js can transform your online presence
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact"
                      className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                      Get Free Consultation
                    </Link>
                    <Link 
                      href="/portfolio"
                      className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                    >
                      View Our Next.js Projects
                    </Link>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </main>
  )
}
