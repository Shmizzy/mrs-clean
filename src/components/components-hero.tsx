'use client'

import React from 'react'
import { Sparkles, Star } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Sparkles className="text-blue-300 opacity-30" size={48} />
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Star className="text-purple-300 opacity-30" size={64} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Sparkling Clean, Every Time
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-200">
            Experience the magic of a professionally cleaned space with our top-notch cleaning solutions
          </p>
          <div className="flex justify-center">
            <a
              href="#services"
              className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated cleaning elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#111827"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero