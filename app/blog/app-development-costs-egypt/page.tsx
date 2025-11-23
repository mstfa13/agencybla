import Link from 'next/link'
import { FaArrowLeft, FaClock, FaCalendar, FaCheckCircle } from 'react-icons/fa'

export const metadata = {
  title: 'Mobile App Development Costs in Egypt: 2024 Complete Breakdown | Fikra Agency',
  description: 'Transparent pricing guide for iOS and Android app development. Learn what factors affect costs and how to budget your project.',
}

export default function AppDevelopmentCostsEgypt() {
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
              Mobile Apps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile App Development Costs in Egypt: 2024 Complete Breakdown
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-accent" />
                February 10, 2024
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-accent" />
                6 min read
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
                One of the first questions we hear from clients is: "How much does it cost to build a mobile app in Egypt?" 
                The answer isn't straightforward - app development costs vary significantly based on complexity, features, 
                and platform. This comprehensive guide breaks down all the costs involved and helps you budget accurately 
                for your mobile app project.
              </p>
            </div>

            {/* Quick Answer */}
            <div className="bg-gradient-to-br from-accent/10 to-gold/10 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">The Quick Answer</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">30,000 - 80,000 EGP</div>
                  <div className="text-sm text-gray-600">Simple App</div>
                  <div className="text-xs text-gray-500 mt-1">Basic features, 1 platform</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">80,000 - 200,000 EGP</div>
                  <div className="text-sm text-gray-600">Medium Complexity</div>
                  <div className="text-xs text-gray-500 mt-1">Multiple features, 2 platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">200,000 - 500,000+ EGP</div>
                  <div className="text-sm text-gray-600">Complex App</div>
                  <div className="text-xs text-gray-500 mt-1">Advanced features, full backend</div>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">What Determines App Development Costs?</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Understanding the factors that influence app development costs helps you make informed decisions 
                  and set realistic budgets. Here are the key cost drivers:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h3 className="text-xl font-bold text-primary mb-2">1. App Complexity</h3>
                    <p>
                      The number of features and their complexity directly impacts development time and cost. 
                      A simple app with 5-10 screens costs significantly less than a complex app with 30+ screens 
                      and advanced functionality.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h3 className="text-xl font-bold text-primary mb-2">2. Platform Choice</h3>
                    <p>
                      Developing for iOS only, Android only, or both platforms affects the budget. Cross-platform 
                      development with React Native or Flutter can reduce costs by 30-40% compared to native development.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h3 className="text-xl font-bold text-primary mb-2">3. Design Requirements</h3>
                    <p>
                      Custom UI/UX design, animations, and unique visual elements add to the cost. Template-based 
                      designs are more affordable but offer less differentiation.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h3 className="text-xl font-bold text-primary mb-2">4. Backend & API Integration</h3>
                    <p>
                      Apps requiring user authentication, databases, payment processing, and third-party integrations 
                      need robust backend development, which increases costs.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h3 className="text-xl font-bold text-primary mb-2">5. Development Team Location</h3>
                    <p>
                      Egypt offers competitive rates compared to Western markets while maintaining high quality. 
                      Egyptian developers charge 40-60% less than their US or European counterparts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 - App Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Cost Breakdown by App Type</h2>
              
              <div className="space-y-6">
                {/* Simple Apps */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Simple Apps</h3>
                      <p className="text-gray-600">Basic functionality with minimal backend requirements</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">30,000 - 80,000 EGP</div>
                      <div className="text-sm text-gray-500">2-3 months</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Typical Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> 5-10 screens</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Basic user registration</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Simple database</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Standard UI components</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Basic push notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Examples:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Calculator or converter apps</li>
                        <li>• Simple booking apps</li>
                        <li>• Basic fitness trackers</li>
                        <li>• Information/catalog apps</li>
                        <li>• Simple note-taking apps</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Medium Complexity */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Medium Complexity Apps</h3>
                      <p className="text-gray-600">Multiple features with moderate backend complexity</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">80,000 - 200,000 EGP</div>
                      <div className="text-sm text-gray-500">3-6 months</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Typical Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> 10-25 screens</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> User profiles & authentication</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Payment integration</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Custom UI/UX design</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> API integrations</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Real-time updates</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Advanced notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Examples:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• E-commerce apps</li>
                        <li>• Delivery apps</li>
                        <li>• Social networking apps</li>
                        <li>• Fitness & health apps</li>
                        <li>• Educational platforms</li>
                        <li>• Restaurant ordering apps</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Complex Apps */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Complex Apps</h3>
                      <p className="text-gray-600">Advanced features with sophisticated backend systems</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">200,000 - 500,000+ EGP</div>
                      <div className="text-sm text-gray-500">6-12+ months</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-primary mb-3">Typical Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> 25+ screens</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Complex user roles</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Advanced payment systems</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> AI/ML features</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Real-time chat/video</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Complex animations</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Multiple API integrations</li>
                        <li className="flex items-center"><FaCheckCircle className="text-accent mr-2" /> Admin dashboard</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-3">Examples:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Ride-sharing apps (Uber-like)</li>
                        <li>• Fintech/banking apps</li>
                        <li>• Marketplace platforms</li>
                        <li>• Healthcare management systems</li>
                        <li>• Real-time gaming apps</li>
                        <li>• Video streaming platforms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hidden Costs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Hidden Costs You Should Know About</h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="mb-6">
                  Beyond the initial development cost, there are ongoing expenses to consider:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                    <h3 className="text-lg font-bold text-primary mb-2">App Store Fees</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Apple App Store: 99 USD/year<br/>
                      Google Play Store: 25 USD one-time
                    </p>
                    <div className="text-accent font-bold">~2,000 - 3,500 EGP/year</div>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                    <h3 className="text-lg font-bold text-primary mb-2">Backend & Hosting</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Server costs, database, storage, and bandwidth
                    </p>
                    <div className="text-accent font-bold">3,000 - 15,000 EGP/month</div>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                    <h3 className="text-lg font-bold text-primary mb-2">Maintenance & Updates</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Bug fixes, OS updates, new features
                    </p>
                    <div className="text-accent font-bold">15-20% of dev cost/year</div>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                    <h3 className="text-lg font-bold text-primary mb-2">Third-Party Services</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Analytics, push notifications, maps, payment gateways
                    </p>
                    <div className="text-accent font-bold">2,000 - 10,000 EGP/month</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ways to Reduce Costs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Smart Ways to Reduce Development Costs</h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">1. Start with an MVP (Minimum Viable Product)</h3>
                  <p>
                    Launch with core features only, gather user feedback, then add more features in updates. 
                    This can reduce initial costs by 40-50% and validate your concept before full investment.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">2. Choose Cross-Platform Development</h3>
                  <p>
                    Use React Native or Flutter to build for both iOS and Android simultaneously. This saves 
                    30-40% compared to developing separate native apps.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Use Pre-Built Solutions</h3>
                  <p>
                    Leverage existing frameworks, UI libraries, and third-party services instead of building 
                    everything from scratch. This accelerates development and reduces costs.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Have Clear Requirements</h3>
                  <p>
                    Detailed planning and documentation prevent costly revisions. Changing requirements mid-development 
                    can increase costs by 30-50%.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">5. Choose the Right Development Partner</h3>
                  <p>
                    Egyptian development agencies offer excellent quality at competitive rates. Working with an 
                    experienced team like Fikra Agency ensures efficient development and fewer costly mistakes.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Egypt */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Why Develop Your App in Egypt?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">💰</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Cost-Effective</h3>
                      <p className="text-sm">40-60% lower costs than US/Europe without compromising quality</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">🎓</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Talented Developers</h3>
                      <p className="text-sm">Large pool of skilled developers with international experience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">🌍</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Strategic Location</h3>
                      <p className="text-sm">Convenient time zone for collaboration with Middle East, Europe, and Africa</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">💬</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">English Proficiency</h3>
                      <p className="text-sm">Most developers are fluent in English, ensuring smooth communication</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">🚀</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Growing Tech Hub</h3>
                      <p className="text-sm">Egypt is emerging as a leading tech hub in MENA region</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-accent text-2xl">🔒</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">IP Protection</h3>
                      <p className="text-sm">Strong legal framework for intellectual property rights</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Get an Accurate Quote for Your App</h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Every app is unique, and so are its costs. The figures in this guide provide a general framework, 
                  but the best way to get an accurate estimate is to discuss your specific requirements with experienced 
                  developers.
                </p>

                <p>
                  At Fikra Agency, we offer free consultations to understand your vision and provide transparent, 
                  detailed quotes with no hidden fees. We've built apps for startups and established businesses across 
                  various industries, and we'd love to help bring your app idea to life.
                </p>

                <div className="bg-gradient-to-r from-accent to-gold p-8 rounded-xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h3>
                  <p className="text-white mb-6">
                    Get a free consultation and custom quote tailored to your project
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact"
                      className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                      Get Your Free Quote
                    </Link>
                    <Link 
                      href="/portfolio"
                      className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                    >
                      View Our Apps
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
