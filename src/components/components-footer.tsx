'use client'

import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">CleanQueen</h3>
            <p className="text-sm">Professional cleaning services for your home and office.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} CleanQueen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer