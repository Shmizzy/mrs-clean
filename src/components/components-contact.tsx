'use client'

import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-gray-300">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="service" className="block mb-2 font-medium text-gray-300">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="">Select a service</option>
                <option value="house-cleaning">House Cleaning</option>
                <option value="car-wash">Car Wash</option>
                <option value="office-cleaning">Office Cleaning</option>
                <option value="deep-cleaning">Deep Cleaning</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact