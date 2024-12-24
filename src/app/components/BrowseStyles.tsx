import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BrowseStyles = () => {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="w-[90%] px-4 lg:w-[80%] max-w-[1440px] mx-auto bg-gray-100 rounded-2xl p-4 md:p-10">
        <h2 className="font-integral text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Top Row - becomes single column on mobile */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center'>
            <div className='relative w-full md:w-[400px] h-[290px] rounded-2xl overflow-hidden'>
              <Image 
                src='/casual.png' 
                alt='Casual Style'
                width={400}
                height={290}
                className='object-cover w-full hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='relative w-full md:w-[680px] md:h-[290px] rounded-2xl overflow-hidden'>
              <Image 
                src='/formal.png' 
                alt='Formal Style'
                width={680}
                height={290}
                className='object-cover w-full hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>

          {/* Bottom Row - becomes single column on mobile */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-6 justify-center'>
            <div className='relative w-full md:w-[680px] md:h-[290px] rounded-2xl overflow-hidden'>
              <Image 
                src='/party.png' 
                alt='Party Style'
                width={680}
                height={290}
                className='object-cover w-full hover:scale-105 transition-transform duration-300'
              />
            </div>
            <div className='relative w-full md:w-[400px] h-[290px] rounded-2xl overflow-hidden'>
              <Image 
                src='/gym.png' 
                alt='Gym Style'
                width={400}
                height={290}
                className='object-cover w-full hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrowseStyles 