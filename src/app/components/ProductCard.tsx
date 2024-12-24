'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

interface ProductCardProps {
  title: string
  price: number
  rating: number
  image: string
  oldPrice?: number
  discount?: number
  href: string
}

const ProductCard = ({ title, price, rating, image, href, oldPrice, discount }: ProductCardProps) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400 w-5 h-5" />);
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400 w-5 h-5" />);
    }

    return stars;
  };

  return (
    <Link href={`/product/${href}`} className="group">
      <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <h3 className="md:text-lg text-base  font-medium text-gray-900">{title}</h3>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {renderStars(rating)}
          </div>
          <span className="text-lg font-medium">{rating}/5</span>
        </div>
        
        <p className="text-2xl flex items-center gap-2 font-bold text-gray-900">${price} {oldPrice && (<span className='flex items-center gap-2'><span className='text-sm line-through text-gray-500'>${oldPrice}</span><span className='text-sm text-green-500'>-{discount}%</span></span>)} </p>
      </div>
    </Link>
  )
}

export default ProductCard 