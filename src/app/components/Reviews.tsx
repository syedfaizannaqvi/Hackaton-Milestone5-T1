'use client';

import React, { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <FaStar key={index} className="text-yellow-400 w-5 h-5" />
    ));
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="w-[90%] lg:w-[80%] max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-integral text-3xl md:text-4xl lg:text-5xl">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-4 rounded-full border hover:bg-black hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="p-4 rounded-full border hover:bg-black hover:text-white transition-colors"
              aria-label="Next review"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const reviewIndex = (currentIndex + offset) % reviews.length;
            const review = reviews[reviewIndex];
            
            return (
              <div 
                key={review.id}
                className="bg-white p-8 rounded-2xl border transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold">{review.name}</h3>
                  <FaCheckCircle className="text-green-500" />
                </div>
                
                <p className="text-gray-600 font-satoshi">
                  &quot;{review.comment}&quot;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 