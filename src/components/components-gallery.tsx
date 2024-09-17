'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

const images = [
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
]

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg cursor-pointer transition duration-300 hover:opacity-75"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected work" className="max-w-full max-h-[90vh] rounded-lg" />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery