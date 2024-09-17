'use client'

import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard: React.FC<{ name: string; testimonial: string }> = ({ name, testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} fill="currentColor" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{testimonial}</p>
    <p className="font-semibold">{name}</p>
  </div>
)

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="John Doe"
            testimonial="The cleaning service was exceptional. My house has never looked better!"
          />
          <TestimonialCard
            name="Jane Smith"
            testimonial="I'm impressed with the attention to detail. Will definitely use their services again."
          />
          <TestimonialCard
            name="Mike Johnson"
            testimonial="Professional, punctual, and thorough. Highly recommended!"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials