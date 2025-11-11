'use client'

import { useState } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    company: 'Cairo E-commerce',
    role: 'CEO',
    rating: 5,
    text: 'Working with this team transformed our online business. Our mobile sales increased by 300% within 3 months. They understood the Egyptian market perfectly and delivered beyond our expectations.',
    avatar: 'AH'
  },
  {
    id: 2,
    name: 'Sarah Mohamed',
    company: 'Alexandria Medical Group',
    role: 'Operations Manager',
    rating: 5,
    text: 'The patient portal they built for us is exceptional. It handles 5,000+ users seamlessly and our staff loves how easy it is to use. Great communication throughout the project.',
    avatar: 'SM'
  },
  {
    id: 3,
    name: 'Karim Ibrahim',
    company: 'Giza Logistics',
    role: 'Director',
    rating: 5,
    text: 'Their automation solution saved us 80% of manual data entry time. ROI was achieved in just 4 months. Professional, responsive, and delivered exactly what we needed.',
    avatar: 'KI'
  },
  {
    id: 4,
    name: 'Mona Ali',
    company: 'Nile Restaurant Chain',
    role: 'Owner',
    rating: 5,
    text: 'The mobile app they developed handles 10,000+ daily orders across our locations. The Paymob and Fawry integration works flawlessly. Couldn\'t be happier with the results.',
    avatar: 'MA'
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
