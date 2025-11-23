'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx5wfIHBNKGs3QkixnR6hxMobgXsp5Sz-fNk-FKOleENnboDhBNyAYnxU1WZQT_fi1ipA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Contact Form'
        })
      })

      setSubmitStatus('success')
      setShowSuccessModal(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      alert('There was an error submitting your form. Please try again or contact us directly via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-scaleIn">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-8 py-3 bg-gradient-to-r from-accent to-gold text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your project? Have questions? We'd love to hear from you. Get a free consultation and quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-soft">
                <h2 className="mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ahmed Mohamed"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="ahmed@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+20 10 1234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="websites">Websites & Web Apps</option>
                        <option value="mobile">Mobile Apps</option>
                        <option value="automation">Automation Solutions</option>
                        <option value="it-strategy">IT Strategy</option>
                        <option value="cloud">Cloud Services</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="design">Graphic Design</option>
                        <option value="video">Video Production</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your project requirements, timeline, and budget..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+201557525158" className="flex items-start hover:text-primary transition-colors">
                    <FaPhone className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+20 15 5752 5158</div>
                    </div>
                  </a>
                  <a href="mailto:info@example.com" className="flex items-start hover:text-primary transition-colors">
                    <FaEnvelope className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@example.com</div>
                    </div>
                  </a>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-gray-600">Cairo, Egypt</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday</span>
                    <span className="font-semibold">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-4">WhatsApp Us</h3>
                <p className="mb-4 text-white/90 text-sm">
                  Get instant responses on WhatsApp. We're usually online during business hours!
                </p>
                <a 
                  href="https://wa.me/201557525158" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Chat on WhatsApp
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/fikrax" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-all">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://www.instagram.com/fikrax.agency/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-all">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
            <p className="text-gray-700">
              <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call or WhatsApp us directly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
