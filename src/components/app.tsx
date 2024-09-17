'use client'

import React, { useState } from 'react'
import { ChevronUp } from 'lucide-react'

// Importing components (these will be created next)
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const checkScrollTop = () => {
    if (!showScrollTop && window.pageYOffset > 400) {
      setShowScrollTop(true)
    } else if (showScrollTop && window.pageYOffset <= 400) {
      setShowScrollTop(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScrollTop])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={scrollTop}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}

export default App