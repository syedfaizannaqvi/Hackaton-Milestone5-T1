import { newArrival } from './data';

import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

const NewArrival = () => {
  return (
    <div className='w-full'>
        <div className='w-full max-w-[1440px] mx-auto px-4 my-10'>
            <h1 className='text-5xl text-black text-center my-5 font-extrabold'>New Arrival</h1>
            <div className='w-[80vw] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {newArrival.map((item) => (
                    <ProductCard key={item.id} {...item} />
                ))}
                
            </div>
            <div className='w-[200px] mx-auto flex justify-center items-center mt-10'>
                <Link href='/products' className='text-black text-lg font-medium border px-4 py-2 rounded-full w-full text-center'>
                    View All
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default NewArrival