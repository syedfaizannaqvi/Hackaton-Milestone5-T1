'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-[#F2F0F1] w-full overflow-hidden min-h-[80vh] lg:min-h-[90vh]">
      <div className="relative w-full px-4 lg:w-[90%] max-w-[1440px] mx-auto h-full">
        <div className="h-full flex items-center py-8 lg:py-0">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="max-w-xl lg:max-w-2xl order-1 lg:order-1 px-4 lg:px-0 mx-auto text-center lg:text-left">
              <h1 className="font-integral text-[32px] sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-black leading-[1.1] uppercase">
                Find Clothes<br /> That Matches <br /> Your Style
              </h1>
              
              <p className="mt-4 lg:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-satoshi">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link 
                  href="/shop" 
                  className="mt-6 lg:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors w-[300px] lg:w-[150px]"
                >
                  Shop Now
                </Link>
              </div>
              
              {/* Stats - Only visible on mobile - Reorganized for 2-1 layout */}
              <div className="mt-12 lg:hidden border-t border-gray-200 pt-3">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-5 max-w-md mx-auto">
                  {/* First row - 2 items */}
                  <div className="text-center">
                    <p className="text-4xl sm:text-3xl font-bold text-black">200+</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">International Brands</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl sm:text-3xl font-bold text-black">2K+</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">High-Quality Products</p>
                  </div>
                  {/* Second row - 1 item centered */}
                  <div className="col-span-2 text-center">
                    <p className="text-4xl sm:text-4xl font-bold text-black">30K+</p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative order-2 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative w-full aspect-square sm:aspect-[4/5] lg:aspect-auto lg:h-[90vh] max-h-[800px]">
                <Image
                  src="/hero.png"
                  alt="Fashion model showcase"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
              
              {/* Star Decoration */}
              <div className="absolute -right-6 top-1/3 hidden lg:block">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" 
                     className="w-8 h-8 xl:w-10 xl:h-10">
                  <path d="M20 0L23.5267 16.4733L40 20L23.5267 23.5267L20 40L16.4733 23.5267L0 20L16.4733 16.4733L20 0Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero