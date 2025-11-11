import Link from 'next/link'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <FaCheckCircle className="text-accent" />
            <span className="text-sm font-semibold">Egypt's Trusted Digital Partner</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance">
            Transform Your Business with Custom Digital Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            We build high-performance websites, mobile apps, and automation solutions that drive real results for Egyptian businesses. From startups to enterprises, we turn your vision into reality.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Fast delivery (4-8 weeks)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Mobile-first design</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Egyptian market expertise</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Ongoing support & maintenance</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg hover:shadow-xl touch-target"
            >
              Get Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 touch-target"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-white/80">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
