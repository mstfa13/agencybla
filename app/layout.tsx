import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottomBar from '@/components/layout/StickyBottomBar'

export const metadata: Metadata = {
  title: 'FikraX | Digital Solutions Agency Egypt',
  description: 'Leading digital solutions agency in Egypt. We build custom websites, mobile apps, and automation solutions for businesses. Get your free quote today!',
  keywords: 'web development egypt, mobile app development cairo, digital agency egypt, website design egypt, software development egypt',
  icons: {
    icon: [
      { url: '/fikra-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/fikra-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/fikra-logo.png',
    apple: '/fikra-logo.png',
  },
  openGraph: {
    title: 'Digital Solutions Agency Egypt | Web & Mobile Development',
    description: 'Leading digital solutions agency in Egypt. Custom websites, mobile apps, and automation solutions.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  )
}
