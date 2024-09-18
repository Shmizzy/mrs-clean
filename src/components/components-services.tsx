'use client'

import React from 'react'
import { Home, Car, Briefcase, Sparkles } from 'lucide-react'

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Home size={40} />}
            title="House Cleaning"
            description="Comprehensive cleaning for your entire home, leaving it spotless and fresh."
          />
          <ServiceCard
            icon={<Car size={40} />}
            title="Car Wash"
            description="Thorough interior and exterior cleaning to make your car shine like new."
          />
          <ServiceCard
            icon={<Briefcase size={40} />}
            title="Office Cleaning"
            description="Professional cleaning services to keep your workspace tidy and productive."
          />
          <ServiceCard
            icon={<Sparkles size={40} />}
            title="Deep Cleaning"
            description="Intensive cleaning for those hard-to-reach areas and stubborn stains."
          />
        </div>
      </div>
    </section>
  )
}

export default Services