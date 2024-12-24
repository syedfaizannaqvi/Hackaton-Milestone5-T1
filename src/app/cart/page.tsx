/* eslint-disable */
'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  discount: number;
  price: number;
  image: string;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      discount: 10,
      image: "/tnewrule.png",
      quantity: 1
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      discount: 40,
      image: "/tlined.png",
      quantity: 1
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      discount: 20,
      image: "/jblack.png",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = cartItems.reduce((sum, item) => 
    sum + ((item.price * item.quantity * item.discount) / 100), 0
  );
  const shipping = subtotal > 1000 ? 0 : 15;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="w-full md:w-[80vw] max-w-[1440px] mx-auto px-4 py-8 md:py-4">
      {/* Breadcrumb */}
      <div className='flex items-center mb-7'>
        <Link href='/' className='text-gray-400 text-base font-medium'>Home</Link>
        <span className='text-gray-400 text-base'><MdKeyboardArrowRight /></span>
        <Link href='/cart' className='text-gray-400 text-base font-medium'>Cart</Link>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Cart Items */}
        <div className='flex-1'>
          <h1 className='text-2xl md:text-4xl font-bold mb-8'>YOUR CART</h1>
          
          <div className='space-y-2 border rounded-lg p-4'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex md:flex-row gap-4 border-b pb-6'>
                <div className=' md:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={118}
                    height={118}
                    className='md:w-full md:h-full w-40 h-40 object-cover'
                  />
                </div>
                
                <div className='flex-1 space-y-2'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='text-lg font-medium'>{item.name}</h3>
                      <p className='text-gray-600'>Size: {item.size}</p>
                      <p className='text-gray-600'>Color: {item.color}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className='text-red-500 hover:text-red-600'
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center border rounded-full'>
                      <button
                        className='p-2'
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <FaMinus className='w-4 h-4' />
                      </button>
                      <span className='w-12 text-center'>{item.quantity}</span>
                      <button
                        className='p-2'
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <FaPlus className='w-4 h-4' />
                      </button>
                    </div>
                    <p className='text-lg font-bold'>${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className='lg:w-[400px] border rounded-lg p-4 md:mt-[70px]'>
          <div className=' rounded-lg p-6'>
            <h2 className='text-xl font-bold mb-6'>Order Summary</h2>
            
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Subtotal</span>
                <span className='font-medium'>${subtotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Discount</span>
                <span className='font-medium text-red-500'>-${discountAmount.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Shipping</span>
                <span className='font-medium'>${shipping.toFixed(2)}</span>
              </div>
              <div className='border-t pt-4'>
                <div className='flex justify-between'>
                  <span className='font-bold'>Total</span>
                  <span className='font-bold'>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button className='w-full bg-black text-white py-4 rounded-full mt-6 hover:bg-gray-800 transition-colors'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage