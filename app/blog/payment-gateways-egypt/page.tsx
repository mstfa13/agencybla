import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaCheckCircle } from 'react-icons/fa'

export const metadata = {
  title: 'Best Payment Gateways for Egyptian E-commerce Websites 2024 | Fikra Agency',
  description: 'Comprehensive comparison of Paymob, Fawry, Accept, and other payment solutions for Egyptian online businesses.',
}

export default function PaymentGatewaysEgypt() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent-light mb-6 transition-colors">
            <FaArrowLeft className="mr-2" />Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">E-commerce</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Payment Gateways for Egyptian E-commerce Websites</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center"><FaCalendar className="mr-2 text-accent" />January 5, 2024</div>
              <div className="flex items-center"><FaClock className="mr-2 text-accent" />6 min read</div>
            </div>
          </div>
        </div>
      </section>
      <article className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Choosing the right payment gateway is crucial for your Egyptian e-commerce business. This comprehensive guide compares all major payment solutions, helping you make the best choice for your online store.
              </p>
            </div>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Top Payment Gateways</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">1. Paymob/Accept ⭐ Recommended</h3>
                  <p className="text-gray-700 mb-4">Egypt's leading payment gateway with the best features and rates.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Advantages:</h4>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />2.75% transaction fee</li><li><FaCheckCircle className="inline text-accent mr-2" />Easy API integration</li><li><FaCheckCircle className="inline text-accent mr-2" />Supports installments</li><li><FaCheckCircle className="inline text-accent mr-2" />Cards, wallets, bank transfers</li><li><FaCheckCircle className="inline text-accent mr-2" />Fast settlement (2-3 days)</li></ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Best For:</h4>
                      <p className="text-sm text-gray-700 mb-3">E-commerce stores, digital services, subscriptions, any business needing flexible payment options</p>
                      <div className="p-4 bg-white rounded-lg">
                        <p className="text-sm"><strong>Setup Time:</strong> 2-3 business days</p>
                        <p className="text-sm"><strong>Monthly Fee:</strong> None</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">2. Fawry</h3>
                  <p className="text-gray-700 mb-4">Trusted Egyptian payment network with massive offline presence.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Advantages:</h4>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />200,000+ payment points nationwide</li><li><FaCheckCircle className="inline text-accent mr-2" />High trust with Egyptian customers</li><li><FaCheckCircle className="inline text-accent mr-2" />Cash payment option</li><li><FaCheckCircle className="inline text-accent mr-2" />Fawry wallet integration</li></ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Details:</h4>
                      <p className="text-sm text-gray-700 mb-2"><strong>Fees:</strong> 2.5% - 3.5% based on volume</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Setup:</strong> 3-5 business days</p>
                      <p className="text-sm text-gray-700"><strong>Best For:</strong> Businesses targeting customers who prefer Fawry kiosks or older demographics</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">3. Vodafone Cash</h3>
                  <p className="text-gray-700 mb-4">Mobile wallet popular with younger Egyptian users.</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2 text-sm"><li><FaCheckCircle className="inline text-accent mr-2" />20+ million users</li><li><FaCheckCircle className="inline text-accent mr-2" />Instant payments</li><li><FaCheckCircle className="inline text-accent mr-2" />No cards needed</li></ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700"><strong>Fees:</strong> ~2.5%</p>
                      <p className="text-sm text-gray-700"><strong>Best For:</strong> Mobile-first businesses, younger audience</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Quick Comparison</h2>
              <div className="bg-gray-50 rounded-xl p-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary text-white">
                    <tr><th className="p-3 text-left">Gateway</th><th className="p-3">Fees</th><th className="p-3">Setup</th><th className="p-3">Best For</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="p-3 font-bold">Paymob/Accept ⭐</td><td className="p-3 text-accent font-bold">2.75%</td><td className="p-3">2-3 days</td><td className="p-3">All businesses</td></tr>
                    <tr className="border-b"><td className="p-3 font-bold">Fawry</td><td className="p-3">2.5-3.5%</td><td className="p-3">3-5 days</td><td className="p-3">Mass market</td></tr>
                    <tr className="border-b"><td className="p-3 font-bold">Vodafone Cash</td><td className="p-3">~2.5%</td><td className="p-3">1-2 days</td><td className="p-3">Mobile users</td></tr>
                    <tr className="border-b"><td className="p-3 font-bold">PayPal</td><td className="p-3">4.4% + fees</td><td className="p-3">1 day</td><td className="p-3">International</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Recommendation</h2>
              <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8">
                <p className="text-lg font-bold text-primary mb-4">The Winning Combination:</p>
                <p className="text-gray-700 mb-6">For most Egyptian e-commerce businesses, use <strong className="text-accent">Paymob/Accept as your primary gateway</strong> combined with <strong className="text-accent">Cash on Delivery (COD)</strong> as a backup.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-accent mb-2">70%</div>
                    <h4 className="font-bold text-primary mb-2">Online Payments</h4>
                    <p className="text-sm text-gray-600">Paymob/Accept handles cards, wallets, installments</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <h4 className="font-bold text-primary mb-2">Cash on Delivery</h4>
                    <p className="text-sm text-gray-600">For customers who prefer paying cash</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Integration Tips</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">1. Test Thoroughly</h4>
                  <p className="text-sm text-gray-700">Use sandbox mode to test all payment scenarios before going live</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">2. Mobile Optimization</h4>
                  <p className="text-sm text-gray-700">60% of Egyptian e-commerce is mobile - ensure smooth mobile checkout</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-primary mb-2">3. Clear Communication</h4>
                  <p className="text-sm text-gray-700">Show all accepted payment methods upfront to reduce cart abandonment</p>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Need Payment Gateway Integration?</h3>
                <p className="text-white mb-6">Fikra Agency specializes in seamless payment gateway integration for Egyptian e-commerce businesses. We handle everything from setup to testing.</p>
                <Link href="/contact" className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors">Get Free Consultation</Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}
