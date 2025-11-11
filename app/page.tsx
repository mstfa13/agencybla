import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FeaturedPortfolio from '@/components/home/FeaturedPortfolio'
import Testimonials from '@/components/home/Testimonials'
import BlogPreview from '@/components/home/BlogPreview'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedPortfolio />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  )
}
