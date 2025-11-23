import Link from 'next/link'
import { FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Let's discuss your project and explore how we can help you achieve your digital goals. 
            Get a free consultation and detailed quote - no obligations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl touch-target"
            >
              Get Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="tel:+201557525158"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 touch-target"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
            <a 
              href="https://wa.me/201557525158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl touch-target"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust Signals */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-white/80 mb-4">Trusted by 50+ Egyptian businesses</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Flexible payment plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
