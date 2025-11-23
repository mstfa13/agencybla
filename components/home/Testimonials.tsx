'use client'

import { useState } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Younes',
    company: 'TechBytes',
    role: 'Founder & Editor',
    rating: 5,
    text: 'Fikra delivered a blazing-fast tech blog that transformed my content platform. Our website improved traffic conversion by 55% within the first quarter. The SEO optimization and Next.js performance are exceptional.',
    avatar: 'AY'
  },
  {
    id: 2,
    name: 'Coach & Dr.M3ta',
    company: 'Ascension',
    role: 'Fitness Coach',
    rating: 5,
    text: 'The Ascension coaching app exceeded all expectations. Fikra maximized the amount of clients I can manage at the same time by reducing the management and manual labour. Now I handle 500+ clients seamlessly with a 4.8/5 app rating!',
    avatar: 'M3'
  },
  {
    id: 3,
    name: 'Coach Omar Mohamed',
    company: 'Boxeo',
    role: 'Boxing Coach',
    rating: 5,
    text: 'My boxing training app hit 1,000+ downloads faster than expected. The video tutorials integration is smooth and athletes find it incredibly intuitive. Fikra truly understood my vision and delivered perfectly.',
    avatar: 'OM'
  },
  {
    id: 4,
    name: 'E-commerce Business Owner',
    company: 'Airpods4U',
    role: 'Owner',
    rating: 5,
    text: 'Our premium e-commerce site now handles 10,000+ monthly visitors effortlessly. The Paymob integration and checkout flow are flawless. Sales increased by 250% since launch. Best investment we made!',
    avatar: 'A4'
  },
  {
    id: 5,
    name: 'Untitled Academy',
    company: 'Untitled Academy',
    role: 'Director',
    rating: 5,
    text: 'Our educational platform serves 500+ students with a 95% completion rate. The learning management features are intuitive and students love the experience. Professional team, excellent results.',
    avatar: 'UA'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what Egyptian businesses say about working with us.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            <FaQuoteLeft className="text-5xl text-primary/20 mb-6" />
            
            {/* Rating */}
            <div className="flex space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-xl text-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {currentTestimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                <div className="text-sm text-gray-600">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={previous}
                className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-medium transition-all flex items-center justify-center text-primary hover:bg-primary hover:text-white"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-medium transition-all flex items-center justify-center text-primary hover:bg-primary hover:text-white"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
