'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold text-primary">CleanQueen</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#services" className="text-gray-600 hover:text-primary">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-primary">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#services" className="block py-2 px-4 text-sm hover:bg-gray-100">Services</a>
          <a href="#gallery" className="block py-2 px-4 text-sm hover:bg-gray-100">Gallery</a>
          <a href="#testimonials" className="block py-2 px-4 text-sm hover:bg-gray-100">Testimonials</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header