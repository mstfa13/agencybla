import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaVideo } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Video Production Egypt | Corporate Videos & Social Media Content',
  description: 'Professional video production and editing services in Egypt. Corporate videos, explainers, social media content, motion graphics. Starting from 8,000 EGP.',
  keywords: 'video production egypt, video editing egypt, corporate videos, explainer videos, motion graphics egypt',
}

export default function VideoPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6">Video Production & Editing in Egypt</h1>
            <p className="text-xl mb-8 text-white/90">
              Tell your story with high-quality video content. From corporate videos to social media reels—we create videos that engage and convert.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Get Free Quote <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <h2 className="text-center mb-12">Video Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Corporate Videos', desc: 'Professional company profiles and presentations.', items: ['Company overview', 'Team introductions', 'Office tours', 'Client testimonials'], price: '15,000 EGP' },
              { title: 'Product Demos', desc: 'Showcase your products in action.', items: ['Product features', 'How-to videos', 'Unboxing videos', 'Comparison videos'], price: '10,000 EGP' },
              { title: 'Explainer Videos', desc: 'Simplify complex ideas with animation.', items: ['2D animation', 'Whiteboard animation', 'Voiceover', 'Music'], price: '12,000 EGP' },
              { title: 'Social Media Content', desc: 'Short-form videos for social platforms.', items: ['Instagram Reels', 'TikTok videos', 'YouTube Shorts', 'Facebook videos'], price: '8,000 EGP' },
              { title: 'Event Coverage', desc: 'Capture your events professionally.', items: ['Full HD recording', 'Multi-camera setup', 'Same-day edits', 'Highlight reels'], price: '20,000 EGP' },
              { title: 'Video Ads', desc: 'High-converting video advertisements.', items: ['Facebook ads', 'YouTube ads', 'Instagram ads', 'TikTok ads'], price: '10,000 EGP' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-soft">
                <FaVideo className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-indigo-600 font-bold">From {service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Production Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Professional cameras & equipment', 'Lighting setup', 'Audio recording', 'On-location filming', 'Director & crew'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Post-Production</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Professional editing', 'Color grading', 'Sound design & mixing', 'Motion graphics', 'Subtitles & captions'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Create Amazing Videos?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your video project and create content that captivates your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-all shadow-lg">
              Get Free Quote <FaArrowRight className="ml-2" />
            </Link>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-all shadow-lg">
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
