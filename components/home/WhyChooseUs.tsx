import { FaBolt, FaUsers, FaClock, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: FaBolt,
    title: 'Lightning Fast',
    description: 'Optimized for performance with 90+ PageSpeed scores. Your users will love the speed.'
  },
  {
    icon: FaUsers,
    title: 'Customer-Centric',
    description: 'We listen, understand, and deliver exactly what your business needs to succeed.'
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    description: 'Transparent timelines and milestone tracking. We respect your deadlines.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Reliable',
    description: 'Bank-level security and 99.9% uptime. Your data and reputation are safe with us.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            We're not just developers - we're your partners in digital success. Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">6+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm text-white/80">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
