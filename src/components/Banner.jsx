
import React from 'react'

export default function Banner() {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 ' >
        <div className='container' >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-gradient-to-br from-[#FF2929]/90 to-[#3E5879]'>
                {/* first col */}
                <div className='p-6 sm:p-8'>
                    <p className='text-sm'>30% OFF</p>
                    <h1 className='uppercase text-4xl lg:text-7xl font-blod' >Fine Smile</h1>
                    <p className='text-sm'>10 Jan to 28 Jan</p>
                </div>
                <div className='h-full flex items-center'>
                    <img src="headphone.png" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover ' />
                </div>

                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8' >
                    <p className='font-bold text-xl'>Air Solo Bass</p>
                    <p className='text-3xl sm:text-5xl font-bold'>Winter Sale</p>
                    <p className='text-sm tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem atque asperiores!</p>
                    <div>
                        <button className='py-2 px-4 rounded hover:scale-110 md:hover:scale-150 duration-300 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  '>Shop Now</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}
