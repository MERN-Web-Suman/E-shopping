
import React from 'react'

export default function Hero() {
  return (
    <div className='container'>
        <div className=' overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center bg-gradient-to-t from-gray-300/80 to-gray-100 ' >
            {/* Hero section */}
            <div className=' container pb-8 sm:pb-0  '>

              <div className='grid grid-col-1 sm:grid-cols-2' >
                {/* text contact section */}
                <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left  sm:order-1 relative z-10 ' >
                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>Beats Solo</h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Wireless</h1>
                    <h1 className='text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold '>Headphone</h1>
                    <div>
                        <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-[#FB4141]'>Shop Now</button>
                    </div>
                </div>
                {/* Img section */}
                <div className='order-2 sm:order-2'>
                    <img src="headphone.png" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 ' />
                </div>
              </div>
              </div>
        </div>
    </div>
  )
}
