'use client'

import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Cleaning Services</h1>
          <p className="text-xl mb-8">Experience the difference with our top-notch cleaning solutions</p>
          <a
            href="#contact"
            className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero