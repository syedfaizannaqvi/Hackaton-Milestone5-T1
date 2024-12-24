/* eslint-disable */
'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)

  const shopCategories = [
    { name: "Men's Clothing", href: '/catagory' },
    { name: "Women's Clothing", href: '/catagory' },
    { name: 'Accessories', href: '/catagory' },
    { name: 'Footwear', href: '/catagory' },
  ]

  return (
    <div className='relative w-full md:w-[80vw] md:mx-auto px-4 md:px-0 md:my-4 z-50'>
      <div className='w-full max-w-[1440px] mx-auto h-[70px] bg-white flex items-center justify-between'>
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='lg:hidden'
        >
          <RxHamburgerMenu className='h-6 w-6' />
        </button>

        {/* Logo */}
        <div className='flex items-center justify-center'>
          <Image src={'/SHOP.CO.svg'} alt='logo' width={160} height={22} />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center justify-center'>
          <ul className='flex items-center justify-between gap-4'>
            <li className='relative text-base text-black font-light group'>
              <button 
                onClick={() => setIsShopOpen(!isShopOpen)}
                className='flex items-center gap-1 hover:text-gray-600'
              >
                Shop
                <IoIosArrowDown className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Desktop Dropdown */}
              <div className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 transition-all duration-300 z-50 ${
                isShopOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {shopCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className='block px-4 py-2 text-sm hover:bg-gray-100'
                    onClick={() => setIsShopOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/'>On Sale</Link>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/newarrival'>New Arrivals</Link>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/brands'>Brands</Link>
            </li>
          </ul>
        </div>

        {/* Search and Icons */}
        <div className='flex items-center justify-center gap-4'>
          {/* Desktop Search Bar */}
          <div className='hidden lg:flex items-center justify-center gap-4'>
            <div className='flex items-center justify-center rounded-full bg-[#F0F0F0] border gap-2'>
              <FaSearch className='m-3 text-gray-500 h-6 w-6' />
              <input 
                type='text' 
                placeholder='Search' 
                className='w-[400px] h-[40px] bg-transparent outline-none'
                autoComplete='off'
                spellCheck='false'
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className='lg:hidden'
          >
            <FaSearch className='h-6 w-6' />
          </button>

          <div className='flex items-center justify-center gap-4'>
            <Link href='/cart'>
              <FaCartShopping className='text-black h-6 w-6 hover:text-gray-500 cursor-pointer' />
            </Link>
            <Link href='/catagory'>
              <FaUserCircle className='text-black h-6 w-6 hover:text-gray-500 cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-[70vw] h-screen bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:hidden z-50`}>
        <div className='p-4'>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className='mb-8'
          >
            <IoMdClose className='h-6 w-6' />
          </button>
          <ul className='flex flex-col gap-6'>
            {/* Mobile Shop Dropdown */}
            <li className='text-base text-black font-light'>
              <button 
                onClick={() => setIsShopOpen(!isShopOpen)}
                className='flex items-center gap-1 hover:text-gray-600'
              >
                Shop
                <IoIosArrowDown className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ${
                isShopOpen ? 'block' : 'hidden'
              }`}>
                {shopCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className='block py-1 hover:text-gray-600'
                    onClick={() => {
                      setIsShopOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/' onClick={() => setIsMenuOpen(false)}>On Sale</Link>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/newarrival' onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
            </li>
            <li className='text-base text-black font-light hover:text-gray-600'>
              <Link href='/brands' onClick={() => setIsMenuOpen(false)}>Brands</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Updated Mobile Search Bar */}
      <div className={`fixed left-0 right-0 bg-white p-4 shadow-md transition-all duration-300 ease-in-out ${
        isSearchOpen ? 'top-[70px] opacity-100' : '-top-full opacity-0'
      } lg:hidden z-40`}>
        <div className='relative max-w-[90vw] mx-auto flex items-center justify-center rounded-full bg-[#F0F0F0] border gap-2'>
          <FaSearch className='m-3 text-gray-500 h-6 w-6' />
          <input 
            type='text' 
            placeholder='Search' 
            className='w-full h-[40px] bg-transparent outline-none pr-12' 
          />
          <button 
            onClick={() => setIsSearchOpen(false)}
            className='absolute right-3'
          >
            <IoMdClose className='h-5 w-5 text-gray-500' />
          </button>
        </div>
      </div>

      {/* Add overlay for search bar */}
      {isSearchOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar