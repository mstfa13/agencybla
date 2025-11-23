import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaTag } from 'react-icons/fa'

export const metadata = {
  title: 'Complete Guide to Building an E-commerce Website in Egypt | Fikra Agency',
  description: 'Everything you need to know about launching an online store in the Egyptian market, from payment gateways to shipping solutions.',
}

export default function EcommerceGuideEgypt() {
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
              E-commerce
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Guide to Building an E-commerce Website in Egypt
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-accent" />
                February 15, 2024
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-accent" />
                8 min read
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
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                The Egyptian e-commerce market is booming, with online retail expected to reach $7.5 billion by 2025. 
                Whether you're a startup entrepreneur or an established business looking to expand online, this comprehensive 
                guide will walk you through everything you need to know to launch a successful e-commerce website in Egypt.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Understanding the Egyptian E-commerce Landscape</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Egypt's digital economy is rapidly evolving, driven by increased internet penetration (over 70% of the population), 
                  growing smartphone usage, and improved digital infrastructure. The COVID-19 pandemic accelerated this growth, 
                  with more consumers becoming comfortable with online shopping.
                </p>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Key Market Statistics:</h3>
                  <ul className="space-y-2">
                    <li>• 49+ million active social media users</li>
                    <li>• 75% prefer Cash on Delivery (COD)</li>
                    <li>• Fashion, electronics, and beauty are top categories</li>
                    <li>• Mobile commerce accounts for 60% of transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Choosing the Right E-commerce Platform</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Selecting the right platform is crucial for your online store's success. Here are the most popular options 
                  for Egyptian businesses:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-3">Custom Development</h3>
                    <p className="text-gray-600 mb-4">
                      Built with Next.js, React, or Laravel for complete control and scalability.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-accent font-medium">✓ Fully customizable</p>
                      <p className="text-accent font-medium">✓ Better performance</p>
                      <p className="text-accent font-medium">✓ No monthly fees</p>
                      <p className="text-red-600 font-medium">✗ Higher initial cost</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-3">Shopify</h3>
                    <p className="text-gray-600 mb-4">
                      Quick setup with built-in features, ideal for small to medium businesses.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="text-accent font-medium">✓ Easy to use</p>
                      <p className="text-accent font-medium">✓ Quick launch</p>
                      <p className="text-accent font-medium">✓ Built-in hosting</p>
                      <p className="text-red-600 font-medium">✗ Monthly fees + commissions</p>
                    </div>
                  </div>
                </div>

                <p>
                  At Fikra Agency, we recommend custom development for businesses serious about long-term growth. 
                  While the initial investment is higher, you save on monthly fees and have complete control over your store.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Payment Gateways in Egypt</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Payment processing is one of the most critical aspects of your e-commerce website. Here are the top 
                  payment solutions for Egyptian businesses:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">1. Fawry</h3>
                    <p className="mb-3">
                      Egypt's leading digital payment platform with 200,000+ payment points nationwide.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Accepts cards, wallets, and cash payments</li>
                      <li>• 2.5% - 3.5% transaction fees</li>
                      <li>• Trusted by major Egyptian brands</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">2. Paymob/Accept</h3>
                    <p className="mb-3">
                      Popular payment gateway with excellent integration options and competitive rates.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Easy API integration</li>
                      <li>• 2.75% transaction fees</li>
                      <li>• Supports installment payments</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">3. Cash on Delivery (COD)</h3>
                    <p className="mb-3">
                      Essential for Egyptian e-commerce - 75% of customers still prefer COD.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Partner with reliable courier services</li>
                      <li>• Implement COD fees to reduce fake orders</li>
                      <li>• Use SMS/WhatsApp confirmation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Shipping & Logistics Solutions</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Reliable shipping is crucial for customer satisfaction. Here are the top courier services in Egypt:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <h3 className="text-lg font-bold text-primary mb-2">Bosta</h3>
                    <p className="text-sm text-gray-600">Tech-enabled delivery with real-time tracking</p>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <h3 className="text-lg font-bold text-primary mb-2">Aramex</h3>
                    <p className="text-sm text-gray-600">International reach and reliability</p>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-xl">
                    <h3 className="text-lg font-bold text-primary mb-2">Mylerz</h3>
                    <p className="text-sm text-gray-600">Fast same-day delivery options</p>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary mb-3">Pro Tips for Shipping:</h3>
                  <ul className="space-y-2">
                    <li>• Offer free shipping on orders above a certain amount (e.g., 500 EGP)</li>
                    <li>• Display estimated delivery times clearly</li>
                    <li>• Send tracking information via SMS and WhatsApp</li>
                    <li>• Have a clear return and exchange policy</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Essential Features for Your E-commerce Website</h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">Mobile-First Design</h4>
                      <p className="text-sm text-gray-600">60% of Egyptian shoppers use mobile devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">Arabic Language Support</h4>
                      <p className="text-sm text-gray-600">RTL design with Arabic product descriptions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">WhatsApp Integration</h4>
                      <p className="text-sm text-gray-600">Enable direct customer communication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">Social Media Login</h4>
                      <p className="text-sm text-gray-600">Simplify registration with Facebook/Google</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">Product Reviews</h4>
                      <p className="text-sm text-gray-600">Build trust with customer testimonials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-xl">✓</span>
                    <div>
                      <h4 className="font-bold text-primary">Live Chat Support</h4>
                      <p className="text-sm text-gray-600">Answer questions in real-time</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Marketing Your E-commerce Store</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Building the website is just the beginning. Here's how to drive traffic and sales:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Social Media Marketing</h3>
                    <p>Focus on Facebook and Instagram - they're the most popular platforms in Egypt. 
                    Run targeted ads, collaborate with micro-influencers, and post engaging content regularly.</p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">SEO Optimization</h3>
                    <p>Optimize product pages for Egyptian search terms. Include location-based keywords 
                    and ensure your website loads fast on mobile connections.</p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Email Marketing</h3>
                    <p>Build your email list and send personalized offers. Cart abandonment emails can 
                    recover up to 30% of lost sales.</p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Google Ads</h3>
                    <p>Target high-intent keywords and retarget website visitors. Start with a small budget 
                    and scale based on performance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Breakdown */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Budget Breakdown: What Will It Cost?</h2>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium">Custom Website Development</span>
                    <span className="text-primary font-bold">50,000 - 150,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium">Payment Gateway Integration</span>
                    <span className="text-primary font-bold">5,000 - 10,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium">Shipping Integration</span>
                    <span className="text-primary font-bold">3,000 - 7,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium">Product Photography</span>
                    <span className="text-primary font-bold">10,000 - 30,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-medium">Hosting & Domain (Annual)</span>
                    <span className="text-primary font-bold">3,000 - 10,000 EGP</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-bold text-lg">Total Investment</span>
                    <span className="text-accent font-bold text-xl">71,000 - 207,000 EGP</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Ready to Launch Your E-commerce Store?</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Building a successful e-commerce website in Egypt requires careful planning, the right technology stack, 
                  and an understanding of the local market. With the right strategy and execution, your online store can 
                  tap into Egypt's growing digital economy.
                </p>

                <p>
                  At Fikra Agency, we specialize in building custom e-commerce solutions tailored for the Egyptian market. 
                  We handle everything from development and payment integration to SEO and digital marketing.
                </p>

                <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Let's Build Your Online Store</h3>
                  <p className="text-white mb-6">
                    Get a free consultation and custom quote for your e-commerce project
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Get Your Free Quote
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </main>
  )
}
