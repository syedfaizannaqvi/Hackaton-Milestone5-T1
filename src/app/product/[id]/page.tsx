'use client';

import { newArrival } from './data'; // Correct
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaMinus, FaPlus, FaCheckCircle } from 'react-icons/fa';
import { BiSolidDownArrow } from 'react-icons/bi';
import Link from 'next/link';
import { reviews } from './data';
import MoreLikeThis from '@/app/components/MoreLikeThis';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

interface ProductDetailsProps {
  params: {
    id: string;
  }
}

const ProductDetails = ({ params }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/productdetail.png');

  const colors = [
    { name: 'olive', class: 'bg-olive-800' },
    { name: 'forest', class: 'bg-[#1E4339]' },
    { name: 'navy', class: 'bg-navy-800' },
  ];

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  const thumbnails = [
    '/productdetail.png',
    '/productdetail1.png',
    '/productdetail2.png'
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400 w-5 h-5" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400 w-5 h-5" />);
    }
    return stars;
  };

  return (
    <div className="w-full md:w-[80vw] max-w-[1440px] mx-auto px-4 py-8 md:py-4">
        <div className='flex items-center mb-7'>
            <Link href='/' className='text-gray-400 text-base font-medium'>Home</Link>
            <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
            <Link href='/products' className='text-gray-400 text-base font-medium'>Shop</Link>
            <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
            <Link href={`/product/${params.id}`} className='text-gray-400 text-base font-medium'>Men</Link>
            <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
            <Link href={`/product/${params.id}`} className='text-gray-400 text-base font-medium'>T-Shirts</Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left - Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Main Image - Full width on mobile */}
          <div className="order-1 md:order-2 md:flex-1">
            <div className="relative w-[300px] md:w-full aspect-square rounded-lg overflow-hidden mx-auto">
              <Image
                src={mainImage}
                alt="Product main image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Thumbnails - Below on mobile, Left on desktop */}
          <div className="order-1 md:order-1 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-x-visible justify-center md:justify-start">
            {thumbnails.map((img, index) => (
              <div 
                key={index} 
                className={`relative min-w-[80px] md:min-w-[100px] w-[80px] md:w-[100px] aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 ${
                  mainImage === img ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  alt={`Product view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="space-y-6">
          <h1 className="font-integral text-4xl">ONE LIFE GRAPHIC T-SHIRT</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex">
              {renderStars(4.5)}
            </div>
            <span className="text-lg">4.5/5</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">$260</span>
            <span className="text-2xl text-gray-400 line-through">$300</span>
            <span className="text-green-500">-40%</span>
          </div>

          <p className="text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="space-y-4">
            <h3 className="font-medium">Select Colors</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name ? 'ring-2 ring-offset-2 ring-black' : ''
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="font-medium">Choose Size</h3>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border rounded-full">
              <button
                className="p-3"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <FaMinus />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                className="p-3"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <button className="flex-1 bg-black text-white rounded-full py-3 hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex justify-between gap-4 text-gray-400 p-5">

            <Link href="/product/1" className="font-integral  text-base *:md:text-2xl active:text-black">Product Details</Link>
            <Link href="" className="font-integral text-base md:text-2xl text-black active:text-black">Reviews & Ratings</Link>
            <Link href="/product/1" className="font-integral text-base md:text-2xl active:text-black">FAQs</Link>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6">
        <div className="border-t pt-12">
          {/* Reviews Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <h2 className="font-integral text-base md:text-2xl">All Reviews</h2>
              <span className="text-gray-500">(451)</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-50">
                Latest <BiSolidDownArrow className="w-3 h-3" />
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 border rounded-xl">
                {/* Rating Stars */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-5 h-5 ${
                          index < reviews.rating
                            ? 'text-yellow-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  {review.verified && (
                    <FaCheckCircle className="text-green-500 w-4 h-4" />
                  )}
                </div>

                {/* Review Content */}
                <p className="text-gray-600 mb-4 font-satoshi">
                  &quot;{review.comment}&quot;
                </p>

                {/* Review Date */}
                <p className="text-gray-400 text-sm">
                  Posted on {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 border rounded-full hover:bg-gray-50">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
      <div className='mt-2 md:ml-[-40px]'>
        <MoreLikeThis />
      </div>
    </div>
  );
};

export default ProductDetails; 