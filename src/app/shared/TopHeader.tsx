import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='w-full top-0 h-auto min-h-[38px] py-2 bg-black text-white flex items-center justify-center'>
      <div className='flex items-center justify-center px-4'>
        <p className='text-[13px] md:text-sm text-center text-white font-light'>
          <span className='block md:inline'>Sign up and get 20% off to your first order.</span>
          {' '}
          <Link href='/' className='text-white underline hover:opacity-80 transition-opacity'>
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default TopHeader