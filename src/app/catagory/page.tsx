'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IoFilterSharp } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { BiChevronRight } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa6';
import { categoriesCasual } from './data';
import ProductCard from '../components/ProductCard';
import { HiMiniAdjustmentsHorizontal } from 'react-icons/hi2';

const CategoryPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('Large');
  const [priceRange, setPriceRange] = useState<number>(200);

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

  const colors = [
    { name: 'green', class: 'bg-green-500' },
    { name: 'red', class: 'bg-red-500' },
    { name: 'yellow', class: 'bg-yellow-400' },
    { name: 'orange', class: 'bg-orange-500' },
    { name: 'blue', class: 'bg-blue-500' },
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'pink', class: 'bg-pink-500' },
    { name: 'white', class: 'bg-white border' },
    { name: 'black', class: 'bg-black' },
  ];

  return (
    <div className="w-full md:w-[80vw] max-w-[1440px] mx-auto px-4 py-8 md:py-4">
      {/* Breadcrumb */}
      <div className='flex items-center mb-7'>
        <Link href='/' className='text-gray-400 text-base font-medium'>Home</Link>
        <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
        <Link href='/products' className='text-gray-400 text-base font-medium'>Shop</Link>
        <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
        <Link href='/products' className='text-gray-400 text-base font-medium'>Casual</Link>
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className={`fixed md:sticky md:top-0 left-0 h-screen md:h-auto w-full md:w-[240px] bg-white md:bg-transparent z-50 transition-all duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}>
          <div className="p-4 md:p-4 h-full overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-6 md:hidden">
              <h2 className="text-2xl font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <IoMdClose className="w-6 h-6" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Categories</h3>
                <BiChevronRight className="w-5 h-5" />
              </div>
              <div className="border-t mt-4" />
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Price</h3>
                <BiChevronRight className="rotate-90 w-5 h-5" />
              </div>
              <div className="mt-4">
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-black"
                />
                <div className="flex justify-between mt-2">
                  <span className="font-medium">$50</span>
                  <span className="font-medium">$200</span>
                </div>
              </div>
              <div className="border-t mt-4" />
            </div>

            {/* Colors */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Colors</h3>
                <BiChevronRight className="rotate-90 w-5 h-5" />
              </div>
              <div className="grid grid-cols-5 gap-4 mt-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full ${color.class} ${
                      color.name === 'white' ? 'border border-gray-200' : ''
                    }`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
              <div className="border-t mt-4" />
            </div>

            {/* Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Size</h3>
                <BiChevronRight className="rotate-90 w-5 h-5" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 rounded-full text-sm ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="border-t mt-4" />
            </div>

            {/* Dress Style */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">Dress Style</h3>
                <BiChevronRight className="w-5 h-5" />
              </div>
              <div className="border-t mt-4" />
            </div>

            {/* Apply Filter Button */}
            <button
              className="fixed bottom-0 left-0 w-full bg-black text-white py-4 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              Apply Filter
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className='w-full flex justify-between items-center mb-4'>
            <h1 className="text-2xl font-bold">Casual</h1>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-sm flex items-center gap-2"><span className='font-medium  hidden md:block    '>Showing</span> 1-12 of 400 products</p>
              <div className="flex items-center gap-2">
                <p className="text-gray-600 text-sm flex items-center gap-2"><span className='hidden md:block'>Sort by</span> <IoFilterSharp /></p>
                <select className="border text-gray-600 text-sm rounded-lg px-3 py-2">
                  <option>Default sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categoriesCasual.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          {/* Product grid will go here */}
        </div>
      </div>

      {/* Mobile Filter Button */}
      <button
        className="md:hidden fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(true)}
      >
        <IoFilterSharp className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default CategoryPage;