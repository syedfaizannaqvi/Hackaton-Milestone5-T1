import React from 'react'
import Image from 'next/image'

const Brandtag = () => {
    const brandtag = ['/versace.png','/zara.png','/gucci.png','/prada.png','/calvin_klein.png']
    
    return (
        <div className='w-full bg-black'>
            {/* Desktop View */}
            <div className='hidden md:flex lg:w-[90vw] max-w-[1440px] mx-auto px-4 py-8'>
                <div className='w-full flex items-center justify-between'>
                    {brandtag.map((brand, index) => (
                        <Image 
                            key={index}
                            src={brand} 
                            alt={brand} 
                            width={100} 
                            height={40}
                            className='w-auto h-[30px] object-contain' 
                        />
                    ))}
                </div>
            </div>

            {/* Mobile View */}
            <div className='md:hidden w-full px-4 py-6'>
                {/* Top Row - 3 images */}
                <div className='grid grid-cols-3 gap-4 mb-6'>
                    {brandtag.slice(0, 3).map((brand, index) => (
                        <div key={index} className='flex justify-center'>
                            <Image 
                                src={brand} 
                                alt={brand} 
                                width={80} 
                                height={30}
                                className='w-auto h-[25px] object-contain' 
                            />
                        </div>
                    ))}
                </div>
                
                {/* Bottom Row - 2 images */}
                <div className='flex justify-center gap-12'>
                    {brandtag.slice(3).map((brand, index) => (
                        <div key={index} className='flex justify-center'>
                            <Image 
                                src={brand} 
                                alt={brand} 
                                width={80} 
                                height={30}
                                className='w-auto h-[25px] object-contain' 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brandtag