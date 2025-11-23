import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export const metadata = {
  title: 'How to Choose the Best Web Development Company in Egypt 2024 | Fikra Agency',
  description: 'Complete guide to selecting the right web development partner for your Egyptian business.',
}

export default function WebDevelopmentCompanyGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">Web Development</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Choose the Best Web Development Company in Egypt 2024</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center"><FaCalendar className="mr-2 text-accent" />January 15, 2024</div>
              <div className="flex items-center"><FaClock className="mr-2 text-accent" />8 min read</div>
            </div>
          </div>
        </div>
      </section>
      <article className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">Choosing the right web development company can make or break your digital presence. With hundreds of agencies in Egypt, this guide helps you make the right choice.</p>
            </div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">1. Define Your Requirements First</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Project Type</h3>
                  <ul className="space-y-2 text-sm text-gray-700"><li>• E-commerce store</li><li>• Corporate website</li><li>• Landing page</li><li>• Web application</li></ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-3">Budget Guide</h3>
                  <ul className="space-y-2 text-sm text-gray-700"><li>• Landing: 15K-25K EGP</li><li>• Corporate: 35K-60K EGP</li><li>• E-commerce: 60K-120K EGP</li><li>• Custom: 100K-500K+ EGP</li></ul>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">2. Check Their Portfolio</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-accent text-xl mt-1 flex-shrink-0" />
                  <div><h3 className="font-bold text-primary mb-2">Quality & Design</h3><p className="text-sm text-gray-700">Modern, responsive, follows current trends</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-accent text-xl mt-1 flex-shrink-0" />
                  <div><h3 className="font-bold text-primary mb-2">Egyptian Market Experience</h3><p className="text-sm text-gray-700">Paymob/Fawry integration, Arabic support, local user behavior</p></div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"><p className="text-red-700 font-semibold flex items-center"><FaTimesCircle className="mr-2" />Red Flag: No portfolio or only templates</p></div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">3. Technical Expertise</h2>
              <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><h4 className="font-bold text-primary mb-3">Modern Frameworks</h4><ul className="space-y-1 text-sm text-gray-700"><li>• Next.js/React</li><li>• Node.js backends</li><li>• Laravel PHP</li></ul></div>
                  <div><h4 className="font-bold text-primary mb-3">Mobile-First</h4><ul className="space-y-1 text-sm text-gray-700"><li>• Responsive design</li><li>• Fast on 3G/4G</li><li>• Touch-friendly</li></ul></div>
                  <div><h4 className="font-bold text-primary mb-3">Performance</h4><ul className="space-y-1 text-sm text-gray-700"><li>• Under 3 sec load</li><li>• Image optimization</li><li>• CDN implementation</li></ul></div>
                  <div><h4 className="font-bold text-primary mb-3">Security</h4><ul className="space-y-1 text-sm text-gray-700"><li>• SSL certificates</li><li>• Secure payments</li><li>• Data protection</li></ul></div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">4. Communication Matters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Good Signs:</h3>
                  <ul className="space-y-2"><li className="flex items-start text-sm"><span className="text-accent mr-2">✓</span><span>Quick responses (24hr)</span></li><li className="flex items-start text-sm"><span className="text-accent mr-2">✓</span><span>Weekly progress reports</span></li><li className="flex items-start text-sm"><span className="text-accent mr-2">✓</span><span>Project management tools</span></li></ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Red Flags:</h3>
                  <ul className="space-y-2"><li className="flex items-start text-sm"><span className="text-red-600 mr-2">✗</span><span>Slow to respond</span></li><li className="flex items-start text-sm"><span className="text-red-600 mr-2">✗</span><span>Vague timelines</span></li><li className="flex items-start text-sm"><span className="text-red-600 mr-2">✗</span><span>No formal process</span></li></ul>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">5. Questions to Ask</h2>
              <div className="grid gap-3">
                <div className="bg-gray-50 rounded-lg p-4 flex items-start"><span className="text-accent font-bold mr-4">1.</span><span className="text-sm">Can I see 3-5 similar projects you've built?</span></div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start"><span className="text-accent font-bold mr-4">2.</span><span className="text-sm">Have you integrated Egyptian payment gateways?</span></div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start"><span className="text-accent font-bold mr-4">3.</span><span className="text-sm">What's your typical timeline for this type of project?</span></div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start"><span className="text-accent font-bold mr-4">4.</span><span className="text-sm">Who owns the code and design files?</span></div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-start"><span className="text-accent font-bold mr-4">5.</span><span className="text-sm">What post-launch support do you offer?</span></div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Major Red Flags</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><div className="flex items-start"><FaTimesCircle className="text-red-600 mr-3 mt-1" /><div><p className="font-bold text-red-700 mb-1">100% payment upfront</p><p className="text-sm text-red-600">High abandonment risk</p></div></div></div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><div className="flex items-start"><FaTimesCircle className="text-red-600 mr-3 mt-1" /><div><p className="font-bold text-red-700 mb-1">No written contract</p><p className="text-sm text-red-600">No legal protection</p></div></div></div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><div className="flex items-start"><FaTimesCircle className="text-red-600 mr-3 mt-1" /><div><p className="font-bold text-red-700 mb-1">Guaranteed SEO rankings</p><p className="text-sm text-red-600">Unrealistic promises</p></div></div></div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"><div className="flex items-start"><FaTimesCircle className="text-red-600 mr-3 mt-1" /><div><p className="font-bold text-red-700 mb-1">Extremely low prices</p><p className="text-sm text-red-600">Poor quality work</p></div></div></div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Conclusion</h2>
              <div className="space-y-6 text-gray-700">
                <p>Choosing the right web development company requires research and realistic expectations. Your website is your digital storefront—invest wisely.</p>
                <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Look for:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Strong portfolio</div>
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Clear communication</div>
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Transparent pricing</div>
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Post-launch support</div>
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Egyptian market knowledge</div>
                    <div className="flex items-center text-sm"><FaCheckCircle className="text-accent mr-2" />Modern technology</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h3>
                  <p className="text-white mb-6">Get a free consultation with Fikra Agency—honest advice, even if we're not the right fit.</p>
                  <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">Get Free Consultation</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
