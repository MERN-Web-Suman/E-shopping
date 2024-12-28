
import React from 'react'

export default function Blogs() {
  return (
    <div>
        <div className="container">
            {/* header section */}
            <div className='text-center justify-center'>
                <h1 >Recent News</h1>
                <p>All Blogs here</p>
            </div>

            {/* Body section */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>

                {/* Blogs Card */}
                <div className='bg-white'>
                    {/* image section */}
                    <div className='overflow-hidden rounded-2xl mb-2 '>
                        <img src="blog-1.jpg" alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105' />
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>How to choose perfect smartwatch</p>
                        <p className='font-bold line-clamp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum molestiae laboriosam!</p>
                        <p className='line-clamp-2'>Jan 20,2025 by Dilshad</p>
                    </div>
                </div>

                <div className='bg-white'>
                    {/* image section */}
                    <div className='overflow-hidden rounded-2xl mb-2 '>
                        <img src="blog-2.jpg" alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105' />
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>How to choose perfect smartwatch</p>
                        <p className='font-bold line-clamp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum molestiae laboriosam!</p>
                        <p className='line-clamp-2'>Jan 20,2025 by Dilshad</p>
                    </div>
                </div>

                <div className='bg-white'>
                    {/* image section */}
                    <div className='overflow-hidden rounded-2xl mb-2 '>
                        <img src="blog-3.jpg" alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105'  />
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>How to choose perfect smartwatch</p>
                        <p className='font-bold line-clamp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum molestiae laboriosam!</p>
                        <p className='line-clamp-2'>Jan 20,2025 by Dilshad</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
