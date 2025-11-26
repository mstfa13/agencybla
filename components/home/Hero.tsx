import Link from 'next/link'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      {/* Background Pattern - resembling building lights */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge - Urgency + Social Proof */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 border border-accent/30 animate-pulse">
            <span className="text-2xl">�</span>
            <span className="text-sm font-semibold text-accent">7 Consultation Slots Left This Month</span>
          </div>

          {/* Headline - Problem-Focused, SEO-Optimized for "website development Egypt", "app development Cairo" */}
          <h1 className="mb-6 text-balance">
            Get More Customers Online with Professional Websites & Apps in Egypt
          </h1>

          {/* Subheadline - Specific Outcome + Target Keyword "digital solutions Egypt" */}
          <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
            We help Egyptian businesses increase sales and save time with custom websites, mobile apps, and automation. <span className="text-accent font-semibold">Proven results: 55% average conversion boost.</span>
          </p>

          {/* Social Proof - Above CTAs for Trust */}
          <div className="mb-6 flex items-center space-x-6 flex-wrap">
            <div className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-white/80">Egyptian<br/>Businesses Served</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-white/80">Client<br/>Satisfaction</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">4.8★</div>
              <div className="text-sm text-white/80">Average<br/>Rating</div>
            </div>
          </div>

          {/* Key Benefits - Outcome-Focused, Not Feature Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Launch your site in 4 weeks</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Works perfectly on all devices</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Built for Egyptian customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Never worry about tech issues</span>
            </div>
          </div>

          {/* CTA Buttons - Benefit-Driven Copy */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all shadow-lg touch-target"
            >
              Book Your Free Strategy Session
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-accent/50 touch-target"
            >
              See Client Success Stories
            </Link>
          </div>

          {/* Risk Reversal + Credibility */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-white/90">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400" />
              <span>No commitment. Free consultation call.</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400" />
              <span>24-hour response guarantee</span>
            </div>
          </div>

          {/* Client Logo Strip - Instant Credibility */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 mb-4 text-center">Trusted by leading Egyptian businesses:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/40 text-sm font-semibold">
              <span>TechBytes</span>
              <span className="text-white/20">•</span>
              <span>Ascension Fitness</span>
              <span className="text-white/20">•</span>
              <span>Boxeo Academy</span>
              <span className="text-white/20">•</span>
              <span>Airpods4U</span>
              <span className="text-white/20">•</span>
              <span>Untitled Academy</span>
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
