'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import beforeKitchen from '../assets/before-kitchen.png';
import afterKitchen from '../assets/after-kitchen.png';
import beforeRoom from '../assets/before-room.png';
import afterRoom from '../assets/after-room.png';
import beforeKitchen2 from '../assets/before-kitchen2.png';
import afterKitchen2 from '../assets/after-kitchen2.png'
import beforeBedroom from '../assets/before-bedroom.png';
import afterBedroom from '../assets/after-bedroom.png';
import beforeShower from '../assets/before-shower.png';
import afterShower from '../assets/after-shower.png';
import beforeTrailer from '../assets/before-trailer.png';
import afterTrailer from '../assets/after-trailer.png';
import beforeCar from '../assets/before-car.png';
import afterCar from '../assets/after-car.png';


// This would be replaced with actual before/after image pairs
const beforeAfterImages = [
  {
    before: beforeKitchen,
    after: afterKitchen,
    description: 'Kitchen'
  },
  {
    before: beforeRoom,
    after: afterRoom,
    description: 'Room'
  },
  {
    before: beforeKitchen2,
    after: afterKitchen2,
    description: 'Kitchen2'
  },
  {
    before: beforeBedroom,
    after: afterBedroom,
    description: 'Bedroom'
  },
  {
    before: beforeShower,
    after: afterShower,
    description: 'Shower'
  },
  {
    before: beforeTrailer,
    after: afterTrailer,
    description: 'Trailer'
  },
  {
    before: beforeCar,
    after: afterCar,
    description: 'Car'
  },
]

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Before & After</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <img 
              src={beforeAfterImages[currentIndex].before} 
              alt={`Before ${beforeAfterImages[currentIndex].description}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div 
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={beforeAfterImages[currentIndex].after} 
                alt={`After ${beforeAfterImages[currentIndex].description}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            ></div>
            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute top-0 bottom-0 w-full opacity-0 cursor-ew-resize"
            />
          </div>
          <p className="text-center mt-4 text-lg font-semibold">
            {beforeAfterImages[currentIndex].description}
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition duration-300"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery