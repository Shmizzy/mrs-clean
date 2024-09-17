'use client'

import React, { useState, useEffect } from 'react'
import { Phone } from "lucide-react"

// Since we're not using the Next.js Button component, let's create a simple one
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'ghost' }> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}) => {
  const baseClass = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
  const variantClass = variant === 'ghost' 
    ? "text-gray-600 hover:bg-gray-100" 
    : "bg-primary text-white hover:bg-primary-dark"
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

const StickyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary">
              Logo
            </a>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="/gallery" className="text-sm font-medium text-gray-700 hover:text-primary">
              Gallery
            </a>
            <a href="/services" className="text-sm font-medium text-gray-700 hover:text-primary">
              Services
            </a>
            <a href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
              Contact
            </a>
            <a href="/about" className="text-sm font-medium text-gray-700 hover:text-primary">
              About
            </a>
          </nav>
          <div className="flex items-center">
            <Button className="hidden sm:inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
            <div className="md:hidden">
              <Button variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default StickyHeader