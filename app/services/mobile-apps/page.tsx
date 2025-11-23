import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaApple, FaAndroid, FaMobileAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Mobile App Development Egypt | iOS & Android Apps | Flutter & React Native',
  description: 'Professional mobile app development in Egypt. Native iOS, Android, and cross-platform apps. User-friendly, high-performance. Starting from 40,000 EGP.',
  keywords: 'mobile app development egypt, ios app egypt, android app egypt, flutter egypt, react native egypt, app developer cairo',
}

export default function MobileAppsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">📱 Mobile App Development</span>
            </div>
            <h1 className="mb-6">Build Powerful Mobile Apps for iOS & Android in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              Transform your business with custom mobile applications. We create native and cross-platform apps that users love—designed for the Egyptian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
              >
                Get Free Quote
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                View Our Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Apps */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Mobile Apps We Build</h2>
            <p className="text-lg text-gray-600">
              From simple utilities to complex enterprise apps—we cover all your mobile development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaApple className="text-5xl text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Native iOS Apps (Swift)</h3>
              <p className="text-gray-600 mb-4">
                High-performance iOS apps built with Swift for iPhone and iPad. Perfect integration with Apple ecosystem.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  SwiftUI & UIKit
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  App Store optimization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  iOS 15+ support
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  Apple Pay integration
                </li>
              </ul>
              <div className="text-sm text-gray-500">Timeline: 8-12 weeks | Starting from 50,000 EGP</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <FaAndroid className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Native Android Apps (Kotlin)</h3>
              <p className="text-gray-600 mb-4">
                Powerful Android apps built with Kotlin. Optimized for diverse devices and screen sizes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  Kotlin & Jetpack Compose
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  Google Play optimization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  Android 10+ support
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0" />
                  Google Pay integration
                </li>
              </ul>
              <div className="text-sm text-gray-500">Timeline: 8-12 weeks | Starting from 50,000 EGP</div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-xl shadow-medium md:col-span-2">
              <div className="max-w-3xl mx-auto text-center">
                <FaMobileAlt className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Cross-Platform Apps (Flutter & React Native)</h3>
                <p className="text-white/90 mb-6">
                  Build once, deploy everywhere. Cross-platform apps offer 30-40% cost savings while maintaining native-like performance. Perfect for startups and MVPs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-3">Flutter Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Single codebase for iOS & Android
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Fast development (hot reload)
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Beautiful UI with Material Design
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        60 FPS performance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">React Native Benefits:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        JavaScript/React ecosystem
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Large community & libraries
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Share code with web app
                      </li>
                      <li className="flex items-center">
                        <FaCheckCircle className="text-accent mr-2 flex-shrink-0" />
                        Proven by Facebook, Instagram
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-sm">Timeline: 6-10 weeks | Starting from 40,000 EGP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Mobile app solutions tailored to your industry's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🛒',
                title: 'E-commerce & Retail',
                description: 'Shopping apps with cart, checkout, Paymob integration, order tracking'
              },
              {
                emoji: '🚚',
                title: 'Delivery & Logistics',
                description: 'Real-time tracking, driver apps, route optimization, in-app chat'
              },
              {
                emoji: '📚',
                title: 'Education & E-learning',
                description: 'Course platforms, video lessons, quizzes, progress tracking'
              },
              {
                emoji: '🏥',
                title: 'Healthcare & Wellness',
                description: 'Appointment booking, telemedicine, health records, prescriptions'
              },
              {
                emoji: '🍽️',
                title: 'Food & Restaurants',
                description: 'Menu browsing, online ordering, table reservation, loyalty programs'
              },
              {
                emoji: '🏋️',
                title: 'Fitness & Sports',
                description: 'Workout tracking, nutrition plans, trainer booking, social features'
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-5xl mb-4">{industry.emoji}</div>
                <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features We Include */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Core Features We Build</h2>
            <p className="text-lg text-gray-600">
              Essential features that make your app successful and user-friendly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'User Authentication (Email, Phone, Social Login)',
              'Push Notifications',
              'In-App Payments (Paymob, Fawry, Stripe)',
              'Real-time Chat & Messaging',
              'GPS & Location Services',
              'Camera & Photo Upload',
              'Offline Mode & Data Sync',
              'Social Media Integration',
              'Analytics & User Tracking',
              'Multi-language Support (Arabic/English)',
              'Dark Mode Support',
              'App Store & Google Play Submission'
            ].map((feature, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-soft">
                <FaCheckCircle className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our App Development Process</h2>
            <p className="text-lg text-gray-600">
              From concept to App Store—a transparent, agile process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { phase: 'Week 1-2', title: 'Discovery & UX Design', tasks: 'Requirements gathering, user research, wireframing, user flow mapping' },
              { phase: 'Week 3-4', title: 'UI Design & Prototyping', tasks: 'High-fidelity mockups, interactive prototype, design system creation' },
              { phase: 'Week 5-8', title: 'Development & Integration', tasks: 'Frontend & backend coding, API integration, feature implementation' },
              { phase: 'Week 9-10', title: 'Testing & QA', tasks: 'Functional testing, device testing, bug fixing, performance optimization' },
              { phase: 'Week 11-12', title: 'Launch & Support', tasks: 'App store submission, launch monitoring, post-launch support' }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">{step.phase}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.tasks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">App Development Pricing</h2>
            <p className="text-lg text-gray-600">
              Transparent pricing based on complexity and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Simple App</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">40,000 EGP</div>
              <p className="text-gray-600 mb-6 text-sm">Basic features, single platform</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['3-5 screens', 'Basic UI/UX', 'User authentication', 'Push notifications', 'One platform (iOS or Android)', '8-10 weeks'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-purple-600 text-white p-6 rounded-xl shadow-medium transform md:scale-105">
              <div className="text-xs font-semibold bg-accent px-3 py-1 rounded-full inline-block mb-2">RECOMMENDED</div>
              <h3 className="text-xl font-semibold mb-2">Standard App</h3>
              <div className="text-3xl font-bold mb-4">70,000 EGP</div>
              <p className="text-white/90 mb-6 text-sm">Cross-platform with integrations</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['10-15 screens', 'Custom UI/UX', 'Backend & database', 'Payment integration', 'iOS & Android', '10-12 weeks', '3 months support'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-accent mr-2 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all">
                Get Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Complex App</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">120,000+ EGP</div>
              <p className="text-gray-600 mb-6 text-sm">Advanced features & integrations</p>
              <ul className="space-y-3 mb-6 text-sm">
                {['20+ screens', 'Advanced animations', 'Real-time features', 'AI/ML integration', 'Admin dashboard', '14-20 weeks', '6 months support'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-2 flex-shrink-0 text-xs" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's turn your app idea into reality. Get a free consultation and detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg"
            >
              Get Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <a 
              href="https://wa.me/201557525158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
